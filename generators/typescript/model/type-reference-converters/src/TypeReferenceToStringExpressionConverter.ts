import { getSchemaOptions } from "@fern-typescript/commons";
import { ts } from "ts-morph";

import {
    ContainerType,
    DeclaredTypeName,
    Literal,
    ResolvedTypeReference,
    ShapeType,
    TypeReference
} from "@fern-fern/ir-sdk/api";

import { AbstractTypeReferenceConverter, ConvertTypeReferenceParams } from "./AbstractTypeReferenceConverter";

export declare namespace TypeReferenceToStringExpressionConverter {
    export interface Init extends AbstractTypeReferenceConverter.Init {}
}

export class TypeReferenceToStringExpressionConverter extends AbstractTypeReferenceConverter<
    (reference: ts.Expression) => ts.Expression
> {
    public convertWithNullCheckIfOptional(
        params: ConvertTypeReferenceParams
    ): (reference: ts.Expression) => ts.Expression {
        const isNullable = this.isTypeReferenceNullable(params.typeReference);
        const isOptional = this.isTypeReferenceOptional(params.typeReference);
        if (!isNullable && !isOptional) {
            return this.convert(params);
        }
        if (isNullable) {
            return (reference) =>
                ts.factory.createConditionalExpression(
                    ts.factory.createBinaryExpression(
                        reference,
                        ts.factory.createToken(ts.SyntaxKind.ExclamationEqualsEqualsToken),
                        ts.factory.createIdentifier("undefined")
                    ),
                    ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                    this.convert(params)(reference),
                    ts.factory.createToken(ts.SyntaxKind.ColonToken),
                    ts.factory.createIdentifier("undefined")
                );
        }
        return (reference) =>
            ts.factory.createConditionalExpression(
                ts.factory.createBinaryExpression(
                    reference,
                    ts.factory.createToken(ts.SyntaxKind.ExclamationEqualsToken),
                    ts.factory.createNull()
                ),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                this.convert(params)(reference),
                ts.factory.createToken(ts.SyntaxKind.ColonToken),
                ts.factory.createIdentifier("undefined")
            );
    }

    protected override named(
        typeName: DeclaredTypeName,
        params: ConvertTypeReferenceParams
    ): (reference: ts.Expression) => ts.Expression {
        const resolvedType = this.context.type.resolveTypeName(typeName);
        if (this.includeSerdeLayer) {
            return (reference) => {
                const typeDeclaration = this.context.type.getTypeDeclaration(typeName);
                const mapExpression = this.context.typeSchema
                    .getSchemaOfNamedType(typeName, { isGeneratingSchema: false })
                    .jsonOrThrow(reference, {
                        ...getSchemaOptions({
                            allowExtraFields:
                                this.allowExtraFields ??
                                (typeDeclaration.shape.type === "object" && typeDeclaration.shape.extraProperties),
                            omitUndefined: this.omitUndefined
                        })
                    });

                const getStringify = (resolvedType: ResolvedTypeReference): ts.Expression =>
                    ResolvedTypeReference._visit<ts.Expression>(resolvedType, {
                        container: (containerType) =>
                            ContainerType._visit(containerType, {
                                list: () => this.jsonStringify(mapExpression),
                                optional: (optional) => getStringify(this.context.type.resolveTypeReference(optional)),
                                nullable: (nullable) => getStringify(this.context.type.resolveTypeReference(nullable)),
                                set: () => this.jsonStringify(mapExpression),
                                map: () => this.jsonStringify(mapExpression),
                                literal: (literal) => {
                                    if (literal.type === "string") {
                                        return mapExpression;
                                    }
                                    return this.jsonStringify(mapExpression);
                                },
                                _other: () => {
                                    throw new Error("Unknown ContainerType: " + containerType.type);
                                }
                            }),
                        primitive: () => mapExpression,
                        named: ({ shape }) => {
                            if (shape === ShapeType.Enum) {
                                return mapExpression;
                            }
                            if (shape === ShapeType.UndiscriminatedUnion) {
                                return this.jsonStringifyIfNotStringNoRecompute(mapExpression);
                            }
                            return this.jsonStringify(mapExpression);
                        },
                        unknown: () => this.jsonStringifyIfNotStringNoRecompute(mapExpression),
                        _other: () => {
                            throw new Error("Unknown ResolvedTypeReference: " + resolvedType.type);
                        }
                    });
                return getStringify(resolvedType);
            };
        }

        return ResolvedTypeReference._visit<(reference: ts.Expression) => ts.Expression>(resolvedType, {
            container: (containerType) =>
                ContainerType._visit(containerType, {
                    list: this.list.bind(this),
                    nullable: (nullableType) => this.nullable(nullableType, params),
                    optional: (optionalType) => this.optional(optionalType, params),
                    set: this.set.bind(this),
                    map: (mapType) => this.map(mapType, params),
                    literal: this.literal.bind(this),
                    _other: () => {
                        throw new Error("Unknown ContainerType: " + containerType.type);
                    }
                }),
            primitive: this.primitive.bind(this),
            named: ({ shape }) => {
                if (shape === ShapeType.Enum) {
                    return (reference) => reference;
                }
                if (shape === ShapeType.UndiscriminatedUnion) {
                    return this.jsonStringifyIfNotString.bind(this);
                }
                return this.jsonStringify.bind(this);
            },
            unknown: this.unknown.bind(this),
            _other: () => {
                throw new Error("Unknown ResolvedTypeReference: " + resolvedType.type);
            }
        });
    }

    protected override string(): (reference: ts.Expression) => ts.Expression {
        return (reference) => reference;
    }

    protected override number(): (reference: ts.Expression) => ts.Expression {
        return (reference) =>
            ts.factory.createCallExpression(
                ts.factory.createPropertyAccessExpression(reference, "toString"),
                undefined,
                undefined
            );
    }

    protected long(): (reference: ts.Expression) => ts.Expression {
        if (this.useBigInt) {
            return (reference) =>
                ts.factory.createCallExpression(
                    ts.factory.createPropertyAccessExpression(reference, "toString"),
                    undefined,
                    undefined
                );
        }
        return this.number();
    }

    protected bigInteger(): (reference: ts.Expression) => ts.Expression {
        if (this.useBigInt) {
            return (reference) =>
                ts.factory.createCallExpression(
                    ts.factory.createPropertyAccessExpression(reference, "toString"),
                    undefined,
                    undefined
                );
        }
        return this.string();
    }

    protected override boolean(): (reference: ts.Expression) => ts.Expression {
        return (reference) =>
            ts.factory.createCallExpression(
                ts.factory.createPropertyAccessExpression(reference, "toString"),
                undefined,
                undefined
            );
    }

    protected override dateTime(): (reference: ts.Expression) => ts.Expression {
        if (this.includeSerdeLayer) {
            return (reference) =>
                ts.factory.createCallExpression(
                    ts.factory.createPropertyAccessExpression(reference, "toISOString"),
                    undefined,
                    undefined
                );
        }
        return (reference) => reference;
    }

    protected override nullable(
        itemType: TypeReference,
        params: ConvertTypeReferenceParams
    ): (reference: ts.Expression) => ts.Expression {
        return (reference) => this.convert({ ...params, typeReference: itemType })(reference);
    }

    protected override optional(
        itemType: TypeReference,
        params: ConvertTypeReferenceParams
    ): (reference: ts.Expression) => ts.Expression {
        return (reference) => this.convert({ ...params, typeReference: itemType })(reference);
    }

    protected override unknown(): (reference: ts.Expression) => ts.Expression {
        return this.jsonStringifyIfNotString.bind(this);
    }

    protected override any(): (reference: ts.Expression) => ts.Expression {
        return this.jsonStringifyIfNotString.bind(this);
    }

    protected override list(): (reference: ts.Expression) => ts.Expression {
        return this.jsonStringify.bind(this);
    }

    protected override literal(literal: Literal): (reference: ts.Expression) => ts.Expression {
        return Literal._visit(literal, {
            string: () => (reference: ts.Expression) => reference,
            boolean: () => (reference: ts.Expression) =>
                ts.factory.createCallExpression(
                    ts.factory.createPropertyAccessExpression(reference, "toString"),
                    undefined,
                    undefined
                ),
            _other: () => {
                throw new Error("Unknown literal: " + literal.type);
            }
        });
    }

    protected override mapWithEnumKeys(): (reference: ts.Expression) => ts.Expression {
        return this.jsonStringify.bind(this);
    }

    protected override mapWithNonEnumKeys(): (reference: ts.Expression) => ts.Expression {
        return this.jsonStringify.bind(this);
    }

    protected override set(): (reference: ts.Expression) => ts.Expression {
        return this.jsonStringify.bind(this);
    }

    /**
     * Example:
     * ```ts
     * toJson(REFERENCE)
     * ```
     */
    private jsonStringify(reference: ts.Expression): ts.Expression {
        return ts.factory.createCallExpression(
            this.context.jsonContext.getReferenceToToJson().getExpression(),
            undefined,
            [reference]
        );
    }

    /**
     * Example:
     * ```ts
     * typeof REFERENCE === "string" ? REFERENCE : toJson(REFERENCE)
     * ```
     */
    private jsonStringifyIfNotString(reference: ts.Expression): ts.Expression {
        return ts.factory.createConditionalExpression(
            ts.factory.createBinaryExpression(
                ts.factory.createTypeOfExpression(reference),
                ts.factory.createToken(ts.SyntaxKind.EqualsEqualsEqualsToken),
                ts.factory.createStringLiteral("string")
            ),
            ts.factory.createToken(ts.SyntaxKind.QuestionToken),
            reference,
            ts.factory.createToken(ts.SyntaxKind.ColonToken),
            this.jsonStringify(reference)
        );
    }

    /**
     * Example:
     * ```ts
     * (() => {
     *   const mapped = REFERENCE;
     *   return typeof mapped === "string" ? mapped : toJson(mapped);
     * })()
     * ```
     */
    private jsonStringifyIfNotStringNoRecompute(reference: ts.Expression): ts.Expression {
        const mappedConst = ts.factory.createIdentifier("mapped");
        return ts.factory.createCallExpression(
            ts.factory.createParenthesizedExpression(
                ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [],
                    undefined,
                    ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                    ts.factory.createBlock(
                        [
                            ts.factory.createVariableStatement(
                                undefined,
                                ts.factory.createVariableDeclarationList(
                                    [
                                        ts.factory.createVariableDeclaration(
                                            mappedConst,
                                            undefined,
                                            undefined,
                                            reference
                                        )
                                    ],
                                    ts.NodeFlags.Const
                                )
                            ),
                            ts.factory.createReturnStatement(this.jsonStringifyIfNotString(mappedConst))
                        ],
                        true
                    )
                )
            ),
            undefined,
            []
        );
    }
}
