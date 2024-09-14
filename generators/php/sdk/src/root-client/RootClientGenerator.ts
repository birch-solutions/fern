import { assertNever } from "@fern-api/core-utils";
import { php, FileGenerator, PhpFile } from "@fern-api/php-codegen";
import { join, RelativeFilePath } from "@fern-api/fs-utils";
import { HttpHeader, Literal, Subpackage, TypeReference } from "@fern-fern/ir-sdk/api";
import { SdkCustomConfigSchema } from "../SdkCustomConfig";
import { SdkGeneratorContext } from "../SdkGeneratorContext";

interface ConstructorParameter {
    name: string;
    isOptional: boolean;
    typeReference: TypeReference;
    docs?: string;
    header?: HeaderInfo;
    environmentVariable?: string;
}

interface LiteralParameter {
    name: string;
    value: Literal;
}

interface HeaderInfo {
    name: string;
    prefix?: string;
}

export class RootClientGenerator extends FileGenerator<PhpFile, SdkCustomConfigSchema, SdkGeneratorContext> {
    constructor(context: SdkGeneratorContext) {
        super(context);
    }

    protected getFilepath(): RelativeFilePath {
        return join(RelativeFilePath.of(this.context.getRootClientClassName() + ".php"));
    }

    public doGenerate(): PhpFile {
        const class_ = php.class_({
            name: this.context.getRootClientClassName(),
            namespace: this.context.getRootNamespace()
        });

        const subpackages = this.getRootSubpackages();

        class_.addField(
            php.field({
                name: "$client",
                access: "private",
                type: php.Type.reference(this.context.rawClient.getClassReference())
            })
        );

        class_.addConstructor(this.getConstructorMethod({ subpackages }));

        for (const subpackage of subpackages) {
            // TODO: Replace 'array' with the subpackage classes.
            class_.addField(
                php.field({
                    name: `$${subpackage.name.camelCase.safeName}`,
                    access: "public",
                    type: php.Type.array(php.Type.mixed())
                })
            );
        }

        return new PhpFile({
            clazz: class_,
            directory: RelativeFilePath.of(""),
            rootNamespace: this.context.getRootNamespace(),
            customConfig: this.context.customConfig
        });
    }

    private getConstructorMethod({ subpackages }: { subpackages: Subpackage[] }): php.Class.Constructor {
        const { requiredParameters, optionalParameters, literalParameters } = this.getConstructorParameters();
        const parameters: php.Parameter[] = [];
        for (const param of requiredParameters) {
            // TODO: Replace 'array' with the PHP type mapper.
            parameters.push(
                php.parameter({
                    name: param.name,
                    type: php.Type.array(php.Type.mixed()),
                    docs: param.docs
                })
            );
        }

        parameters.push(
            php.parameter({
                name: this.context.getClientOptionsParameterName(),
                type: php.Type.optional(this.context.getClientOptionsType()),
                initializer: php.codeblock("null")
            })
        );

        const headerEntries: php.Map.Entry[] = [];
        for (const param of optionalParameters) {
            if (param.header != null) {
                headerEntries.push({
                    key: php.codeblock(`"${param.header.name}"`),
                    value: php.codeblock(
                        param.header.prefix != null ? `"${param.header.prefix} " . ${param.name}` : param.name
                    )
                });
            }
        }

        for (const param of literalParameters) {
            headerEntries.push({
                key: php.codeblock(`"${param.name}"`),
                value: php.codeblock(this.context.getLiteralAsString(param.value))
            });
        }

        const platformHeaders = this.context.ir.sdkConfig.platformHeaders;
        headerEntries.push({
            key: php.codeblock(`"${platformHeaders.language}"`),
            value: php.codeblock('"PHP"')
        });
        headerEntries.push({
            key: php.codeblock(`"${platformHeaders.sdkName}"`),
            value: php.codeblock(`"${this.context.getRootNamespace()}"`)
        });
        if (this.context.version != null) {
            headerEntries.push({
                key: php.codeblock(`"${platformHeaders.sdkVersion}"`),
                value: php.codeblock(`"${this.context.version}"`)
            });
        }
        if (platformHeaders.userAgent != null) {
            headerEntries.push({
                key: php.codeblock(`"${platformHeaders.userAgent.header}"`),
                value: php.codeblock(`"${platformHeaders.userAgent.value}"`)
            });
        }
        const headers = php.map({
            entries: headerEntries
        });
        return {
            access: "public",
            parameters,
            body: php.codeblock((writer) => {
                writer.write("$defaultHeaders = ");
                writer.writeNodeStatement(headers);

                writer.write("$this->client = ");
                writer.writeNodeStatement(
                    this.context.rawClient.instantiate({
                        arguments_: [
                            {
                                name: "client",
                                assignment: php.codeblock((writer) => {
                                    const guzzleClientOption = `${this.context.getClientOptionsParameterName()}['client']`;
                                    writer.write(`isset(${guzzleClientOption}) ? ${guzzleClientOption} : `);
                                    writer.writeNode(this.context.guzzleClient.instantiate());
                                })
                            },
                            {
                                name: "headers",
                                assignment: php.codeblock("$defaultHeaders")
                            }
                        ]
                    })
                );

                for (const subpackage of this.getRootSubpackages()) {
                    writer.write(`$this->${subpackage.name.camelCase.safeName} = `);
                    writer.writeNodeStatement(php.codeblock("[]"));
                }
            })
        };
    }

    private getConstructorParameters(): {
        allParameters: ConstructorParameter[];
        requiredParameters: ConstructorParameter[];
        optionalParameters: ConstructorParameter[];
        literalParameters: LiteralParameter[];
    } {
        const allParameters: ConstructorParameter[] = [];
        const requiredParameters: ConstructorParameter[] = [];
        const optionalParameters: ConstructorParameter[] = [];
        const literalParameters: LiteralParameter[] = [];

        for (const header of this.context.ir.headers) {
            allParameters.push(this.getParameterForHeader(header));
        }

        for (const param of allParameters) {
            if (param.isOptional || param.environmentVariable != null) {
                optionalParameters.push(param);
                continue;
            }
            const literal = this.context.maybeLiteral(param.typeReference);
            if (literal != null) {
                literalParameters.push({
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    name: param.header!.name,
                    value: literal
                });
                continue;
            }
            requiredParameters.push(param);
        }
        return {
            allParameters,
            requiredParameters,
            optionalParameters,
            literalParameters
        };
    }

    private getParameterForHeader(header: HttpHeader): ConstructorParameter {
        return {
            name: `$${header.name.name.camelCase.safeName}`,
            header: {
                name: header.name.wireValue
            },
            docs: header.docs,
            isOptional: this.context.isOptional(header.valueType),
            typeReference: header.valueType
        };
    }

    private getRootSubpackages(): Subpackage[] {
        return this.context.ir.rootPackage.subpackages.map((subpackageId) => {
            return this.context.getSubpackageOrThrow(subpackageId);
        });
    }
}
