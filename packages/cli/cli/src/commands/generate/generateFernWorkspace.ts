import { FernToken } from "@fern-api/auth";
import { DEFAULT_GROUP_GENERATORS_CONFIG_KEY } from "@fern-api/generators-configuration";
import { GENERATORS_CONFIGURATION_FILENAME } from "@fern-api/project-configuration";
import { runRemoteGenerationForWorkspace } from "@fern-api/remote-workspace-runner";
import { TaskContext } from "@fern-api/task-context";
import { FernWorkspace } from "@fern-api/workspace-loader";
import { GROUP_CLI_OPTION } from "../../constants";
import { validateFernWorkspaceAndLogIssues } from "../validate/validateFernWorkspaceAndLogIssues";

export async function generateFernWorkspace({
    workspace,
    organization,
    context,
    groupName,
    version,
    shouldLogS3Url,
    token,
}: {
    workspace: FernWorkspace;
    organization: string;
    context: TaskContext;
    version: string | undefined;
    groupName: string | undefined;
    shouldLogS3Url: boolean;
    token: FernToken;
}): Promise<void> {
    if (workspace.generatorsConfiguration.groups.length === 0) {
        context.logger.warn(`This workspaces has no groups specified in ${GENERATORS_CONFIGURATION_FILENAME}`);
        return;
    }

    const groupNameOrDefault = groupName ?? workspace.generatorsConfiguration.defaultGroup;
    if (groupNameOrDefault == null) {
        return context.failAndThrow(
            `No group specified. Use the --${GROUP_CLI_OPTION} option, or set "${DEFAULT_GROUP_GENERATORS_CONFIG_KEY}" in ${GENERATORS_CONFIGURATION_FILENAME}`
        );
    }

    const group = workspace.generatorsConfiguration.groups.find(
        (otherGroup) => otherGroup.groupName === groupNameOrDefault
    );
    if (group == null) {
        return context.failAndThrow(`Group '${groupNameOrDefault}' does not exist.`);
    }

    await validateFernWorkspaceAndLogIssues(workspace, context);

    await runRemoteGenerationForWorkspace({
        workspace,
        organization,
        context,
        generatorGroup: group,
        version,
        shouldLogS3Url,
        token,
    });
}
