import { generatorsYml, getFernDirectory } from "@fern-api/configuration";
import {
    API_ORIGIN_LOCATION_KEY,
    ASYNC_API_LOCATION_KEY,
    OPENAPI_LOCATION_KEY
} from "@fern-api/configuration/src/generators-yml/schemas/GeneratorsConfigurationSchema";
import { Project } from "@fern-api/project-loader";
import * as fs from "fs";
import { readFile, writeFile } from "fs/promises";
import yaml from "js-yaml";
import path from "path";
import { Readable } from "stream";
import { finished } from "stream/promises";
import { ReadableStream } from "stream/web";
import { CliContext } from "../../cli-context/CliContext";

async function fetchAndWriteFile(url: string, path: string): Promise<void> {
    const resp = await fetch(url);
    if (resp.ok && resp.body) {
        console.debug("Origin successfully fetched, writing to file");
        // Write file to disk
        const fileStream = fs.createWriteStream(path);
        await finished(Readable.fromWeb(resp.body as ReadableStream<any>).pipe(fileStream));

        // Read and format file
        const fileContents = await readFile(path, "utf8");
        try {
            await writeFile(path, JSON.stringify(JSON.parse(fileContents), undefined, 2), "utf8");
        } catch (e) {
            await writeFile(path, yaml.dump(yaml.load(fileContents)), "utf8");
        }
        console.debug("File written successfully");
    }
}

export async function updateApiSpec({
    cliContext,
    project: { apiWorkspaces }
}: {
    cliContext: CliContext;
    project: Project;
}): Promise<void> {
    // Filter to the specified API, if provided, if not then run through them all
    for (const workspace of apiWorkspaces) {
        if (workspace.type === "fern") {
            continue;
        }

        await cliContext.runTaskForWorkspace(workspace, async (context) => {
            const generatorConfig =
                (await generatorsYml.loadRawGeneratorsConfiguration({
                    absolutePathToWorkspace: workspace.absoluteFilepath,
                    context
                })) ?? {};

            const fernDirectory = await getFernDirectory();
            if (fernDirectory == null) {
                return context.failAndThrow(`Fern directory not found.`);
            }
            if (generatorConfig.api != null) {
                let apis;
                if (generatorConfig.api instanceof Array) {
                    apis = generatorConfig.api;
                } else {
                    apis = [generatorConfig.api];
                }
                for (const api of apis) {
                    if (typeof api !== "string" && api.origin != null) {
                        console.log("Origin found, fetching spec from ", api.origin);
                        await fetchAndWriteFile(api.origin, path.join(fernDirectory, api.path));
                    }
                }
            } else if (generatorConfig[ASYNC_API_LOCATION_KEY] != null) {
                if (generatorConfig[API_ORIGIN_LOCATION_KEY] != null) {
                    console.log("Origin found, fetching spec from ", generatorConfig[API_ORIGIN_LOCATION_KEY]);
                    const origin = generatorConfig[API_ORIGIN_LOCATION_KEY];
                    const location = generatorConfig[ASYNC_API_LOCATION_KEY];
                    if (origin != null && location != null) {
                        await fetchAndWriteFile(origin, path.join(fernDirectory, location));
                    }
                }
            } else if (generatorConfig[OPENAPI_LOCATION_KEY] != null) {
                const apiBlock = generatorConfig[OPENAPI_LOCATION_KEY];
                const apiOrigin =
                    typeof apiBlock !== "string"
                        ? apiBlock?.origin ?? generatorConfig[API_ORIGIN_LOCATION_KEY]
                        : generatorConfig[API_ORIGIN_LOCATION_KEY];

                const apiOutput = typeof apiBlock !== "string" ? apiBlock?.path : apiBlock;

                if (apiOrigin != null && apiOutput != null) {
                    origin = apiOrigin;
                    console.log("Origin found, fetching spec from ", apiOrigin);
                    await fetchAndWriteFile(apiOrigin, path.join(fernDirectory, apiOutput));
                }
            }
            return;
        });
    }
}
