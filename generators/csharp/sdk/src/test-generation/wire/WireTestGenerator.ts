import { csharp, CSharpFile, FileGenerator } from "@fern-api/csharp-codegen";
import {
    ExampleEndpointCall,
    ExampleTypeReference,
    FernFilepath,
    HttpEndpoint,
    ServiceId
} from "@fern-fern/ir-sdk/api";
import { SdkCustomConfigSchema } from "../../SdkCustomConfig";
import { SdkGeneratorContext, WIRE_TEST_FOLDER } from "../../SdkGeneratorContext";
import { join, RelativeFilePath } from "@fern-api/fs-utils";
import { HttpEndpointGenerator } from "../../endpoint/http/HttpEndpointGenerator";

export declare namespace TestClass {
    interface TestInput {
        objectInstantiationSnippet: csharp.CodeBlock;
        json: unknown;
    }
}

export class WireTestGenerator extends FileGenerator<CSharpFile, SdkCustomConfigSchema, SdkGeneratorContext> {
    private classReference: csharp.ClassReference;
    private readonly endpointGenerator: HttpEndpointGenerator;

    constructor(
        context: SdkGeneratorContext,
        private readonly exampleEndpointCalls: ExampleEndpointCall[],
        private readonly endpoint: HttpEndpoint,
        private readonly serviceId: ServiceId,
        private readonly serviceFilePath: FernFilepath
    ) {
        super(context);
        this.classReference = csharp.classReference({
            name: this.endpoint.name.pascalCase.safeName,
            namespace: this.context.getWireTestNamespace()
        });
        this.endpointGenerator = new HttpEndpointGenerator({ context });
    }

    protected doGenerate(): CSharpFile {
        const testClass = csharp.testClass({
            name: this.getTestClassName(),
            namespace: this.context.getTestNamespace(),
            parentClassReference: this.context.getBaseWireTestClassReference()
        });
        this.exampleEndpointCalls.forEach((example, index) => {
            let responseSupported = false;
            let jsonExampleResponse: unknown | undefined = undefined;
            if (example.response != null) {
                if (example.response.type !== "ok" || example.response.value.type !== "body") {
                    throw new Error("Unexpected error response type");
                }
                jsonExampleResponse = example.response.value.value?.jsonExample;
            }
            const responseBodyType = this.endpoint.response?.body?.type;
            // where or not we support this repsonse type in this generator; the example json may
            // have a response that we can return, but our generated method actually returns void
            responseSupported =
                jsonExampleResponse != null && (responseBodyType === "json" || responseBodyType === "text");
            const methodBody = csharp.codeblock((writer) => {
                if (example.request != null) {
                    writer.writeLine('const string requestJson = """');
                    writer.writeLine(JSON.stringify(example.request.jsonExample, null, 2), true);
                    writer.writeTextStatement('"""');
                }
                writer.newLine();

                if (jsonExampleResponse != null) {
                    if (responseBodyType === "json") {
                        writer.writeLine('const string mockResponse = """');
                        writer.writeLine(JSON.stringify(jsonExampleResponse, null, 2));
                        writer.writeTextStatement('"""');
                    } else if (responseBodyType === "text") {
                        writer.writeTextStatement(`const string mockResponse = "${jsonExampleResponse as string}"`);
                    }
                }

                writer.newLine();

                writer.write("Server.Given(WireMock.RequestBuilders.Request.Create()");
                writer.write(`.WithPath("${example.url || "/"}")`);

                for (const parameter of example.queryParameters) {
                    const maybeParameterValue = this.exampleToQueryOrHeaderValue(parameter);
                    if (maybeParameterValue != null) {
                        writer.write(`.WithParam("${parameter.name.wireValue}", "${maybeParameterValue}")`);
                    }
                }
                for (const header of [...example.serviceHeaders, ...example.endpointHeaders]) {
                    const maybeHeaderValue = this.exampleToQueryOrHeaderValue(header);
                    if (maybeHeaderValue != null) {
                        writer.write(`.WithHeader("${header.name.wireValue}", "${maybeHeaderValue}")`);
                    }
                }
                writer.write(
                    `.Using${
                        this.endpoint.method.charAt(0).toUpperCase() + this.endpoint.method.slice(1).toLowerCase()
                    }()`
                );
                if (example.request != null) {
                    writer.write(".WithBodyAsJson(requestJson)");
                }
                writer.writeLine(")");
                writer.newLine();
                writer.writeLine(".RespondWith(WireMock.ResponseBuilders.Response.Create()");
                writer.writeLine(".WithStatusCode(200)");
                if (responseSupported) {
                    if (responseBodyType === "json") {
                        writer.writeTextStatement(".WithBody(mockResponse))");
                    } else if (responseBodyType === "text") {
                        writer.writeTextStatement(".WithBodyAsJson(mockResponse))");
                    }
                } else {
                    writer.writeTextStatement(")");
                }
                writer.newLine();

                const endpointSnippet = this.endpointGenerator.generateEndpointSnippet({
                    example,
                    endpoint: this.endpoint,
                    clientVariableName: "Client",
                    serviceId: this.serviceId,
                    serviceFilePath: this.serviceFilePath,
                    getResult: true,
                    requestOptions: csharp.codeblock("RequestOptions")
                });
                if (endpointSnippet == null) {
                    throw new Error("Endpoint snippet is null");
                }
                if (responseSupported) {
                    writer.write("var response = ");
                } else {
                    writer.write("Assert.DoesNotThrowAsync(async () => ");
                }
                writer.writeNode(endpointSnippet);
                if (!responseSupported) {
                    writer.write(")");
                }
                writer.write(";");

                if (responseSupported) {
                    writer.newLine();
                    if (responseBodyType === "json") {
                        writer.addReference(this.context.getFluentAssetionsJsonClassReference());
                        writer.writeNode(this.context.getJTokenClassReference());
                        writer.write(".Parse(mockResponse).Should().BeEquivalentTo(");
                        writer.writeNode(this.context.getJTokenClassReference());
                        writer.write(".Parse(");
                        writer.writeNode(this.context.getJsonUtilsClassReference());
                        writer.writeTextStatement(".Serialize(response)))");
                    } else if (responseBodyType === "text") {
                        writer.writeTextStatement("Assert.That(response, Is.EqualTo(mockResponse))");
                    }
                }
            });
            const testNumber = this.exampleEndpointCalls.length > 1 ? `_${index + 1}` : "";
            testClass.addTestMethod({
                name: `WireTest${testNumber}`,
                body: methodBody,
                isAsync: responseSupported
            });
        });
        return new CSharpFile({
            clazz: testClass.getClass(),
            directory: WIRE_TEST_FOLDER,
            allNamespaceSegments: this.context.getAllNamespaceSegments(),
            allTypeClassReferences: this.context.getAllTypeClassReferences(),
            namespace: this.context.getNamespace(),
            customConfig: this.context.customConfig
        });
    }

