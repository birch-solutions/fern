import { csharp, CSharpFile, FileGenerator } from "@fern-api/csharp-codegen";
import { join, RelativeFilePath } from "@fern-api/fs-utils";
import { ModelCustomConfigSchema } from "../ModelCustomConfig";
import { ModelGeneratorContext } from "../ModelGeneratorContext";

export const PROTO_CONVERTER_CLASS_NAME = "ProtoConverter";
export const WELL_KNOWN_PROTO_TYPES_NAMESPACE = "Google.Protobuf.WellKnownTypes";

export declare namespace ProtoConverterGenerator {
    interface Args {
        context: ModelGeneratorContext;
        wellKnownProtoValueClassReference: csharp.ClassReference;
        wellKnownProtoValueType: csharp.Type;
        wellKnownProtoStructType: csharp.Type;
    }
}

export class ProtoConverterGenerator extends FileGenerator<CSharpFile, ModelCustomConfigSchema, ModelGeneratorContext> {
    private wellKnownProtoValueType: csharp.Type;
    private wellKnownProtoStructType: csharp.Type;
    private externalProtoStructClassReference: csharp.ClassReference;
    private externalProtoValueClassReference: csharp.ClassReference;
    private externalProtoListValueClassReference: csharp.ClassReference;

    constructor({ context, wellKnownProtoValueType, wellKnownProtoStructType }: ProtoConverterGenerator.Args) {
        super(context);
        this.wellKnownProtoValueType = wellKnownProtoValueType;
        this.wellKnownProtoStructType = wellKnownProtoStructType;
        this.externalProtoStructClassReference = csharp.classReference({
            name: "Struct",
            namespace: WELL_KNOWN_PROTO_TYPES_NAMESPACE
        });
        this.externalProtoValueClassReference = csharp.classReference({
            name: "Value",
            namespace: WELL_KNOWN_PROTO_TYPES_NAMESPACE
        });
        this.externalProtoListValueClassReference = csharp.classReference({
            name: "ListValue",
            namespace: WELL_KNOWN_PROTO_TYPES_NAMESPACE
        });
    }

    public doGenerate(): CSharpFile {
        const class_ = csharp.class_({
            name: PROTO_CONVERTER_CLASS_NAME,
            namespace: this.context.getNamespace(),
            access: "internal",
            summary: "Utility class for converting to and from Protobuf types."
        });

        class_.addMethod(this.getToProtoStructMethod());
        class_.addMethod(this.getFromProtoStructMethod());
        class_.addMethod(this.getToProtoValueMethod());
        class_.addMethod(this.getFromProtoValueMethod());

        return new CSharpFile({
            clazz: class_,
            directory: this.context.getCoreDirectory(),
            allNamespaceSegments: this.context.getAllNamespaceSegments(),
            allTypeClassReferences: this.context.getAllTypeClassReferences(),
            namespace: this.context.getNamespace(),
            customConfig: this.context.customConfig
        });
    }

    private getToProtoStructMethod(): csharp.Method {
        return csharp.method({
            name: "ToProtoStruct",
            access: "public",
            type: csharp.MethodType.STATIC,
            isAsync: false,
            parameters: [
                csharp.parameter({
                    name: "value",
                    type: this.wellKnownProtoStructType
                })
            ],
            return_: csharp.Type.reference(this.externalProtoStructClassReference),
            body: csharp.codeblock((writer) => {
                writer.write("var result = ");
                writer.writeNodeStatement(
                    csharp.instantiateClass({
                        classReference: this.externalProtoStructClassReference,
                        arguments_: []
                    })
                );
                writer.controlFlow("foreach", csharp.codeblock("var kvp in value"));
                writer.write("result.Fields[kvp.Key] = ");
                writer.writeNodeStatement(
                    csharp.invokeMethod({
                        method: "ToProtoValue",
                        arguments_: [csharp.codeblock("kvp.Value")]
                    })
                );
                writer.endControlFlow();
                writer.writeLine("return result;");
            })
        });
    }

    private getFromProtoStructMethod(): csharp.Method {
        return csharp.method({
            name: "FromProtoStruct",
            access: "public",
            type: csharp.MethodType.STATIC,
            isAsync: false,
            parameters: [
                csharp.parameter({
                    name: "value",
                    type: csharp.Type.reference(this.externalProtoStructClassReference)
                })
            ],
            return_: this.wellKnownProtoStructType,
            body: csharp.codeblock((writer) => {
                writer.write("var result = ");
                writer.writeNodeStatement(
                    csharp.dictionary({
                        keyType: csharp.Type.string(),
                        valueType: csharp.Type.optional(this.wellKnownProtoValueType),
                        values: undefined
                    })
                );
                writer.controlFlow("foreach", csharp.codeblock("var kvp in value.Fields"));
                writer.write("result[kvp.Key] = ");
                writer.writeNodeStatement(
                    csharp.invokeMethod({
                        method: "FromProtoValue",
                        arguments_: [csharp.codeblock("kvp.Value")]
                    })
                );
                writer.endControlFlow();
                writer.writeLine("return result;");
            })
        });
    }

