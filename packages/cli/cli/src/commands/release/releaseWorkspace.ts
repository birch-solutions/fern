import { runRemoteGenerationForWorkspace } from "@fern-api/remote-workspace-runner";
import { TaskContext, TASK_FAILURE } from "@fern-api/task-context";
import { Workspace } from "@fern-api/workspace-loader";
import { Fiddle } from "@fern-fern/fiddle-client";
import { generateIrForWorkspace } from "../generate-ir/generateIrForWorkspace";

export async function releaseWorkspace({
    workspace,
    organization,
    context,
    version,
}: {
    workspace: Workspace;
    organization: string;
    context: TaskContext;
    version: string;
}): Promise<void> {
    const intermediateRepresentation = await generateIrForWorkspace({ workspace, context });
    if (intermediateRepresentation === TASK_FAILURE) {
        return;
    }

    await runRemoteGenerationForWorkspace({
        workspace,
        intermediateRepresentation,
        organization,
        context,
        version,
        generatorConfigs: workspace.generatorsConfiguration.release.map((generator) => ({
            id: generator.name,
            version: generator.version,
            outputMode: Fiddle.OutputMode.publish({
                registryOverrides: {
                    npm:
                        generator.outputs.npm != null
                            ? {
                                  registryUrl: generator.outputs.npm.url ?? "https://registry.npmjs.org",
                                  packageName: generator.outputs.npm.packageName,
                                  token: generator.outputs.npm.token,
                              }
                            : undefined,
                    maven:
                        generator.outputs.maven != null
                            ? {
                                  registryUrl:
                                      generator.outputs.maven.url ??
                                      "https://s01.oss.sonatype.org/content/repositories/releases/",
                                  username: generator.outputs.maven.username,
                                  password: generator.outputs.maven.password,
                                  coordinate: generator.outputs.maven.coordinate,
                              }
                            : undefined,
                },
            }),
            customConfig: generator.config,
        })),
        generatorInvocations: workspace.generatorsConfiguration.release,
    });
}
