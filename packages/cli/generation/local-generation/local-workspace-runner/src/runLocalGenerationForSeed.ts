import {
    generatorsYml,
    RESOLVED_SNIPPET_TEMPLATES_MD,
    SNIPPET_JSON_FILENAME,
    SNIPPET_TEMPLATES_JSON_FILENAME
} from "@fern-api/configuration";
import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { TaskContext } from "@fern-api/task-context";
import { FernWorkspace } from "@fern-api/api-workspace-commons";
import chalk from "chalk";
import { writeFilesToDiskAndRunGenerator } from "./runGenerator";
import { getWorkspaceTempDir } from "./runLocalGenerationForWorkspace";
import { readFile } from "fs/promises";
import { Fern, Template } from "@fern-api/sdk";
import { HttpEndpoint } from "@fern-api/ir-sdk";
import { writeFile } from "fs/promises";
import { IntermediateRepresentation } from "@fern-api/ir-sdk";
import * as prettier from "prettier";
import { generateDynamicSnippetTests } from "./dynamic-snippets/generateDynamicSnippetTests";

export async function runLocalGenerationForSeed({
    organization,
    absolutePathToFernConfig,
    workspace,
    generatorGroup,
    keepDocker,
    context,
    irVersionOverride,
    outputVersionOverride
}: {
    organization: string;
    workspace: FernWorkspace;
    absolutePathToFernConfig: AbsoluteFilePath | undefined;
    generatorGroup: generatorsYml.GeneratorGroup;
    keepDocker: boolean;
    context: TaskContext;
    irVersionOverride: string;
    outputVersionOverride: string | undefined;
}): Promise<void> {
    const workspaceTempDir = await getWorkspaceTempDir();

    const results = await Promise.all(
        generatorGroup.generators.map(async (generatorInvocation) => {
            return context.runInteractiveTask({ name: generatorInvocation.name }, async (interactiveTaskContext) => {
                if (generatorInvocation.absolutePathToLocalOutput == null) {
                    interactiveTaskContext.failWithoutThrowing(
                        "Cannot generate because output location is not local-file-system"
                    );
                } else {
                    const absolutePathToLocalSnippetTemplateJSON = generatorInvocation.absolutePathToLocalOutput
                        ? AbsoluteFilePath.of(
                              join(
                                  generatorInvocation.absolutePathToLocalOutput,
                                  RelativeFilePath.of(SNIPPET_TEMPLATES_JSON_FILENAME)
                              )
                          )
                        : undefined;
                    const absolutePathToResolvedSnipppetTemplates = generatorInvocation.absolutePathToLocalOutput
                        ? AbsoluteFilePath.of(
                              join(
                                  generatorInvocation.absolutePathToLocalOutput,
                                  RelativeFilePath.of(RESOLVED_SNIPPET_TEMPLATES_MD)
                              )
                          )
                        : undefined;
                    const { ir, generatorConfig } = await writeFilesToDiskAndRunGenerator({
                        organization,
                        absolutePathToFernConfig,
                        workspace,
                        generatorInvocation,
                        absolutePathToLocalOutput: generatorInvocation.absolutePathToLocalOutput,
                        absolutePathToLocalSnippetJSON: generatorInvocation.absolutePathToLocalOutput
                            ? AbsoluteFilePath.of(
                                  join(
                                      generatorInvocation.absolutePathToLocalOutput,
                                      RelativeFilePath.of(SNIPPET_JSON_FILENAME)
                                  )
                              )
                            : undefined,
                        absolutePathToLocalSnippetTemplateJSON,
                        audiences: generatorGroup.audiences,
                        workspaceTempDir,
                        keepDocker,
                        context: interactiveTaskContext,
                        irVersionOverride,
                        outputVersionOverride,
                        writeUnitTests: true,
                        generateOauthClients: true,
                        generatePaginatedClients: true
                    });
                    if (
                        absolutePathToLocalSnippetTemplateJSON != null &&
                        absolutePathToResolvedSnipppetTemplates != null
                    ) {
                        await writeResolvedSnippetsJson({
                            absolutePathToLocalSnippetTemplateJSON,
                            absolutePathToResolvedSnipppetTemplates,
                            ir,
                            generatorInvocation
                        });
                    }
                    interactiveTaskContext.logger.info(
                        chalk.green("Wrote files to " + generatorInvocation.absolutePathToLocalOutput)
                    );

                    if (generatorInvocation.language != null) {
                        interactiveTaskContext.logger.info(
                            `Writing dynamic snippet tests to ${generatorInvocation.absolutePathToLocalOutput}`
                        );
                        await generateDynamicSnippetTests({
                            context: interactiveTaskContext,
                            ir,
                            config: generatorConfig,
                            language: generatorInvocation.language,
                            outputDir: generatorInvocation.absolutePathToLocalOutput
                        });
                    } else {
                        interactiveTaskContext.logger.info("Skipping dynamic snippet tests; language is unset");
                    }
                }
            });
        })
    );

    if (results.some((didSucceed) => !didSucceed)) {
        context.failAndThrow();
    }
}

