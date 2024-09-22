import { php } from "@fern-api/php-codegen";
import { HttpEndpoint, ServiceId } from "@fern-fern/ir-sdk/api";
import { SdkGeneratorContext } from "../../SdkGeneratorContext";
import { getEndpointReturnType } from "../utils/getEndpointReturnType";
import { AbstractEndpointGenerator } from "../AbstractEndpointGenerator";
import { Arguments, UnnamedArgument } from "@fern-api/generator-commons";
import { upperFirst } from "lodash-es";

export declare namespace EndpointGenerator {
    export interface Args {
        /** the reference to the client */
        clientReference: string;
        /** the endpoint for the endpoint */
        endpoint: HttpEndpoint;
        /** reference to a variable that is the body */
        bodyReference?: string;
    }
}

const JSON_VARIABLE_NAME = "$json";
const RESPONSE_VARIABLE_NAME = "$response";
const STATUS_CODE_VARIABLE_NAME = "$statusCode";

export class HttpEndpointGenerator extends AbstractEndpointGenerator {
    public constructor({ context }: { context: SdkGeneratorContext }) {
        super({ context });
    }

    public generate({ serviceId, endpoint }: { serviceId: ServiceId; endpoint: HttpEndpoint }): php.Method {
        const endpointSignatureInfo = this.getEndpointSignatureInfo({ serviceId, endpoint });
        const parameters = [...endpointSignatureInfo.baseParameters];
        parameters.push(
            php.parameter({
                name: `$${this.context.getRequestOptionsName()}`,
                type: php.Type.optional(this.context.getRequestOptionsType())
            })
        );
        const return_ = getEndpointReturnType({ context: this.context, endpoint });
        return php.method({
            name: this.context.getEndpointMethodName(endpoint),
            access: "public",
            parameters,
            docs: endpoint.docs,
            return_,
            body: php.codeblock((writer) => {
                const queryParameterCodeBlock = endpointSignatureInfo.request?.getQueryParameterCodeBlock();
                if (queryParameterCodeBlock != null) {
                    queryParameterCodeBlock.code.write(writer);
                }
                const headerParameterCodeBlock = endpointSignatureInfo.request?.getHeaderParameterCodeBlock();
                if (headerParameterCodeBlock != null) {
                    headerParameterCodeBlock.code.write(writer);
                }
                const requestBodyCodeBlock = endpointSignatureInfo.request?.getRequestBodyCodeBlock();
                if (requestBodyCodeBlock?.code != null) {
                    writer.writeNode(requestBodyCodeBlock.code);
                }

                writer.writeLine("try {");
                writer.indent();
                writer.write(`${RESPONSE_VARIABLE_NAME} = `);
                writer.writeNodeStatement(
                    this.context.rawClient.sendRequest({
                        clientReference: `$this->${this.context.rawClient.getFieldName()}`,
                        baseUrl: this.getBaseURLForEndpoint({ endpoint }),
                        endpoint,
                        bodyReference: requestBodyCodeBlock?.requestBodyReference,
                        pathParameterReferences: endpointSignatureInfo.pathParameterReferences,
                        headerBagReference: headerParameterCodeBlock?.headerParameterBagReference,
                        queryBagReference: queryParameterCodeBlock?.queryParameterBagReference
                    })
                );
                writer.writeTextStatement(`${STATUS_CODE_VARIABLE_NAME} = ${RESPONSE_VARIABLE_NAME}->getStatusCode()`);
                const successResponseStatements = this.getEndpointSuccessResponseStatements({ endpoint, return_ });
                if (successResponseStatements != null) {
                    writer.writeNode(successResponseStatements);
                }
                writer.dedent();
                writer.write("} catch (");
                writer.writeNode(this.context.getClientExceptionInterfaceClassReference());
                writer.writeLine(" $e) {");
                writer.indent();
                writer.write("throw new ");
                writer.writeNode(this.context.getBaseApiExceptionClassReference());
                writer.writeTextStatement("($e->getMessage())");
                writer.dedent();
                writer.writeLine("}");

                writer.writeNode(this.getEndpointErrorHandling({ endpoint }));
            })
        });
    }

    private getBaseURLForEndpoint({ endpoint }: { endpoint: HttpEndpoint }): php.CodeBlock {
        return php.codeblock((writer) => {
            const rawClientFieldName = this.context.rawClient.getFieldName();
            const clientOptionsName = this.context.getClientOptionsName();
            const requestOptionName = this.context.getRequestOptionsName();
            const baseUrlOptionName = this.context.getBaseUrlOptionName();
            const defaultBaseUrl = this.context.getDefaultBaseUrlForEndpoint(endpoint);

            writer.write(
                `$this->${requestOptionName}['${baseUrlOptionName}'] ?? $this->${rawClientFieldName}->${clientOptionsName}['${baseUrlOptionName}'] ?? `
            );
            writer.writeNode(defaultBaseUrl);
        });
    }

    private getEndpointErrorHandling({ endpoint }: { endpoint: HttpEndpoint }): php.CodeBlock {
        return php.codeblock((writer) => {
            writer.write("throw new ");
            writer.writeNode(this.context.getBaseApiExceptionClassReference());
            writer.writeTextStatement(`("Error with status code " . ${STATUS_CODE_VARIABLE_NAME})`);
        });
    }

