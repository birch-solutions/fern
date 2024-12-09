import axios from "axios";
import { writeFile } from "fs/promises";
import { dump } from "js-yaml";
import { join } from "path";
import tmp from "tmp-promise";
import { Logger } from "../../../logger/src/Logger";

export type LoadOpenAPIResult = SuccessLoadOpenAPI | FailedLoadOpenAPI;

export enum LoadOpenAPIStatus {
    Success = "success",
    Failure = "failure"
}
export interface SuccessLoadOpenAPI {
    status: LoadOpenAPIStatus.Success;
    filePath: string;
}

export interface FailedLoadOpenAPI {
    status: LoadOpenAPIStatus.Failure;
    errorMessage: string;
}

export async function loadOpenAPIFromUrl({ url, logger }: { url: string; logger: Logger }): Promise<LoadOpenAPIResult> {
    try {
        const response = await axios.get(url);
        const contentType = response.headers["content-type"] ?? "";
        if (typeof contentType !== "string") {
            throw new Error("Content-Type from endpoint is not defined.");
        }

        let yamlData;

        if (contentType.includes("json")) {
            yamlData = dump(response.data);
        } else if (contentType.includes("yaml")) {
            yamlData = response.data;
        } else {
            throw new Error(
                "Unsupported Content-Type from endpoint. Please ensure you're pointing to a URL that returns JSON or Y(A)ML and not HTML (e.g., Swagger UI webpage)"
            );
        }

        const tmpDir = await tmp.dir();
        const filePath = join(tmpDir.path, "openapi.yml");
        logger.debug("tmpDir", tmpDir.path);
        logger.debug("filePath", filePath);
        await writeFile(filePath, yamlData);
        return {
            status: LoadOpenAPIStatus.Success,
            filePath
        };
    } catch (error) {
        logger.debug(`Encountered an error while loading OpenAPI spec: ${JSON.stringify(error)}`);
        const errorMessage = `Failed to load OpenAPI spec from ${url}`;
        return {
            status: LoadOpenAPIStatus.Failure,
            errorMessage
        };
    }
}