    protected getFilepath(): RelativeFilePath {
        return join(
            this.context.project.filepaths.getTestFilesDirectory(),
            WIRE_TEST_FOLDER,
            RelativeFilePath.of(`${this.getTestClassName()}.cs`)
        );
    }

    /*
     If the example not a string, skip for now. If it's a string, check if it's a datetime
     and normalize the string so that we can match it in wire tests.
     */
    private exampleToQueryOrHeaderValue({ value }: { value: ExampleTypeReference }): string | undefined {
        if (typeof value.jsonExample === "string") {
            const maybeDatetime = this.getDateTime(value);
            return maybeDatetime != null ? maybeDatetime.toISOString() : value.jsonExample;
        }
        if (typeof value.jsonExample === "number") {
            return value.jsonExample.toString();
        }
        return undefined;
    }

    private getTestClassName(): string {
        return `${this.classReference.name}Test`;
    }

    private getDateTime(exampleTypeReference: ExampleTypeReference): Date | undefined {
        switch (exampleTypeReference.shape.type) {
            case "container":
                if (exampleTypeReference.shape.container.type !== "optional") {
                    return undefined;
                }
                if (exampleTypeReference.shape.container.optional == null) {
                    return undefined;
                }
                return this.getDateTime(exampleTypeReference.shape.container.optional);
            case "named":
                if (exampleTypeReference.shape.shape.type !== "alias") {
                    return undefined;
                }
                return this.getDateTime(exampleTypeReference.shape.shape.value);
            case "primitive":
                return exampleTypeReference.shape.primitive.type === "datetime"
                    ? exampleTypeReference.shape.primitive.datetime
                    : undefined;
            case "unknown":
                return undefined;
        }
    }
}
