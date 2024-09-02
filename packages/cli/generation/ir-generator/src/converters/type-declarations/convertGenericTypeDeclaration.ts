import { Type } from "@fern-api/ir-sdk";
import { FernFileContext } from "../../FernFileContext";
import { RawSchemas, isRawObjectDefinition } from "@fern-api/fern-definition-schema";
import { TypeResolver } from "../../resolvers/TypeResolver";
import { getGenericDetails } from "../../utils/getGenericDetails";
import { parseTypeName } from "../../utils/parseTypeName";
import { getExtensionsAsList, getObjectPropertiesFromRawObjectSchema } from "./convertObjectTypeDeclaration";

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

    const maybeGeneric = getGenericDetails(genericInstantiation);
    if (!maybeGeneric?.isGeneric) {
        throw new Error(`Invalid generic type definition: ${genericInstantiation}`);
    }

    const resolvedBaseGeneric = typeResolver.getDeclarationOfNamedTypeOrThrow({
        referenceToNamedType: genericInstantiation,
        file
    });

    if (maybeGeneric.arguments && isRawObjectDefinition(resolvedBaseGeneric.declaration)) {
        const genericArgumentDefinitions = getGenericDetails(resolvedBaseGeneric.typeName)?.arguments ?? [];

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
            extraProperties: resolvedBaseGeneric.declaration["extra-properties"] ?? false,
            extendedProperties: undefined
        });
    }

    throw new Error(`Generic type definition not supported: ${genericInstantiation}`);
}
