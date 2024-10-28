import { dynamic as DynamicSnippets, HttpEndpoint, IntermediateRepresentation } from "@fern-api/ir-sdk";
import { FernGeneratorExec } from "@fern-fern/generator-exec-sdk";
import { DynamicSnippetsGenerator } from "@fern-api/go-dynamic-snippets";
import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { writeFile } from "fs/promises";
import { TaskContext } from "@fern-api/task-context";

export class DynamicSnippetsGoTestGenerator {
    private dynamicSnippetsGenerator: DynamicSnippetsGenerator;

    constructor(
        private readonly context: TaskContext,
        private readonly ir: DynamicSnippets.DynamicIntermediateRepresentation,
        private readonly generatorConfig: FernGeneratorExec.GeneratorConfig
    ) {
        this.dynamicSnippetsGenerator = new DynamicSnippetsGenerator({
            ir: this.ir,
            config: this.generatorConfig,

            // TODO: Add support for wasm-fmt/gofmt.
            formatted: false
        });
    }

    public async generateTests({
        outputDir,
        requests
    }: {
        outputDir: AbsoluteFilePath;
        requests: DynamicSnippets.EndpointSnippetRequest[];
    }): Promise<void> {
        this.context.logger.debug("Generating dynamic snippet tests...");
        for (const [idx, request] of requests.entries()) {
            try {
                const response = await this.dynamicSnippetsGenerator.generate(request);
                const dynamicSnippetFilePath = this.getTestFilePath({ outputDir, idx });
                await writeFile(dynamicSnippetFilePath, response.snippet);
            } catch (error) {
                this.context.logger.error(
                    `Failed to generate dynamic snippet for endpoint ${JSON.stringify(request.endpoint)}: ${error}`
                );
            }
        }
        this.context.logger.debug("Done generating dynamic snippet tests");
    }

    private getTestFilePath({ outputDir, idx }: { outputDir: AbsoluteFilePath; idx: number }): AbsoluteFilePath {
        return join(outputDir, RelativeFilePath.of(`example${idx}/snippet.go`));
    }
}
