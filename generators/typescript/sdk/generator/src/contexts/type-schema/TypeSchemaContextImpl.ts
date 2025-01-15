import { ImportsManager, Reference, TypeReferenceNode, Zurg } from "@fern-typescript/commons";
import { CoreUtilities } from "@fern-typescript/commons/src/core-utilities/CoreUtilities";
import { BaseContext, GeneratedTypeSchema, TypeSchemaContext } from "@fern-typescript/contexts";
import { TypeResolver } from "@fern-typescript/resolvers";
import { TypeGenerator } from "@fern-typescript/type-generator";
import {
    TypeReferenceToRawTypeNodeConverter,
    TypeReferenceToSchemaConverter
} from "@fern-typescript/type-reference-converters";
import { TypeSchemaGenerator } from "@fern-typescript/type-schema-generator";
import { SourceFile, ts } from "ts-morph";

import { DeclaredTypeName, ShapeType, TypeDeclaration, TypeReference } from "@fern-fern/ir-sdk/api";

import { TypeDeclarationReferencer } from "../../declaration-referencers/TypeDeclarationReferencer";
import { getSchemaImportStrategy } from "../getSchemaImportStrategy";

export declare namespace TypeSchemaContextImpl {
    export interface Init {
        sourceFile: SourceFile;
        coreUtilities: CoreUtilities;
        importsManager: ImportsManager;
        context: BaseContext;
        typeDeclarationReferencer: TypeDeclarationReferencer;
        typeSchemaDeclarationReferencer: TypeDeclarationReferencer;
        typeGenerator: TypeGenerator;
        typeSchemaGenerator: TypeSchemaGenerator;
        treatUnknownAsAny: boolean;
        includeSerdeLayer: boolean;
        retainOriginalCasing: boolean;
        useBigInt: boolean;
        enableInlineTypes: boolean;
        allowExtraFields: boolean;
        omitUndefined: boolean;
    }
}

export class TypeSchemaContextImpl implements TypeSchemaContext {
    private sourceFile: SourceFile;
    private coreUtilities: CoreUtilities;
    private importsManager: ImportsManager;
    private typeDeclarationReferencer: TypeDeclarationReferencer;
    private typeSchemaDeclarationReferencer: TypeDeclarationReferencer;
    private typeReferenceToRawTypeNodeConverter: TypeReferenceToRawTypeNodeConverter;
    private typeReferenceToSchemaConverter: TypeReferenceToSchemaConverter;
    private context: BaseContext;
    private typeGenerator: TypeGenerator;
    private typeSchemaGenerator: TypeSchemaGenerator;
    private includeSerdeLayer: boolean;
    private retainOriginalCasing: boolean;

    constructor({
        sourceFile,
        coreUtilities,
        importsManager,
        context,
        typeDeclarationReferencer,
        typeGenerator,
        typeSchemaDeclarationReferencer,
        typeSchemaGenerator,
        treatUnknownAsAny,
        includeSerdeLayer,
        retainOriginalCasing,
        useBigInt,
        enableInlineTypes,
        allowExtraFields,
        omitUndefined
    }: TypeSchemaContextImpl.Init) {
        this.sourceFile = sourceFile;
        this.coreUtilities = coreUtilities;
        this.importsManager = importsManager;
        this.typeReferenceToRawTypeNodeConverter = new TypeReferenceToRawTypeNodeConverter({
            getReferenceToNamedType: (typeName) => this.getReferenceToRawNamedType(typeName).getEntityName(),
            generateForInlineUnion: (typeName) => this.generateForInlineUnion(typeName),
            context,
            treatUnknownAsAny,
            includeSerdeLayer,
            useBigInt,
            enableInlineTypes,
            allowExtraFields,
            omitUndefined
        });
        this.typeReferenceToSchemaConverter = new TypeReferenceToSchemaConverter({
            getSchemaOfNamedType: (typeName) => this.getSchemaOfNamedType(typeName, { isGeneratingSchema: true }),
            zurg: this.coreUtilities.zurg,
            context,
            treatUnknownAsAny,
            includeSerdeLayer,
            useBigInt,
            enableInlineTypes,
            allowExtraFields,
            omitUndefined
        });
        this.typeDeclarationReferencer = typeDeclarationReferencer;
        this.typeSchemaDeclarationReferencer = typeSchemaDeclarationReferencer;
        this.context = context;
        this.typeGenerator = typeGenerator;
        this.typeSchemaGenerator = typeSchemaGenerator;
        this.includeSerdeLayer = includeSerdeLayer;
        this.retainOriginalCasing = retainOriginalCasing;
    }

