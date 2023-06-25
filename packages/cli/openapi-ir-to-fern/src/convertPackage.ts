import { RelativeFilePath } from "@fern-api/fs-utils";
import { FERN_PACKAGE_MARKER_FILENAME } from "@fern-api/project-configuration";
import { DefinitionFileSchema, isRawAliasDefinition, RawSchemas, RootApiFileSchema } from "@fern-api/yaml-schema";
import { OpenAPIFile } from "@fern-fern/openapi-ir-model/ir";
import { convertSecuritySchemes } from "./converters/convertSecuritySchemes";
import { ConvertedServices, convertToServices } from "./converters/convertToServices";
import { convertToTypeDeclaration } from "./converters/convertToTypeDeclaration";
import { convertPrimitiveToTypeReference, convertToTypeReference } from "./converters/convertToTypeReference";
import { getTypeFromTypeReference } from "./converters/utils/getTypeFromTypeReference";
import { Environment, getEnvironments } from "./getEnvironment";
import { getGlobalHeaders } from "./getGlobalHeaders";

export const ROOT_PREFIX = "root";

export const PRODUCTION_ENVIRONMENT = "Production";

export const EXTERNAL_AUDIENCE = "external";

export interface ConvertedPackage {
    rootApiFile: RootApiFileSchema;
    definitionFiles: Record<RelativeFilePath, DefinitionFileSchema>;
}

export function convertPackage({ openApiFile }: { openApiFile: OpenAPIFile }): ConvertedPackage {
    const environment = getEnvironments(openApiFile);
    const rootApiFile = getRootApiFile(openApiFile, environment);
    const convertedServices = convertToServices({
        openApiFile,
        environment,
        globalHeaderNames: new Set(Object.keys(rootApiFile.headers ?? {})),
    });
    return {
        rootApiFile,
        definitionFiles: {
            ...Object.fromEntries(
                Object.entries(convertedServices.services).map(([file, service]) => {
                    const numDirectoriesNested = file.split("/").length - 1;
                    let importPrefix = "";
                    for (let i = 0; i < numDirectoriesNested; ++i) {
                        importPrefix += "../";
                    }
                    const definitionFile: DefinitionFileSchema = {
                        imports: {
                            [ROOT_PREFIX]: `${importPrefix}${FERN_PACKAGE_MARKER_FILENAME}`,
                        },
                        service: service.value,
                    };
                    if (service.docs != null) {
                        definitionFile.docs = service.docs;
                    }
                    return [file, definitionFile];
                })
            ),
            [RelativeFilePath.of(FERN_PACKAGE_MARKER_FILENAME)]: getPackageYml(openApiFile, convertedServices),
        },
    };
}

function getRootApiFile(openApiFile: OpenAPIFile, environment: Environment | undefined): RootApiFileSchema {
    const authSchemes = convertSecuritySchemes(openApiFile.securitySchemes);
    const globalHeaders = getGlobalHeaders(openApiFile);

    const rootApiFile: RootApiFileSchema = {
        imports: {
            root: "__package__.yml",
        },
        name: "api",
        "display-name": openApiFile.title ?? undefined,
        "error-discrimination": {
            strategy: "status-code",
        },
    };

    if (Object.keys(globalHeaders).length > 0) {
        rootApiFile.headers = globalHeaders;
    }

    if (authSchemes.auth != null) {
        rootApiFile.auth = authSchemes.auth;
    }

    if (authSchemes.authSchemes != null) {
        rootApiFile["auth-schemes"] = authSchemes.authSchemes;
    }

    if (environment?.type === "multi") {
        rootApiFile["default-environment"] = PRODUCTION_ENVIRONMENT;
        rootApiFile.environments = {
            [PRODUCTION_ENVIRONMENT]: { urls: environment.serviceToUrl },
        };
    }

    if (environment?.type === "single") {
        rootApiFile["default-environment"] = Object.keys(environment.environmentToUrl)[0] ?? null;
        rootApiFile.environments = environment.environmentToUrl;
    }

    if (Object.keys(openApiFile.variables).length > 0) {
        rootApiFile.variables = Object.fromEntries(
            Object.entries(openApiFile.variables).map(([variableName, variableSchema]) => {
                const convertedSchema = convertPrimitiveToTypeReference(variableSchema);
                return [
                    variableName,
                    {
                        type: getTypeFromTypeReference(convertedSchema.typeReference),
                        docs: variableSchema.description ?? undefined,
                    },
                ];
            })
        );
    }

    if (openApiFile.hasEndpointsMarkedInternal) {
        rootApiFile.audiences = [EXTERNAL_AUDIENCE];
    }

    return rootApiFile;
}

function getPackageYml(openApiFile: OpenAPIFile, convertedServices: ConvertedServices): DefinitionFileSchema {
    let types: Record<string, RawSchemas.TypeDeclarationSchema> = { ...convertedServices.additionalTypeDeclarations };
    for (const [schemaId, schema] of Object.entries(openApiFile.schemas)) {
        if (convertedServices.schemaIdsToExclude.includes(schemaId)) {
            continue;
        }
        const typeDeclaration = convertToTypeDeclaration(schema, openApiFile.schemas);
        // HACKHACK: Skip self-referencing schemas. I'm not sure if this is the right way to do this.
        if (isRawAliasDefinition(typeDeclaration.typeDeclaration)) {
            const aliasType =
                typeof typeDeclaration.typeDeclaration === "string"
                    ? typeDeclaration.typeDeclaration
                    : typeDeclaration.typeDeclaration.type;
            if (typeDeclaration.name === aliasType) {
                continue;
            }
        }
        types = {
            ...types,
            [typeDeclaration.name ?? schemaId]: typeDeclaration.typeDeclaration,
            ...typeDeclaration.additionalTypeDeclarations,
        };
    }
    const errors: Record<string, RawSchemas.ErrorDeclarationSchema> = {};
    for (const [statusCode, httpError] of Object.entries(openApiFile.errors)) {
        const errorDeclaration: RawSchemas.ErrorDeclarationSchema = {
            "status-code": parseInt(statusCode),
        };
        if (httpError.schema != null) {
            const typeReference = convertToTypeReference({ schema: httpError.schema, schemas: openApiFile.schemas });
            errorDeclaration.type = getTypeFromTypeReference(typeReference.typeReference);
            types = {
                ...types,
                ...typeReference.additionalTypeDeclarations,
            };
        }
        errors[httpError.generatedName] = errorDeclaration;
    }
    return {
        types,
        service: convertedServices.services[RelativeFilePath.of(FERN_PACKAGE_MARKER_FILENAME)]?.value,
        errors,
    };
}
