import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { getPathToOutputDirectoriesFile } from "./getPathToOutputDirectoriesFile";

export async function storeOutputDirectories(outputDirectories: string[]): Promise<void> {
    await mkdir(path.dirname(getPathToOutputDirectoriesFile()), { recursive: true });
    await writeFile(getPathToOutputDirectoriesFile(), JSON.stringify(outputDirectories, null, 2));
}
