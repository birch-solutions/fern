import { csharp, CSharpFile, FileGenerator } from "@fern-api/csharp-codegen";
import { ExampleGenerator, getUndiscriminatedUnionSerializerAnnotation } from "@fern-api/fern-csharp-model";
import { join, RelativeFilePath } from "@fern-api/fs-utils";
import {ContainerType, ExampleEndpointCall, HttpEndpoint, Name, SdkRequestWrapper, ServiceId ,
    TypeReference
} from "@fern-fern/ir-sdk/api";
import { SdkCustomConfigSchema } from "../SdkCustomConfig";
import { SdkGeneratorContext } from "../SdkGeneratorContext";

export declare namespace WrappedRequestGenerator {
    export interface Args {
        serviceId: ServiceId;
        wrapper: SdkRequestWrapper;
        context: SdkGeneratorContext;
        endpoint: HttpEndpoint;
    }
}

export class WrappedRequestGenerator extends FileGenerator<CSharpFile, SdkCustomConfigSchema, SdkGeneratorContext> {
    private classReference: csharp.ClassReference;
    private wrapper: SdkRequestWrapper;
    private serviceId: ServiceId;
    private endpoint: HttpEndpoint;
    private exampleGenerator: ExampleGenerator;

    public constructor({ wrapper, context, serviceId, endpoint }: WrappedRequestGenerator.Args) {
        super(context);
        this.wrapper = wrapper;
        this.serviceId = serviceId;
        this.classReference = this.context.getRequestWrapperReference(this.serviceId, this.wrapper.wrapperName);
        this.endpoint = endpoint;
        this.exampleGenerator = new ExampleGenerator(context);
    }

    protected doGenerate(): CSharpFile {
        const class_ = csharp.class_({
            ...this.classReference,
            partial: false,
            access: "public",
            record: true
        });

        const protobufProperties: { propertyName: string; typeReference: TypeReference }[] = [];
        for (const query of this.endpoint.queryParameters) {
            const propertyName = query.name.name.pascalCase.safeName;
            const type = query.allowMultiple
                ? csharp.Type.list(
                      this.context.csharpTypeMapper.convert({ reference: query.valueType, unboxOptionals: true })
                  )
                : this.context.csharpTypeMapper.convert({ reference: query.valueType });

            class_.addField(
                csharp.field({
                    name: propertyName,
                    type,
                    access: "public",
                    get: true,
                    set: true,
                    summary: query.docs,
                    useRequired: true
                })
            );

            protobufProperties.push({
                propertyName,
                typeReference: query.allowMultiple
                    ? TypeReference.container(ContainerType.list(query.valueType))
                    : query.valueType
            });
        }

        for (const header of this.endpoint.headers) {
            class_.addField(
                csharp.field({
                    name: header.name.name.pascalCase.safeName,
                    type: this.context.csharpTypeMapper.convert({ reference: header.valueType }),
                    access: "public",
                    get: true,
                    set: true,
                    summary: header.docs,
                    useRequired: true
                })
            );
        }

        const addJsonAnnotations = this.endpoint.queryParameters.length === 0 && this.endpoint.headers.length === 0;

        this.endpoint.requestBody?._visit({
            reference: (reference) => {
                class_.addField(
                    csharp.field({
                        name: this.wrapper.bodyKey.pascalCase.safeName,
                        type: this.context.csharpTypeMapper.convert({ reference: reference.requestBodyType }),
                        access: "public",
                        get: true,
                        set: true,
                        summary: reference.docs,
                        useRequired: true
                    })
                );
            },
            inlinedRequestBody: (request) => {
                for (const property of [...request.properties, ...(request.extendedProperties ?? [])]) {
                    const annotations: csharp.Annotation[] = [];
                    const maybeUndiscriminatedUnion = this.context.getAsUndiscriminatedUnionTypeDeclaration(
                        property.valueType
                    );
                    if (addJsonAnnotations && maybeUndiscriminatedUnion != null) {
                        annotations.push(
                            getUndiscriminatedUnionSerializerAnnotation({
                                context: this.context,
                                undiscriminatedUnionDeclaration: maybeUndiscriminatedUnion.declaration,
                                isList: maybeUndiscriminatedUnion.isList
                            })
                        );
                    }

                    const propertyName = property.name.name.pascalCase.safeName;
                    class_.addField(
                        csharp.field({
                            name: propertyName,
                            type: this.context.csharpTypeMapper.convert({ reference: property.valueType }),
                            access: "public",
                            get: true,
                            set: true,
                            summary: property.docs,
                            jsonPropertyName: addJsonAnnotations ? property.name.wireValue : undefined,
                            annotations,
                            useRequired: true
                        })
                    );

                    protobufProperties.push({
                        propertyName,
                        typeReference: property.valueType
                    });
                }
            },
            fileUpload: () => undefined,
            bytes: () => undefined,
            _other: () => undefined
        });

        const protobufService = this.context.protobufResolver.getProtobufServiceForServiceId(this.serviceId);
        if (protobufService != null) {
            const protobufClassReference = new csharp.ClassReference({
                name: this.classReference.name,
                namespace: this.context.protobufResolver.getNamespaceFromProtobufFileOrThrow(protobufService.file),
                namespaceAlias: "Proto"
            });
            class_.addMethod(
                this.context.csharpProtobufTypeMapper.toProtoMethod({
                    classReference: this.classReference,
                    protobufClassReference,
                    properties: protobufProperties
                })
            );
        }

        return new CSharpFile({
            clazz: class_,
            directory: this.getDirectory(),
            allNamespaceSegments: this.context.getAllNamespaceSegments(),
            allTypeClassReferences: this.context.getAllTypeClassReferences(),
            namespace: this.context.getNamespace(),
            customConfig: this.context.customConfig
        });
    }