    private getEndpointSuccessResponseStatements({
        endpoint,
        return_
    }: {
        endpoint: HttpEndpoint;
        return_: php.Type | undefined;
    }): php.CodeBlock | undefined {
        if (endpoint.response?.body == null) {
            return php.codeblock((writer) => {
                writer.controlFlow(
                    "if",
                    php.codeblock(`${STATUS_CODE_VARIABLE_NAME} >= 200 && ${STATUS_CODE_VARIABLE_NAME} < 400`)
                );
                writer.writeLine("return;");
                writer.endControlFlow();
            });
        }
        const body = endpoint.response.body;
        return php.codeblock((writer) => {
            body._visit({
                streamParameter: () => this.context.logger.error("Stream parameters not supported"),
                fileDownload: () => this.context.logger.error("File download not supported"),
                json: (_reference) => {
                    writer.controlFlow(
                        "if",
                        php.codeblock(`${STATUS_CODE_VARIABLE_NAME} >= 200 && ${STATUS_CODE_VARIABLE_NAME} < 400`)
                    );
                    if (return_ == null) {
                        writer.write("return;");
                        writer.endControlFlow();
                        return;
                    }
                    writer.writeNodeStatement(this.getResponseBodyContent());
                    if (return_.isOptional()) {
                        writer.controlFlow("if", php.codeblock(`empty(${JSON_VARIABLE_NAME})`));
                        writer.writeTextStatement("return null");
                        writer.endControlFlow();
                    }
                    writer.write("return ");
                    writer.writeNode(this.decodeJsonResponse(return_));
                    writer.endControlFlow();
                    writer.write("} catch (");
                    writer.writeNode(this.context.getJsonExceptionClassReference());
                    writer.writeLine(" $e) {");
                    writer.indent();
                    writer.write("throw new ");
                    writer.writeNode(this.context.getBaseExceptionClassReference());
                    writer.writeTextStatement('("Failed to deserialize response", 0, $e)');
                    writer.dedent();
                },
                streaming: () => this.context.logger.error("Streaming not supported"),
                text: () => {
                    writer.controlFlow(
                        "if",
                        php.codeblock(`${STATUS_CODE_VARIABLE_NAME} >= 200 && ${STATUS_CODE_VARIABLE_NAME} < 400`)
                    );
                    writer.writeTextStatement(`return ${RESPONSE_VARIABLE_NAME}->getBody()->getContents()`);
                    writer.endControlFlow();
                },
                _other: () => undefined
            });
        });
    }

    private decodeJsonResponse(return_: php.Type | undefined): php.CodeBlock {
        if (return_ == null) {
            return php.codeblock("");
        }
        const arguments_: UnnamedArgument[] = [php.codeblock(JSON_VARIABLE_NAME)];
        const internalType = return_.underlyingType().internalType;
        switch (internalType.type) {
            case "reference":
                return this.decodeJsonResponseForClassReference({
                    arguments_,
                    classReference: internalType.value
                });
            case "array":
            case "map":
                return this.decodeJsonResponseForArray({
                    arguments_,
                    type: return_.underlyingType()
                });
            case "int":
            case "float":
            case "string":
            case "bool":
            case "date":
            case "dateTime":
            case "mixed":
                return this.decodeJsonResponseForPrimitive({
                    arguments_,
                    methodSuffix: upperFirst(internalType.type)
                });
            case "object":
            case "optional":
            case "typeDict":
                throw new Error(`Internal error; '${internalType.type}' type is not a supported return type`);
        }
    }

    private decodeJsonResponseForClassReference({
        arguments_,
        classReference
    }: {
        arguments_: Arguments;
        classReference: php.ClassReference;
    }): php.CodeBlock {
        return php.codeblock((writer) => {
            writer.writeNodeStatement(
                php.invokeMethod({
                    on: classReference,
                    method: "fromJson",
                    arguments_,
                    static_: true
                })
            );
        });
    }

    private decodeJsonResponseForArray({
        arguments_,
        type
    }: {
        arguments_: UnnamedArgument[];
        type: php.Type;
    }): php.CodeBlock {
        return php.codeblock((writer) => {
            writer.writeNode(
                php.invokeMethod({
                    on: this.context.getJsonDecoderClassReference(),
                    method: "decodeArray",
                    arguments_: [...arguments_, this.context.phpAttributeMapper.getArrayTypeAttributeArgument(type)],
                    static_: true
                })
            );
            writer.write(";");
            if (this.context.isMixedArray(type)) {
                writer.newLine();
                return;
            }
            writer.writeLine(" // @phpstan-ignore-line");
        });
    }

    private decodeJsonResponseForPrimitive({
        arguments_,
        methodSuffix
    }: {
        arguments_: Arguments;
        methodSuffix: string;
    }): php.CodeBlock {
        return php.codeblock((writer) => {
            writer.writeNodeStatement(
                php.invokeMethod({
                    on: this.context.getJsonDecoderClassReference(),
                    method: `decode${methodSuffix}`,
                    arguments_,
                    static_: true
                })
            );
        });
    }

    private getResponseBodyContent(): php.CodeBlock {
        return php.codeblock((writer) => {
            writer.write(`${JSON_VARIABLE_NAME} = ${RESPONSE_VARIABLE_NAME}->getBody()->getContents()`);
        });
    }
}
