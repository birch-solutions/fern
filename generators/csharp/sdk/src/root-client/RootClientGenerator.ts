import { assertNever } from "@fern-api/core-utils";
import { csharp, CSharpFile, FileGenerator } from "@fern-api/csharp-codegen";
import { join, RelativeFilePath } from "@fern-api/fs-utils";
import { AuthScheme, HttpHeader, PrimitiveType, TypeReference } from "@fern-fern/ir-sdk/api";
import { SdkCustomConfigSchema } from "../SdkCustomConfig";
import { SdkGeneratorContext } from "../SdkGeneratorContext";

interface ConstructorParameter {
    name: string;
    docs?: string;
    isOptional: boolean;
    typeReference: TypeReference;
    environmentVariable?: string;
}

export class RootClientGenerator extends FileGenerator<CSharpFile, SdkCustomConfigSchema, SdkGeneratorContext> {
    protected getFilepath(): RelativeFilePath {
        return join(RelativeFilePath.of(this.context.getRootClientClassName() + ".cs"));
    }

    public doGenerate(): CSharpFile {
        const class_ = csharp.class_({
            name: this.context.getRootClientClassName(),
            namespace: this.context.getNamespace(),
            partial: true,
            access: "public"
        });

        const constructorParameters = this.getConstructorParameters();
        const requiredParameters: ConstructorParameter[] = [];
        const optionalParameters: ConstructorParameter[] = [];
        for (const param of constructorParameters) {
            if (param.isOptional || param.environmentVariable != null) {
                optionalParameters.push(param);
            } else {
                requiredParameters.push(param);
            }
        }

        const addRequiredParamConstructor = requiredParameters.length > 0;
        const addOptionalParamConstructor = optionalParameters.length > 0;
        if (addRequiredParamConstructor) {
            class_.addConstructor({
                access: "public",
                parameters: requiredParameters.map((param) =>
                    csharp.parameter({
                        name: param.name,
                        type: this.context.csharpTypeMapper.convert({ reference: param.typeReference }),
                        docs: param.docs
                    })
                )
            });
            if (addOptionalParamConstructor) {
                // delegate to the optional parameter constructor
            } else {
                // implement the constructor
            }
        }
        if (addOptionalParamConstructor) {
            class_.addConstructor({
                access: "public",
                parameters: [...requiredParameters, ...optionalParameters].map((param) =>
                    csharp.parameter({
                        name: param.name,
                        type: this.context.csharpTypeMapper.convert({ reference: param.typeReference }),
                        docs: param.docs
                    })
                )
            });
        }

        for (const subpackageId of this.context.ir.rootPackage.subpackages) {
            const subpackage = this.context.getSubpackageOrThrow(subpackageId);
            if (subpackage.service == null) {
                continue;
            }
            class_.addField(
                csharp.field({
                    access: "public",
                    get: true,
                    name: subpackage.name.pascalCase.safeName,
                    type: csharp.Type.reference(this.context.getServiceClassReference(subpackage.service))
                })
            );
        }

        const rootServiceId = this.context.ir.rootPackage.service;
        if (rootServiceId != null) {
            const service = this.context.getHttpServiceOrThrow(rootServiceId);
            for (const endpoint of service.endpoints) {
                class_.addMethod(
                    csharp.method({
                        name: endpoint.name.pascalCase.safeName,
                        access: "public",
                        isAsync: true,
                        parameters: [],
                        summary: endpoint.docs
                    })
                );
            }
        }

        class_.addMethod(this.getFromEnvironmentOrThrowMethod());

        return new CSharpFile({
            clazz: class_,
            directory: RelativeFilePath.of("")
        });
    }

    private getConstructorParameters(): ConstructorParameter[] {
        const parameters: ConstructorParameter[] = [];
        for (const scheme of this.context.ir.auth.schemes) {
            parameters.push(...this.getParameterFromAuthScheme(scheme));
        }
        for (const header of this.context.ir.headers) {
            parameters.push(this.getParameterForHeader(header));
        }
        return parameters;
    }

    private getParameterFromAuthScheme(scheme: AuthScheme): ConstructorParameter[] {
        const isOptional = this.context.ir.sdkConfig.isAuthMandatory;
        switch (scheme.type) {
            case "header": {
                const name = scheme.name.name.camelCase.safeName;
                return [
                    {
                        name,
                        docs: scheme.docs ?? `The ${name} to use for authentication.`,
                        isOptional,
                        typeReference: scheme.valueType,
                        environmentVariable: scheme.headerEnvVar
                    }
                ];
            }
            case "bearer": {
                const name = scheme.token.camelCase.safeName;
                return [
                    {
                        name,
                        docs: scheme.docs ?? `The ${name} to use for authentication.`,
                        isOptional,
                        typeReference: TypeReference.primitive(PrimitiveType.String),
                        environmentVariable: scheme.tokenEnvVar
                    }
                ];
            }
            case "basic": {
                const usernameName = scheme.username.camelCase.safeName;
                const passwordName = scheme.password.camelCase.safeName;
                return [
                    {
                        name: usernameName,
                        docs: scheme.docs ?? `The ${usernameName} to use for authentication.`,
                        isOptional,
                        typeReference: TypeReference.primitive(PrimitiveType.String),
                        environmentVariable: scheme.usernameEnvVar
                    },
                    {
                        name: passwordName,
                        docs: scheme.docs ?? `The ${passwordName} to use for authentication.`,
                        isOptional,
                        typeReference: TypeReference.primitive(PrimitiveType.String),
                        environmentVariable: scheme.passwordEnvVar
                    }
                ];
            }
            default:
                assertNever(scheme);
        }
    }

    private getParameterForHeader(header: HttpHeader): ConstructorParameter {
        const name = header.name.name.camelCase.safeName;
        return {
            name,
            docs: header.docs,
            isOptional: header.valueType.type === "container" && header.valueType.container.type === "optional",
            typeReference: header.valueType
        };
    }

    private getFromEnvironmentOrThrowMethod(): csharp.Method {
        return csharp.method({
            access: "private",
            name: "GetFromEnvironmentOrThrow",
            return_: csharp.Types.string(),
            parameters: [
                csharp.parameter({
                    name: "env",
                    type: csharp.Types.string()
                }),
                csharp.parameter({
                    name: "message",
                    type: csharp.Types.string()
                })
            ],
            isAsync: false,
            body: csharp.codeblock({
                value: (writer) => {
                    writer.writeLine("var value = Environment.GetEnvironmentVariable(env);");
                    writer.writeLine("if (value == null) {");
                    writer.writeLine("    throw new Exception(message)");
                    writer.writeLine("}");
                    writer.writeLine("return value;");
                }
            })
        });
    }
}