    public doGenerateSnippet(example: ExampleEndpointCall): csharp.CodeBlock {
        const orderedFields: { name: Name; value: csharp.CodeBlock }[] = [];
        for (const exampleQueryParameter of example.queryParameters) {
            const isSingleQueryParameter =
                exampleQueryParameter.shape == null || exampleQueryParameter.shape.type === "single";
            const singleValueSnippet = this.exampleGenerator.getSnippetForTypeReference(exampleQueryParameter.value);
            const value = isSingleQueryParameter
                ? singleValueSnippet
                : csharp.codeblock((writer) =>
                      writer.writeNode(
                          csharp.list({
                              entries: [singleValueSnippet]
                          })
                      )
                  );
            orderedFields.push({
                name: exampleQueryParameter.name.name,
                value
            });
        }

        for (const header of example.endpointHeaders) {
            orderedFields.push({
                name: header.name.name,
                value: this.exampleGenerator.getSnippetForTypeReference(header.value)
            });
        }

        example.request?._visit({
            reference: (reference) => {
                orderedFields.push({
                    name: this.wrapper.bodyKey,
                    value: this.exampleGenerator.getSnippetForTypeReference(reference)
                });
            },
            inlinedRequestBody: (inlinedRequestBody) => {
                for (const property of inlinedRequestBody.properties) {
                    orderedFields.push({
                        name: property.name.name,
                        value: this.exampleGenerator.getSnippetForTypeReference(property.value)
                    });
                }
            },
            _other: () => undefined
        });
        const args = orderedFields.map(({ name, value }) => {
            return {
                name: name.pascalCase.safeName,
                assignment: value
            };
        });
        const instantiateClass = csharp.instantiateClass({
            classReference: this.classReference,
            arguments_: args
        });
        return csharp.codeblock((writer) => writer.writeNode(instantiateClass));
    }

    protected getFilepath(): RelativeFilePath {
        return join(
            this.context.project.filepaths.getSourceFileDirectory(),
            this.getDirectory(),
            RelativeFilePath.of(this.classReference.name + ".cs")
        );
    }

    private getDirectory(): RelativeFilePath {
        const directory = this.context.getDirectoryForServiceId(this.serviceId);
        return RelativeFilePath.of(directory ? `${directory}/Requests` : "Requests");
    }
}
