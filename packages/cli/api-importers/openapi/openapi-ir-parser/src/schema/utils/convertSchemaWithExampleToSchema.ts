import { assertNever } from "@fern-api/core-utils";
import {
    ObjectPropertyWithExample,
    OneOfSchemaWithExample,
    PrimitiveSchemaValueWithExample,
    Schema,
    SchemaWithExample
} from "@fern-api/openapi-ir";

export function convertSchemaWithExampleToSchema(schema: SchemaWithExample): SchemaWithExample {
    switch (schema.type) {
        case "object":
            return SchemaWithExample.object({
                allOf: schema.allOf,
                properties: schema.properties.map((objectProperty) => convertToObjectProperty(objectProperty)),
                allOfPropertyConflicts: schema.allOfPropertyConflicts,
                description: schema.description,
                generatedName: schema.generatedName,
                nameOverride: schema.nameOverride,
                title: schema.title,
                groupName: schema.groupName,
                additionalProperties: schema.additionalProperties,
                availability: schema.availability,
                fullExamples: schema.fullExamples,
                source: schema.source
            });
        case "array":
            return SchemaWithExample.array({
                description: schema.description,
                availability: schema.availability,
                value: convertSchemaWithExampleToSchema(schema.value),
                generatedName: schema.generatedName,
                nameOverride: schema.nameOverride,
                title: schema.title,
                example: schema.example,
                groupName: schema.groupName
            });
        case "enum":
            return SchemaWithExample.enum({
                description: schema.description,
                availability: schema.availability,
                generatedName: schema.generatedName,
                nameOverride: schema.nameOverride,
                title: schema.title,
                values: schema.values,
                default: schema.default,
                groupName: schema.groupName,
                example: schema.example,
                source: schema.source
            });
        case "literal":
            return SchemaWithExample.literal({
                description: schema.description,
                availability: schema.availability,
                value: schema.value,
                generatedName: schema.generatedName,
                nameOverride: schema.nameOverride,
                title: schema.title,
                groupName: schema.groupName
            });
        case "nullable":
            return SchemaWithExample.nullable({
                generatedName: schema.generatedName,
                nameOverride: schema.nameOverride,
                title: schema.title,
                description: schema.description,
                availability: schema.availability,
                value: convertSchemaWithExampleToSchema(schema.value),
                groupName: schema.groupName
            });
        case "optional":
            return SchemaWithExample.optional({
                generatedName: schema.generatedName,
                nameOverride: schema.nameOverride,
                title: schema.title,
                description: schema.description,
                availability: schema.availability,
                value: convertSchemaWithExampleToSchema(schema.value),
                groupName: schema.groupName
            });
        case "primitive":
            return SchemaWithExample.primitive({
                description: schema.description,
                availability: schema.availability,
                schema: convertToPrimitiveSchemaValue(schema.schema),
                generatedName: schema.generatedName,
                nameOverride: schema.nameOverride,
                title: schema.title,
                groupName: schema.groupName
            });
        case "map":
            return SchemaWithExample.map({
                description: schema.description,
                availability: schema.availability,
                key: SchemaWithExample.primitive({
                    description: schema.key.description,
                    availability: schema.key.availability,
                    schema: convertToPrimitiveSchemaValue(schema.key.schema),
                    generatedName: schema.key.generatedName,
                    title: schema.key.title,
                    nameOverride: schema.key.nameOverride,
                    groupName: schema.groupName
                }),
                value: convertSchemaWithExampleToSchema(schema.value),
                generatedName: schema.generatedName,
                title: schema.title,
                nameOverride: schema.nameOverride,
                groupName: schema.groupName,
                example: schema.example,
                encoding: schema.encoding
            });
        case "reference":
            return SchemaWithExample.reference({
                description: schema.description,
                availability: schema.availability,
                generatedName: schema.generatedName,
                nameOverride: schema.nameOverride,
                title: schema.title,
                schema: schema.schema,
                groupName: schema.groupName,
                source: schema.source
            });
        case "oneOf":
            return SchemaWithExample.oneOf(convertToOneOf(schema.value));
        case "unknown":
            return SchemaWithExample.unknown({
                nameOverride: schema.nameOverride,
                generatedName: schema.generatedName,
                title: undefined,
                example: undefined,
                groupName: undefined,
                description: undefined,
                availability: undefined
            });
        default:
            assertNever(schema);
    }
}

