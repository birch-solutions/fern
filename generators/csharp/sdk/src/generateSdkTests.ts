import { CSharpFile } from "@fern-api/csharp-codegen";
import { ExampleEndpointCall, HttpEndpoint, HttpService } from "@fern-fern/ir-sdk/api";
import { SdkGeneratorContext } from "./SdkGeneratorContext";
import { BaseMockServerTestGenerator } from "./test-generation/mock-server/BaseMockServerTestGenerator";
import { MockServerTestGenerator } from "./test-generation/mock-server/MockServerTestGenerator";

export function generateSdkTests({ context }: { context: SdkGeneratorContext }): CSharpFile[] {
    const files: CSharpFile[] = [];
    files.push(new BaseMockServerTestGenerator(context).generate());
    generateMockServerTests({ context, files });
    return files;
}

function generateMockServerTests({ context, files }: { context: SdkGeneratorContext; files: CSharpFile[] }) {
    if (context.customConfig["generate-mock-server-tests"] !== true) {
        return;
    }
    files.push(new BaseMockServerTestGenerator(context).generate());
    for (const [serviceId, service] of Object.entries(context.ir.services)) {
        if (shouldSkipMockServerTestsForService({ context, serviceId })) {
            continue;
        }
        for (const endpoint of service.endpoints) {
            if (shouldSkipMockServerTestForEndpoint({ endpoint })) {
                continue;
            }
            const allExamples = [...endpoint.autogeneratedExamples, ...endpoint.userSpecifiedExamples].map(
                (example) => example.example
            );
            // TODO: support other response body types
            const useableExamples = allExamples.filter((example): example is ExampleEndpointCall => {
                const response = example?.response;
                return response?.type === "ok" && response.value.type === "body";
            });
            if (useableExamples.length === 0) {
                continue;
            }
            const file = new MockServerTestGenerator(
                context,
                useableExamples,
                endpoint,
                serviceId,
                service.name.fernFilepath
            ).generate();
            files.push(file);
        }
    }
}

function shouldSkipMockServerTestForEndpoint({ endpoint }: { endpoint: HttpEndpoint }): boolean {
    const responseBodyType = endpoint.response?.body?.type;
    if (responseBodyType === "fileDownload" || responseBodyType === "streamParameter") {
        return true;
    }
    if (endpoint.response?.body?.type === "json" && endpoint.response.body.value.type === "nestedPropertyAsResponse") {
        return true;
    }
    if (endpoint.requestBody?.type === "bytes" || endpoint.requestBody?.type === "fileUpload") {
        return true;
    }
    return false;
}

function shouldSkipMockServerTestsForService({
    serviceId,
    context
}: {
    serviceId: string;
    context: SdkGeneratorContext;
}): boolean {
    // skip grpc clients for now
    if (context.getGrpcClientInfoForServiceId(serviceId) != null) {
        return true;
    }
    // don't support base properties on unions
    if (
        Object.values(context.ir.types).find(
            (typeReference) => typeReference.shape.type === "union" && typeReference.shape.baseProperties.length > 0
        )
    ) {
        return true;
    }
    // snippets don't support setting environment
    if (
        context.ir.environments?.environments.type === "multipleBaseUrls" &&
        context.ir.environments.defaultEnvironment == null
    ) {
        return true;
    }
    return false;
}
