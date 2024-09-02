import { AbsoluteFilePath, join, relative, RelativeFilePath } from "@fern-api/fs-utils";
import { OpenApiIntermediateRepresentation, Source as OpenApiIrSource } from "@fern-api/openapi-ir-sdk";
import { TaskContext } from "@fern-api/task-context";
import { readFile } from "fs/promises";
import yaml from "js-yaml";
import { OpenAPI, OpenAPIV2, OpenAPIV3 } from "openapi-types";
import { DEFAULT_PARSE_ASYNCAPI_SETTINGS, ParseAsyncAPIOptions } from "./asyncapi/options";
import { parseAsyncAPI } from "./asyncapi/parse";
import { AsyncAPIV2 } from "./asyncapi/v2";
import { loadOpenAPI } from "./loadOpenAPI";
import { mergeWithOverrides } from "./mergeWithOverrides";
import { generateIr as generateIrFromV2 } from "./openapi/v2/generateIr";
import { generateIr as generateIrFromV3 } from "./openapi/v3/generateIr";
import { DEFAULT_PARSE_OPENAPI_SETTINGS, ParseOpenAPIOptions } from "./options";

export interface Spec {
    absoluteFilepath: AbsoluteFilePath;
    absoluteFilepathToOverrides: AbsoluteFilePath | undefined;
    source: Source;
    namespace?: string;
    settings?: SpecImportSettings;
}

export interface SpecImportSettings {
    audiences: string[];
    shouldUseTitleAsName: boolean;
    shouldUseUndiscriminatedUnionsWithLiterals: boolean;
    asyncApiNaming?: "v1" | "v2";
}

export type Source = AsyncAPISource | OpenAPISource | ProtobufSource;

export interface AsyncAPISource {
    type: "asyncapi";
    relativePathToDependency?: RelativeFilePath;
    file: AbsoluteFilePath;
}

export interface OpenAPISource {
    type: "openapi";
    relativePathToDependency?: RelativeFilePath;
    file: AbsoluteFilePath;
}

export interface ProtobufSource {
    type: "protobuf";
    relativePathToDependency?: RelativeFilePath;
    file: AbsoluteFilePath;
}

export interface RawOpenAPIFile {
    absoluteFilepath: AbsoluteFilePath;
    contents: string;
}

export interface RawAsyncAPIFile {
    absoluteFilepath: AbsoluteFilePath;
    contents: string;
}

export async function parse({
    absoluteFilePathToWorkspace,
    specs,
    taskContext,
    optionOverrides
}: {
    absoluteFilePathToWorkspace: AbsoluteFilePath;
    specs: Spec[];
    taskContext: TaskContext;
    optionOverrides?: Partial<ParseOpenAPIOptions>;
}): Promise<OpenApiIntermediateRepresentation> {
    let ir: OpenApiIntermediateRepresentation = {
        apiVersion: undefined,
        title: undefined,
        description: undefined,
        basePath: undefined,
        servers: [],
        tags: {
            tagsById: {},
            orderedTagIds: undefined
        },
        hasEndpointsMarkedInternal: false,
        endpoints: [],
        webhooks: [],
        channel: [],
        schemas: {},
        variables: {},
        nonRequestReferencedSchemas: new Set(),
        securitySchemes: {},
        globalHeaders: [],
        idempotencyHeaders: [],
        groups: {}
    };

    for (const spec of specs) {
        const contents = (await readFile(spec.absoluteFilepath)).toString();
        let sourceRelativePath = relative(absoluteFilePathToWorkspace, spec.source.file);
        if (spec.source.relativePathToDependency != null) {
            sourceRelativePath = join(spec.source.relativePathToDependency, sourceRelativePath);
        }
        const source =
            spec.source.type === "protobuf"
                ? OpenApiIrSource.protobuf({ file: sourceRelativePath })
                : OpenApiIrSource.openapi({ file: sourceRelativePath });

        if (contents.includes("openapi") || contents.includes("swagger")) {
            const openApiDocument = await loadOpenAPI({
                absolutePathToOpenAPI: spec.absoluteFilepath,
                context: taskContext,
                absolutePathToOpenAPIOverrides: spec.absoluteFilepathToOverrides
            });
            if (isOpenApiV3(openApiDocument)) {
                const openapiIr = generateIrFromV3({
                    openApi: openApiDocument,
                    taskContext,
                    options: getParseOptions({ specSettings: spec.settings, overrides: optionOverrides }),
                    source,
                    namespace: spec.namespace
                });
                ir = merge(ir, openapiIr);
            } else if (isOpenApiV2(openApiDocument)) {
                const openapiIr = await generateIrFromV2({
                    openApi: openApiDocument,
                    taskContext,
                    options: getParseOptions({ specSettings: spec.settings }),
                    source,
                    namespace: spec.namespace
                });
                ir = merge(ir, openapiIr);
            }
            // is openapi file
        } else if (contents.includes("asyncapi")) {
            const asyncAPI = await loadAsyncAPI({
                absoluteFilePathToAsyncAPI: spec.absoluteFilepath,
                context: taskContext,
                absoluteFilePathToAsyncAPIOverrides: spec.absoluteFilepathToOverrides
            });
            const parsedAsyncAPI = parseAsyncAPI({
                document: asyncAPI,
                taskContext,
                options: getParseOptions({ specSettings: spec.settings }),
                source,
                asyncApiOptions: getParseAsyncOptions({ specSettings: spec.settings }),
                namespace: spec.namespace
            });
            if (parsedAsyncAPI.channel != null) {
                ir.channel.push(parsedAsyncAPI.channel);
            }
            if (parsedAsyncAPI.schemas != null) {
                ir.schemas = {
                    ...ir.schemas,
                    ...parsedAsyncAPI.schemas
                };
            }
            if (parsedAsyncAPI.basePath != null) {
                ir.basePath = parsedAsyncAPI.basePath;
            }
        } else {
            taskContext.failAndThrow(`${spec.absoluteFilepath} is not a valid OpenAPI or AsyncAPI file`);
        }
    }

    return ir;
}

