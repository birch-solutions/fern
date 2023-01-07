import { AbsoluteFilePath, doesPathExist } from "@fern-api/fs-utils";
import { mkdir, readFile, writeFile } from "fs/promises";
import { homedir } from "os";
import path from "path";

const TOKEN_FILENAME = "token";

export async function storeToken(token: string): Promise<void> {
    if (process.env.LOCAL_STORAGE_FOLDER == null) {
        throw new Error("Failed to store token: path to local storage is undefined!");
    }
    const pathToTokenFile = path.join(homedir(), process.env.LOCAL_STORAGE_FOLDER, TOKEN_FILENAME);
    await mkdir(path.dirname(pathToTokenFile), { recursive: true });
    await writeFile(pathToTokenFile, token);
}

export async function loadToken(): Promise<string | undefined> {
    if (process.env.LOCAL_STORAGE_FOLDER == null) {
        throw new Error("Failed to load token: path to local storage is undefined!");
    }
    const pathToTokenFile = path.join(homedir(), process.env.LOCAL_STORAGE_FOLDER, TOKEN_FILENAME);
    const tokenFileExists = await doesPathExist(AbsoluteFilePath.of(pathToTokenFile));
    if (!tokenFileExists) {
        return undefined;
    }
    const tokenFileContents = await readFile(pathToTokenFile);
    return tokenFileContents.toString();
}
