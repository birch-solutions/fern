import { AbsoluteFilePath, doesPathExist, join, RelativeFilePath } from "@fern-api/fs-utils";
import yaml from "js-yaml";
import { readFile } from "fs/promises";
import * as serializers from "@fern-fern/generators-sdk/serialization";
import { TaskContext } from "@fern-api/task-context";
import chalk from "chalk";
import { GeneratorWorkspace } from "../../loadGeneratorWorkspaces";

// TODO: we should share the language and generator type with the FDR definition
export async function validateGenerator({
    generator,
    context
}: {
    generator: GeneratorWorkspace;
    context: TaskContext;
}): Promise<void> {
    const generatorId = generator.workspaceName;
    const generatorConfig = generator.workspaceConfig;

    if (generatorConfig.changelogLocation == null) {
        context.logger.warn("No changelog location specified");
        return;
    }

    const absolutePathToChangelog = join(
        generator.absolutePathToWorkspace,
        RelativeFilePath.of(generatorConfig.changelogLocation)
    );
    if (!(await doesPathExist(absolutePathToChangelog))) {
        context.logger.error(`Changelog does not exist at path ${absolutePathToChangelog}`);
        return;
    }

    await validateGeneratorChangelog({
        absolutePathToChangelog,
        context,
        generatorId,
        allowedTags: generatorConfig.allowedTags
    });
}

async function validateGeneratorChangelog({
    generatorId,
    absolutePathToChangelog,
    context,
    allowedTags
}: {
    generatorId: string;
    absolutePathToChangelog: AbsoluteFilePath;
    context: TaskContext;
    allowedTags: string[] | undefined;
}): Promise<void> {
    let hasErrors = false;
    const changelogs = yaml.load((await readFile(absolutePathToChangelog)).toString());
    if (Array.isArray(changelogs)) {
        for (const entry of changelogs) {
            try {
                const release = serializers.generators.GeneratorReleaseRequest.parseOrThrow({ generatorId, ...entry });
                if (release.tags != null) {
                    for (const tag of release.tags) {
                        if (allowedTags != null && !allowedTags.includes(tag)) {
                            context.logger.error(`Tag ${tag} is not allowed`);
                            throw new Error(
                                `Invalid tag! ${tag} is not allowed, allowed tags are: ${allowedTags.join(", ")}`
                            );
                        }
                    }
                }
                context.logger.debug(chalk.green(`${release.version} is valid`));
            } catch (e) {
                hasErrors = true;
                const maybeVersion = (entry as any)?.version;
                if (maybeVersion != null) {
                    context.logger.error(`${maybeVersion} is invalid`);
                } else {
                    context.logger.error(`Failed to parse: ${yaml.dump(entry)}`);
                }
                // eslint-disable-next-line
                context.logger.error((e as Error)?.message);
            }
        }
    }
    if (!hasErrors) {
        context.logger.info(chalk.green("All changelogs are valid"));
    } else {
        context.failAndThrow();
    }
}