    private getToProtoValueMethod(): csharp.Method {
        return csharp.method({
            name: "ToProtoValue",
            access: "public",
            type: csharp.MethodType.STATIC,
            isAsync: false,
            parameters: [
                csharp.parameter({
                    name: "value",
                    type: csharp.Type.optional(this.wellKnownProtoValueType)
                })
            ],
            return_: csharp.Type.reference(this.externalProtoValueClassReference),
            body: csharp.codeblock((writer) => {
                writer.controlFlow("if", csharp.codeblock("value == null"));
                writer.write("return ");
                writer.writeNodeStatement(
                    csharp.invokeMethod({
                        on: this.externalProtoValueClassReference,
                        method: "ForNull",
                        arguments_: []
                    })
                );
                writer.endControlFlow();

                writer.write("return ");
                writer.writeNodeStatement(
                    csharp.invokeMethod({
                        on: csharp.codeblock("value"),
                        method: "Match",
                        generics: [csharp.Type.reference(this.externalProtoValueClassReference)],
                        arguments_: [
                            csharp.codeblock((writer) => {
                                writer.writeNode(this.externalProtoValueClassReference);
                                writer.write(".ForString");
                            }),
                            csharp.codeblock((writer) => {
                                writer.writeNode(this.externalProtoValueClassReference);
                                writer.write(".ForNumber");
                            }),
                            csharp.codeblock((writer) => {
                                writer.writeNode(this.externalProtoValueClassReference);
                                writer.write(".ForBool");
                            }),
                            csharp.codeblock((writer) => {
                                writer.write("list => new ");
                                writer.writeNode(this.externalProtoValueClassReference);
                                writer.write(" { ListValue = new ");
                                writer.writeNode(this.externalProtoListValueClassReference);
                                writer.write(" { Values = { list.Select(ToProtoValue) } } }");
                            }),
                            csharp.codeblock((writer) => {
                                writer.write("nested => new ");
                                writer.writeNode(this.externalProtoValueClassReference);
                                writer.write(" { StructValue = ToProtoStruct(nested) }");
                            })
                        ]
                    })
                );
            })
        });
    }

    private getFromProtoValueMethod(): csharp.Method {
        return csharp.method({
            name: "FromProtoValue",
            access: "public",
            type: csharp.MethodType.STATIC,
            isAsync: false,
            parameters: [
                csharp.parameter({
                    name: "value",
                    type: csharp.Type.reference(this.externalProtoValueClassReference)
                })
            ],
            return_: csharp.Type.optional(this.wellKnownProtoValueType),
            body: csharp.codeblock((writer) => {
                writer.write("return ");
                writer.writeNodeStatement(
                    csharp.switch_({
                        condition: csharp.codeblock("value.KindCase"),
                        cases: [
                            {
                                label: csharp.codeblock((writer) => {
                                    writer.writeNode(csharp.Type.reference(this.externalProtoValueClassReference));
                                    writer.write(".KindOneofCase.StringValue");
                                }),
                                value: csharp.codeblock("value.StringValue")
                            },
                            {
                                label: csharp.codeblock((writer) => {
                                    writer.writeNode(csharp.Type.reference(this.externalProtoValueClassReference));
                                    writer.write(".KindOneofCase.NumberValue");
                                }),
                                value: csharp.codeblock("value.NumberValue")
                            },
                            {
                                label: csharp.codeblock((writer) => {
                                    writer.writeNode(csharp.Type.reference(this.externalProtoValueClassReference));
                                    writer.write(".KindOneofCase.BoolValue");
                                }),
                                value: csharp.codeblock("value.BoolValue")
                            },
                            {
                                label: csharp.codeblock((writer) => {
                                    writer.writeNode(csharp.Type.reference(this.externalProtoValueClassReference));
                                    writer.write(".KindOneofCase.ListValue");
                                }),
                                value: csharp.codeblock("value.ListValue.Values.Select(FromProtoValue).ToList()")
                            },
                            {
                                label: csharp.codeblock((writer) => {
                                    writer.writeNode(csharp.Type.reference(this.externalProtoValueClassReference));
                                    writer.write(".KindOneofCase.StructValue");
                                }),
                                value: csharp.invokeMethod({
                                    method: "FromProtoStruct",
                                    arguments_: [csharp.codeblock("value.StructValue")]
                                })
                            },
                            {
                                label: csharp.codeblock("_"),
                                value: csharp.codeblock("null")
                            }
                        ]
                    })
                );
            })
        });
    }

    protected getFilepath(): RelativeFilePath {
        return join(
            this.context.project.filepaths.getCoreFilesDirectory(),
            RelativeFilePath.of(`${PROTO_CONVERTER_CLASS_NAME}.cs`)
        );
    }
}
