import { assertNever } from "@fern-api/core-utils";
import {
    constructFernFileContext,
    FernFileContext,
    getAllPropertiesForObject,
    ResolvedContainerType,
    ResolvedType,
    TypeResolver,
    TypeResolverImpl
} from "@fern-api/ir-generator";
import { FernWorkspace } from "@fern-api/workspace-loader";
import {
    DefinitionFileSchema,
    isRawDiscriminatedUnionDefinition,
    isRawEnumDefinition,
    isRawObjectDefinition,
    isRawUndiscriminatedUnionDefinition,
    RawSchemas
} from "@fern-api/yaml-schema";
import { RuleRunnerArgs } from "./Rule";
import { CASINGS_GENERATOR } from "./utils/casingsGenerator";

export class ComplexTypeDetector {
    private typeResolver: TypeResolver;

    constructor(private readonly workspace: FernWorkspace) {
        this.typeResolver = new TypeResolverImpl(workspace);
    }

    public isTypeComplex(type: string, ruleRunnerArgs: RuleRunnerArgs<DefinitionFileSchema>): boolean | undefined {
        const file = constructFernFileContext({
            relativeFilepath: ruleRunnerArgs.relativeFilepath,
            definitionFile: ruleRunnerArgs.contents,
            casingsGenerator: CASINGS_GENERATOR,
            rootApiFile: this.workspace.definition.rootApiFile.contents
        });
        const resolvedType = this.typeResolver.resolveType({
            type,
            file
        });
        if (resolvedType == null) {
            return undefined;
        }
        const visited = new Set<string>();
        return this.isResolvedReferenceComplex({
            type: resolvedType,
            file,
            visited
        });
    }

    private isResolvedReferenceComplex({
        type,
        file,
        visited
    }: {
        type: ResolvedType;
        file: FernFileContext;
        visited: Set<string>;
    }): boolean {
        switch (type._type) {
            case "container":
                return this.isResolvedContainerComplex({
                    type: type.container,
                    file,
                    visited
                });
            case "named":
                return this.isNamedTypeComplex({
                    type,
                    file,
                    visited
                });
            case "primitive":
                return false;
            case "unknown":
                return true;
            default:
                assertNever(type);
        }
    }

    private isResolvedContainerComplex({
        type,
        file,
        visited
    }: {
        type: ResolvedContainerType;
        file: FernFileContext;
        visited: Set<string>;
    }): boolean {
        switch (type._type) {
            case "literal":
                return false;
            case "optional":
                return this.isResolvedReferenceComplex({
                    type: type.itemType,
                    file,
                    visited
                });
            case "list":
            case "map":
            case "set":
                return true;
            default:
                assertNever(type);
        }
    }

    private isNamedTypeComplex({
        type,
        file,
        visited
    }: {
        type: ResolvedType.Named;
        file: FernFileContext;
        visited: Set<string>;
    }): boolean {
        if (visited.has(type.rawName)) {
            return false;
        }
        visited.add(type.rawName);
        if (
            isRawDiscriminatedUnionDefinition(type.declaration) ||
            isRawUndiscriminatedUnionDefinition(type.declaration)
        ) {
            return true;
        }
        if (isRawEnumDefinition(type.declaration)) {
            return false;
        }
        if (isRawObjectDefinition(type.declaration)) {
            return this.objectHasComplexProperties({
                typeName: type.rawName,
                objectDeclaration: type.declaration,
                file,
                visited
            });
        }
        assertNever(type.declaration);
    }

    private objectHasComplexProperties({
        typeName,
        objectDeclaration,
        file,
        visited
    }: {
        typeName: string;
        objectDeclaration: RawSchemas.ObjectSchema;
        file: FernFileContext;
        visited: Set<string>;
    }): boolean {
        const allPropertiesForObject = getAllPropertiesForObject({
            typeName,
            objectDeclaration,
            typeResolver: this.typeResolver,
            definitionFile: file.definitionFile,
            workspace: this.workspace,
            filepathOfDeclaration: file.relativeFilepath,
            smartCasing: false
        });
        return allPropertiesForObject.some((property) => {
            return this.isComplex({
                type: property.resolvedPropertyType,
                file,
                visited
            });
        });
    }

    private isComplex({
        type,
        file,
        visited
    }: {
        type: ResolvedType;
        file: FernFileContext;
        visited: Set<string>;
    }): boolean {
        switch (type._type) {
            case "named":
                return this.isNamedTypeComplex({
                    type,
                    file,
                    visited
                });
            case "primitive":
            case "unknown":
                return false;
            case "container":
                return this.isComplexContainer({
                    type: type.container,
                    file,
                    visited
                });
            default:
                assertNever(type);
        }
    }

    private isComplexContainer({
        type,
        file,
        visited
    }: {
        type: ResolvedContainerType;
        file: FernFileContext;
        visited: Set<string>;
    }): boolean {
        switch (type._type) {
            case "literal":
                // For now, we consider complex objects to be those that define any literals.
                return true;
            case "map":
                return (
                    this.isComplex({
                        type: type.keyType,
                        file,
                        visited
                    }) ||
                    this.isComplex({
                        type: type.valueType,
                        file,
                        visited
                    })
                );
            case "optional":
            case "list":
            case "set":
                return this.isComplex({
                    type: type.itemType,
                    file,
                    visited
                });
            default:
                assertNever(type);
        }
    }
}
