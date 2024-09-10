import { DEFINITION_DIRECTORY } from "@fern-api/configuration";
import {
    GeneratorGroup,
    GeneratorInvocation,
    GeneratorsConfiguration
} from "@fern-api/configuration/src/generators-yml";
import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { LogLevel } from "@fern-api/logger";
import { TaskContext } from "@fern-api/task-context";
import { FernWorkspace } from "@fern-api/workspace-loader";
import tmp from "tmp-promise";
import { group } from "yargs";
import { GeneratorWorkspace } from "../../loadGeneratorWorkspaces";
import { Semaphore } from "../../Semaphore";
import { convertGeneratorWorkspaceToFernWorkspace } from "../../utils/convertSeedWorkspaceToFernWorkspace";
import { ScriptRunner } from "../test/ScriptRunner";
import { TaskContextFactory } from "../test/TaskContextFactory";
import { DockerTestRunner } from "../test/test-runner";
import { writeDotMock } from "../test/test-runner/TestRunner";

export async function runWithCustomFixture({
    pathToFixture,
    workspace,
    logLevel,
    audience
}: {
    pathToFixture: AbsoluteFilePath;
    workspace: GeneratorWorkspace;
    logLevel: LogLevel;
    audience: string | undefined;
}): Promise<void> {
    const lock = new Semaphore(1);
    const outputDir = await tmp.dir();
    const absolutePathToOutput = AbsoluteFilePath.of(outputDir.path);
    const taskContextFactory = new TaskContextFactory(logLevel);
    const customFixtureConfig = workspace.workspaceConfig.customFixtureConfig;

    const taskContext = taskContextFactory.create(
        `${workspace.workspaceName}:${"custom"} - ${customFixtureConfig?.outputFolder ?? ""}`
    );

    const dockerGeneratorRunner = new DockerTestRunner({
        generator: workspace,
        lock,
        taskContextFactory,
        skipScripts: true,
        keepDocker: true,
        scriptRunner: new ScriptRunner(workspace, false)
    });

    const fernWorkspace = await convertGeneratorWorkspaceToFernWorkspace({
        absolutePathToAPIDefinition: pathToFixture,
        taskContext,
        fixture: "custom"
    });
    if (fernWorkspace == null) {
        taskContext.logger.error("Failed to load API definition.");
        return;
    }

    const generatorGroup = getGeneratorGroup({
        fernWorkspace,
        image: workspace.workspaceConfig.image,
        absolutePathToOutput
    });
    if (generatorGroup == null) {
        taskContext.logger.error(`Found no generators configuration for the generator ${workspace.workspaceName}`);
        return;
    }

    try {
        await dockerGeneratorRunner.build();
        await dockerGeneratorRunner.runGeneratorFromGroup({
            fernWorkspace,
            absolutePathToFernDefinition: join(pathToFixture, RelativeFilePath.of(DEFINITION_DIRECTORY)),
            taskContext,
            irVersion: workspace.workspaceConfig.irVersion,
            group: generatorGroup
        });
        await writeDotMock({
            absolutePathToDotMockDirectory: absolutePathToOutput,
            absolutePathToFernDefinition: pathToFixture
        });
        taskContext.logger.info(`Wrote files to ${absolutePathToOutput}`);
    } catch (error) {
        taskContext.logger.error(`Encountered error while running generator. ${(error as Error)?.message}`);
    }
}

function getGeneratorGroup({
    fernWorkspace,
    image,
    absolutePathToOutput
}: {
    fernWorkspace: FernWorkspace;
    image: string;
    absolutePathToOutput: AbsoluteFilePath;
}): GeneratorGroup | undefined {
    const groups = fernWorkspace.generatorsConfiguration?.groups;
    for (const group of groups ?? []) {
        for (const generator of group.generators) {
            if (generator.name === image) {
                return { ...group, generators: [{ ...generator, absolutePathToLocalOutput: absolutePathToOutput }] };
            }
        }
    }
    return undefined;
}