    public getGeneratedTypeSchema(typeName: DeclaredTypeName): GeneratedTypeSchema {
        const typeDeclaration = this.context.type.getTypeDeclaration(typeName);
        const examples = typeDeclaration.userProvidedExamples;
        if (examples.length === 0) {
            examples.push(...typeDeclaration.autogeneratedExamples);
        }

        return this.typeSchemaGenerator.generateTypeSchema({
            shape: typeDeclaration.shape,
            typeName: this.typeSchemaDeclarationReferencer.getExportedName(typeDeclaration.name),
            getGeneratedType: () =>
                this.typeGenerator.generateType({
                    shape: typeDeclaration.shape,
                    docs: typeDeclaration.docs ?? undefined,
                    examples,
                    fernFilepath: typeDeclaration.name.fernFilepath,
                    typeName: this.getTypeNameForDeclaration(typeDeclaration),
                    getReferenceToSelf: (context) => context.type.getReferenceToNamedType(typeName),
                    includeSerdeLayer: this.includeSerdeLayer,
                    retainOriginalCasing: this.retainOriginalCasing,
                    inline: typeDeclaration.inline ?? false
                }),
            getReferenceToGeneratedType: () =>
                this.typeDeclarationReferencer
                    .getReferenceToType({
                        name: typeDeclaration.name,
                        importsManager: this.importsManager,
                        referencedIn: this.sourceFile,
                        // setting this to direct will create a direct import in the same file as the schema const is declared and being exported
                        importStrategy: {
                            type: "fromRoot",
                            namespaceImport: this.typeDeclarationReferencer.namespaceExport
                        }
                    })
                    .getTypeNode(),
            getReferenceToGeneratedTypeSchema: () =>
                this.typeSchemaDeclarationReferencer.getReferenceToType({
                    name: typeDeclaration.name,
                    importsManager: this.importsManager,
                    referencedIn: this.sourceFile,
                    // setting this to direct will create a direct import in the same file as the schema const is declared and being exported
                    importStrategy: getSchemaImportStrategy({ useDynamicImport: false })
                })
        });
    }

    private getTypeNameForDeclaration(typeDeclaration: TypeDeclaration): string {
        return this.typeDeclarationReferencer.getExportedName(typeDeclaration.name);
    }

    public getReferenceToRawType(typeReference: TypeReference): TypeReferenceNode {
        return this.typeReferenceToRawTypeNodeConverter.convert({ typeReference });
    }

    public getReferenceToRawNamedType(typeName: DeclaredTypeName): Reference {
        const typeDeclaration = this.context.type.getTypeDeclaration(typeName);
        const isCircular = typeDeclaration.referencedTypes.has(typeName.typeId);

        return this.typeSchemaDeclarationReferencer.getReferenceToType({
            name: typeName,
            importStrategy: isCircular
                ? {
                      type: "fromRoot",
                      useDynamicImport: false,
                      namespaceImport: "serializers"
                  }
                : { type: "direct", alias: `${typeName.name.originalName}Type` },
            // TODO this should not be hardcoded here
            subImport: ["Raw"],
            importsManager: this.importsManager,
            referencedIn: this.sourceFile
        });
    }

    private generateForInlineUnion(typeName: DeclaredTypeName): ts.TypeNode {
        throw new Error("Internal error; inline unions are not supported in schemas.");
    }

    public getSchemaOfTypeReference(typeReference: TypeReference): Zurg.Schema {
        return this.typeReferenceToSchemaConverter.convert({ typeReference });
    }

    public getSchemaOfNamedType(
        typeName: DeclaredTypeName,
        { isGeneratingSchema }: { isGeneratingSchema: boolean }
    ): Zurg.Schema {
        const typeDeclaration = this.context.type.getTypeDeclaration(typeName);
        const isCircular = typeDeclaration.referencedTypes.has(typeName.typeId);

        const referenceToSchema = this.typeSchemaDeclarationReferencer
            .getReferenceToType({
                name: typeName,
                importStrategy: (() => {
                    // Your logic here to determine the import strategy
                    if (isGeneratingSchema && isCircular) {
                        // Circular references should be imported from the root.
                        return { type: "fromRoot", useDynamicImport: false, namespaceImport: "serializers" };
                    } else if (isGeneratingSchema) {
                        // Return default import strategy or another strategy based on your logic
                        return { type: "direct", alias: `${typeName.name.originalName}Type` };
                    } else {
                        // We don't really know when or if this case is actually used
                        return getSchemaImportStrategy({ useDynamicImport: false });
                    }
                })(),
                importsManager: this.importsManager,
                referencedIn: this.sourceFile
            })
            .getExpression();

        const schema = this.coreUtilities.zurg.Schema._fromExpression(referenceToSchema, {
            isObject: typeDeclaration.shape.type === "object"
        });

        // when generating schemas, wrap named types with lazy() to prevent issues with circular imports
        // we only do this when we know there is a circular reference, because lazy is expensive
        if (isGeneratingSchema && isCircular) {
            return this.wrapSchemaWithLazy(schema, typeName);
        }

        return schema;
    }

    private wrapSchemaWithLazy(schema: Zurg.Schema, typeName: DeclaredTypeName): Zurg.Schema {
        const resolvedType = this.context.type.resolveTypeName(typeName);
        return resolvedType.type === "named" && resolvedType.shape === ShapeType.Object
            ? this.coreUtilities.zurg.lazyObject(schema)
            : this.coreUtilities.zurg.lazy(schema);
    }
}
