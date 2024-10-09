import { Type } from "@fern-api/ir-sdk";
import { FernFileContext } from "../../FernFileContext";
import { RawSchemas, isRawObjectDefinition, parseGeneric } from "@fern-api/fern-definition-schema";
import { TypeResolver } from "../../resolvers/TypeResolver";
import { parseTypeName } from "../../utils/parseTypeName";
import {
    getExtensionsAsList,
    getObjectPropertiesFromRawObjectSchema,
    getExtraPropertiesFromRawObjectSchema
} from "./convertObjectTypeDeclaration";

export async function convertGenericTypeDeclaration({
    generic,
    file,
    typeResolver
}: {
    generic: string | RawSchemas.AliasSchema;
    file: FernFileContext;
    typeResolver: TypeResolver;
}): Promise<Type> {
    const genericInstantiation = typeof generic === "string" ? generic : generic.type;

    const maybeGeneric = parseGeneric(genericInstantiation);
    if (maybeGeneric == null) {
        throw new Error(`Invalid generic type definition: ${genericInstantiation}`);
    }

    const resolvedBaseGeneric = typeResolver.getDeclarationOfNamedTypeOrThrow({
        referenceToNamedType: genericInstantiation,
        file
    });

    if (maybeGeneric.arguments && isRawObjectDefinition(resolvedBaseGeneric.declaration)) {
        const genericArgumentDefinitions = parseGeneric(resolvedBaseGeneric.typeName)?.arguments ?? [];

        const newProperties = Object.entries(resolvedBaseGeneric.declaration.properties ?? {}).map(([key, value]) => {
            let maybeReplacedValue = value;
            if (typeof value === "string" && genericArgumentDefinitions?.includes(value)) {
                maybeReplacedValue = maybeGeneric.arguments?.[genericArgumentDefinitions.indexOf(value)] ?? value;
            }
            return [key, maybeReplacedValue];
        });
        return Type.object({
            extends: getExtensionsAsList(resolvedBaseGeneric.declaration.extends).map((extended) =>
                parseTypeName({ typeName: extended, file })
            ),
            properties: await getObjectPropertiesFromRawObjectSchema(
                { properties: Object.fromEntries(newProperties) },
                file
            ),
            extraProperties: resolvedBaseGeneric.declaration["extra-properties"]
                ? await getExtraPropertiesFromRawObjectSchema(resolvedBaseGeneric.declaration, file)
                : false,
            extendedProperties: undefined
        });
    }

    throw new Error(`Generic type definition not supported: ${genericInstantiation}`);
}
