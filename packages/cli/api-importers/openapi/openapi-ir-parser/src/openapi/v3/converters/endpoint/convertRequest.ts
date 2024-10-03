import { MediaType } from "@fern-api/core-utils";
import { MultipartRequestProperty, MultipartSchema, RequestWithExample, Source } from "@fern-api/openapi-ir";
import { OpenAPIV3 } from "openapi-types";
import { isAdditionalPropertiesAny } from "../../../../schema/convertAdditionalProperties";
import { convertSchema, getSchemaIdFromReference, SCHEMA_REFERENCE_PREFIX } from "../../../../schema/convertSchemas";
import { isReferenceObject } from "../../../../schema/utils/isReferenceObject";
import { AbstractOpenAPIV3ParserContext } from "../../AbstractOpenAPIV3ParserContext";
import { getApplicationJsonSchemaMediaObject } from "./getApplicationJsonSchema";

function getMultipartFormDataRequest(requestBody: OpenAPIV3.RequestBodyObject):
    | {
          schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject | undefined;
          encoding: Record<string, OpenAPIV3.EncodingObject> | undefined;
      }
    | undefined {
    for (const [mediaType, mediaTypeObject] of Object.entries(requestBody.content)) {
        if (MediaType.parse(mediaType)?.isMultipart()) {
            return { schema: mediaTypeObject.schema, encoding: mediaTypeObject.encoding };
        }
    }
    return undefined;
}

function isOctetStreamRequest(requestBody: OpenAPIV3.RequestBodyObject): boolean {
    for (const mediaType in requestBody.content) {
        if (MediaType.parse(mediaType)?.isOctetStream()) {
            return true;
        }
    }
    return false;
}

function multipartRequestHasFile(
    multipartSchema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
    document: OpenAPIV3.Document
): boolean {
    const resolvedMultipartSchema = isReferenceObject(multipartSchema)
        ? resolveSchema(multipartSchema, document)
        : {
              id: undefined,
              schema: multipartSchema
          };
    return (
        Object.entries(resolvedMultipartSchema.schema.properties ?? {}).find(([_, definition]) => {
            return !isReferenceObject(definition) && definition.type === "string" && definition.format === "binary";
        }) != null
    );
}

