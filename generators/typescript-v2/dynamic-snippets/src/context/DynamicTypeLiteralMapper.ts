import { DiscriminatedUnionTypeInstance, Severity } from "@fern-api/browser-compatible-base-generator";
import { assertNever } from "@fern-api/core-utils";
import { FernIr } from "@fern-api/dynamic-ir-sdk";
import { ts } from "@fern-api/typescript-ast";

import { DynamicSnippetsGeneratorContext } from "./DynamicSnippetsGeneratorContext";

export declare namespace DynamicTypeLiteralMapper {
    interface Args {
        typeReference: FernIr.dynamic.TypeReference;
        value: unknown;
    }
}

export class DynamicTypeLiteralMapper {
    private context: DynamicSnippetsGeneratorContext;

    constructor({ context }: { context: DynamicSnippetsGeneratorContext }) {
        this.context = context;
    }

    public convert(args: DynamicTypeLiteralMapper.Args): ts.TypeLiteral {
        if (args.value == null) {
            return ts.TypeLiteral.nop();
        }
        switch (args.typeReference.type) {
            case "list":
                return this.convertList({ list: args.typeReference.value, value: args.value });
            case "literal":
                return ts.TypeLiteral.nop();
            case "map":
                return this.convertMap({ map: args.typeReference, value: args.value });
            case "named": {
                const named = this.context.resolveNamedType({ typeId: args.typeReference.value });
                if (named == null) {
                    return ts.TypeLiteral.nop();
                }
                return this.convertNamed({ named, value: args.value });
            }
            case "optional":
                return this.convert({ typeReference: args.typeReference.value, value: args.value });
            case "primitive":
                return this.convertPrimitive({ primitive: args.typeReference.value, value: args.value });
            case "set":
                return this.convertList({ list: args.typeReference.value, value: args.value });
            case "unknown":
                return this.convertUnknown({ value: args.value });
            default:
                assertNever(args.typeReference);
        }
    }

    private convertList({ list, value }: { list: FernIr.dynamic.TypeReference; value: unknown }): ts.TypeLiteral {
        if (!Array.isArray(value)) {
            this.context.errors.add({
                severity: Severity.Critical,
                message: `Expected array but got: ${typeof value}`
            });
            return ts.TypeLiteral.nop();
        }
        return ts.TypeLiteral.array({
            values: value.map((v, index) => {
                this.context.errors.scope({ index });
                try {
                    return this.convert({ typeReference: list, value: v });
                } finally {
                    this.context.errors.unscope();
                }
            })
        });
    }

    private convertMap({ map, value }: { map: FernIr.dynamic.MapType; value: unknown }): ts.TypeLiteral {
        if (typeof value !== "object" || value == null) {
            this.context.errors.add({
                severity: Severity.Critical,
                message: `Expected object but got: ${value == null ? "null" : typeof value}`
            });
            return ts.TypeLiteral.nop();
        }
        return ts.TypeLiteral.object({
            fields: Object.entries(value).map(([key, value]) => {
                this.context.errors.scope(key);
                try {
                    return {
                        name: key,
                        value: this.convert({ typeReference: map.value, value })
                    };
                } finally {
                    this.context.errors.unscope();
                }
            })
        });
    }

    private convertNamed({ named, value }: { named: FernIr.dynamic.NamedType; value: unknown }): ts.TypeLiteral {
        switch (named.type) {
            case "alias":
                return this.convert({ typeReference: named.typeReference, value });
            case "discriminatedUnion":
                return this.convertDiscriminatedUnion({
                    discriminatedUnion: named,
                    value
                });
            case "enum":
                return this.convertEnum({ enum_: named, value });
            case "object":
                return this.convertObject({ object_: named, value });
            case "undiscriminatedUnion":
                return this.convertUndicriminatedUnion({ undicriminatedUnion: named, value });
            default:
                assertNever(named);
        }
    }

