import { SingleUnionTypeProperties, SingleUnionTypeProperty } from "@fern-fern/ir-sdk/api";
import { Argument } from "../Argument";
import {
    ClassReference,
    GenericClassReference,
    HashInstance,
    JsonClassReference,
    OpenStructClassReference,
    VoidClassReference
} from "../classes/ClassReference";
import { Class_ } from "../classes/Class_";
import { Expression } from "../expressions/Expression";
import { FunctionInvocation } from "../functions/FunctionInvocation";
import { Function_ } from "../functions/Function_";
import { Import } from "../Import";
import { Parameter } from "../Parameter";
import { Property } from "../Property";
import { CaseStatement } from "./CaseStatement";

export declare namespace DiscriminatedUnion {
    export interface Init extends Omit<Class_.Init, "functions" | "includeInitializer" | "expressions"> {
        discriminatingField: string;
        namedSubclasses: Subclass[];
        defaultSubclassReference?: ClassReference;
    }
    export interface Subclass {
        discriminantValue: string;
        classReference: ClassReference;
        unionPropertiesType: SingleUnionTypeProperties;
    }
}
export class DiscriminatedUnion extends Class_ {
    constructor(init: DiscriminatedUnion.Init) {
        const memberProperty = new Property({ name: "member", type: GenericClassReference });
        const discriminantProperty = new Property({ name: "discriminant", type: GenericClassReference });
        const properties = [memberProperty, ...(init.properties ?? [])];

        super({
            ...init,
            properties,
            functions: [
                DiscriminatedUnion.createFromJsonFunction(
                    init.discriminatingField,
                    memberProperty,
                    discriminantProperty,
                    init.namedSubclasses,
                    init.classReference,
                    init.defaultSubclassReference
                ),
                DiscriminatedUnion.createToJsonFunction(
                    memberProperty,
                    discriminantProperty,
                    init.discriminatingField,
                    init.namedSubclasses
                ),
                DiscriminatedUnion.createValidateRawFunction(init.discriminatingField, init.namedSubclasses),
                DiscriminatedUnion.createIsAFunction(memberProperty),
                ...DiscriminatedUnion.createStaticGeneratorFunctions(init.namedSubclasses, memberProperty)
            ],
            expressions: [
                // Hide the initializer for union classes
                new Expression({ rightSide: "private_class_method :new" }),
                // Since we're overriding is_a, we also alias kind_of to it
                new Expression({ rightSide: "alias kind_of? is_a?" })
            ],
            includeInitializer: true
        });
    }

    private static unionPropertyTypeFromJson(
        jsonParameter: string,
        memberProperty: Property,
        unionSubclass: DiscriminatedUnion.Subclass
    ): Expression {
        const rightSide = unionSubclass.unionPropertiesType._visit<FunctionInvocation | string>({
            samePropertiesAsObject: () => unionSubclass.classReference.fromJson(jsonParameter) ?? jsonParameter,
            singleProperty: (sutp: SingleUnionTypeProperty) =>
                unionSubclass.classReference.fromJson(`${jsonParameter}.${sutp.name.wireValue}`) ??
                `${jsonParameter}.${sutp.name.wireValue}`,
            noProperties: () => "nil",
            _other: () => {
                throw new Error("Unknown SingleUnionProperties: " + unionSubclass.unionPropertiesType.propertiesType);
            }
        });

        return new Expression({
            leftSide: memberProperty.name,
            rightSide,
            isAssignment: true
        });
    }

    private static createFromJsonFunction(
        discriminantField: string,
        memberProperty: Property,
        discriminantProperty: Property,
        namedSubclasses: DiscriminatedUnion.Subclass[],
        unionClassReference: ClassReference,
        defaultSubclassReference?: ClassReference
    ): Function_ {
        const jsonObjectParamName = "json_object";
        const functionBody = [
            new Expression({
                leftSide: "struct",
                rightSide: new FunctionInvocation({
                    onObject: new ClassReference({ name: "JSON", import_: new Import({ from: "json" }) }),
                    baseFunction: new Function_({ name: "parse", functionBody: [] }),
                    arguments_: [
                        new Argument({
                            value: jsonObjectParamName,
                            type: GenericClassReference,
                            isNamed: false
                        }),
                        new Argument({
                            name: "object_class",
                            value: "OpenStruct",
                            type: OpenStructClassReference,
                            isNamed: true
                        })
                    ]
                }),
                isAssignment: true
            }),
            new CaseStatement({
                case_: `struct.${discriminantField}`,
                whenBlocks: new Map(
                    namedSubclasses.map((sc) => [
                        `"${sc.discriminantValue}"`,
                        [DiscriminatedUnion.unionPropertyTypeFromJson(jsonObjectParamName, memberProperty, sc)]
                    ])
                ),
                else_: [
                    new Expression({
                        leftSide: memberProperty.name,
                        rightSide: defaultSubclassReference?.fromJson(jsonObjectParamName) ?? jsonObjectParamName,
                        isAssignment: true
                    })
                ]
            }),
            new FunctionInvocation({
                baseFunction: new Function_({ name: "new", functionBody: [] }),
                arguments_: [
                    memberProperty.toArgument(memberProperty.name, true),
                    discriminantProperty.toArgument(`struct.${discriminantField}`, true)
                ]
            })
        ];
        const parameters = [new Parameter({ name: "json_object", type: JsonClassReference })];
        const fromJsonDocumentation = `Deserialize a JSON object to an instance of ${unionClassReference.name}`;
        return new Function_({
            name: "from_json",
            returnValue: namedSubclasses.map((sc) => sc.classReference),
            parameters,
            functionBody,
            documentation: fromJsonDocumentation,
            isStatic: true
        });
    }

