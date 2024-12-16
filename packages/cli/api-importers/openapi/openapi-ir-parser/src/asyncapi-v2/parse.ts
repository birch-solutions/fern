import { ChannelBindingsObject } from "@asyncapi/parser/esm/spec-types/v2";
import { AsyncAPIObject, ChannelObject, ReferenceObject } from "@asyncapi/parser/esm/spec-types/v3";
import { QueryParameterWithExample } from "@fern-api/openapi-ir";
import { TaskContext } from "@fern-api/task-context";
import { Source } from "@redocly/openapi-core";
import { OpenAPIV3 } from "openapi-types";
import { z } from "zod";
import { ParseAsyncAPIOptions } from "../asyncapi/options";
import { AsyncAPIIntermediateRepresentation } from "../asyncapi/parse";
import { ParseOpenAPIOptions } from "../options";
import { convertSchema } from "../schema/convertSchemas";

const WebSocketBindingsSchema = z.object({
    required: z.array(z.string()),
    query: z.record(z.custom<OpenAPIV3.SchemaObject>((data) => data)).optional(),
})


export function parseAsyncAPI({
    document,
    taskContext,
    options,
    source,
    asyncApiOptions,
    namespace
}: {
    document: AsyncAPIObject;
    taskContext: TaskContext;
    options: ParseOpenAPIOptions;
    source: Source;
    asyncApiOptions: ParseAsyncAPIOptions;
    namespace: string | undefined;
}): AsyncAPIIntermediateRepresentation {
    if (document.asyncapi.startsWith("2")) {
        return {
            basePath: undefined,
            channel: undefined,
            groupedSchemas: {
                rootSchemas: {},
                namespacedSchemas: {}
            }
        }
    }
    // parse v2 document
    for (const [id, channel] of Object.entries(document.channels ?? {})) {

        if (isReferenceObject(channel)) {
            continue;
        }

        if (channel.bindings == null || isReferenceObject(channel.bindings) || channel.bindings.ws == null) {
            continue;
        }

        const websocketBindings = WebSocketBindingsSchema.safeParse(channel.bindings.ws);
        if (!websocketBindings.success) {
            continue;
        }

        const queryParameters: QueryParameterWithExample[] = [];
        if (websocketBindings.data.query != null) {
            const required = websocketBindings.data.query.required ?? [];
            for (const [name, schema] of Object.entries(channel.bindings.ws.query.properties ?? {})) {
                const resolvedQueryParameter = isReferenceObject(schema)
                    ? context.resolveSchemaReference(schema)
                    : schema;
                queryParameters.push({
                    name,
                    schema: convertSchema(
                        resolvedQueryParameter,
                        !required.includes(name),
                        context,
                        breadcrumbs,
                        source,
                        namespace
                    ),
                    description: resolvedQueryParameter.description,
                    parameterNameOverride: undefined,
                    availability: convertAvailability(resolvedQueryParameter),
                    source
                });
            }
        }
        
    }


}

function isReferenceObject(channel: ChannelObject | ChannelBindingsObject | ReferenceObject): channel is ReferenceObject {
    return (channel as ReferenceObject)?.$ref != null;
}
