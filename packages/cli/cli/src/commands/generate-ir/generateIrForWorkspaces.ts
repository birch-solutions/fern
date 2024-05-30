import { Audiences, generatorsYml } from "@fern-api/configuration";
import { AbsoluteFilePath, stringifyLargeObject } from "@fern-api/fs-utils";
import { migrateIntermediateRepresentationThroughVersion } from "@fern-api/ir-migrations";
import { serialization as IrSerialization } from "@fern-api/ir-sdk";
import { Project } from "@fern-api/project-loader";
import { TaskContext } from "@fern-api/task-context";
import { convertOpenApiWorkspaceToFernWorkspace, FernWorkspace } from "@fern-api/workspace-loader";
import { writeFile } from "fs/promises";
import path from "path";
import { CliContext } from "../../cli-context/CliContext";
import { generateIrForFernWorkspace } from "./generateIrForFernWorkspace";

export async function generateIrForWorkspaces({
    project,
    irFilepath,
    cliContext,
    generationLanguage,
    audiences,
    version,
    smartCasing
}: {
    project: Project;
    irFilepath: AbsoluteFilePath;
    cliContext: CliContext;
    generationLanguage: generatorsYml.GenerationLanguage | undefined;
    audiences: Audiences;
    version: string | undefined;
    smartCasing: boolean;
}): Promise<void> {
    await Promise.all(
        project.apiWorkspaces.map(async (workspace) => {
            await cliContext.runTaskForWorkspace(workspace, async (context) => {
                let fernWorkspace: FernWorkspace;
                if (workspace.type == "fern") {
                    fernWorkspace = workspace;
                } else {
                    workspace.specs = workspace.specs.map((spec) => ({ ...spec, sdkLanguage: generationLanguage }));
                    fernWorkspace = await convertOpenApiWorkspaceToFernWorkspace(workspace, context);
                }

                const intermediateRepresentation = await getIntermediateRepresentation({
                    workspace: fernWorkspace,
                    context,
                    generationLanguage,
                    smartCasing,
                    disableExamples: false,
                    audiences,
                    version
                });

                const irOutputFilePath = path.resolve(irFilepath);
                await writeFile(
                    irOutputFilePath,
                    await stringifyLargeObject(intermediateRepresentation, { pretty: true })
                );
                context.logger.info(`Wrote IR to ${irOutputFilePath}`);
            });
        })
    );
}

async function getIntermediateRepresentation({
    workspace,
    context,
    generationLanguage,
    audiences,
    smartCasing,
    disableExamples,
    version
}: {
    workspace: FernWorkspace;
    context: TaskContext;
    generationLanguage: generatorsYml.GenerationLanguage | undefined;
    smartCasing: boolean;
    disableExamples: boolean;
    audiences: Audiences;
    version: string | undefined;
}): Promise<unknown> {
    const intermediateRepresentation = await generateIrForFernWorkspace({
        workspace,
        context,
        generationLanguage,
        audiences,
        smartCasing,
        disableExamples
    });

    if (version == null) {
        return IrSerialization.IntermediateRepresentation.jsonOrThrow(intermediateRepresentation, {
            unrecognizedObjectKeys: "strip"
        });
    }

    return migrateIntermediateRepresentationThroughVersion({
        intermediateRepresentation,
        version,
        context
    });
}
