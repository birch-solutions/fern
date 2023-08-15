import { FernWorkspace, getDefinitionFile } from "@fern-api/workspace-loader";
import { isRawAliasDefinition, RawSchemas, recursivelyVisitRawTypeReference } from "@fern-api/yaml-schema";
import { ContainerType, Literal, TypeReference } from "@fern-fern/ir-sdk/api";
import { constructFernFileContext, FernFileContext } from "../FernFileContext";
import { parseInlineType } from "../utils/parseInlineType";
import { parseReferenceToTypeName } from "../utils/parseReferenceToTypeName";
import { ObjectPathItem, ResolvedType } from "./ResolvedType";

export interface TypeResolver {
    resolveType: (args: { type: string; file: FernFileContext }) => ResolvedType | undefined;
    resolveTypeOrThrow: (args: { type: string; file: FernFileContext }) => ResolvedType;
    getDeclarationOfNamedType: (args: {
        referenceToNamedType: string;
        file: FernFileContext;
    }) => RawTypeDeclarationInfo | undefined;
    getDeclarationOfNamedTypeOrThrow: (args: {
        referenceToNamedType: string;
        file: FernFileContext;
    }) => RawTypeDeclarationInfo;
    resolveNamedType: (args: { referenceToNamedType: string; file: FernFileContext }) => ResolvedType | undefined;
    resolveNamedTypeOrThrow: (args: { referenceToNamedType: string; file: FernFileContext }) => ResolvedType;
}

export interface RawTypeDeclarationInfo {
    typeName: string;
    declaration: RawSchemas.TypeDeclarationSchema;
    file: FernFileContext;
}

export class TypeResolverImpl implements TypeResolver {
    constructor(private readonly workspace: FernWorkspace) {}

    public resolveTypeOrThrow({ type, file }: { type: string; file: FernFileContext }): ResolvedType {
        const resolvedType = this.resolveType({ type, file });
        if (resolvedType == null) {
            throw new Error("Cannot resolve type: " + type);
        }
        return resolvedType;
    }

    public getDeclarationOfNamedTypeOrThrow({
        referenceToNamedType,
        file,
    }: {
        referenceToNamedType: string;
        file: FernFileContext;
    }): RawTypeDeclarationInfo {
        const declaration = this.getDeclarationOfNamedType({ referenceToNamedType, file });
        if (declaration == null) {
            throw new Error("Cannot find declaration of type: " + referenceToNamedType);
        }
        return declaration;
    }

    public getDeclarationOfNamedType({
        referenceToNamedType,
        file,
    }: {
        referenceToNamedType: string;
        file: FernFileContext;
    }): RawTypeDeclarationInfo | undefined {
        const parsedReference = parseReferenceToTypeName({
            reference: referenceToNamedType,
            referencedIn: file.relativeFilepath,
            imports: file.imports,
        });
        if (parsedReference == null) {
            return undefined;
        }
        const definitionFile = getDefinitionFile(this.workspace, parsedReference.relativeFilepath);
        if (definitionFile == null) {
            return undefined;
        }

        const declaration = definitionFile.types?.[parsedReference.typeName];
        if (declaration == null) {
            return undefined;
        }

        return {
            typeName: parsedReference.typeName,
            declaration,
            file: constructFernFileContext({
                relativeFilepath: parsedReference.relativeFilepath,
                definitionFile,
                casingsGenerator: file.casingsGenerator,
                rootApiFile: this.workspace.definition.rootApiFile.contents,
            }),
        };
    }

