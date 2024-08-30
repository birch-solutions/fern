import { AbstractGeneratorAgent } from "@fern-api/generator-commons";
import { Logger } from "@fern-api/logger";
import { FernGeneratorCli } from "@fern-fern/generator-cli-sdk";
import { FernGeneratorExec } from "@fern-fern/generator-exec-sdk";
import { ReadmeConfigBuilder } from "./readme/ReadmeConfigBuilder";
import { SdkGeneratorContext } from "./SdkGeneratorContext";

export class CsharpGeneratorAgent extends AbstractGeneratorAgent<SdkGeneratorContext> {
    private readmeConfigBuilder: ReadmeConfigBuilder;

    public constructor({
        logger,
        config,
        readmeConfigBuilder
    }: {
        logger: Logger;
        config: FernGeneratorExec.GeneratorConfig;
        readmeConfigBuilder: ReadmeConfigBuilder;
    }) {
        super({ logger, config });
        this.readmeConfigBuilder = readmeConfigBuilder;
    }

    public getReadmeConfig(
        args: AbstractGeneratorAgent.ReadmeConfigArgs<SdkGeneratorContext>
    ): FernGeneratorCli.ReadmeConfig {
        return this.readmeConfigBuilder.build({
            context: args.context,
            remote: args.remote,
            featureConfig: args.featureConfig,
            endpointSnippets: args.endpointSnippets
        });
    }

    public getLanguage(): FernGeneratorCli.Language {
        return FernGeneratorCli.Language.Csharp;
    }
}
