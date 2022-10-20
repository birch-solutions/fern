import { noop, visitObject } from "@fern-api/core-utils";
import { TypeDeclarationSchema } from "../../schemas";
import { visitRawTypeDeclaration } from "../../utils/visitRawTypeDeclaration";
import { FernAstVisitor } from "../FernAstVisitor";
import { NodePath } from "../NodePath";
import { createDocsVisitor } from "./utils/createDocsVisitor";

export async function visitTypeDeclarations({
    typeDeclarations,
    visitor,
    nodePath,
}: {
    typeDeclarations: Record<string, TypeDeclarationSchema> | undefined;
    visitor: Partial<FernAstVisitor>;
    nodePath: NodePath;
}): Promise<void> {
    if (typeDeclarations == null) {
        return;
    }
    for (const [typeName, declaration] of Object.entries(typeDeclarations)) {
        const nodePathForType = [...nodePath, typeName];
        await visitor.typeName?.(typeName, nodePathForType);
        await visitor.typeDeclaration?.({ typeName, declaration }, nodePathForType);
        await visitTypeDeclaration({ declaration, visitor, nodePathForType });
    }
}

export async function visitTypeDeclaration({
    declaration,
    visitor,
    nodePathForType,
}: {
    declaration: TypeDeclarationSchema;
    visitor: Partial<FernAstVisitor>;
    nodePathForType: NodePath;
}): Promise<void> {
    await visitRawTypeDeclaration(declaration, {
        alias: async (alias) => {
            if (typeof alias === "string") {
                await visitor.typeReference?.(alias, nodePathForType);
            } else {
                await visitObject(alias, {
                    alias: async (aliasOf) => {
                        await visitor.typeReference?.(aliasOf, [...nodePathForType, "alias"]);
                    },
                    docs: createDocsVisitor(visitor, nodePathForType),
                });
            }
        },
        object: async (object) => {
            await visitObject(object, {
                docs: createDocsVisitor(visitor, nodePathForType),
                extends: async (_extends) => {
                    if (_extends == null) {
                        return;
                    }
                    const extendsList: string[] = typeof _extends === "string" ? [_extends] : _extends;
                    for (const extendedType of extendsList) {
                        await visitor.typeReference?.(extendedType, [...nodePathForType, "extends"]);
                    }
                },
                properties: async (properties) => {
                    if (properties == null) {
                        return;
                    }
                    for (const [propertyKey, property] of Object.entries(properties)) {
                        const nodePathForProperty = [...nodePathForType, "properties", propertyKey];
                        if (typeof property === "string") {
                            await visitor.typeReference?.(property, nodePathForProperty);
                        } else {
                            await visitObject(property, {
                                name: noop,
                                docs: createDocsVisitor(visitor, nodePathForProperty),
                                availability: noop,
                                type: async (type) => {
                                    await visitor.typeReference?.(type, [...nodePathForProperty, "type"]);
                                },
                            });
                        }
                    }
                },
            });
        },
        union: async (union) => {
            await visitObject(union, {
                docs: createDocsVisitor(visitor, nodePathForType),
                discriminant: noop,
                union: async (unionTypes) => {
                    for (const [discriminantValue, unionType] of Object.entries(unionTypes)) {
                        const nodePathForUnionType = [...nodePathForType, "union", discriminantValue];
                        if (typeof unionType === "string") {
                            await visitor.typeReference?.(unionType, nodePathForUnionType);
                        } else {
                            await visitObject(unionType, {
                                docs: createDocsVisitor(visitor, nodePathForUnionType),
                                name: noop,
                                key: noop,
                                type: async (type) => {
                                    if (type != null) {
                                        await visitor.typeReference?.(type, [...nodePathForType, "type"]);
                                    }
                                },
                            });
                        }
                    }
                },
            });
        },
        enum: async (_enum) => {
            await visitObject(_enum, {
                docs: createDocsVisitor(visitor, nodePathForType),
                enum: async (enumTypes) => {
                    for (const enumType of enumTypes) {
                        const nodePathForEnumType = [
                            ...nodePathForType,
                            typeof enumType === "string" ? enumType : enumType.name ?? enumType.value,
                        ];

                        if (typeof enumType !== "string") {
                            await visitObject(enumType, {
                                docs: createDocsVisitor(visitor, nodePathForEnumType),
                                availability: noop,
                                name: noop,
                                value: noop,
                            });
                        }
                    }
                },
            });
        },
    });
}
