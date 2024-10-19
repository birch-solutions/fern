import { IntermediateRepresentation, TypeDeclaration, TypeId, TypeReference } from "@fern-api/ir-sdk";
import { TaskContext } from "@fern-api/task-context";
import { JSONSchema4 } from "json-schema";

export class JsonSchemaConverterContext {
    private readonly definitions: Record<string, JSONSchema4> = {};

    constructor(private readonly context: TaskContext, private readonly ir: IntermediateRepresentation) {}

    public getTypeDeclarationForId({ typeName, typeId }: { typeId: TypeId; typeName?: string }): TypeDeclaration {
        const typeDeclaration = this.ir.types[typeId];
        if (typeDeclaration == null) {
            if (typeName != null) {
                this.context.logger.error(`Type ${typeName} not found`);
            } else {
                // context.logger.error(`Type declaration not found for ${typeName}`);
            }
            return this.context.failAndThrow();
        }
        return typeDeclaration;
    }

    public isOptional(typeReference: TypeReference): boolean {
        if (typeReference.type === "container" && typeReference.container.type === "optional") {
            return true;
        }
        if (typeReference.type === "named") {
            const typeDeclaration = this.getTypeDeclarationForId({ typeId: typeReference.typeId });
            if (typeDeclaration.shape.type === "alias") {
                return this.isOptional(typeDeclaration.shape.aliasOf);
            }
        }
        return false;
    }

    public registerDefinition(typeId: TypeId, schema: JSONSchema4): void {
        const typeDeclaration = this.getTypeDeclarationForId({ typeId });
        this.definitions[typeDeclaration.name.fernFilepath.allParts.map((part) => part.originalName).join(".")] =
            schema;
    }

    public getDefinitions(): Record<string, JSONSchema4> {
        return this.definitions;
    }
}
