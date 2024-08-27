import { FernGeneratorExec } from "@fern-fern/generator-exec-sdk";
import { Endpoint } from "@fern-fern/generator-exec-sdk/api";
import { ExampleEndpointCall, HttpEndpoint } from "@fern-fern/ir-sdk/api";
import { SdkGeneratorContext } from "../../SdkGeneratorContext";
import { GrpcEndpointGenerator } from "../grpc/GrpcEndpointGenerator";
import { HttpEndpointGenerator } from "../http/HttpEndpointGenerator";
import urlJoin from "url-join";
import { RootClientGenerator } from "../../root-client/RootClientGenerator";
import { SingleEndpointSnippet } from "./EndpointSnippetsGenerator";

export class SnippetJsonGenerator {
    private readonly context: SdkGeneratorContext;
    private readonly rootClientGenerator: RootClientGenerator;
    constructor({ context }: { context: SdkGeneratorContext }) {
        this.context = context;
        this.rootClientGenerator = new RootClientGenerator(context);
    }

    public generate(): FernGeneratorExec.Snippets | undefined {
        const rootClientSnippet = this.rootClientGenerator
            .generateExampleClientInstantiationSnippet()
            .toFormattedSnippet({
                allNamespaceSegments: this.context.getAllNamespaceSegments(),
                allTypeClassReferences: this.context.getAllTypeClassReferences(),
                rootNamespace: this.context.getNamespace(),
                customConfig: this.context.customConfig
            });
        const rootClientImportList = rootClientSnippet.imports?.split("\n") ?? [];

        function getCsharpSnippet(endpointSnippet: SingleEndpointSnippet): string {
            const snippetImportList = endpointSnippet.imports?.split("\n") ?? [];
            const uniqueOrderedImports = Array.from(new Set([...rootClientImportList, ...snippetImportList]))
                .filter((importString) => importString !== "")
                .sort();
            return `${uniqueOrderedImports.join("\n")}\n\nvar client = ${rootClientSnippet.body}${
                endpointSnippet.endpointCall
            }`;
        }

        const endpoints: FernGeneratorExec.Endpoint[] = [];
        for (const [_, service] of Object.entries(this.context.ir.services)) {
            for (const httpEndpoint of service.endpoints) {
                for (const endpointSnippet of this.getSnippetsForEndpoint(httpEndpoint.id)) {
                    const csharpSnippet = getCsharpSnippet(endpointSnippet);
                    const endpoint: Endpoint = {
                        exampleIdentifier: endpointSnippet?.exampleIdentifier,
                        id: {
                            path: FernGeneratorExec.EndpointPath(this.getFullPathForEndpoint(httpEndpoint)),
                            method: httpEndpoint.method,
                            identifierOverride: httpEndpoint.id
                        },
                        // TODO: Use csharp type when available
                        snippet: FernGeneratorExec.EndpointSnippet.typescript({
                            client: csharpSnippet
                        })
                    };
                    endpoints.push(endpoint);
                }
            }
        }
        return {
            types: {},
            endpoints
        };
    }

    private getSnippetsForEndpoint(endpointId: string): SingleEndpointSnippet[] {
        const snippetsForEndpoint = this.context.snippetGenerator.getSnippetsForEndpoint(endpointId);
        if (snippetsForEndpoint == null) {
            return [];
        }
        const { autogenerated, userSpecified } = snippetsForEndpoint;
        return userSpecified.length > 0 ? [...userSpecified] : autogenerated[0] != null ? [autogenerated[0]] : [];
    }

    // copied from ts generator:
    // TODO(dsinghvi): HACKHACK Move this to IR
    private getFullPathForEndpoint(endpoint: HttpEndpoint): string {
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
}