export async function writeResolvedSnippetsJson({
    absolutePathToResolvedSnipppetTemplates,
    absolutePathToLocalSnippetTemplateJSON,
    ir,
    generatorInvocation
}: {
    absolutePathToResolvedSnipppetTemplates: AbsoluteFilePath;
    absolutePathToLocalSnippetTemplateJSON: AbsoluteFilePath;
    ir: IntermediateRepresentation;
    generatorInvocation: generatorsYml.GeneratorInvocation;
}): Promise<void> {
    const endpointSnippetTemplates: Record<string, Fern.SnippetRegistryEntry> = {};
    if (absolutePathToLocalSnippetTemplateJSON != null) {
        const contents = (await readFile(absolutePathToLocalSnippetTemplateJSON)).toString();
        if (contents.length <= 0) {
            return;
        }
        const parsed = JSON.parse(contents);
        if (Array.isArray(parsed)) {
            for (const template of parsed) {
                const entry: Fern.SnippetRegistryEntry = template;
                if (entry.endpointId.identifierOverride != null) {
                    endpointSnippetTemplates[entry.endpointId.identifierOverride] = entry;
                }
            }
        }
    }

    const irEndpoints: Record<string, HttpEndpoint> = Object.fromEntries(
        Object.entries(ir.services)
            .flatMap(([_, service]) => service.endpoints)
            .map((endpoint) => [endpoint.id, endpoint])
    );

    const snippets: string[] = [];
    for (const [endpointId, snippetTemplate] of Object.entries(endpointSnippetTemplates)) {
        const template = Template.from(snippetTemplate);
        const irEndpoint = irEndpoints[endpointId];
        if (irEndpoint == null) {
            continue;
        }
        for (const example of [...irEndpoint.userSpecifiedExamples, ...irEndpoint.autogeneratedExamples]) {
            try {
                const snippet = template.resolve({
                    headers: [
                        ...(example.example?.serviceHeaders ?? []),
                        ...(example.example?.endpointHeaders ?? [])
                    ].map((header) => {
                        return {
                            name: header.name.wireValue,
                            value: header.value.jsonExample
                        };
                    }),
                    pathParameters: [
                        ...(example.example?.rootPathParameters ?? []),
                        ...(example.example?.servicePathParameters ?? []),
                        ...(example.example?.endpointPathParameters ?? [])
                    ].map((parameter) => {
                        return {
                            name: parameter.name.originalName,
                            value: parameter.value.jsonExample
                        };
                    }),
                    queryParameters: [...(example.example?.queryParameters ?? [])].map((parameter) => {
                        return {
                            name: parameter.name.wireValue,
                            value: parameter.value.jsonExample
                        };
                    }),
                    requestBody: example.example?.request?.jsonExample
                });
                switch (snippet.type) {
                    case "typescript":
                        try {
                            snippets.push(prettier.format(snippet.client, { parser: "babel" }));
                        } catch {
                            snippets.push(snippet.client);
                        }
                        break;
                    case "python":
                        snippets.push(snippet.sync_client);
                        break;
                }
            } catch (err) {}
        }
    }
    let resovledMd = "";
    for (const snippet of snippets) {
        resovledMd += `\`\`\`${generatorInvocation.language}
${snippet} 
\`\`\`                        
\n\n`;
    }
    if (resovledMd.length > 0) {
        await writeFile(absolutePathToResolvedSnipppetTemplates, resovledMd);
    }
}

export async function writeIrAndConfigJson({
    organization,
    absolutePathToFernConfig,
    workspace,
    generatorGroup,
    keepDocker,
    context,
    irVersionOverride,
    outputVersionOverride
}: {
    organization: string;
    workspace: FernWorkspace;
    absolutePathToFernConfig: AbsoluteFilePath | undefined;
    generatorGroup: generatorsYml.GeneratorGroup;
    keepDocker: boolean;
    context: TaskContext;
    irVersionOverride: string | undefined;
    outputVersionOverride: string | undefined;
}): Promise<void> {
    const workspaceTempDir = await getWorkspaceTempDir();

    await Promise.all(
        generatorGroup.generators.map(async (generatorInvocation) => {
            return context.runInteractiveTask({ name: generatorInvocation.name }, async (interactiveTaskContext) => {
                if (generatorInvocation.absolutePathToLocalOutput == null) {
                    interactiveTaskContext.failWithoutThrowing(
                        "Cannot generate because output location is not local-file-system"
                    );
                } else {
                    await writeFilesToDiskAndRunGenerator({
                        organization,
                        absolutePathToFernConfig,
                        workspace,
                        generatorInvocation,
                        absolutePathToLocalOutput: generatorInvocation.absolutePathToLocalOutput,
                        absolutePathToLocalSnippetJSON: AbsoluteFilePath.of(
                            join(
                                generatorInvocation.absolutePathToLocalOutput,
                                RelativeFilePath.of(SNIPPET_JSON_FILENAME)
                            )
                        ),
                        absolutePathToLocalSnippetTemplateJSON: AbsoluteFilePath.of(
                            join(
                                generatorInvocation.absolutePathToLocalOutput,
                                RelativeFilePath.of(SNIPPET_TEMPLATES_JSON_FILENAME)
                            )
                        ),
                        audiences: generatorGroup.audiences,
                        workspaceTempDir,
                        keepDocker,
                        context: interactiveTaskContext,
                        irVersionOverride,
                        outputVersionOverride,
                        writeUnitTests: true,
                        generateOauthClients: true,
                        generatePaginatedClients: true
                    });
                    interactiveTaskContext.logger.info(
                        chalk.green("Wrote files to " + generatorInvocation.absolutePathToLocalOutput)
                    );
                }
            });
        })
    );
}