    public resolveType({
        type,
        file,
        objectPath = [],
    }: {
        type: string;
        file: FernFileContext;
        objectPath?: ObjectPathItem[];
    }): ResolvedType | undefined {
        return recursivelyVisitRawTypeReference<ResolvedType | undefined>(type, {
            primitive: (primitive) => ({
                _type: "primitive",
                primitive,
                originalTypeReference: TypeReference.primitive(primitive),
            }),
            unknown: () => ({ _type: "unknown", originalTypeReference: TypeReference.unknown() }),
            map: ({ keyType, valueType }) =>
                keyType != null && valueType != null
                    ? {
                          _type: "container",
                          container: {
                              _type: "map",
                              keyType,
                              valueType,
                          },
                          originalTypeReference: TypeReference.container(
                              ContainerType.map({
                                  keyType: keyType.originalTypeReference,
                                  valueType: valueType.originalTypeReference,
                              })
                          ),
                      }
                    : undefined,
            list: (itemType) =>
                itemType != null
                    ? {
                          _type: "container",
                          container: {
                              _type: "list",
                              itemType,
                          },
                          originalTypeReference: TypeReference.container(
                              ContainerType.list(itemType.originalTypeReference)
                          ),
                      }
                    : undefined,
            optional: (itemType) =>
                itemType != null
                    ? {
                          _type: "container",
                          container: {
                              _type: "optional",
                              itemType,
                          },
                          originalTypeReference: TypeReference.container(
                              ContainerType.optional(itemType.originalTypeReference)
                          ),
                      }
                    : undefined,
            set: (itemType) =>
                itemType != null
                    ? {
                          _type: "container",
                          container: {
                              _type: "set",
                              itemType,
                          },
                          originalTypeReference: TypeReference.container(
                              ContainerType.set(itemType.originalTypeReference)
                          ),
                      }
                    : undefined,
            literal: (literalValue) => ({
                _type: "container",
                container: {
                    _type: "literal",
                    literal: Literal.string(literalValue),
                },
                originalTypeReference: TypeReference.container(ContainerType.literal(Literal.string(literalValue))),
            }),
            named: (referenceToNamedType) => {
                const maybeDeclaration = this.getDeclarationOfNamedType({
                    referenceToNamedType,
                    file,
                });
                if (maybeDeclaration == null) {
                    return undefined;
                }

                const newObjectPathItem: ObjectPathItem = {
                    typeName: maybeDeclaration.typeName,
                    file: maybeDeclaration.file.relativeFilepath,
                    reference: referenceToNamedType,
                };

                // detect infinite loop
                if (
                    objectPath.some(
                        (pathItem) =>
                            pathItem.file === newObjectPathItem.file && pathItem.typeName === newObjectPathItem.typeName
                    )
                ) {
                    return undefined;
                }

                return this.resolveNamedTypeFromDeclaration({
                    referenceToNamedType,
                    referencedIn: file,
                    rawDeclaration: maybeDeclaration,
                    objectPath: [...objectPath, newObjectPathItem],
                });
            },
        });
    }

    public resolveNamedTypeOrThrow({
        referenceToNamedType,
        file,
    }: {
        referenceToNamedType: string;
        file: FernFileContext;
    }): ResolvedType {
        const resolvedType = this.resolveNamedType({ referenceToNamedType, file });
        if (resolvedType == null) {
            throw new Error("Cannot resolve type: " + referenceToNamedType);
        }
        return resolvedType;
    }

    public resolveNamedType({
        referenceToNamedType,
        file,
    }: {
        referenceToNamedType: string;
        file: FernFileContext;
    }): ResolvedType | undefined {
        const maybeDeclaration = this.getDeclarationOfNamedType({
            referenceToNamedType,
            file,
        });
        if (maybeDeclaration == null) {
            return undefined;
        }
        return this.resolveNamedTypeFromDeclaration({
            referenceToNamedType,
            referencedIn: file,
            rawDeclaration: maybeDeclaration,
        });
    }

    private resolveNamedTypeFromDeclaration({
        referenceToNamedType,
        referencedIn,
        rawDeclaration,
        objectPath = [],
    }: {
        referencedIn: FernFileContext;
        referenceToNamedType: string;
        rawDeclaration: RawTypeDeclarationInfo;
        objectPath?: ObjectPathItem[];
    }): ResolvedType | undefined {
        const { declaration, file: fileOfResolvedDeclaration } = rawDeclaration;

        if (isRawAliasDefinition(declaration)) {
            return this.resolveType({
                type: typeof declaration === "string" ? declaration : declaration.type,
                file: fileOfResolvedDeclaration,
                objectPath,
            });
        }

        const parsedTypeReference = parseInlineType({ type: referenceToNamedType, file: referencedIn });
        if (parsedTypeReference.type !== "named") {
            return undefined;
        }

        const definitionFile = getDefinitionFile(this.workspace, fileOfResolvedDeclaration.relativeFilepath);
        if (definitionFile == null) {
            return undefined;
        }

        return {
            _type: "named",
            rawName: rawDeclaration.typeName,
            name: parsedTypeReference,
            declaration,
            filepath: fileOfResolvedDeclaration.relativeFilepath,
            objectPath,
            originalTypeReference: parsedTypeReference,
            file: fileOfResolvedDeclaration,
        };
    }
}
