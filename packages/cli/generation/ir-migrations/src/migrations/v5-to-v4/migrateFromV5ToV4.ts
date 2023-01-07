import { IrVersions } from "../../ir-versions";
import { GeneratorName } from "../../types/GeneratorName";
import { AlwaysRunMigration, IrMigration } from "../../types/IrMigration";
import { convertAuth } from "./convertAuth";
import { convertEnvironment } from "./convertEnvironment";
import { convertErrorDeclaration } from "./convertErrorDeclaration";
import { convertHeader } from "./convertHeader";
import { convertNameAndWireValueToV1, convertNameAndWireValueToV2, convertNameToV2 } from "./convertName";
import { convertService } from "./convertService";
import { convertTypeDeclaration } from "./convertTypeDeclaration";
import { ErrorResolverImpl } from "./ErrorResolver";
import { TypeReferenceResolverImpl } from "./TypeReferenceResolver";

export const V5_TO_V4_MIGRATION: IrMigration<
    IrVersions.V5.ir.IntermediateRepresentation,
    IrVersions.V4.ir.IntermediateRepresentation
> = {
    earlierVersion: "v4",
    laterVersion: "v5",
    minGeneratorVersionsToExclude: {
        [GeneratorName.TYPESCRIPT]: AlwaysRunMigration,
        [GeneratorName.TYPESCRIPT_SDK]: AlwaysRunMigration,
        [GeneratorName.JAVA]: AlwaysRunMigration,
        [GeneratorName.JAVA_MODEL]: AlwaysRunMigration,
        [GeneratorName.JAVA_SDK]: AlwaysRunMigration,
        [GeneratorName.PYTHON_FASTAPI]: AlwaysRunMigration,
        [GeneratorName.PYTHON_PYDANTIC]: AlwaysRunMigration,
        [GeneratorName.OPENAPI]: AlwaysRunMigration,
        [GeneratorName.POSTMAN]: AlwaysRunMigration,
    },
    migrateBackwards: (v5): IrVersions.V4.ir.IntermediateRepresentation => {
        const typeReferenceResolver = new TypeReferenceResolverImpl(v5);
        const errorResolver = new ErrorResolverImpl(v5);
        return {
            apiName: v5.apiName,
            apiDisplayName: v5.apiDisplayName,
            apiDocs: v5.apiDocs,
            auth: convertAuth(v5.auth),
            headers: v5.headers.map((header) => convertHeader(header)),
            types: v5.types.map((typeDeclaration) => convertTypeDeclaration(typeDeclaration)),
            services: {
                http: v5.services.map((service) => convertService({ service, errorResolver })),
                websocket: [],
            },
            errors: v5.errors.map((error) =>
                convertErrorDeclaration({
                    errorDeclaration: error,
                    errorDiscriminationStrategy: v5.errorDiscriminationStrategy,
                    typeReferenceResolver,
                })
            ),
            constants: {
                errorDiscriminant: "_error",
                errorInstanceIdKey: "_errorInstanceId",
                unknownErrorDiscriminantValue: "_unknown",
            },
            constantsV2: {
                errors: {
                    errorInstanceIdKey: convertNameAndWireValueToV1(v5.constants.errorInstanceIdKey),
                    errorDiscriminant: {
                        originalValue: "error",
                        camelCase: "error",
                        snakeCase: "error",
                        pascalCase: "Error",
                        screamingSnakeCase: "ERROR",
                        wireValue: "error",
                    },
                    errorContentKey: {
                        originalValue: "content",
                        camelCase: "content",
                        snakeCase: "content",
                        pascalCase: "Content",
                        screamingSnakeCase: "CONTENT",
                        wireValue: "content",
                    },
                },
                errorsV2: {
                    errorInstanceIdKey: convertNameAndWireValueToV2(v5.constants.errorInstanceIdKey),
                    errorDiscriminant: {
                        name: {
                            unsafeName: {
                                originalValue: "error",
                                camelCase: "error",
                                snakeCase: "error",
                                pascalCase: "Error",
                                screamingSnakeCase: "ERROR",
                            },
                            safeName: {
                                originalValue: "error",
                                camelCase: "error",
                                snakeCase: "error",
                                pascalCase: "Error",
                                screamingSnakeCase: "ERROR",
                            },
                        },
                        wireValue: "error",
                    },
                    errorContentKey: {
                        name: {
                            unsafeName: {
                                originalValue: "content",
                                camelCase: "content",
                                snakeCase: "content",
                                pascalCase: "Content",
                                screamingSnakeCase: "CONTENT",
                            },
                            safeName: {
                                originalValue: "content",
                                camelCase: "content",
                                snakeCase: "content",
                                pascalCase: "Content",
                                screamingSnakeCase: "CONTENT",
                            },
                        },
                        wireValue: "content",
                    },
                },
            },
            defaultEnvironment: v5.defaultEnvironment,
            environments: v5.environments.map((environment) => convertEnvironment(environment)),
            errorDiscriminant:
                v5.errorDiscriminationStrategy.type === "property"
                    ? convertNameToV2(v5.errorDiscriminationStrategy.discriminant.name)
                    : undefined,
            errorDiscriminationStrategy:
                IrVersions.V5.ir.ErrorDiscriminationStrategy._visit<IrVersions.V4.ir.ErrorDiscriminationStrategy>(
                    v5.errorDiscriminationStrategy,
                    {
                        statusCode: IrVersions.V4.ir.ErrorDiscriminationStrategy.statusCode,
                        property: (property) =>
                            IrVersions.V4.ir.ErrorDiscriminationStrategy.property({
                                discriminant: convertNameAndWireValueToV2(property.discriminant),
                                contentProperty: convertNameAndWireValueToV2(property.contentProperty),
                            }),
                        _unknown: () => {
                            throw new Error(
                                "Unknown ErrorDiscriminationStrategy: " + v5.errorDiscriminationStrategy.type
                            );
                        },
                    }
                ),
            sdkConfig: v5.sdkConfig,
        };
    },
};
