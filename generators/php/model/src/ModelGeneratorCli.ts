import { GeneratorConfig, GeneratorNotificationService } from "@fern-api/generator-commons";
import { AbstractPhpGeneratorCli } from "@fern-api/php-codegen";
import { IntermediateRepresentation } from "@fern-fern/ir-sdk/api";
import { ModelCustomConfigSchema } from "./ModelCustomConfig";
import { ModelGeneratorContext } from "./ModelGeneratorContext";
import { generateModels } from "./generateModels";

export class ModelGeneratorCLI extends AbstractPhpGeneratorCli<ModelCustomConfigSchema, ModelGeneratorContext> {
    protected constructContext({
        ir,
        customConfig,
        generatorConfig,
        generatorNotificationService
    }: {
        ir: IntermediateRepresentation;
        customConfig: ModelCustomConfigSchema;
        generatorConfig: GeneratorConfig;
        generatorNotificationService: GeneratorNotificationService;
    }): ModelGeneratorContext {
        return new ModelGeneratorContext(ir, generatorConfig, customConfig, generatorNotificationService);
    }

    protected parseCustomConfigOrThrow(customConfig: unknown): ModelCustomConfigSchema {
        return {};
    }

    protected async publishPackage(context: ModelGeneratorContext): Promise<void> {
        throw new Error("Method not implemented.");
    }

    protected async writeForGithub(context: ModelGeneratorContext): Promise<void> {
        await this.generate(context);
    }

    protected async writeForDownload(context: ModelGeneratorContext): Promise<void> {
        await this.generate(context);
    }

    protected async generate(context: ModelGeneratorContext): Promise<void> {
        const generatedTypes = generateModels({ context });
        for (const file of generatedTypes) {
            context.project.addSourceFiles(file);
        }
        await context.project.persist();
    }
}
