import { assertNever } from "@fern-api/core-utils";
import { Arguments, UnnamedArgument } from "@fern-api/generator-commons";
import { ObjectProperty } from "@fern-fern/ir-sdk/api";
import { isEqual, uniq, uniqWith } from "lodash-es";
import { php } from "..";
import { ClassInstantiation } from "../ast";
import { BasePhpCustomConfigSchema } from "../custom-config/BasePhpCustomConfigSchema";
import { parameter } from "../php";
import { AbstractPhpGeneratorContext } from "./AbstractPhpGeneratorContext";

export declare namespace PhpAttributeMapper {
    interface Args {
        type: php.Type;

        // TODO: Remove the 'Pick' once 'availablity' is available on the InlinedRequestBodyProperty.
        property: Pick<ObjectProperty, "name">;
    }
}

export class PhpAttributeMapper {
    private context: AbstractPhpGeneratorContext<BasePhpCustomConfigSchema>;

    constructor(context: AbstractPhpGeneratorContext<BasePhpCustomConfigSchema>) {
        this.context = context;
    }

    public convert({ type, property }: PhpAttributeMapper.Args): php.Attribute[] {
        const attributes: php.Attribute[] = [];
        attributes.push(
            php.attribute({
                reference: this.context.getJsonPropertyAttributeClassReference(),
                arguments: [`'${property.name.wireValue}'`]
            })
        );
        const underlyingInternalType = type.underlyingType().internalType;
        if (underlyingInternalType.type === "date" || underlyingInternalType.type === "dateTime") {
            attributes.push(
                php.attribute({
                    reference: this.context.getDateTypeAttributeClassReference(),
                    arguments: [`DateType::TYPE_${underlyingInternalType.type.toUpperCase()}`]
                })
            );
        }
        if (underlyingInternalType.type === "array" || underlyingInternalType.type === "map") {
            attributes.push(
                php.attribute({
                    reference: this.context.getArrayTypeClassReference(),
                    arguments: [this.getTypeAttributeArgument(type.underlyingType())]
                })
            );
        }
        if (underlyingInternalType.type === "union") {
            const unionTypeParameters = this.getUnionTypeParameters(underlyingInternalType.types);
            // only add the attribute if deduping in getUnionTypeParameters resulted in more than one type
            if (unionTypeParameters.length > 1) {
                attributes.push(
                    php.attribute({
                        reference: this.context.getUnionClassReference(),
                        arguments: this.getUnionTypeParameters(underlyingInternalType.types)
                    })
                );
            }
        }
        return attributes;
    }

    public getUnionTypeClassRepresentation(arguments_: php.AstNode[]): ClassInstantiation {
        return php.instantiateClass({
            classReference: this.context.getUnionClassReference(),
            arguments_
        });
    }

    public getUnionTypeParameters(types: php.Type[]): php.AstNode[] {
        // remove duplicates, such as "string" and "string" if enums and strings are both in the union
        return uniqWith(
            types.map((type) => this.getTypeAttributeArgument(type)),
            isEqual
        );
    }

    public getTypeAttributeArgument(type: php.Type): php.AstNode {
        switch (type.internalType.type) {
            case "int":
                return php.codeblock("'integer'");
            case "string":
                return php.codeblock("'string'");
            case "bool":
                return php.codeblock("'bool'");
            case "float":
                return php.codeblock("'float'");
            case "date":
                return php.codeblock("'date'");
            case "dateTime":
                return php.codeblock("'datetime'");
            case "mixed":
                return php.codeblock("'mixed'");
            case "object":
                // This is likely not handled by our serde, but we also never use it.
                return php.codeblock("'object'");
            case "array":
                return php.array({
                    entries: [this.getTypeAttributeArgument(type.internalType.value)]
                });
            case "map": {
                return php.map({
                    entries: [
                        {
                            key: this.getTypeAttributeArgument(type.internalType.keyType),
                            value: this.getTypeAttributeArgument(type.internalType.valueType)
                        }
                    ]
                });
            }
            case "typeDict": {
                return php.map({
                    entries: [
                        {
                            key: php.codeblock("'string'"),
                            value: php.codeblock("'mixed'")
                        }
                    ]
                });
            }
            case "union": {
                const unionTypeParameters = this.getUnionTypeParameters(type.internalType.types);
                // dedupe in getUnionTypeParameters could result in a single value
                if (unionTypeParameters.length === 1) {
                    return unionTypeParameters[0]!;
                }
                return this.getUnionTypeClassRepresentation(unionTypeParameters);
            }
            case "optional":
                return php.instantiateClass({
                    classReference: this.context.getUnionClassReference(),
                    arguments_: [this.getTypeAttributeArgument(type.internalType.value), php.codeblock("'null'")]
                });
            case "reference": {
                const reference = type.internalType.value;
                return php.codeblock((writer) => {
                    writer.writeNode(reference);
                    writer.write("::class");
                });
            }
            case "enumString":
                return php.codeblock("'string'");
            default:
                assertNever(type.internalType);
        }
    }
}
