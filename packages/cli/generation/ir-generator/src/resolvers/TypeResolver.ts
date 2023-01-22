import { getServiceFile, Workspace } from "@fern-api/workspace-loader";
import { isRawAliasDefinition, RawSchemas, recursivelyVisitRawTypeReference } from "@fern-api/yaml-schema";
import { ContainerType, Literal, TypeReference } from "@fern-fern/ir-model/types";
import { constructFernFileContext, FernFileContext } from "../FernFileContext";
import { parseInlineType } from "../utils/parseInlineType";
import { parseReferenceToTypeName } from "../utils/parseReferenceToTypeName";
import { ResolvedType } from "./ResolvedType";

export interface TypeResolver {
    resolveType: (args: { type: string; file: FernFileContext }) => ResolvedType | undefined;
    resolveTypeOrThrow: (args: { type: string; file: FernFileContext }) => ResolvedType;
    getDeclarationOfNamedType: (args: {
        referenceToNamedType: string;
        file: FernFileContext;
    }) => { typeName: string; declaration: RawSchemas.TypeDeclarationSchema; file: FernFileContext } | undefined;
    getDeclarationOfNamedTypeOrThrow: (args: { referenceToNamedType: string; file: FernFileContext }) => {
        typeName: string;
        declaration: RawSchemas.TypeDeclarationSchema;
        file: FernFileContext;
    };
    resolveNamedType: (args: { referenceToNamedType: string; file: FernFileContext }) => ResolvedType | undefined;
    resolveNamedTypeOrThrow: (args: { referenceToNamedType: string; file: FernFileContext }) => ResolvedType;
}

export class TypeResolverImpl implements TypeResolver {
    constructor(private readonly workspace: Workspace) {}

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
    }): { typeName: string; declaration: RawSchemas.TypeDeclarationSchema; file: FernFileContext } {
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
    }): { typeName: string; declaration: RawSchemas.TypeDeclarationSchema; file: FernFileContext } | undefined {
        const parsedReference = parseReferenceToTypeName({
            reference: referenceToNamedType,
            referencedIn: file.relativeFilepath,
            imports: file.imports,
        });
        if (parsedReference == null) {
            return undefined;
        }
        const serviceFile = getServiceFile(this.workspace, parsedReference.relativeFilepath);
        if (serviceFile == null) {
            return undefined;
        }

        const declaration = serviceFile.types?.[parsedReference.typeName];
        if (declaration == null) {
            return undefined;
        }

        return {
            typeName: parsedReference.typeName,
            declaration,
            file: constructFernFileContext({
                relativeFilepath: parsedReference.relativeFilepath,
                serviceFile,
                casingsGenerator: file.casingsGenerator,
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
        objectPath?: string[];
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
            named: (referenceToNamedType) =>
                this.resolveNamedType({
                    referenceToNamedType,
                    file,
                    objectPath: [...objectPath, referenceToNamedType],
                }),
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
        objectPath = [],
    }: {
        referenceToNamedType: string;
        file: FernFileContext;
        objectPath?: string[];
    }): ResolvedType | undefined {
        const maybeDeclaration = this.getDeclarationOfNamedType({
            referenceToNamedType,
            file,
        });
        if (maybeDeclaration == null) {
            return undefined;
        }
        const { declaration, file: fileOfResolvedDeclaration } = maybeDeclaration;

        if (isRawAliasDefinition(declaration)) {
            return this.resolveType({
                type: typeof declaration === "string" ? declaration : declaration.type,
                file: fileOfResolvedDeclaration,
                objectPath,
            });
        }

        const parsedTypeReference = parseInlineType({ type: referenceToNamedType, file });
        if (parsedTypeReference._type !== "named") {
            return undefined;
        }

        const serviceFile = getServiceFile(this.workspace, fileOfResolvedDeclaration.relativeFilepath);
        if (serviceFile == null) {
            return undefined;
        }

        return {
            _type: "named",
            rawName: maybeDeclaration.typeName,
            name: parsedTypeReference,
            declaration,
            filepath: fileOfResolvedDeclaration.relativeFilepath,
            objectPath,
            originalTypeReference: parsedTypeReference,
            file: constructFernFileContext({
                relativeFilepath: fileOfResolvedDeclaration.relativeFilepath,
                serviceFile,
                casingsGenerator: file.casingsGenerator,
            }),
        };
    }
}