    private static unionPropertyTypeToJson(
        memberProperty: Property,
        discriminantProperty: Property,
        unionSubclass: DiscriminatedUnion.Subclass,
        discriminantField: string
    ): FunctionInvocation {
        const objectHash = unionSubclass.unionPropertiesType._visit<HashInstance>({
            samePropertiesAsObject: () =>
                new HashInstance({
                    contents: new Map([[discriminantField, discriminantProperty.toVariable()]]),
                    // Take the member property and spread it into this hash that includes the discriminant
                    additionalHashes: [
                        new FunctionInvocation({
                            baseFunction: new Function_({ name: "to_json", functionBody: [] }),
                            onObject: memberProperty.toVariable()
                        })
                    ]
                }),
            singleProperty: (sutp: SingleUnionTypeProperty) =>
                new HashInstance({
                    contents: new Map([
                        [discriminantField, discriminantProperty.toVariable()],
                        [sutp.name.wireValue, memberProperty.toVariable()]
                    ])
                }),
            noProperties: () =>
                new HashInstance({ contents: new Map([[discriminantField, discriminantProperty.toVariable()]]) }),
            _other: () => {
                throw new Error("Unknown SingleUnionProperties: " + unionSubclass.unionPropertiesType.propertiesType);
            }
        });

        return new FunctionInvocation({
            baseFunction: new Function_({ name: "to_json", functionBody: [] }),
            onObject: objectHash
        });
    }

    // TODO
    private static createToJsonFunction(
        memberProperty: Property,
        discriminantProperty: Property,
        discriminantField: string,
        namedSubclasses: DiscriminatedUnion.Subclass[]
    ): Function_ {
        const toJsonDocumentation = "For Union Types, to_json functionality is delegated to the wrapped member.";

        return new Function_({
            name: "to_json",
            functionBody: [
                new CaseStatement({
                    case_: discriminantProperty.toVariable(),
                    whenBlocks: new Map(
                        namedSubclasses.map((sc) => [
                            `"${sc.discriminantValue}"`,
                            [
                                DiscriminatedUnion.unionPropertyTypeToJson(
                                    memberProperty,
                                    discriminantProperty,
                                    sc,
                                    discriminantField
                                )
                            ]
                        ])
                    ),
                    else_: [
                        new FunctionInvocation({
                            baseFunction: new Function_({ name: "to_json", functionBody: [] }),
                            onObject: new HashInstance({
                                contents: new Map([
                                    [discriminantField, discriminantProperty.toVariable()],
                                    ["value", memberProperty.toVariable()]
                                ])
                            })
                        })
                    ]
                }),
                new FunctionInvocation({
                    baseFunction: new Function_({ name: "to_json", functionBody: [] }),
                    onObject: memberProperty.toVariable()
                })
            ],
            documentation: toJsonDocumentation
        });
    }

    private static createValidateRawFunction(
        discriminantField: string,
        namedSubclasses: DiscriminatedUnion.Subclass[]
    ): Function_ {
        const parameterName = "obj";
        const functionBody = [
            new CaseStatement({
                case_: `${parameterName}.${discriminantField}`,
                whenBlocks: new Map(
                    namedSubclasses.map((sc) => [
                        `"${sc.discriminantValue}"`,
                        [
                            new Expression({
                                rightSide: sc.classReference.validateRaw(parameterName),
                                isAssignment: false
                            })
                        ]
                    ])
                ),
                else_: [
                    new Expression({
                        rightSide: 'raise("Passed value matched no type within the union, validation failed.")',
                        isAssignment: false
                    })
                ]
            })
        ];
        const validateRawDocumentation =
            "Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.";

        return new Function_({
            name: "validate_raw",
            returnValue: VoidClassReference,
            parameters: [new Parameter({ name: parameterName, type: GenericClassReference })],
            functionBody,
            documentation: validateRawDocumentation,
            isStatic: true
        });
    }

    private static createStaticGeneratorFunctions(
        namedSubclasses: DiscriminatedUnion.Subclass[],
        memberProperty: Property
    ): Function_[] {
        const parameterName = "member";
        return namedSubclasses.map((sc) => {
            return new Function_({
                name: sc.discriminantValue,
                functionBody: [
                    new FunctionInvocation({
                        baseFunction: new Function_({ name: "new", functionBody: [] }),
                        arguments_: [memberProperty.toArgument(parameterName, true)]
                    })
                ],
                isStatic: true,
                parameters: [new Parameter({ name: parameterName, type: sc.classReference })]
            });
        });
    }

    private static createIsAFunction(memberProperty: Property): Function_ {
        const isADocumentation = "For Union Types, is_a? functionality is delegated to the wrapped member.";

        const parameterName = "obj";
        return new Function_({
            name: "is_a",
            functionBody: [
                new FunctionInvocation({
                    baseFunction: new Function_({ name: "is_a?", functionBody: [] }),
                    onObject: memberProperty.toVariable(),
                    arguments_: [new Argument({ isNamed: false, type: GenericClassReference, value: parameterName })]
                })
            ],
            parameters: [new Parameter({ name: parameterName, type: GenericClassReference, isNamed: false })],
            documentation: isADocumentation
        });
    }

    public static classReferenceFromUnionType(singleUnionTypeProperties: SingleUnionTypeProperties): ClassReference {
        return singleUnionTypeProperties._visit<ClassReference>({
            samePropertiesAsObject: (dtn) => ClassReference.fromDeclaredTypeName(dtn),
            singleProperty: (sutp: SingleUnionTypeProperty) => ClassReference.fromTypeReference(sutp.type),
            noProperties: () => VoidClassReference,
            _other: () => {
                throw new Error();
            }
        });
    }
}
