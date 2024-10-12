import { FernGeneratorCli } from "@fern-fern/generator-cli-sdk";
import { FernGeneratorExec } from "@fern-fern/generator-exec-sdk";
import {
    EndpointId,
    FeatureId,
    FernFilepath,
    HttpEndpoint,
    HttpService,
    ReadmeConfig,
    SdkRequestWrapper,
    ServiceId
} from "@fern-fern/ir-sdk/api";
import { getTextOfTsNode, NpmPackage } from "@fern-typescript/commons";
import { SdkContext } from "@fern-typescript/contexts";
import { code, Code } from "ts-poet";
import { AbstractReadmeSnippetBuilder } from "@fern-api/generator-commons";

interface EndpointWithFilepath {
    endpoint: HttpEndpoint;
    fernFilepath: FernFilepath;
}

interface EndpointWithRequest {
    endpoint: HttpEndpoint;
    requestWrapper: SdkRequestWrapper;
}

export class ReadmeSnippetBuilder extends AbstractReadmeSnippetBuilder {
    private static ABORTING_REQUESTS_FEATURE_ID: FernGeneratorCli.FeatureId = "ABORTING_REQUESTS";
    private static EXCEPTION_HANDLING_FEATURE_ID: FernGeneratorCli.FeatureId = "EXCEPTION_HANDLING";
    private static REQUEST_AND_RESPONSE_TYPES_FEATURE_ID: FernGeneratorCli.FeatureId = "REQUEST_AND_RESPONSE_TYPES";
    private static RUNTIME_COMPATIBILITY_FEATURE_ID: FernGeneratorCli.FeatureId = "RUNTIME_COMPATIBILITY";
    private static STREAMING_FEATURE_ID: FernGeneratorCli.FeatureId = "STREAMING";
    private static PAGINATION_FEATURE_ID: FernGeneratorCli.FeatureId = "PAGINATION";

    private readonly context: SdkContext;
    private readonly isPaginationEnabled: boolean;
    private readonly endpoints: Record<EndpointId, EndpointWithFilepath> = {};
    private readonly snippets: Record<EndpointId, string> = {};
    private readonly defaultEndpointId: EndpointId;
    private readonly rootPackageName: string;
    private readonly rootClientConstructorName: string;
    private readonly clientVariableName: string;
    private readonly genericAPISdkErrorName: string;

    constructor({
        context,
        endpointSnippets
    }: {
        context: SdkContext;
        endpointSnippets: FernGeneratorExec.Endpoint[];
    }) {
        super({ endpointSnippets });
        this.context = context;
        this.isPaginationEnabled = context.config.generatePaginatedClients ?? false;

        this.endpoints = this.buildEndpoints();
        this.snippets = this.buildSnippets(endpointSnippets);
        this.defaultEndpointId =
            this.context.ir.readmeConfig?.defaultEndpoint != null
                ? this.context.ir.readmeConfig.defaultEndpoint
                : this.getDefaultEndpointId();
        this.rootPackageName = this.getRootPackageName();
        this.rootClientConstructorName = this.getRootClientConstructorName();
        this.clientVariableName = this.getClientVariableName();
        this.genericAPISdkErrorName = this.getGenericApiSdkErrorName();
    }

    public buildReadmeSnippets(): Record<FernGeneratorCli.FeatureId, string[]> {
        const snippets: Record<FernGeneratorCli.FeatureId, string[]> = {};
        snippets[FernGeneratorCli.StructuredFeatureId.Usage] = this.buildUsageSnippets();
        snippets[FernGeneratorCli.StructuredFeatureId.Retries] = this.buildRetrySnippets();
        snippets[FernGeneratorCli.StructuredFeatureId.Timeouts] = this.buildTimeoutSnippets();
        snippets[ReadmeSnippetBuilder.ABORTING_REQUESTS_FEATURE_ID] = this.buildAbortSignalSnippets();
        snippets[ReadmeSnippetBuilder.EXCEPTION_HANDLING_FEATURE_ID] = this.buildExceptionHandlingSnippets();
        snippets[ReadmeSnippetBuilder.RUNTIME_COMPATIBILITY_FEATURE_ID] = this.buildRuntimeCompatibilitySnippets();
        snippets[ReadmeSnippetBuilder.STREAMING_FEATURE_ID] = this.buildStreamingSnippets();

        if (this.isPaginationEnabled) {
            snippets[ReadmeSnippetBuilder.PAGINATION_FEATURE_ID] = this.buildPaginationSnippets();
        }

        const requestAndResponseTypesSnippets = this.buildRequestAndResponseTypesSnippets();
        if (requestAndResponseTypesSnippets != null) {
            snippets[ReadmeSnippetBuilder.REQUEST_AND_RESPONSE_TYPES_FEATURE_ID] = requestAndResponseTypesSnippets;
        }

        return snippets;
    }

