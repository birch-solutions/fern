import { AbsoluteFilePath } from "@fern-api/fs-utils";
import { generateIntermediateRepresentation } from "@fern-api/ir-generator";
import { IntermediateRepresentation } from "@fern-api/ir-sdk";
import { createMockTaskContext } from "@fern-api/task-context";
import { loadAPIWorkspace } from "@fern-api/workspace-loader";

export async function getIrForApi(absolutePathToWorkspace: AbsoluteFilePath): Promise<IntermediateRepresentation> {
    const context = createMockTaskContext();
    const workspace = await loadAPIWorkspace({
        absolutePathToWorkspace,
        context,
        cliVersion: "0.0.0",
        workspaceName: undefined,
        sdkLanguage: undefined
    });
    if (!workspace.didSucceed) {
        return context.failAndThrow("Failed to load workspace", workspace.failures);
    } else if (workspace.workspace.type === "oss") {
        return context.failAndThrow("Expected fern workspace but received openapi.");
    }
    return generateIntermediateRepresentation({
        workspace: workspace.workspace,
        generationLanguage: undefined,
        audiences: { type: "all" },
        keywords: undefined,
        smartCasing: true, // Verify the special casing convention in tests.
        disableExamples: false
    });
}
