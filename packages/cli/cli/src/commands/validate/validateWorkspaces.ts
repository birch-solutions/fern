import { Project } from "@fern-api/project-loader";
import { convertOpenApiWorkspaceToFernWorkspace } from "@fern-api/workspace-loader";
import { CliContext } from "../../cli-context/CliContext";
import { validateAPIWorkspaceAndLogIssues } from "./validateAPIWorkspaceAndLogIssues";
import { validateDocsWorkspaceAndLogIssues } from "./validateDocsWorkspaceAndLogIssues";

export async function validateWorkspaces({
    project,
    cliContext,
    logWarnings
}: {
    project: Project;
    cliContext: CliContext;
    logWarnings: boolean;
}): Promise<void> {
    const docsWorkspace = project.docsWorkspaces;
    if (docsWorkspace != null) {
        await cliContext.runTaskForWorkspace(docsWorkspace, async (context) => {
            await validateDocsWorkspaceAndLogIssues({ workspace: docsWorkspace, context, logWarnings });
        });
    }

    await Promise.all(
        project.apiWorkspaces.map(async (workspace) => {
            await cliContext.runTaskForWorkspace(workspace, async (context) => {
                if (workspace.type === "oss") {
                    const fernWorkspace = await convertOpenApiWorkspaceToFernWorkspace(
                        workspace,
                        context,
                        false,
                        undefined
                    );
                    await validateAPIWorkspaceAndLogIssues({ workspace: fernWorkspace, context, logWarnings });
                } else {
                    await validateAPIWorkspaceAndLogIssues({ workspace, context, logWarnings });
                }
            });
        })
    );
}
