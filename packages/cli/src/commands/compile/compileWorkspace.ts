import { loadWorkspaceDefinition } from "@fern-api/commons";
import { compile } from "@fern-api/compiler";
import { runLocalGenerationForWorkspace } from "@fern-api/local-workspace-runner";
import { runRemoteGenerationForWorkspace } from "@fern-api/remote-workspace-runner";
import validatePackageName from "validate-npm-package-name";
import { handleCompilerFailure } from "./handleCompilerFailure";
import { parseFernDefinition } from "./parseFernInput";

export async function compileWorkspace({
    absolutePathToWorkspaceDefinition,
    runLocal,
    organization,
}: {
    absolutePathToWorkspaceDefinition: string;
    runLocal: boolean;
    organization: string;
}): Promise<void> {
    const workspaceDefinition = await loadWorkspaceDefinition(absolutePathToWorkspaceDefinition);

    validateWorkspaceName(workspaceDefinition.name);

    const files = await parseFernDefinition(workspaceDefinition.absolutePathToDefinition);
    const compileResult = await compile(files, workspaceDefinition.name);
    if (!compileResult.didSucceed) {
        handleCompilerFailure(compileResult.failure);
        return;
    }

    if (runLocal) {
        await runLocalGenerationForWorkspace({
            organization,
            workspaceDefinition,
            compileResult,
        });
    } else {
        await runRemoteGenerationForWorkspace({
            workspaceDefinition,
            compileResult,
            organization,
        });
    }
}

function validateWorkspaceName(workspaceName: string) {
    const { validForNewPackages } = validatePackageName(workspaceName);
    if (!validForNewPackages) {
        throw new Error(`Invalid workspace name: ${workspaceName}`);
    }
}