    private buildSnippetsForFeature(featureId: FernGeneratorCli.feature.FeatureId): string[] {
        const usageEndpointIds = this.getEndpointIdsForFeature(featureId);
        if (usageEndpointIds != null) {
            return usageEndpointIds.map((endpointId) => this.getSnippetForEndpointId(endpointId));
        }
        return [this.getSnippetForEndpointId(this.defaultEndpointId)];
    }

    private buildStreamingSnippets(): string[] {
        return this.buildSnippetsForFeature(FernGeneratorCli.StructuredFeatureId.Streaming);
    }

    private buildPaginationSnippets(): string[] {
        return this.buildSnippetsForFeature(FernGeneratorCli.StructuredFeatureId.Pagination);
    }

    private buildUsageSnippets(): string[] {
        return this.buildSnippetsForFeature(FernGeneratorCli.StructuredFeatureId.Usage);
    }

    private buildExceptionHandlingSnippets(): string[] {
        const exceptionHandlingEndpoints = this.getEndpointsForFeature(
            ReadmeSnippetBuilder.EXCEPTION_HANDLING_FEATURE_ID
        );
        return exceptionHandlingEndpoints.map((exceptionHandlingEndpoint) =>
            this.writeCode(
                code`
import { ${this.genericAPISdkErrorName} } from "${this.rootPackageName}";

try {
    await ${this.getMethodCall(exceptionHandlingEndpoint)}(...);
} catch (err) {
    if (err instanceof ${this.genericAPISdkErrorName}) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
    }
}
`
            )
        );
    }

    private buildRequestAndResponseTypesSnippets(): string[] | undefined {
        const endpointWithRequest = this.getEndpointWithRequest();
        if (endpointWithRequest == null) {
            // There aren't any endpoints with in-lined request types, so we skip
            // this section altogether.
            return undefined;
        }
        const requestTypeName = `${this.context.namespaceExport}.${endpointWithRequest.requestWrapper.wrapperName.pascalCase.unsafeName}`;
        return [
            this.writeCode(
                code`
import { ${this.context.namespaceExport} } from "${this.rootPackageName}";

const request: ${requestTypeName} = {
    ...
};
`
            )
        ];
    }

    private buildRetrySnippets(): string[] {
        const retryEndpoints = this.getEndpointsForFeature(FernGeneratorCli.StructuredFeatureId.Retries);
        return retryEndpoints.map((retryEndpoint) =>
            this.writeCode(
                code`
const response = await ${this.getMethodCall(retryEndpoint)}(..., {
    maxRetries: 0 // override maxRetries at the request level
});
`
            )
        );
    }

    private buildTimeoutSnippets(): string[] {
        const timeoutEndpoints = this.getEndpointsForFeature(FernGeneratorCli.StructuredFeatureId.Timeouts);
        return timeoutEndpoints.map((timeoutEndpoint) =>
            this.writeCode(
                code`
const response = await ${this.getMethodCall(timeoutEndpoint)}(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
`
            )
        );
    }

    private buildAbortSignalSnippets(): string[] {
        const abortSignalEndpoints = this.getEndpointsForFeature(ReadmeSnippetBuilder.ABORTING_REQUESTS_FEATURE_ID);
        return abortSignalEndpoints.map((abortSignalEndpoint) =>
            this.writeCode(
                code`
const controller = new AbortController();
const response = await ${this.getMethodCall(abortSignalEndpoint)}(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
`
            )
        );
    }

    private buildRuntimeCompatibilitySnippets(): string[] {
        const snippet = this.writeCode(
            code`
import { ${this.rootClientConstructorName} } from "${this.rootPackageName}";

const ${this.clientVariableName} = new ${this.rootClientConstructorName}({
    ...
    fetcher: // provide your implementation here
});
`
        );
        return [snippet];
    }

