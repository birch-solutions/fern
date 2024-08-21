import { csharp } from "@fern-api/csharp-codegen";
import { HttpEndpoint, ServiceId } from "@fern-fern/ir-sdk/api";
import { GrpcClientInfo } from "../../grpc/GrpcClientInfo";
import { SdkGeneratorContext } from "../../SdkGeneratorContext";
import { EndpointRequest } from "../request/EndpointRequest";
import { RESPONSE_VARIABLE_NAME } from "../utils/constants";
import { getEndpointRequest } from "../utils/getEndpointRequest";
import { getEndpointReturnType } from "../utils/getEndpointReturnType";

export declare namespace GrpcEndpointGenerator {
    export interface Args {
        serviceId: ServiceId;
        endpoint: HttpEndpoint;
        rawGrpcClientReference: string;
        grpcClientInfo: GrpcClientInfo;
    }
}

export class GrpcEndpointGenerator {
    private context: SdkGeneratorContext;

    public constructor({ context }: { context: SdkGeneratorContext }) {
        this.context = context;
    }

    public generate({
        serviceId,
        endpoint,
        rawGrpcClientReference,
        grpcClientInfo
    }: GrpcEndpointGenerator.Args): csharp.Method {
        const parameters: csharp.Parameter[] = [];
        const request = getEndpointRequest({ context: this.context, endpoint, serviceId });
        if (request != null) {
            parameters.push(
                csharp.parameter({
                    type: request.getParameterType(),
                    name: request.getParameterName()
                })
            );
        }
        parameters.push(
            csharp.parameter({
                type: csharp.Type.optional(csharp.Type.reference(this.context.getGrpcRequestOptionsClassReference())),
                name: this.context.getRequestOptionsParameterName(),
                initializer: "null"
            })
        );
        parameters.push(
            csharp.parameter({
                type: csharp.Type.reference(this.context.getCancellationTokenClassReference()),
                name: this.context.getCancellationTokenParameterName(),
                initializer: "default"
            })
        );
        const return_ = getEndpointReturnType({ context: this.context, endpoint });
        return csharp.method({
            name: this.context.getEndpointMethodName(endpoint),
            access: "public",
            isAsync: true,
            parameters,
            summary: endpoint.docs,
            return_,
            body: this.getEndpointMethodBody({ endpoint, rawGrpcClientReference, grpcClientInfo, request, return_ })
        });
    }

    private getEndpointMethodBody({
        endpoint,
        rawGrpcClientReference,
        grpcClientInfo,
        request,
        return_
    }: {
        endpoint: HttpEndpoint;
        rawGrpcClientReference: string;
        grpcClientInfo: GrpcClientInfo;
        request: EndpointRequest | undefined;
        return_: csharp.Type | undefined;
    }): csharp.CodeBlock {
        return csharp.codeblock((writer) => {
            writer.writeLine("try");
            writer.writeLine("{");
            writer.indent();
            writer.writeNodeStatement(this.createCallOptions({ rawGrpcClientReference }));
            writer.writeNodeStatement(
                this.createCall({
                    endpoint,
                    request,
                    grpcClientInfo
                })
            );
            writer.writeNodeStatement(
                this.invokeCallAndDecodeResponse({
                    return_
                })
            );
            writer.dedent();
            writer.writeLine("}");

            writer.write("catch (");
            writer.writeNode(this.getRpcExceptionClassReference());
            writer.writeLine(" rpc)");
            writer.writeLine("{");
            writer.indent();
            writer.writeNodeStatement(this.handleRpcException());
            writer.dedent();
            writer.writeLine("}");

            writer.writeLine("catch (Exception e)");
            writer.writeLine("{");
            writer.writeNodeStatement(this.handleException());
            writer.writeLine("}");
        });
    }

    private createCallOptions({ rawGrpcClientReference }: { rawGrpcClientReference: string }): csharp.CodeBlock {
        return csharp.codeblock((writer) => {
            writer.write("var callOptions = ");
            writer.writeNodeStatement(
                csharp.invokeMethod({
                    on: csharp.codeblock(rawGrpcClientReference),
                    method: "CreateCallOptions",
                    arguments_: [
                        csharp.codeblock((writer) => {
                            writer.write(`${this.context.getRequestOptionsParameterName()} ?? `);
                            writer.writeNode(
                                csharp.instantiateClass({
                                    classReference: this.context.getGrpcRequestOptionsClassReference(),
                                    arguments_: []
                                })
                            );
                        }),
                        csharp.codeblock(this.context.getCancellationTokenParameterName())
                    ]
                })
            );
        });
    }

    private createCall({
        endpoint,
        request,
        grpcClientInfo
    }: {
        endpoint: HttpEndpoint;
        request: EndpointRequest | undefined;
        grpcClientInfo: GrpcClientInfo;
    }): csharp.CodeBlock {
        const mapToProtoRequest =
            request != null ? this.getToProtoMethodInvocation({ request }) : csharp.codeblock("null");
        return csharp.codeblock((writer) => {
            writer.write("var call = ");
            writer.writeNode(
                csharp.invokeMethod({
                    on: csharp.codeblock(grpcClientInfo.privatePropertyName),
                    method: this.context.getEndpointMethodName(endpoint),
                    arguments_: [mapToProtoRequest, csharp.codeblock("callOptions")]
                })
            );
        });
    }

    private invokeCallAndDecodeResponse({ return_ }: { return_: csharp.Type | undefined }): csharp.CodeBlock {
        const decodeResponse = return_ != null ? this.getFromProtoMethodInvocation({ return_ }) : csharp.codeblock("");
        return csharp.codeblock((writer) => {
            writer.write("var ");
            writer.write(RESPONSE_VARIABLE_NAME);
            writer.writeLine(" = await call.ConfigureAwait(false);");
            writer.write("return ");
            writer.writeNode(decodeResponse);
        });
    }

    private handleRpcException(): csharp.CodeBlock {
        return csharp.codeblock((writer) => {
            writer.writeLine("var statusCode = (int)rpc.StatusCode;");
            writer.write("throw ");
            writer.writeNode(
                csharp.instantiateClass({
                    classReference: this.context.getBaseApiExceptionClassReference(),
                    arguments_: [
                        csharp.codeblock('$"Error with gRPC status code {statusCode}"'),
                        csharp.codeblock("statusCode"),
                        csharp.codeblock("rpc.Message")
                    ]
                })
            );
        });
    }

    private handleException(): csharp.CodeBlock {
        return csharp.codeblock((writer) => {
            writer.write("throw ");
            writer.writeNode(
                csharp.instantiateClass({
                    classReference: this.context.getBaseExceptionClassReference(),
                    arguments_: [csharp.codeblock('"Error"'), csharp.codeblock("e")]
                })
            );
        });
    }

    private getToProtoMethodInvocation({ request }: { request: EndpointRequest }): csharp.CodeBlock {
        return csharp.codeblock((writer) => {
            writer.writeNode(
                csharp.invokeMethod({
                    on: csharp.codeblock(request.getParameterName()),
                    method: "ToProto",
                    arguments_: []
                })
            );
        });
    }

    private getFromProtoMethodInvocation({ return_ }: { return_: csharp.Type }): csharp.CodeBlock {
        return csharp.codeblock((writer) => {
            writer.writeNode(
                csharp.invokeMethod({
                    on: return_,
                    method: "FromProto",
                    arguments_: [csharp.codeblock(RESPONSE_VARIABLE_NAME)]
                })
            );
        });
    }

    private getRpcExceptionClassReference(): csharp.ClassReference {
        return csharp.classReference({
            name: "RpcException",
            namespace: "Grpc.Core"
        });
    }
}
