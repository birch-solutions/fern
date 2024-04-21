import { generatorsYml } from "@fern-api/configuration";
import { runLocalGenerationForSeed } from "@fern-api/local-workspace-runner";
import { CONSOLE_LOGGER } from "@fern-api/logger";
import path from "path";
import { writeInputs } from "../../../commands/rewrite-inputs/rewriteInputsForWorkspace";
import { runScript } from "../../../runScript";
import { ALL_AUDIENCES, DUMMY_ORGANIZATION } from "../../../utils/constants";
import { getGeneratorInvocation } from "../../../utils/getGeneratorInvocation";
import { ParsedDockerName, parseDockerOrThrow } from "../../../utils/parseDockerOrThrow";
import { TestRunner } from "./TestRunner";

export class DockerTestRunner extends TestRunner {
    async build(): Promise<void> {
        const dockerCommands =
            typeof this.generator.workspaceConfig.dockerCommand === "string"
                ? [this.generator.workspaceConfig.dockerCommand]
                : this.generator.workspaceConfig.dockerCommand;
        if (dockerCommands == null) {
            throw new Error(`Failed. No docker command for ${this.generator.workspaceName}`);
        }
        await runScript({
            commands: dockerCommands,
            logger: CONSOLE_LOGGER,
            workingDir: path.dirname(path.dirname(this.generator.absolutePathToWorkspace)),
            doNotPipeOutput: false
        });
    }

    async runGenerator({
        fernWorkspace,
        outputDir,
        fixture,
        taskContext,
        selectAudiences,
        outputVersion,
        keepDocker,
        language,
        customConfig,
        publishConfig,
        outputMode,
        irVersion,
        publishMetadata
    }: TestRunner.DoRunArgs): Promise<void> {
        try {
            const generatorGroup: generatorsYml.GeneratorGroup = {
                groupName: "test",
                audiences: selectAudiences != null ? { type: "select", audiences: selectAudiences } : ALL_AUDIENCES,
                generators: [
                    getGeneratorInvocation({
                        absolutePathToOutput: outputDir,
                        docker: this.getParsedDockerName(),
                        language,
                        customConfig,
                        publishConfig,
                        outputMode,
                        fixtureName: fixture,
                        irVersion,
                        publishMetadata
                    })
                ]
            };
            await runLocalGenerationForSeed({
                organization: DUMMY_ORGANIZATION,
                absolutePathToFernConfig: undefined,
                workspace: fernWorkspace,
                generatorGroup,
                keepDocker: keepDocker ?? false,
                context: taskContext,
                irVersionOverride: irVersion,
                outputVersionOverride: outputVersion
            });
        } catch (e) {
            throw e;
        } finally {
            writeInputs({
                absolutePathToOutput: outputDir,
                fernWorkspace,
                taskContext,
                docker: this.getParsedDockerName(),
                language,
                customConfig,
                publishConfig,
                outputMode,
                fixtureName: fixture,
                irVersion,
                publishMetadata,
                workspaceName: fixture,
                context: taskContext
            });
        }
    }

    private getParsedDockerName(): ParsedDockerName {
        return parseDockerOrThrow(this.generator.workspaceConfig.docker);
    }
}