    private convertDiscriminatedUnion({
        discriminatedUnion,
        value
    }: {
        discriminatedUnion: FernIr.dynamic.DiscriminatedUnionType;
        value: unknown;
    }): ts.TypeLiteral {
        const discriminatedUnionTypeInstance = this.context.resolveDiscriminatedUnionTypeInstance({
            discriminatedUnion,
            value
        });
        if (discriminatedUnionTypeInstance == null) {
            return ts.TypeLiteral.nop();
        }
        const unionVariant = discriminatedUnionTypeInstance.singleDiscriminatedUnionType;
        const baseFields = this.getBaseFields({
            discriminatedUnionTypeInstance,
            singleDiscriminatedUnionType: unionVariant
        });
        switch (unionVariant.type) {
            case "samePropertiesAsObject": {
                const named = this.context.resolveNamedType({
                    typeId: unionVariant.typeId
                });
                if (named == null) {
                    return ts.TypeLiteral.nop();
                }
                return ts.TypeLiteral.object({
                    fields: [
                        ...baseFields,
                        {
                            name: this.context.getPropertyName(unionVariant.discriminantValue.name),
                            value: this.convertNamed({ named, value: discriminatedUnionTypeInstance.value })
                        }
                    ]
                });
            }
            case "singleProperty": {
                const record = this.context.getRecord(discriminatedUnionTypeInstance.value);
                if (record == null) {
                    return ts.TypeLiteral.nop();
                }
                try {
                    this.context.errors.scope(unionVariant.discriminantValue.wireValue);
                    return ts.TypeLiteral.object({
                        fields: [
                            ...baseFields,
                            {
                                name: this.context.getPropertyName(unionVariant.discriminantValue.name),
                                value: this.convert({
                                    typeReference: unionVariant.typeReference,
                                    value: record[unionVariant.discriminantValue.wireValue]
                                })
                            }
                        ]
                    });
                } finally {
                    this.context.errors.unscope();
                }
            }
            case "noProperties":
                return ts.TypeLiteral.object({
                    fields: [...baseFields]
                });
            default:
                assertNever(unionVariant);
        }
    }

    private getBaseFields({
        discriminatedUnionTypeInstance,
        singleDiscriminatedUnionType
    }: {
        discriminatedUnionTypeInstance: DiscriminatedUnionTypeInstance;
        singleDiscriminatedUnionType: FernIr.dynamic.SingleDiscriminatedUnionType;
    }): ts.ObjectField[] {
        const discriminantProperty = {
            name: this.context.getPropertyName(discriminatedUnionTypeInstance.discriminantValue.name),
            value: ts.TypeLiteral.string(singleDiscriminatedUnionType.discriminantValue.wireValue)
        };
        const properties = this.context.associateByWireValue({
            parameters: singleDiscriminatedUnionType.properties ?? [],
            values: this.context.getRecord(discriminatedUnionTypeInstance.value) ?? {},

            // We're only selecting the base properties here. The rest of the properties
            // are handled by the union variant.
            ignoreMissingParameters: true
        });
        return [
            discriminantProperty,
            ...properties.map((property) => {
                this.context.errors.scope(property.name.wireValue);
                try {
                    return {
                        name: this.context.getPropertyName(property.name.name),
                        value: this.convert(property)
                    };
                } finally {
                    this.context.errors.unscope();
                }
            })
        ];
    }

    private convertObject({ object_, value }: { object_: FernIr.dynamic.ObjectType; value: unknown }): ts.TypeLiteral {
        const properties = this.context.associateByWireValue({
            parameters: object_.properties,
            values: this.context.getRecord(value) ?? {}
        });
        return ts.TypeLiteral.object({
            fields: properties.map((property) => {
                this.context.errors.scope(property.name.wireValue);
                try {
                    return {
                        name: this.context.getPropertyName(property.name.name),
                        value: this.convert(property)
                    };
                } finally {
                    this.context.errors.unscope();
                }
            })
        });
    }

    private convertEnum({ enum_, value }: { enum_: FernIr.dynamic.EnumType; value: unknown }): ts.TypeLiteral {
        const enumValue = this.getEnumValue({ enum_, value });
        if (enumValue == null) {
            return ts.TypeLiteral.nop();
        }
        return ts.TypeLiteral.string(enumValue);
    }

    private getEnumValue({ enum_, value }: { enum_: FernIr.dynamic.EnumType; value: unknown }): string | undefined {
        if (typeof value !== "string") {
            this.context.errors.add({
                severity: Severity.Critical,
                message: `Expected enum value string, ts.: ${typeof value}`
            });
            return undefined;
        }
        const enumValue = enum_.values.find((v) => v.wireValue === value);
        if (enumValue == null) {
            this.context.errors.add({
                severity: Severity.Critical,
                message: `An enum value named "${value}" does not exist in this context`
            });
            return undefined;
        }
        return value;
    }

