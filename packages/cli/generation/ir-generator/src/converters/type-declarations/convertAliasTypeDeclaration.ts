import { assertNever } from "@fern-api/core-utils";
import { ResolvedTypeReference, ShapeType, Type } from "@fern-api/ir-sdk";
import {
    isRawDiscriminatedUnionDefinition,
    isRawEnumDefinition,
    isRawObjectDefinition,
    isRawUndiscriminatedUnionDefinition,
    RawSchemas,
    parseGeneric,
    isGeneric
} from "@fern-api/fern-definition-schema";
import { FernFileContext } from "../../FernFileContext";
import { TypeResolver } from "../../resolvers/TypeResolver";
import { convertGenericTypeDeclaration } from "./convertGenericTypeDeclaration";

export async function convertAliasTypeDeclaration({
    alias,
    file,
    typeResolver
}: {
    alias: string | RawSchemas.AliasSchema;
    file: FernFileContext;
    typeResolver: TypeResolver;
}): Promise<Type> {
    const aliasOfStr = typeof alias === "string" ? alias : alias.type;
    if (isGeneric(aliasOfStr)) {
        return await convertGenericTypeDeclaration({ generic: aliasOfStr, file, typeResolver });
    }
    return Type.alias({
        aliasOf: file.parseTypeReference(alias),
        resolvedType: constructResolvedTypeReference({ aliasOf: aliasOfStr, file, typeResolver })
    });
}

function constructResolvedTypeReference({
    aliasOf,
    file,
    typeResolver
}: {
    aliasOf: string;
    file: FernFileContext;
    typeResolver: TypeResolver;
}): ResolvedTypeReference {
    const resolvedType = typeResolver.resolveTypeOrThrow({ type: aliasOf, file });
    switch (resolvedType._type) {
        case "primitive":
            return ResolvedTypeReference.primitive(resolvedType.originalTypeReference.primitive);
        case "container":
            return ResolvedTypeReference.container(resolvedType.originalTypeReference.container);
        case "unknown":
            return ResolvedTypeReference.unknown();
        case "named": {
            const shapeType = isRawObjectDefinition(resolvedType.declaration)
                ? ShapeType.Object
                : isRawDiscriminatedUnionDefinition(resolvedType.declaration)
                ? ShapeType.Union
                : isRawEnumDefinition(resolvedType.declaration)
                ? ShapeType.Enum
                : isRawUndiscriminatedUnionDefinition(resolvedType.declaration)
                ? ShapeType.UndiscriminatedUnion
                : assertNever(resolvedType.declaration);
            return ResolvedTypeReference.named({
                name: resolvedType.name,
                shape: shapeType
            });
        }
    }
}
