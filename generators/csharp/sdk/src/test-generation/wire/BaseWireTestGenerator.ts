import { csharp, CSharpFile, FileGenerator } from "@fern-api/csharp-codegen";
import { join, RelativeFilePath } from "@fern-api/fs-utils";
import { RootClientGenerator } from "../../root-client/RootClientGenerator";
import { SdkCustomConfigSchema } from "../../SdkCustomConfig";
import { SdkGeneratorContext, WIRE_TEST_FOLDER } from "../../SdkGeneratorContext";

export class BaseWireTestGenerator extends FileGenerator<CSharpFile, SdkCustomConfigSchema, SdkGeneratorContext> {
    private readonly rootClientGenerator: RootClientGenerator;
    constructor(context: SdkGeneratorContext) {
        super(context);
        this.rootClientGenerator = new RootClientGenerator(context);
    }

    public doGenerate(): CSharpFile {
        const class_ = csharp.class_({
            ...this.context.getBaseWireTestClassReference(),
            partial: false,
            access: "public",
            annotations: [
                csharp.annotation({
                    reference: csharp.classReference({ name: "SetUpFixture", namespace: "NUnit.Framework" })
                })
            ]
        });

        class_.addField(
            csharp.field({
                access: "protected",
                name: "Server",
                static_: true,
                type: csharp.Type.reference(
                    csharp.classReference({
                        name: "WireMockServer",
                        namespace: "WireMock.Server"
                    })
                ),
                get: true,
                initializer: csharp.codeblock("null!"),
                set: true
            })
        );

        class_.addField(
            csharp.field({
                access: "protected",
                name: "Client",
                static_: true,
                type: csharp.Type.reference(
                    csharp.classReference({
                        name: this.context.getRootClientClassName(),
                        namespace: this.context.getNamespace()
                    })
                ),
                get: true,
                initializer: csharp.codeblock("null!"),
                set: true
            })
        );

        class_.addField(
            csharp.field({
                access: "protected",
                name: "RequestOptions",
                static_: true,
                type: csharp.Type.reference(this.context.getRequestOptionsClassReference()),
                get: true,
                initializer: csharp.codeblock("null!"),
                set: true
            })
        );

        class_.addMethod(
            csharp.method({
                name: "GlobalSetup",
                access: "public",
                body: csharp.codeblock((writer) => {
                    writer.writeLine("// Start the WireMock server");
                    writer.write("Server = WireMockServer.Start(new ");
                    writer.writeNode(
                        csharp.classReference({
                            name: "WireMockServerSettings",
                            namespace: "WireMock.Settings"
                        })
                    );
                    writer.write(" { Logger = new ");
                    writer.writeNode(
                        csharp.classReference({
                            name: "WireMockConsoleLogger",
                            namespace: "WireMock.Logging"
                        })
                    );
                    writer.writeTextStatement("() })");
                    writer.newLine();

                    writer.writeLine("// Initialize the Client");
                    writer.writeLine("Client = ");
                    writer.writeNodeStatement(this.rootClientGenerator.generateExampleClientInstantiationSnippet());
                    writer.newLine();

                    writer.writeLine("RequestOptions = ");
                    writer.writeNodeStatement(
                        new csharp.ClassInstantiation({
                            classReference: this.context.getRequestOptionsClassReference(),
                            arguments_: [{ name: "BaseUrl", assignment: csharp.codeblock("Server.Urls[0]") }]
                        })
                    );
                }),
                isAsync: false,
                parameters: [],
                annotations: [
                    csharp.annotation({
                        reference: csharp.classReference({ name: "OneTimeSetUp", namespace: "NUnit.Framework" })
                    })
                ]
            })
        );

        class_.addMethod(
            csharp.method({
                name: "GlobalTeardown",
                access: "public",
                body: csharp.codeblock((writer) => {
                    writer.writeLine("Server.Stop();");
                }),
                isAsync: false,
                parameters: [],
                annotations: [
                    csharp.annotation({
                        reference: csharp.classReference({ name: "OneTimeTearDown", namespace: "NUnit.Framework" })
                    })
                ]
            })
        );

        return new CSharpFile({
            clazz: class_,
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
            RelativeFilePath.of(`${this.context.getBaseWireTestClassReference().name}.cs`)
        );
    }
}
