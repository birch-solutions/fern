import { assertNever } from "@fern-api/core-utils";
import {
    ContainerType,
    DeclaredTypeName,
    Literal,
    Name,
    PrimitiveType,
    PrimitiveTypeV1,
    TypeId,
    TypeReference
} from "@fern-fern/ir-sdk/api";
import { php } from "../";
import { ClassReference, Type } from "../ast";
import { BasePhpCustomConfigSchema } from "../custom-config/BasePhpCustomConfigSchema";
import { AbstractPhpGeneratorContext } from "./AbstractPhpGeneratorContext";

export declare namespace PhpTypeMapper {
    interface Args {
        reference: TypeReference;
        enumsAsEnumString?: boolean;
    }
}

export class PhpTypeMapper {
    private context: AbstractPhpGeneratorContext<BasePhpCustomConfigSchema>;

    constructor(context: AbstractPhpGeneratorContext<BasePhpCustomConfigSchema>) {
        this.context = context;
    }

    public convert({ reference, enumsAsEnumString = false }: PhpTypeMapper.Args): Type {
        switch (reference.type) {
            case "container":
                return this.convertContainer({
                    container: reference.container,
                    enumsAsEnumString
                });
            case "named":
                return this.convertNamed({ named: reference, enumsAsEnumString });
            case "primitive":
                return this.convertPrimitive(reference);
            case "unknown":
                return php.Type.mixed();
            default:
                assertNever(reference);
        }
    }

    public convertToClassReference(declaredTypeName: { typeId: TypeId; name: Name }): ClassReference {
        return new php.ClassReference({
            name: this.context.getClassName(declaredTypeName.name),
            namespace: this.context.getLocationForTypeId(declaredTypeName.typeId).namespace
        });
    }

    private convertContainer({
        container,
        enumsAsEnumString
    }: {
        container: ContainerType;
        enumsAsEnumString: boolean;
    }): Type {
        switch (container.type) {
            case "list":
                return Type.array(this.convert({ reference: container.list, enumsAsEnumString }));
            case "map": {
                const key = this.convert({ reference: container.keyType, enumsAsEnumString });
                const value = this.convert({ reference: container.valueType, enumsAsEnumString });
                return Type.map(key, value);
            }
            case "set":
                return Type.array(this.convert({ reference: container.set, enumsAsEnumString }));
            case "optional":
                return Type.optional(this.convert({ reference: container.optional, enumsAsEnumString }));
            case "literal":
                return this.convertLiteral({ literal: container.literal });
            default:
                assertNever(container);
        }
    }

    private convertPrimitive({ primitive }: { primitive: PrimitiveType }): Type {
        return PrimitiveTypeV1._visit<php.Type>(primitive.v1, {
            integer: () => php.Type.int(),
            long: () => php.Type.int(),
            uint: () => php.Type.int(),
            uint64: () => php.Type.int(),
            float: () => php.Type.float(),
            double: () => php.Type.float(),
            boolean: () => php.Type.bool(),
            string: () => php.Type.string(),
            date: () => php.Type.date(),
            dateTime: () => php.Type.dateTime(),
            uuid: () => php.Type.string(),
            base64: () => php.Type.string(),
            bigInteger: () => php.Type.string(),
            _other: () => php.Type.mixed()
        });
    }

    private convertLiteral({ literal }: { literal: Literal }): Type {
        switch (literal.type) {
            case "boolean":
                return php.Type.bool();
            case "string":
                return php.Type.string();
        }
    }

    private convertNamed({ named, enumsAsEnumString }: { named: DeclaredTypeName; enumsAsEnumString: boolean }): Type {
        const classReference = this.convertToClassReference(named);
        const typeDeclaration = this.context.getTypeDeclarationOrThrow(named.typeId);
        switch (typeDeclaration.shape.type) {
            case "alias":
                return this.convert({ reference: typeDeclaration.shape.aliasOf, enumsAsEnumString });
            case "enum":
                return enumsAsEnumString ? php.Type.enumString(classReference) : php.Type.reference(classReference);
            case "object":
                return php.Type.reference(classReference);
            case "union":
                return php.Type.mixed();
            case "undiscriminatedUnion": {
                return php.Type.mixed();
            }
            default:
                assertNever(typeDeclaration.shape);
        }
    }
}
