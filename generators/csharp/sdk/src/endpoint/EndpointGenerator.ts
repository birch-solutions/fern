import { csharp } from "@fern-api/csharp-codegen";
import { HttpEndpoint, ServiceId } from "@fern-fern/ir-sdk/api";
import { GrpcClientInfo } from "../grpc/GrpcClientInfo";
import { SdkGeneratorContext } from "../SdkGeneratorContext";
import { AbstractEndpointGenerator } from "./AbstractEndpointGenerator";
import { GrpcEndpointGenerator } from "./grpc/GrpcEndpointGenerator";
import { HttpEndpointGenerator } from "./http/HttpEndpointGenerator";
import { HttpPagerEndpointGenerator } from "./http/HttpPagerEndpointGenerator";
import { RawClient } from "./http/RawClient";

export class EndpointGenerator extends AbstractEndpointGenerator {
    private http: HttpEndpointGenerator;
    private pager: HttpPagerEndpointGenerator;
    private grpc: GrpcEndpointGenerator;

    public constructor({ context }: { context: SdkGeneratorContext }) {
        super({ context });
        this.http = new HttpEndpointGenerator({ context });
        this.pager = new HttpPagerEndpointGenerator({ context });
        this.grpc = new GrpcEndpointGenerator({ context });
    }

    public generate({
        serviceId,
        endpoint,
        rawClientReference,
        rawGrpcClientReference,
        rawClient,
        grpcClientInfo
    }: {
        serviceId: ServiceId;
        endpoint: HttpEndpoint;
        rawClientReference: string;
        rawGrpcClientReference: string;
        rawClient: RawClient;
        grpcClientInfo: GrpcClientInfo | undefined;
    }): csharp.Method[] {
        const methods: csharp.Method[] = [];
        // If the service is a grpc service, grpcClientInfo will not be null or undefined,
        // so any endpoint will be generated as a grpc endpoint, unless the transport is overriden by setting type to http
        if (grpcClientInfo != null && endpoint.transport?.type !== "http") {
            methods.push(
                this.grpc.generate({
                    serviceId,
                    endpoint,
                    rawGrpcClientReference,
                    grpcClientInfo
                })
            );
        } else {
            methods.push(
                this.http.generate({
                    serviceId,
                    endpoint,
                    rawClientReference,
                    rawClient
                })
            );
            if (endpoint.pagination) {
                methods.push(
                    this.pager.generate({
                        serviceId,
                        endpoint,
                        rawClientReference,
                        rawClient
                    })
                );
            }
        }
        return methods;
    }
}
