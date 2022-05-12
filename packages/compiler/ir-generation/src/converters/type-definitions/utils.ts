import { RawSchemas } from "@fern-api/syntax-analysis";

export function isRawAliasDefinition(
    rawTypeDefinition: RawSchemas.TypeDefinitionSchema
): rawTypeDefinition is RawSchemas.AliasSchema {
    return (rawTypeDefinition as RawSchemas.AliasSchema)?.alias != null;
}

export function isRawObjectDefinition(
    rawTypeDefinition: RawSchemas.TypeDefinitionSchema
): rawTypeDefinition is RawSchemas.ObjectSchema {
    return (rawTypeDefinition as RawSchemas.ObjectSchema)?.properties != null;
}

export function isRawUnionDefinition(
    rawTypeDefinition: RawSchemas.TypeDefinitionSchema
): rawTypeDefinition is RawSchemas.UnionSchema {
    return (rawTypeDefinition as RawSchemas.UnionSchema)?.union != null;
}

export function isRawEnumDefinition(
    rawTypeDefinition: RawSchemas.TypeDefinitionSchema
): rawTypeDefinition is RawSchemas.EnumSchema {
    return (rawTypeDefinition as RawSchemas.EnumSchema)?.enum != null;
}
