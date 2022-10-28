import { AbsoluteFilePath, cwd, doesPathExist, join } from "@fern-api/core-utils";
import { FERN_DIRECTORY, ProjectConfigSchema, PROJECT_CONFIG_FILENAME } from "@fern-api/project-configuration";
import { TaskContext } from "@fern-api/task-context";
import chalk from "chalk";
import { mkdir, writeFile } from "fs/promises";
import inquirer, { InputQuestion } from "inquirer";
import path from "path";
import { createWorkspace } from "./createWorkspace";

export async function initialize({
    organization,
    versionOfCli,
    context,
}: {
    organization: string | undefined;
    versionOfCli: string;
    context: TaskContext;
}): Promise<void> {
    const pathToFernDirectory = join(cwd(), FERN_DIRECTORY);
    const directoryOfWorkspace = join(pathToFernDirectory, "my-new-api");
    if (await doesPathExist(directoryOfWorkspace)) {
        context.failAndThrow("Directory already exists: " + pathToFernDirectory);
    }

    if (!(await doesPathExist(pathToFernDirectory))) {
        if (organization == null) {
            await context.takeOverTerminal(async () => {
                organization = await askForOrganization();
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const castedOrganization = organization!;

        await mkdir(FERN_DIRECTORY);
        await writeProjectConfig({
            filepath: join(pathToFernDirectory, PROJECT_CONFIG_FILENAME),
            organization: castedOrganization,
            versionOfCli,
        });
    }

    await createWorkspace({ directoryOfWorkspace });
    context.logger.info(chalk.green("Create new API: ./" + path.relative(process.cwd(), directoryOfWorkspace)));
}

async function writeProjectConfig({
    organization,
    filepath,
    versionOfCli,
}: {
    organization: string;
    filepath: AbsoluteFilePath;
    versionOfCli: string;
}): Promise<void> {
    const projectConfig: ProjectConfigSchema = {
        organization,
        version: versionOfCli,
    };
    await writeFile(filepath, JSON.stringify(projectConfig, undefined, 4));
}

async function askForOrganization() {
    const organizationQuestion: InputQuestion<{ organization: string }> = {
        type: "input",
        name: "organization",
        message: "What's the name of your organization?",
    };
    const answers = await inquirer.prompt(organizationQuestion);
    return answers.organization;
}
