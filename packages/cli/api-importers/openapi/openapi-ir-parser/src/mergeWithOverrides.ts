import { AbsoluteFilePath } from "@fern-api/fs-utils";
import { TaskContext } from "@fern-api/task-context";
import { readFile } from "fs/promises";
import yaml from "js-yaml";
import { mergeWithOverrides as coreMergeWithOverrides } from "@fern-api/core-utils";

export async function mergeWithOverrides<T>({
    absoluteFilepathToOverrides,
    data,
    context
}: {
    absoluteFilepathToOverrides: AbsoluteFilePath;
    data: T;
    context: TaskContext;
}): Promise<T> {
    let parsedOverrides = null;
    try {
        const contents = (await readFile(absoluteFilepathToOverrides, "utf8")).toString();
        try {
            parsedOverrides = JSON.parse(contents);
        } catch (err) {
            parsedOverrides = yaml.load(contents, { json: true });
        }
    } catch (err) {
        return context.failAndThrow(`Failed to read overrides from file ${absoluteFilepathToOverrides}`);
    }
    return coreMergeWithOverrides({ data, overrides: parsedOverrides });
}
