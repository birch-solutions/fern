import { AbsoluteFilePath } from "@fern-api/core-utils";
import { TaskContext } from "@fern-api/task-context";
import { findUp } from "find-up";
import glob from "glob-promise";

const FERN_DIRECTORY = "fern";

export async function getAllYamlFiles(context: TaskContext): Promise<AbsoluteFilePath[]> {
    const fernDirectory = await getFernDirectory();
    if (fernDirectory == null) {
        return context.fail(`Directory "${FERN_DIRECTORY}" not found.`);
    }
    const filepaths = await glob("*/definition/**/*.yml", {
        cwd: fernDirectory,
        absolute: true,
    });
    return filepaths.map(AbsoluteFilePath.of);
}

async function getFernDirectory(): Promise<AbsoluteFilePath | undefined> {
    const fernDirectoryStr = await findUp(FERN_DIRECTORY, { type: "directory" });
    if (fernDirectoryStr == null) {
        return undefined;
    }
    return AbsoluteFilePath.of(fernDirectoryStr);
}
