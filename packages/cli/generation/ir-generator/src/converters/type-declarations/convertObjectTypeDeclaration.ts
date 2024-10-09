import { ObjectExtraProperty, ObjectProperty, Type } from "@fern-api/ir-sdk";
import { RawSchemas } from "@fern-api/fern-definition-schema";
import { FernFileContext } from "../../FernFileContext";
import { parseTypeName } from "../../utils/parseTypeName";
import { convertDeclaration } from "../convertDeclaration";

export async function convertObjectTypeDeclaration({
    object,
    file
}: {
    object: RawSchemas.ObjectSchema;
    file: FernFileContext;
}): Promise<Type> {
    return Type.object({
        extends: getExtensionsAsList(object.extends).map((extended) => parseTypeName({ typeName: extended, file })),
        properties: await getObjectPropertiesFromRawObjectSchema(object, file),
        extraProperties: await getExtraPropertiesFromRawObjectSchema(object, file),
        extendedProperties: undefined
    });
}

export async function getExtraPropertiesFromRawObjectSchema(
    object: RawSchemas.ObjectSchema,
    file: FernFileContext
): Promise<ObjectExtraProperty> {
    if (object["extra-properties"] == null) {
        return false;
    }

    if (typeof object["extra-properties"] === "boolean") {
        return object["extra-properties"];
    }

    return {
        ...(await convertDeclaration(object["extra-properties"])),
        ...file.parseTypeReference(object["extra-properties"])
    };
}

export async function getObjectPropertiesFromRawObjectSchema(
    object: RawSchemas.ObjectSchema,
    file: FernFileContext
): Promise<ObjectProperty[]> {
    if (object.properties == null) {
        return [];
    }
    return await Promise.all(
        Object.entries(object.properties).map(async ([propertyKey, propertyDefinition]) => ({
            ...(await convertDeclaration(propertyDefinition)),
            name: file.casingsGenerator.generateNameAndWireValue({
                wireValue: propertyKey,
                name: getPropertyName({ propertyKey, property: propertyDefinition }).name
            }),
            valueType: file.parseTypeReference(propertyDefinition)
        }))
    );
}

export function getExtensionsAsList(extensions: string | string[] | undefined): string[] {
    if (extensions == null) {
        return [];
    }
    if (typeof extensions === "string") {
        return [extensions];
    }
    return extensions;
}

export function getPropertyName({
    propertyKey,
    property
}: {
    propertyKey: string;
    property: RawSchemas.ObjectPropertySchema;
}): { name: string; wasExplicitlySet: boolean } {
    if (typeof property !== "string" && property.name != null) {
        return {
            name: property.name,
            wasExplicitlySet: true
        };
    }

    return {
        name: propertyKey,
        wasExplicitlySet: false
    };
}
