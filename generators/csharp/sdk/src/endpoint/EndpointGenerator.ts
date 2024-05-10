import { csharp } from "@fern-api/csharp-codegen";
import { HttpEndpoint, ServiceId } from "@fern-fern/ir-sdk/api";
import { SdkGeneratorContext } from "../SdkGeneratorContext";
import { RawClient } from "./RawClient";
import { EndpointRequest } from "./request/EndpointRequest";
import { EndpointRequestFactory } from "./request/EndpointRequestFactory";

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

const REQUEST_PARAMETER_NAME = "request";
const RESPONSE_VARIABLE_NAME = "response";
const RESPONSE_BODY_VARIABLE_NAME = "responseBody";

export class EndpointGenerator {
    private context: SdkGeneratorContext;
    private rawClient: RawClient;

    public constructor(context: SdkGeneratorContext, rawClient: RawClient) {
        this.context = context;
        this.rawClient = rawClient;
    }

    public generate({
        serviceId,
        endpoint,
        rawClientReference
    }: {
        serviceId: ServiceId;
        endpoint: HttpEndpoint;
        rawClientReference: string;
    }): csharp.Method {
        const { parameters: nonEndpointParameters, pathParameterReferences } = this.getNonEndpointParameters({
            endpoint,
            serviceId
        });
        const parameters = [...nonEndpointParameters];
        const request = this.getEndpointRequest({ endpoint, serviceId });
        if (request != null) {
            parameters.push(
                csharp.parameter({
                    type: request.getParameterType(),
                    name: request.getParameterName()
                })
            );
        }
        const return_ = this.getEndpointReturnType({ endpoint });
        return csharp.method({
            name: this.context.getEndpointMethodName(endpoint),
            access: "public",
            isAsync: true,
            parameters,
            summary: endpoint.docs,
            return_,
            body: csharp.codeblock((writer) => {
                const queryParameterCodeBlock = request?.getQueryParameterCodeBlock();
                if (queryParameterCodeBlock != null) {
                    queryParameterCodeBlock.code.write(writer);
                }
                const headerParameterCodeBlock = request?.getHeaderParameterCodeBlock();
                if (headerParameterCodeBlock != null) {
                    headerParameterCodeBlock.code.write(writer);
                }
                const requestBodyCodeBlock = request?.getRequestBodyCodeBlock();
                writer.write(`var ${RESPONSE_VARIABLE_NAME} = `);
                writer.writeNodeStatement(
                    this.rawClient.makeRequest({
                        clientReference: rawClientReference,
                        endpoint,
                        bodyReference: requestBodyCodeBlock?.requestBodyReference,
                        pathParameterReferences,
                        headerBagReference: headerParameterCodeBlock?.headerParameterBagReference,
                        queryBagReference: queryParameterCodeBlock?.queryParameterBagReference
                    })
                );
                const responseStatements = this.getEndpointResponseStatements({ endpoint });
                if (responseStatements != null) {
                    writer.writeNode(responseStatements);
                }
            })
        });
    }

    private getEndpointRequest({
        endpoint,
        serviceId
    }: {
        endpoint: HttpEndpoint;
        serviceId: ServiceId;
    }): EndpointRequest | undefined {
        if (endpoint.sdkRequest == null) {
            return undefined;
        }
        return EndpointRequestFactory.create({
            context: this.context,
            endpoint,
            serviceId,
            sdkRequest: endpoint.sdkRequest
        });
    }

    private getNonEndpointParameters({ endpoint, serviceId }: { endpoint: HttpEndpoint; serviceId: ServiceId }): {
        parameters: csharp.Parameter[];
        pathParameterReferences: Record<string, string>;
    } {
        const parameters: csharp.Parameter[] = [];
        const pathParameterReferences: Record<string, string> = {};
        for (const pathParam of endpoint.pathParameters) {
            const parameterName = pathParam.name.camelCase.safeName;
            pathParameterReferences[pathParam.name.originalName] = parameterName;
            parameters.push(
                csharp.parameter({
                    docs: pathParam.docs,
                    name: parameterName,
                    type: this.context.csharpTypeMapper.convert({ reference: pathParam.valueType })
                })
            );
        }
        return {
            parameters,
            pathParameterReferences
        };
    }

    private getEndpointReturnType({ endpoint }: { endpoint: HttpEndpoint }): csharp.Type | undefined {
        if (endpoint.response == null) {
            return undefined;
        }
        return endpoint.response._visit({
            fileDownload: () => undefined,
            json: (reference) => {
                return this.context.csharpTypeMapper.convert({ reference: reference.responseBodyType });
            },
            streaming: () => undefined,
            text: () => undefined,
            _other: () => undefined
        });
    }

    private getEndpointResponseStatements({ endpoint }: { endpoint: HttpEndpoint }): csharp.CodeBlock | undefined {
        if (endpoint.response == null) {
            return undefined;
        }
        return endpoint.response._visit({
            fileDownload: () => undefined,
            json: (reference) => {
                const astType = this.context.csharpTypeMapper.convert({ reference: reference.responseBodyType });
                return csharp.codeblock((writer) => {
                    writer.writeTextStatement(
                        `string ${RESPONSE_BODY_VARIABLE_NAME} = await ${RESPONSE_VARIABLE_NAME}.Raw.Content.ReadAsStringAsync()`
                    );
                    writer.writeLine(
                        `if (${RESPONSE_BODY_VARIABLE_NAME}.StatusCode >= 200 && ${RESPONSE_BODY_VARIABLE_NAME}.StatusCode < 400) {`
                    );
                    writer.writeNewLineIfLastLineNot();

                    // Deserialize the response as json
                    writer.write(`return `);
                    writer.writeNode(
                        csharp.classReference({
                            name: "JsonSerializer",
                            namespace: "System.Text.Json"
                        })
                    );
                    writer.write(`.Deserialize<`);
                    writer.writeNode(astType);
                    writer.writeLine(`>(${RESPONSE_BODY_VARIABLE_NAME});`);

                    writer.indent();
                    writer.writeLine("}");
                    writer.dedent();

                    writer.writeLine(`throw new Exception();`);
                });
            },
            streaming: () => undefined,
            text: () => undefined,
            _other: () => undefined
        });
    }
}
