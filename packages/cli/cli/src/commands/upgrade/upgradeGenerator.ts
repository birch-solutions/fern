import { generatorsYml } from "@fern-api/configuration";
import { AbsoluteFilePath, doesPathExist } from "@fern-api/fs-utils";
import { Project } from "@fern-api/project-loader";
import { TaskContext } from "@fern-api/task-context";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import YAML from "yaml";
import { CliContext } from "../../cli-context/CliContext";

export async function loadAndUpdateGenerators({
    absolutePathToWorkspace,
    context,
    generatorFilter,
    groupFilter,
    includeMajor,
    includeRc,
    cliVersion
}: {
    absolutePathToWorkspace: AbsoluteFilePath;
    context: TaskContext;
    generatorFilter: string | undefined;
    groupFilter: string | undefined;
    includeMajor: boolean;
    includeRc: boolean;
    cliVersion: string;
}): Promise<string | undefined> {
    const filepath = generatorsYml.getPathToGeneratorsConfiguration({ absolutePathToWorkspace });
    if (!(await doesPathExist(filepath))) {
        context.failAndThrow("Generators configuration file was not found, no generators to upgrade.");
        return undefined;
    }
    const contents = await readFile(filepath);
    context.logger.debug(`Found generators: ${contents.toString()}`);

    const parsedDocument = YAML.parseDocument(contents.toString());
    // We cannot use zod to parse the schema since then it loses order
    // is there a better, type-safe way to do this???
    const generatorGroups = parsedDocument.get("groups");
    if (generatorGroups == null) {
        context.failAndThrow("No groups were found within the generators configuration, no generators to upgrade.");
        return undefined;
    }
    if (!YAML.isMap(generatorGroups)) {
        context.failAndThrow(`Expected 'groups' to be a map in ${path.relative(process.cwd(), filepath)}`);
        return undefined;
    }
    context.logger.debug(`Groups found: ${generatorGroups.toString()}`);

    for (const groupBlock of generatorGroups.items) {
        const groupName = groupBlock.key;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments
        const group = groupBlock.value as YAML.YAMLMap<string, YAML.YAMLSeq<YAML.YAMLMap<unknown, unknown>>>;
        if (!YAML.isMap(group)) {
            context.failAndThrow(
                `Expected group ${groupName} to be a map in ${path.relative(process.cwd(), filepath)}`
            );
            continue;
        }

        if (groupFilter != null && group.get("name") !== groupName) {
            continue;
        }

        const generators = group.get("generators");

        if (!YAML.isSeq(generators)) {
            context.failAndThrow(
                `Expected group ${groupName} to have a 'generators' key in ${path.relative(process.cwd(), filepath)}`
            );
            continue;
        }
        context.logger.debug(`Generators found: ${generators.toString()}`);
        for (const generator of generators.items) {
            if (!YAML.isMap(generator)) {
                context.failAndThrow(
                    `Expected generator in group ${groupName} to be a map in ${path.relative(process.cwd(), filepath)}`
                );
            }
            if (generatorFilter != null && generator.get("name") !== generatorFilter) {
                continue;
            }

            const generatorName = generator.get("name") as string;
            const normalizedGeneratorName = generatorsYml.getGeneratorNameOrThrow(generatorName, context);

            const currentGeneratorVersion = generator.get("version") as string;

            const latestVersion = await generatorsYml.getLatestGeneratorVersion({
                generatorName: normalizedGeneratorName,
                cliVersion,
                currentGeneratorVersion,
                includeRc,
                includeMajor,
                context
            });

            if (latestVersion == null) {
                continue;
            }
            context.logger.debug(`Upgrading ${generatorName} from ${currentGeneratorVersion} to ${latestVersion}`);
            generator.set("version", latestVersion);
        }
    }

    return parsedDocument.toString();
}

export async function upgradeGenerator({
    cliContext,
    generator,
    group,
    project: { apiWorkspaces },
    includeMajor,
    includeRc
}: {
    cliContext: CliContext;
    generator: string | undefined;
    group: string | undefined;
    project: Project;
    includeMajor: boolean;
    includeRc: boolean;
}): Promise<void> {
    await Promise.all(
        apiWorkspaces.map(async (workspace) => {
            await cliContext.runTaskForWorkspace(workspace, async (context) => {
                // Not totally necessary, but keeping around to ensure the schema is valid
                const generatorsConfiguration =
                    (await generatorsYml.loadRawGeneratorsConfiguration({
                        absolutePathToWorkspace: workspace.absoluteFilepath,
                        context
                    })) ?? {};
                if (generatorsConfiguration == null || generatorsConfiguration.groups == null) {
                    context.failAndThrow(
                        "No groups were found within the generators configuration, no generators to upgrade."
                    );
                    return;
                }

                context.logger.info(`Upgrading generators in workspace: ${workspace.workspaceName}`);

                const updatedConfiguration = await loadAndUpdateGenerators({
                    absolutePathToWorkspace: workspace.absoluteFilepath,
                    context,
                    generatorFilter: generator,
                    groupFilter: group,
                    includeMajor,
                    includeRc,
                    cliVersion: cliContext.environment.packageVersion
                });

                if (updatedConfiguration != null) {
                    await writeFile(
                        workspace.generatorsConfiguration?.absolutePathToConfiguration ??
                            generatorsYml.getPathToGeneratorsConfiguration({
                                absolutePathToWorkspace: workspace.absoluteFilepath
                            }),
                        updatedConfiguration
                    );
                }
            });
        })
    );
}
