import { dirname, join, RelativeFilePath } from "@fern-api/fs-utils";
import { getEndpointLocation } from "@fern-api/openapi-ir-to-fern";
import { Project } from "@fern-api/project-loader";
import { TaskContext } from "@fern-api/task-context";
import { getOpenAPIIRFromOpenAPIWorkspace, OpenAPIWorkspace } from "@fern-api/workspace-loader";
import { writeFile } from "fs/promises";
import yaml from "js-yaml";
import { CliContext } from "../../cli-context/CliContext";

export async function writeOverridesForWorkspaces({
    project,
    cliContext
}: {
    project: Project;
    cliContext: CliContext;
}): Promise<void> {
    await Promise.all(
        project.apiWorkspaces.map(async (workspace) => {
            await cliContext.runTaskForWorkspace(workspace, async (context) => {
                if (workspace.type === "openapi") {
                    await writeDefinitionForOpenAPIWorkspace({ workspace, context });
                } else {
                    context.logger.warn("Skipping fern workspace definition generation");
                }
            });
        })
    );
}

async function writeDefinitionForOpenAPIWorkspace({
    workspace,
    context
}: {
    workspace: OpenAPIWorkspace;
    context: TaskContext;
}): Promise<void> {
    const openApiIr = await getOpenAPIIRFromOpenAPIWorkspace(workspace, context);
    const paths: Record<string, Record<string, unknown>> = {};
    for (const endpoint of openApiIr.endpoints) {
        const endpointLocation = getEndpointLocation(endpoint);
        if (!(endpoint.path in paths)) {
            paths[endpoint.path] = {};
        }
        const pathItem = paths[endpoint.path];
        if (pathItem != null && pathItem[endpoint.method] == null) {
            const groupName = endpointLocation.file
                .split("/")
                .map((part) => part.replace(".yml", ""))
                .filter((part) => part !== "__package__");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const sdkMethodNameExtensions: Record<string, any> = {};
            if (groupName.length > 0) {
                sdkMethodNameExtensions["x-fern-sdk-group-name"] = groupName;
            }
            sdkMethodNameExtensions["x-fern-sdk-method-name"] = endpointLocation.endpointId;
            pathItem[endpoint.method.toLowerCase()] = sdkMethodNameExtensions;
        } else {
            context.logger.warn(`Endpoint ${endpoint.path} ${endpoint.method} is defined multiple times`);
        }
    }
    await writeFile(
        join(dirname(workspace.absolutePathToOpenAPI), RelativeFilePath.of("openapi-overrides.yml")),
        yaml.dump({ paths })
    );
}
