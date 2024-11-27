import { AbsoluteFilePath, doesPathExist, join, RelativeFilePath } from "@fern-api/fs-utils";
import { TaskContext } from "@fern-api/task-context";
import { readFile } from "fs/promises";
import yaml from "js-yaml";
import { validateSchema } from "../commons/validateSchema";
import { DEPENDENCIES_CONFIGURATION_FILENAME, dependenciesYml } from "@fern-api/configuration";

export async function loadRawDependenciesConfiguration({
    absolutePathToWorkspace,
    context
}: {
    absolutePathToWorkspace: AbsoluteFilePath;
    context: TaskContext;
}): Promise<dependenciesYml.DependenciesConfigurationSchema | undefined> {
    const absolutePathToDependenciesConfiguration = join(
        absolutePathToWorkspace,
        RelativeFilePath.of(DEPENDENCIES_CONFIGURATION_FILENAME)
    );

    if (!(await doesPathExist(absolutePathToDependenciesConfiguration))) {
        return undefined;
    }

    const contentsStr = await readFile(absolutePathToDependenciesConfiguration);
    const contentsParsed = yaml.load(contentsStr.toString());
    return await validateSchema({
        schema: DependenciesConfigurationSchema,
        value: contentsParsed,
        context,
        filepathBeingParsed: absolutePathToDependenciesConfiguration
    });
}