export function convertRequest({
    requestBody,
    document,
    context,
    requestBreadcrumbs,
    source,
    namespace
}: {
    requestBody: OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject;
    document: OpenAPIV3.Document;
    context: AbstractOpenAPIV3ParserContext;
    requestBreadcrumbs: string[];
    source: Source;
    namespace: string | undefined;
}): RequestWithExample | undefined {
    const resolvedRequestBody = isReferenceObject(requestBody)
        ? context.resolveRequestBodyReference(requestBody)
        : requestBody;

    const multipartFormData = getMultipartFormDataRequest(resolvedRequestBody);
    const multipartSchema = multipartFormData?.schema;
    const multipartEncoding = multipartFormData?.encoding;

    const jsonMediaObject = getApplicationJsonSchemaMediaObject(resolvedRequestBody.content, context);

    // convert as application/octet-stream
    if (isOctetStreamRequest(resolvedRequestBody)) {
        return RequestWithExample.octetStream({
            description: undefined,
            source
        });
    }

    // convert as multipart request
    if (
        (multipartSchema != null && jsonMediaObject == null) ||
        (multipartSchema != null && multipartRequestHasFile(multipartSchema, document))
    ) {
        const resolvedMultipartSchema = isReferenceObject(multipartSchema)
            ? resolveSchema(multipartSchema, document)
            : {
                  id: undefined,
                  schema: multipartSchema
              };
        const convertedMultipartSchema = convertSchema(
            resolvedMultipartSchema.schema,
            false,
            context,
            requestBreadcrumbs,
            source,
            namespace
        );
        const properties: MultipartRequestProperty[] = [];
        if (convertedMultipartSchema.type === "object") {
            for (const property of convertedMultipartSchema.properties) {
                if (
                    property.schema.type === "primitive" &&
                    property.schema.schema.type === "string" &&
                    property.schema.schema.format === "binary"
                ) {
                    properties.push({
                        key: property.key,
                        schema: MultipartSchema.file({ isOptional: false, isArray: false }),
                        description: property.schema.description,
                        contentType:
                            multipartEncoding != null ? multipartEncoding[property.key]?.contentType : undefined
                    });
                    continue;
                }

                if (
                    property.schema.type === "optional" &&
                    property.schema.value.type === "primitive" &&
                    property.schema.value.schema.type === "string" &&
                    property.schema.value.schema.format === "binary"
                ) {
                    properties.push({
                        key: property.key,
                        schema: MultipartSchema.file({ isOptional: true, isArray: false }),
                        description: property.schema.description,
                        contentType:
                            multipartEncoding != null ? multipartEncoding[property.key]?.contentType : undefined
                    });
                    continue;
                }

                if (
                    property.schema.type === "array" &&
                    property.schema.value.type === "primitive" &&
                    property.schema.value.schema.type === "string" &&
                    property.schema.value.schema.format === "binary"
                ) {
                    properties.push({
                        key: property.key,
                        schema: MultipartSchema.file({ isOptional: false, isArray: true }),
                        description: property.schema.description,
                        contentType:
                            multipartEncoding != null ? multipartEncoding[property.key]?.contentType : undefined
                    });
                    continue;
                }

                if (
                    property.schema.type === "optional" &&
                    property.schema.value.type === "array" &&
                    property.schema.value.value.type === "primitive" &&
                    property.schema.value.value.schema.type === "string" &&
                    property.schema.value.value.schema.format === "binary"
                ) {
                    properties.push({
                        key: property.key,
                        schema: MultipartSchema.file({ isOptional: true, isArray: true }),
                        description: property.schema.description,
                        contentType:
                            multipartEncoding != null ? multipartEncoding[property.key]?.contentType : undefined
                    });
                    continue;
                }

                properties.push({
                    key: property.key,
                    schema: MultipartSchema.json(property.schema),
                    description: undefined,
                    contentType: multipartEncoding != null ? multipartEncoding[property.key]?.contentType : undefined
                });
            }
        }

        return RequestWithExample.multipart({
            name:
                isReferenceObject(multipartSchema) && context.getNumberOfOccurrencesForRef(multipartSchema) === 1
                    ? resolvedMultipartSchema.id
                    : undefined,
            description: undefined,
            properties,
            source
        });
    }

    // otherwise, convert as json request.
    if (jsonMediaObject == null) {
        return undefined;
    }
    const requestSchema = convertSchema(
        jsonMediaObject.schema,
        false,
        context,
        requestBreadcrumbs,
        source,
        namespace,
        true
    );
    return RequestWithExample.json({
        description: undefined,
        schema: requestSchema,
        contentType: jsonMediaObject.contentType,
        fullExamples: jsonMediaObject.examples,
        additionalProperties:
            !isReferenceObject(jsonMediaObject.schema) &&
            isAdditionalPropertiesAny(jsonMediaObject.schema.additionalProperties),
        source
    });
}

interface ResolvedSchema {
    id: string;
    schema: OpenAPIV3.SchemaObject;
}

// Hack: update to call context.resolveSchema()
function resolveSchema(schema: OpenAPIV3.ReferenceObject, document: OpenAPIV3.Document): ResolvedSchema {
    if (!schema.$ref.startsWith(SCHEMA_REFERENCE_PREFIX)) {
        throw new Error(`Failed to resolve schema reference because of unsupported prefix: ${schema.$ref}`);
    }
    const schemaId = getSchemaIdFromReference(schema);
    if (schemaId == null) {
        throw new Error(`Failed to resolve schema reference because missing schema id: ${schema.$ref}`);
    }
    const resolvedSchema = document.components?.schemas?.[schemaId];
    if (resolvedSchema == null) {
        throw new Error(`Failed to resolve schema reference because missing: ${schema.$ref}`);
    }
    if (isReferenceObject(resolvedSchema)) {
        return resolveSchema(resolvedSchema, document);
    }
    return {
        id: schemaId,
        schema: resolvedSchema
    };
}
