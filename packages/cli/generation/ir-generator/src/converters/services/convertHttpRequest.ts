import { RawSchemas } from "@fern-api/yaml-schema";
import { HttpRequest } from "@fern-fern/ir-model/services/http";
import { TypeReference } from "@fern-fern/ir-model/types";
import { FernFileContext } from "../../FernFileContext";

export function convertHttpRequest({
    request,
    file,
}: {
    request: RawSchemas.HttpRequestSchema | null | undefined;
    file: FernFileContext;
}): HttpRequest {
    const type = request != null ? file.parseTypeReference(request) : undefined;
    return {
        docs: typeof request !== "string" ? request?.docs : undefined,
        type: type ?? TypeReference.void(),
        typeV2: type,
    };
}
