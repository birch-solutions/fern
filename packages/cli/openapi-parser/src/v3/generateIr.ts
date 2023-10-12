import { TaskContext } from "@fern-api/task-context";
import {
    Endpoint,
    OpenAPIIntermediateRepresentation,
    Schema,
    SecurityScheme,
    Webhook,
} from "@fern-fern/openapi-ir-model/ir/_types";
import { OpenAPIV3 } from "openapi-types";
import { AbstractOpenAPIV3ParserContext } from "./AbstractOpenAPIV3ParserContext";
import { convertPathItem } from "./converters/convertPathItem";
import { convertSchema } from "./converters/convertSchemas";
import { convertSecurityScheme } from "./converters/convertSecurityScheme";
import { convertServer } from "./converters/convertServer";
import { getVariableDefinitions } from "./extensions/getVariableDefinitions";
import { OpenAPIV3ParserContext } from "./OpenAPIV3ParserContext";

export function generateIr(openApi: OpenAPIV3.Document, taskContext: TaskContext): OpenAPIIntermediateRepresentation {
    const ir: OpenAPIIntermediateRepresentation = generateIrWithoutExamples(openApi, taskContext);
    return addExamplesToIr(openApi, taskContext, ir);
}

function addExamplesToIr(
    _openApi: OpenAPIV3.Document,
    _taskContext: TaskContext,
    ir: OpenAPIIntermediateRepresentation
): OpenAPIIntermediateRepresentation {
    return ir;
}

export function generateIrWithoutExamples(
    openApi: OpenAPIV3.Document,
    taskContext: TaskContext
): OpenAPIIntermediateRepresentation {
    const securitySchemes: Record<string, SecurityScheme> = Object.fromEntries(
        Object.entries(openApi.components?.securitySchemes ?? {}).map(([key, securityScheme]) => {
            const convertedSecurityScheme = convertSecurityScheme(securityScheme);
            if (convertedSecurityScheme == null) {
                return [];
            }
            return [key, convertSecurityScheme(securityScheme)];
        })
    );
    const authHeaders = new Set(
        ...Object.entries(securitySchemes).map(([_, securityScheme]) => {
            if (securityScheme.type === "basic" || securityScheme.type === "bearer") {
                return "Authorization";
            } else if (securityScheme.type === "header") {
                return securityScheme.headerName;
            }
            return null;
        })
    );
    const context = new OpenAPIV3ParserContext({ document: openApi, taskContext, authHeaders });
    const variables = getVariableDefinitions(openApi);

    const endpoints: Endpoint[] = [];
    const webhooks: Webhook[] = [];
    Object.entries(openApi.paths).forEach(([path, pathItem]) => {
        if (pathItem == null) {
            return;
        }
        taskContext.logger.debug(`Converting path ${path}`);
        const pathWithoutTrailingSlash = path.replace(/\/$/, "");
        const convertedPathItem = convertPathItem(pathWithoutTrailingSlash, pathItem, openApi, context);
        endpoints.push(...convertedPathItem.endpoints);
        webhooks.push(...convertedPathItem.webhooks);
    });

    const schemas = Object.fromEntries(
        Object.entries(openApi.components?.schemas ?? {}).map(([key, schema]) => {
            taskContext.logger.debug(`Converting schema ${key}`);
            return [key, convertSchema(schema, false, context, [key])];
        })
    );

    return {
        title: openApi.info.title,
        description: openApi.info.description,
        servers: (openApi.servers ?? []).map((server) => convertServer(server)),
        tags: Object.fromEntries(
            (openApi.tags ?? []).map((tag) => {
                return [tag.name, { id: tag.name, description: tag.description }];
            })
        ),
        endpoints,
        webhooks,
        schemas: maybeRemoveDiscriminantsFromSchemas(schemas, context),
        securitySchemes,
        hasEndpointsMarkedInternal: endpoints.some((endpoint) => endpoint.internal),
        errors: context.getErrors(),
        nonRequestReferencedSchemas: Array.from(context.getReferencedSchemas()),
        variables,
    };
}

function maybeRemoveDiscriminantsFromSchemas(
    schemas: Record<string, Schema>,
    context: AbstractOpenAPIV3ParserContext
): Record<string, Schema> {
    return Object.fromEntries(
        Object.entries(schemas).map(([schemaId, schema]) => {
            if (schema.type !== "object") {
                return [schemaId, schema];
            }
            const referenceToSchema: OpenAPIV3.ReferenceObject = {
                $ref: `#/components/schemas/${schemaId}`,
            };
            const discriminatedUnionReference = context.getReferencesFromDiscriminatedUnion(referenceToSchema);
            if (discriminatedUnionReference == null) {
                return [schemaId, schema];
            }

            const schemaWithoutDiscriminants = Schema.object({
                ...schema,
                properties: schema.properties.filter((objectProperty) => {
                    return !discriminatedUnionReference.discriminants.has(objectProperty.key);
                }),
                allOfPropertyConflicts: schema.allOfPropertyConflicts.filter((allOfPropertyConflict) => {
                    return !discriminatedUnionReference.discriminants.has(allOfPropertyConflict.propertyKey);
                }),
            });

            return [schemaId, schemaWithoutDiscriminants];
        })
    );
}
