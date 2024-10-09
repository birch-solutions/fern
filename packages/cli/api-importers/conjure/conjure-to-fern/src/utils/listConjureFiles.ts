import { DefinitionFile, serialization } from "@fern-api/conjure-sdk";
import { AbsoluteFilePath, listFiles, relative, RelativeFilePath } from "@fern-api/fs-utils";
import { readFile } from "fs/promises";
import yaml from "js-yaml";

export interface ConjureFile {
    fileContents: DefinitionFile;
    absoluteFilepath: AbsoluteFilePath;
    relativeFilepath: RelativeFilePath;
}

export async function listConjureFiles(root: AbsoluteFilePath, extensionGlob: string): Promise<ConjureFile[]> {
    const files: ConjureFile[] = [];

    for (const absoluteFilepath of await listFiles(root, extensionGlob)) {
        files.push(
            await createConjureFile({
                relativeFilepath: relative(root, absoluteFilepath),
                absoluteFilepath
            })
        );
    }

    return files;
}

async function createConjureFile({
    relativeFilepath,
    absoluteFilepath
}: {
    relativeFilepath: RelativeFilePath;
    absoluteFilepath: AbsoluteFilePath;
}): Promise<ConjureFile> {
    const rawContents = (await readFile(absoluteFilepath))
        .toString()
        .replaceAll(": rid", ": string")
        .replaceAll("<rid>", "<string>")
        .replaceAll("rid>", "string>")
        .replaceAll(": safelong", ": long")
        .replaceAll("<safelong>", "<long>")
        .replaceAll("safelong>", "long>")
        .replaceAll(": binary", ": file")
        .replaceAll(": any", ": unknown")
        .replaceAll("<any>", "<unknown>")
        .replaceAll("any>", "unknown>");
    return {
        relativeFilepath,
        absoluteFilepath,
        fileContents: serialization.DefinitionFile.parseOrThrow(yaml.load(rawContents), {
            unrecognizedObjectKeys: "passthrough",
            allowUnrecognizedEnumValues: true,
            allowUnrecognizedUnionMembers: true
        })
    };
}
