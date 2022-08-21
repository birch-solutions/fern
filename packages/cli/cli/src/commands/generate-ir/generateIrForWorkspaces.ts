import { AbsoluteFilePath } from "@fern-api/core-utils";
import { writeFile } from "fs/promises";
import path from "path";
import { CliContext } from "../../cli-context/CliContext";
import { Project } from "../../loadProject";
import { generateIrForWorkspace } from "./generateIrForWorkspace";

export async function generateIrForWorkspaces({
    project,
    irFilepath,
    cliContext,
}: {
    project: Project;
    irFilepath: AbsoluteFilePath;
    cliContext: CliContext;
}): Promise<void> {
    await Promise.all(
        project.workspaces.map(async (workspace) => {
            await cliContext.runTaskForWorkspace(workspace, async (context) => {
                const intermediateRepresentation = await generateIrForWorkspace({ workspace, cliContext });
                const irOutputFilePath = path.resolve(irFilepath);
                await writeFile(irOutputFilePath, JSON.stringify(intermediateRepresentation, undefined, 4));
                context.logger.info(`Wrote IR to ${irOutputFilePath}`);
            });
        })
    );
}
