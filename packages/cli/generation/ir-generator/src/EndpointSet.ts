import { generatorsYml } from "@fern-api/configuration";
import { HttpEndpoint, HttpService, ServiceId } from "@fern-api/ir-sdk";
import urlJoin from "url-join";

// EndpointSet is a set of all endpoints contained within the IR. It is used to resolve endpoints from
// their fully-qualified path (e.g. "GET /users"), which is the syntax used in the generators configuration.
//
// Note that this is different than the EndpointResolver, which is used to resolve endpoints within a Fern
// definition based on the relative filepath (e.g. "auth.getToken").
export class EndpointSet {
    private readonly endpoints: Record<string, HttpEndpoint> = {};

    constructor(services: Record<ServiceId, HttpService>) {
        this.endpoints = this.buildEndpoints(services);
    }

    public getEndpointForReadme(readmeEndpoint: generatorsYml.ReadmeEndpointSchema): HttpEndpoint | undefined {
        const readmeEndpointObject = getReadmeEndpointObject({ endpoint: readmeEndpoint });
        const endpointKey = this.getEndpointKeyForReadmeEndpoint(readmeEndpointObject);
        return this.endpoints[endpointKey];
    }

    public getEndpointForReadmeOrThrow(readmeEndpoint: generatorsYml.ReadmeEndpointSchema): HttpEndpoint {
        const endpoint = this.getEndpointForReadme(readmeEndpoint);
        if (endpoint == null) {
            throw new Error(`Endpoint not found for ${JSON.stringify(readmeEndpoint)}`);
        }
        return endpoint;
    }

    private buildEndpoints(services: Record<ServiceId, HttpService>): Record<string, HttpEndpoint> {
        const endpoints: Record<string, HttpEndpoint> = {};
        for (const service of Object.values(services)) {
            for (const endpoint of service.endpoints) {
                endpoints[this.getEndpointKeyForHttpEndpoint(endpoint)] = endpoint;
            }
        }
        return endpoints;
    }

    private getEndpointKeyForReadmeEndpoint(endpoint: generatorsYml.ReadmeEndpointObjectSchema) {
        return this.getEndpointKey({
            method: endpoint.method,
            path: endpoint.path,
            stream: endpoint.stream ?? false
        });
    }

    private getEndpointKeyForHttpEndpoint(endpoint: HttpEndpoint) {
        return this.getEndpointKey({
            method: endpoint.method,
            path: getFullPathForEndpoint(endpoint),
            stream: endpoint.response?.body?.type === "streaming"
        });
    }

    private getEndpointKey({ method, path, stream }: { method: string; path: string; stream: boolean }) {
        // Use a delimiter not available in the input set to prevent collisions.
        return `${method}|${path}|${stream}`;
    }
}

function getFullPathForEndpoint(endpoint: HttpEndpoint): string {
    let url = "";
    if (endpoint.fullPath.head.length > 0) {
        url = urlJoin(url, endpoint.fullPath.head);
    }
    for (const part of endpoint.fullPath.parts) {
        url = urlJoin(url, "{" + part.pathParameter + "}");
        if (part.tail.length > 0) {
            url = urlJoin(url, part.tail);
        }
    }
    return url.startsWith("/") ? url : `/${url}`;
}

function getReadmeEndpointObject({
    endpoint
}: {
    endpoint: generatorsYml.ReadmeEndpointSchema;
}): generatorsYml.ReadmeEndpointObjectSchema {
    if (typeof endpoint === "string") {
        const split = endpoint.split(" ");
        if (split.length !== 2 || split[0] == null || split[1] == null) {
            throw new Error(`invalid endpoint string: ${endpoint}`);
        }
        return {
            method: split[0],
            path: split[1]
        };
    }
    return endpoint;
}
