import { AbstractCsharpGeneratorCli, TestFileGenerator } from "@fern-api/csharp-codegen";
import { generateModels } from "@fern-api/fern-csharp-model";
import { GeneratorNotificationService } from "@fern-api/generator-commons";
import { FernGeneratorExec } from "@fern-fern/generator-exec-sdk";
import { IntermediateRepresentation } from "@fern-fern/ir-sdk/api";
import { ClientOptionsGenerator } from "./client-options/ClientOptionsGenerator";
import { EnvironmentGenerator } from "./environment/EnvironmentGenerator";
import { CLIENT_MEMBER_NAME, RootClientGenerator } from "./root-client/RootClientGenerator";
import { SdkCustomConfigSchema } from "./SdkCustomConfig";
import { SdkGeneratorContext } from "./SdkGeneratorContext";
import { SubPackageClientGenerator } from "./subpackage-client/SubPackageClientGenerator";
import { WrappedRequestGenerator } from "./wrapped-request/WrappedRequestGenerator";

export class SdkGeneratorCLI extends AbstractCsharpGeneratorCli<SdkCustomConfigSchema, SdkGeneratorContext> {
    protected constructContext({
        ir,
        customConfig,
        generatorConfig,
        generatorNotificationService
    }: {
        ir: IntermediateRepresentation;
        customConfig: SdkCustomConfigSchema;
        generatorConfig: FernGeneratorExec.GeneratorConfig;
        generatorNotificationService: GeneratorNotificationService;
    }): SdkGeneratorContext {
        return new SdkGeneratorContext(ir, generatorConfig, customConfig, generatorNotificationService);
    }

    protected parseCustomConfigOrThrow(customConfig: unknown): SdkCustomConfigSchema {
        const parsed = customConfig != null ? SdkCustomConfigSchema.parse(customConfig) : undefined;
        return parsed ?? {};
    }

    protected async publishPackage(context: SdkGeneratorContext): Promise<void> {
        throw new Error("Method not implemented.");
    }

    protected async writeForGithub(context: SdkGeneratorContext): Promise<void> {
        await this.generate(context);
    }

    protected async writeForDownload(context: SdkGeneratorContext): Promise<void> {
        await this.generate(context);
    }

    protected async generate(context: SdkGeneratorContext): Promise<void> {
        const models = generateModels({ context });
        for (const file of models) {
            context.project.addSourceFiles(file);
        }
        for (const [_, subpackage] of Object.entries(context.ir.subpackages)) {
            const service = subpackage.service != null ? context.getHttpServiceOrThrow(subpackage.service) : undefined;
            const subClient = new SubPackageClientGenerator({
                context,
                subpackage,
                serviceId: subpackage.service,
                service: subpackage.service != null ? context.getHttpServiceOrThrow(subpackage.service) : undefined
            });
            context.project.addSourceFiles(subClient.generate());

            if (subpackage.service != null && service != null) {
                for (const endpoint of service.endpoints) {
                    if (endpoint.sdkRequest != null && endpoint.sdkRequest.shape.type === "wrapper") {
                        const wrappedRequestGenerator = new WrappedRequestGenerator({
                            wrapper: endpoint.sdkRequest.shape,
                            context,
                            endpoint,
                            serviceId: subpackage.service
                        });
                        const wrappedRequest = wrappedRequestGenerator.generate();
                        context.project.addSourceFiles(wrappedRequest);
                    }
                }
            }
        }

        const clientOptions = new ClientOptionsGenerator(context);
        context.project.addSourceFiles(clientOptions.generate());

        const rootClient = new RootClientGenerator(context);
        context.project.addSourceFiles(rootClient.generate());

        const rootServiceId = context.ir.rootPackage.service;
        if (rootServiceId != null) {
            const service = context.getHttpServiceOrThrow(rootServiceId);
            for (const endpoint of service.endpoints) {
                if (endpoint.sdkRequest != null && endpoint.sdkRequest.shape.type === "wrapper") {
                    const wrappedRequestGenerator = new WrappedRequestGenerator({
                        wrapper: endpoint.sdkRequest.shape,
                        context,
                        endpoint,
                        serviceId: rootServiceId
                    });
                    const wrappedRequest = wrappedRequestGenerator.generate();
                    context.project.addSourceFiles(wrappedRequest);
                }
            }
        }

        if (context.ir.environments?.environments.type === "singleBaseUrl") {
            const environments = new EnvironmentGenerator({
                context,
                singleUrlEnvironments: context.ir.environments?.environments
            });
            context.project.addSourceFiles(environments.generate());
        }

        const testGenerator = new TestFileGenerator(context);
        const test = testGenerator.generate();
        context.project.addTestFiles(test);

        await context.project.persist();
    }
}