export function convertSchemaWithExampleToOptionalSchema(schema: SchemaWithExample): Schema {
    switch (schema.type) {
        case "object":
        case "array":
        case "enum":
        case "literal":
        case "nullable":
        case "primitive":
        case "map":
        case "reference":
        case "unknown":
            return Schema.optional({
                generatedName: schema.generatedName,
                nameOverride: schema.nameOverride,
                title: schema.title,
                description: schema.description,
                availability: schema.availability,
                value: convertSchemaWithExampleToSchema(schema),
                groupName: schema.groupName
            });
        case "optional":
            return Schema.optional({
                generatedName: schema.generatedName,
                nameOverride: schema.nameOverride,
                title: schema.title,
                description: schema.description,
                availability: schema.availability,
                value: convertSchemaWithExampleToSchema(schema.value),
                groupName: schema.groupName
            });
        case "oneOf": {
            const oneOfSchema = convertToOneOf(schema.value);
            return Schema.optional({
                generatedName: oneOfSchema.generatedName,
                nameOverride: oneOfSchema.nameOverride,
                title: oneOfSchema.title,
                description: oneOfSchema.description,
                availability: oneOfSchema.availability,
                value: Schema.oneOf(convertToOneOf(schema.value)),
                groupName: oneOfSchema.groupName
            });
        }
        default:
            assertNever(schema);
    }
}

function convertToOneOf(oneOfSchema: OneOfSchemaWithExample): OneOfSchemaWithExample {
    switch (oneOfSchema.type) {
        case "discriminated":
            return OneOfSchemaWithExample.discriminated({
                commonProperties: oneOfSchema.commonProperties.map((commonProperty) => {
                    return {
                        key: commonProperty.key,
                        schema: convertSchemaWithExampleToSchema(commonProperty.schema)
                    };
                }),
                description: oneOfSchema.description,
                availability: oneOfSchema.availability,
                discriminantProperty: oneOfSchema.discriminantProperty,
                generatedName: oneOfSchema.generatedName,
                title: oneOfSchema.title,
                nameOverride: oneOfSchema.nameOverride,
                schemas: Object.fromEntries(
                    Object.entries(oneOfSchema.schemas).map(([discriminantValue, schemaWithExample]) => {
                        return [discriminantValue, convertSchemaWithExampleToSchema(schemaWithExample)];
                    })
                ),
                groupName: oneOfSchema.groupName,
                encoding: oneOfSchema.encoding,
                source: oneOfSchema.source
            });
        case "undisciminated":
            return OneOfSchemaWithExample.undisciminated({
                description: oneOfSchema.description,
                availability: oneOfSchema.availability,
                generatedName: oneOfSchema.generatedName,
                title: oneOfSchema.title,
                nameOverride: oneOfSchema.nameOverride,
                schemas: oneOfSchema.schemas.map((oneOfSchema) => convertSchemaWithExampleToSchema(oneOfSchema)),
                groupName: oneOfSchema.groupName,
                encoding: oneOfSchema.encoding,
                source: oneOfSchema.source
            });
        default:
            assertNever(oneOfSchema);
    }
}

function convertToPrimitiveSchemaValue(
    primitiveSchema: PrimitiveSchemaValueWithExample
): PrimitiveSchemaValueWithExample {
    switch (primitiveSchema.type) {
        case "string":
            return PrimitiveSchemaValueWithExample.string(primitiveSchema);
        case "base64":
            return PrimitiveSchemaValueWithExample.base64(primitiveSchema);
        case "boolean":
            return PrimitiveSchemaValueWithExample.boolean(primitiveSchema);
        case "date":
            return PrimitiveSchemaValueWithExample.date(primitiveSchema);
        case "datetime":
            return PrimitiveSchemaValueWithExample.datetime(primitiveSchema);
        case "double":
            return PrimitiveSchemaValueWithExample.double(primitiveSchema);
        case "float":
            return PrimitiveSchemaValueWithExample.float(primitiveSchema);
        case "int":
            return PrimitiveSchemaValueWithExample.int(primitiveSchema);
        case "int64":
            return PrimitiveSchemaValueWithExample.int64(primitiveSchema);
        case "uint":
            return PrimitiveSchemaValueWithExample.uint(primitiveSchema);
        case "uint64":
            return PrimitiveSchemaValueWithExample.uint64(primitiveSchema);
        default:
            assertNever(primitiveSchema);
    }
}

function convertToObjectProperty(objectProperty: ObjectPropertyWithExample): ObjectPropertyWithExample {
    return {
        conflict: objectProperty.conflict,
        generatedName: objectProperty.generatedName,
        key: objectProperty.key,
        schema: convertSchemaWithExampleToSchema(objectProperty.schema),
        audiences: objectProperty.audiences,
        nameOverride: objectProperty.nameOverride,
        availability: objectProperty.availability,
        readonly: objectProperty.readonly
    };
}
