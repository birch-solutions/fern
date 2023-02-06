import { Project } from "@fern-api/project-loader";
import { CliContext } from "../../cli-context/CliContext";
import { validateFernWorkspaceAndLogIssues } from "./validateFernWorkspaceAndLogIssues";
import { validateOpenAPIWorkspaceAndLogIssues } from "./validateOpenAPIWorkspaceAndLogIssues";

export async function validateWorkspaces({
    project,
    cliContext,
}: {
    project: Project;
    cliContext: CliContext;
}): Promise<void> {
    await Promise.all(
        project.workspaces.map(async (workspace) => {
            await cliContext.runTaskForWorkspace(workspace, async (context) => {
                if (workspace.type === "openapi") {
                    await validateOpenAPIWorkspaceAndLogIssues(workspace, context);
                } else {
                    await validateFernWorkspaceAndLogIssues(workspace, context);
                }
            });
        })
    );
}