function getParseOptions({
    specSettings,
    overrides
}: {
    specSettings?: SpecImportSettings;
    overrides?: Partial<ParseOpenAPIOptions>;
}): ParseOpenAPIOptions {
    return {
        disableExamples: overrides?.disableExamples ?? DEFAULT_PARSE_OPENAPI_SETTINGS.disableExamples,
        discriminatedUnionV2:
            overrides?.discriminatedUnionV2 ??
            specSettings?.shouldUseUndiscriminatedUnionsWithLiterals ??
            DEFAULT_PARSE_OPENAPI_SETTINGS.discriminatedUnionV2,
        useTitlesAsName:
            overrides?.useTitlesAsName ??
            specSettings?.shouldUseTitleAsName ??
            DEFAULT_PARSE_OPENAPI_SETTINGS.useTitlesAsName,
        audiences: overrides?.audiences ?? specSettings?.audiences ?? DEFAULT_PARSE_OPENAPI_SETTINGS.audiences
    };
}

function getParseAsyncOptions({
    specSettings,
    overrides
}: {
    specSettings?: SpecImportSettings;
    overrides?: Partial<ParseAsyncAPIOptions>;
}): ParseAsyncAPIOptions {
    return {
        naming: overrides?.naming ?? specSettings?.asyncApiNaming ?? DEFAULT_PARSE_ASYNCAPI_SETTINGS.naming
    };
}

function merge(
    ir1: OpenApiIntermediateRepresentation,
    ir2: OpenApiIntermediateRepresentation
): OpenApiIntermediateRepresentation {
    return {
        apiVersion: ir1.apiVersion ?? ir2.apiVersion,
        title: ir1.title ?? ir2.title,
        description: ir1.description ?? ir2.description,
        basePath: ir1.basePath ?? ir2.basePath,
        servers: [...ir1.servers, ...ir2.servers],
        tags: {
            tagsById: {
                ...ir1.tags.tagsById,
                ...ir2.tags.tagsById
            },
            orderedTagIds:
                ir1.tags.orderedTagIds == null && ir2.tags.orderedTagIds == null
                    ? undefined
                    : [...(ir1.tags.orderedTagIds ?? []), ...(ir2.tags.orderedTagIds ?? [])]
        },
        hasEndpointsMarkedInternal: ir1.hasEndpointsMarkedInternal || ir2.hasEndpointsMarkedInternal,
        endpoints: [...ir1.endpoints, ...ir2.endpoints],
        webhooks: [...ir1.webhooks, ...ir2.webhooks],
        channel: [...ir1.channel, ...ir2.channel],
        schemas: {
            ...ir1.schemas,
            ...ir2.schemas
        },
        variables: {
            ...ir1.variables,
            ...ir2.variables
        },
        nonRequestReferencedSchemas: new Set([...ir1.nonRequestReferencedSchemas, ...ir2.nonRequestReferencedSchemas]),
        securitySchemes: {
            ...ir1.securitySchemes,
            ...ir2.securitySchemes
        },
        globalHeaders: ir1.globalHeaders != null ? [...ir1.globalHeaders, ...(ir2.globalHeaders ?? [])] : undefined,
        idempotencyHeaders:
            ir1.idempotencyHeaders != null ? [...ir1.idempotencyHeaders, ...(ir2.idempotencyHeaders ?? [])] : undefined,
        groups: {
            ...ir1.groups,
            ...ir2.groups
        }
    };
}

async function loadAsyncAPI({
    absoluteFilePathToAsyncAPI,
    absoluteFilePathToAsyncAPIOverrides,
    context
}: {
    absoluteFilePathToAsyncAPI: AbsoluteFilePath;
    absoluteFilePathToAsyncAPIOverrides: AbsoluteFilePath | undefined;
    context: TaskContext;
}): Promise<AsyncAPIV2.Document> {
    const contents = (await readFile(absoluteFilePathToAsyncAPI)).toString();
    const parsed = (await yaml.load(contents)) as AsyncAPIV2.Document;
    if (absoluteFilePathToAsyncAPIOverrides != null) {
        return await mergeWithOverrides<AsyncAPIV2.Document>({
            absoluteFilepathToOverrides: absoluteFilePathToAsyncAPIOverrides,
            context,
            data: parsed
        });
    }
    return parsed;
}

function isOpenApiV3(openApi: OpenAPI.Document): openApi is OpenAPIV3.Document {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return (openApi as OpenAPIV3.Document).openapi != null;
}

function isOpenApiV2(openApi: OpenAPI.Document): openApi is OpenAPIV2.Document {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return (openApi as OpenAPIV2.Document).swagger != null;
}
