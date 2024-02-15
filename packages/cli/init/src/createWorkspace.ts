import { AbsoluteFilePath, doesPathExist, join, RelativeFilePath } from "@fern-api/fs-utils";
import { DEFAULT_GROUP_NAME, GeneratorsConfigurationSchema } from "@fern-api/generators-configuration";
import {
    DEFINITION_DIRECTORY,
    GENERATORS_CONFIGURATION_FILENAME,
    OPENAPI_DIRECTORY,
    ROOT_API_FILENAME
} from "@fern-api/project-configuration";
import { formatDefinitionFile } from "@fern-api/yaml-formatter";
import { RootApiFileSchema } from "@fern-api/yaml-schema";
import { mkdir, readFile, writeFile } from "fs/promises";
import yaml from "js-yaml";
import path from "path";
import { SAMPLE_IMDB_API } from "./sampleImdbApi";

export async function createFernWorkspace({
    directoryOfWorkspace
}: {
    directoryOfWorkspace: AbsoluteFilePath;
}): Promise<void> {
    if (!(await doesPathExist(directoryOfWorkspace))) {
        await mkdir(directoryOfWorkspace);
    }
    await writeGeneratorsConfiguration({
        filepath: join(directoryOfWorkspace, RelativeFilePath.of(GENERATORS_CONFIGURATION_FILENAME))
    });
    const directoryOfDefinition = join(directoryOfWorkspace, RelativeFilePath.of(DEFINITION_DIRECTORY));
    await writeSampleApiDefinition({
        directoryOfDefinition
    });
}

export async function createOpenAPIWorkspace({
    directoryOfWorkspace,
    openAPIFilePath
}: {
    directoryOfWorkspace: AbsoluteFilePath;
    openAPIFilePath: AbsoluteFilePath;
}): Promise<void> {
    if (!(await doesPathExist(directoryOfWorkspace))) {
        await mkdir(directoryOfWorkspace);
    }
    await writeGeneratorsConfiguration({
        filepath: join(directoryOfWorkspace, RelativeFilePath.of(GENERATORS_CONFIGURATION_FILENAME))
    });
    const openapiDirectory = join(directoryOfWorkspace, RelativeFilePath.of(OPENAPI_DIRECTORY));
    await mkdir(openapiDirectory);
    const openAPIContents = await readFile(openAPIFilePath);
    const openAPIfilename = path.basename(openAPIFilePath);
    await writeFile(join(openapiDirectory, RelativeFilePath.of(openAPIfilename)), openAPIContents);
}

const GENERATORS_CONFIGURATION: GeneratorsConfigurationSchema = {
    "default-group": DEFAULT_GROUP_NAME,
    groups: {
        [DEFAULT_GROUP_NAME]: {
            generators: [
                {
                    name: "fernapi/fern-typescript-node-sdk",
                    version: "0.9.5",
                    output: {
                        location: "local-file-system",
                        path: "../generated/sdks/typescript"
                    }
                }
            ]
        }
    }
};

async function writeGeneratorsConfiguration({ filepath }: { filepath: AbsoluteFilePath }): Promise<void> {
    await writeFile(filepath, yaml.dump(GENERATORS_CONFIGURATION));
}

const ROOT_API: RootApiFileSchema = {
    name: "api",
    "error-discrimination": {
        strategy: "status-code"
    }
};

async function writeSampleApiDefinition({
    directoryOfDefinition
}: {
    directoryOfDefinition: AbsoluteFilePath;
}): Promise<void> {
    await mkdir(directoryOfDefinition);
    await writeFile(join(directoryOfDefinition, RelativeFilePath.of(ROOT_API_FILENAME)), yaml.dump(ROOT_API));

    const absoluteFilepathToImdbYaml = join(directoryOfDefinition, RelativeFilePath.of("imdb.yml"));
    await writeFile(
        absoluteFilepathToImdbYaml,
        await formatDefinitionFile({
            fileContents: SAMPLE_IMDB_API
        })
    );
}