    private convertUndicriminatedUnion({
        undicriminatedUnion,
        value
    }: {
        undicriminatedUnion: FernIr.dynamic.UndiscriminatedUnionType;
        value: unknown;
    }): ts.TypeLiteral {
        const result = this.findMatchingUndiscriminatedUnionType({
            undicriminatedUnion,
            value
        });
        if (result == null) {
            return ts.TypeLiteral.nop();
        }
        return result;
    }

    private findMatchingUndiscriminatedUnionType({
        undicriminatedUnion,
        value
    }: {
        undicriminatedUnion: FernIr.dynamic.UndiscriminatedUnionType;
        value: unknown;
    }): ts.TypeLiteral | undefined {
        for (const typeReference of undicriminatedUnion.types) {
            try {
                return this.convert({ typeReference, value });
            } catch (e) {
                continue;
            }
        }
        this.context.errors.add({
            severity: Severity.Critical,
            message: `None of the types in the undicriminated union matched the given "${typeof value}" value`
        });
        return undefined;
    }

    private convertUnknown({ value }: { value: unknown }): ts.TypeLiteral {
        return ts.TypeLiteral.unknown(value);
    }

    private convertPrimitive({
        primitive,
        value
    }: {
        primitive: FernIr.PrimitiveTypeV1;
        value: unknown;
    }): ts.TypeLiteral {
        switch (primitive) {
            case "INTEGER":
            case "UINT": {
                const num = this.getValueAsNumber({ value });
                if (num == null) {
                    return ts.TypeLiteral.nop();
                }
                return ts.TypeLiteral.number(num);
            }
            case "LONG":
            case "UINT_64": {
                const num = this.getValueAsNumber({ value });
                if (num == null) {
                    return ts.TypeLiteral.nop();
                }
                if (this.context.customConfig?.useBigInt) {
                    return ts.TypeLiteral.bigint(BigInt(num));
                }
                return ts.TypeLiteral.number(num);
            }
            case "FLOAT":
            case "DOUBLE": {
                const num = this.getValueAsNumber({ value });
                if (num == null) {
                    return ts.TypeLiteral.nop();
                }
                return ts.TypeLiteral.number(num);
            }
            case "BOOLEAN": {
                const bool = this.getValueAsBoolean({ value });
                if (bool == null) {
                    return ts.TypeLiteral.nop();
                }
                return ts.TypeLiteral.boolean(bool);
            }
            case "BASE_64":
            case "DATE":
            case "DATE_TIME":
            case "UUID":
            case "STRING": {
                const str = this.getValueAsString({ value });
                if (str == null) {
                    return ts.TypeLiteral.nop();
                }
                return ts.TypeLiteral.string(str);
            }
            case "BIG_INTEGER": {
                const bigInt = this.getValueAsString({ value });
                if (bigInt == null) {
                    return ts.TypeLiteral.nop();
                }
                return ts.TypeLiteral.bigint(BigInt(bigInt));
            }
            default:
                assertNever(primitive);
        }
    }

    private getValueAsNumber({ value }: { value: unknown }): number | undefined {
        if (typeof value !== "number") {
            this.context.errors.add({
                severity: Severity.Critical,
                message: this.newTypeMismatchError({ expected: "number", value }).message
            });
            return undefined;
        }
        return value;
    }

    private getValueAsBoolean({ value }: { value: unknown }): boolean | undefined {
        if (typeof value !== "boolean") {
            this.context.errors.add({
                severity: Severity.Critical,
                message: this.newTypeMismatchError({ expected: "boolean", value }).message
            });
            return undefined;
        }
        return value;
    }

    private getValueAsString({ value }: { value: unknown }): string | undefined {
        if (typeof value !== "string") {
            this.context.errors.add({
                severity: Severity.Critical,
                message: this.newTypeMismatchError({ expected: "string", value }).message
            });
            return undefined;
        }
        return value;
    }

    private newTypeMismatchError({ expected, value }: { expected: string; value: unknown }): Error {
        return new Error(`Expected ${expected} but got ${typeof value}`);
    }
}
