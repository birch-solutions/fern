import { OpenAPIV3 } from "openapi-types";
import { OpenApiV3Context } from "./OpenApiV3Context";

export const APPLICATION_JSON_CONTENT = "application/json";
export const SCHEMA_REFERENCE_PREFIX = "#/components/schemas/";

export function isReferenceObject(
    parameter:
        | OpenAPIV3.ReferenceObject
        | OpenAPIV3.ParameterObject
        | OpenAPIV3.SchemaObject
        | OpenAPIV3.RequestBodyObject
): parameter is OpenAPIV3.ReferenceObject {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return (parameter as OpenAPIV3.ReferenceObject).$ref != null;
}

export function maybeConvertSchemaToPrimitive(schemaObject: OpenAPIV3.SchemaObject): string | undefined {
    if (schemaObject === "boolean") {
        return "boolean";
    } else if (schemaObject === "number") {
        return "double";
    } else if (schemaObject === "integer") {
        return "integer";
    } else if (schemaObject === "string") {
        return "string";
    }
    return undefined;
}

export const COMMONS_SERVICE_FILE_NAME = "commons";

export function getFernReferenceForSchema(
    schemaReference: OpenAPIV3.ReferenceObject,
    context: OpenApiV3Context
): string {
    const tags = context.getTagForSchema(schemaReference);
    let serviceFileName = COMMONS_SERVICE_FILE_NAME;
    if (tags.length === 1 && tags[0] != null) {
        serviceFileName = tags[0];
    }
    const typeName = schemaReference.$ref.replace(SCHEMA_REFERENCE_PREFIX, "");
    return `${serviceFileName}.${typeName}`;
}