    private getEndpointsForFeature(featureId: FeatureId): EndpointWithFilepath[] {
        const endpointIds = this.getEndpointIdsForFeature(featureId);
        return endpointIds != null ? this.getEndpoints(endpointIds) : this.getEndpoints([this.defaultEndpointId]);
    }

    private getEndpointIdsForFeature(featureId: FeatureId): EndpointId[] | undefined {
        return this.context.ir.readmeConfig?.features?.[this.getFeatureKey(featureId)];
    }

    private getEndpoints(endpointIds: EndpointId[]): EndpointWithFilepath[] {
        return endpointIds.map((endpointId) => {
            const endpoint = this.endpoints[endpointId];
            if (endpoint == null) {
                throw new Error(`Internal error; missing endpoint ${endpointId}`);
            }
            return endpoint;
        });
    }

    private buildEndpoints(): Record<EndpointId, EndpointWithFilepath> {
        const endpoints: Record<EndpointId, EndpointWithFilepath> = {};
        for (const service of Object.values(this.context.ir.services)) {
            for (const endpoint of service.endpoints) {
                endpoints[endpoint.id] = {
                    endpoint,
                    fernFilepath: service.name.fernFilepath
                };
            }
        }
        return endpoints;
    }

    private buildSnippets(endpointSnippets: FernGeneratorExec.Endpoint[]): Record<EndpointId, string> {
        const snippets: Record<EndpointId, string> = {};
        for (const endpointSnippet of Object.values(endpointSnippets)) {
            if (endpointSnippet.id.identifierOverride == null) {
                throw new Error("Internal error; snippets must define the endpoint id to generate README.md");
            }
            snippets[endpointSnippet.id.identifierOverride] = this.getEndpointSnippetString(endpointSnippet);
        }
        return snippets;
    }

    private getSnippetForEndpointId(endpointId: EndpointId): string {
        const snippet = this.snippets[endpointId];
        if (snippet == null) {
            throw new Error(`Internal error; missing snippet for endpoint ${endpointId}`);
        }
        return snippet;
    }

    private getEndpointWithRequest(): EndpointWithRequest | undefined {
        for (const endpointWithFilepath of Object.values(this.endpoints)) {
            if (endpointWithFilepath.endpoint.sdkRequest?.shape?.type === "wrapper") {
                return {
                    endpoint: endpointWithFilepath.endpoint,
                    requestWrapper: endpointWithFilepath.endpoint.sdkRequest.shape
                };
            }
        }
        return undefined;
    }

    private getEndpointSnippetString(endpoint: FernGeneratorExec.Endpoint): string {
        if (endpoint.snippet.type !== "typescript") {
            throw new Error(`Internal error; expected TypeScript snippet but got: ${endpoint.snippet.type}`);
        }
        return endpoint.snippet.client;
    }

    private getRootPackageName(): string {
        const packageName = this.context.npmPackage?.packageName;
        if (packageName == null || packageName.length === 0) {
            return this.context.namespaceExport;
        }
        return packageName;
    }

    private getRootClientConstructorName(): string {
        return getTextOfTsNode(this.context.sdkClientClass.getReferenceToClientClass({ isRoot: true }).getTypeNode());
    }

    private getClientVariableName(): string {
        return getTextOfTsNode(this.context.sdkInstanceReferenceForSnippet);
    }

    private getGenericApiSdkErrorName(): string {
        const errorName = getTextOfTsNode(
            this.context.genericAPISdkError.getReferenceToGenericAPISdkError().getEntityName()
        );
        const split = errorName.split(".");
        return split[1] ?? errorName;
    }

    private getMethodCall(endpoint: EndpointWithFilepath): string {
        return `${this.getAccessFromRootClient(endpoint.fernFilepath)}.${this.getEndpointMethodName(
            endpoint.endpoint
        )}`;
    }

    private getAccessFromRootClient(fernFilepath: FernFilepath): string {
        const clientAccessParts = fernFilepath.allParts.map((part) => part.camelCase.unsafeName);
        return clientAccessParts.length > 0
            ? `${this.clientVariableName}.${clientAccessParts.join(".")}`
            : this.clientVariableName;
    }

    private getEndpointMethodName(endpoint: HttpEndpoint): string {
        return endpoint.name.camelCase.unsafeName;
    }

    private writeCode(code: Code): string {
        return code.toString({ dprintOptions: { indentWidth: 4 } }).trim() + "\n";
    }
}
