import { Response } from "@fern-fern/openapi-ir-model/ir";
import { OpenAPIV3 } from "openapi-types";
import { OpenAPIV3ParserContext } from "../../OpenAPIV3ParserContext";
import { isReferenceObject } from "../../utils/isReferenceObject";
import { convertSchema } from "../convertSchemas";

const APPLICATION_JSON_CONTENT = "application/json";
const TEXT_PLAIN_CONTENT = "text/plain";

// The converter will attempt to get response in priority order
// (i.e. try for 200, then 201, then 204)
const SUCCESSFUL_STATUS_CODES = ["200", "201", "204"];

export function convertResponse({
    responses,
    context,
    responseBreadcrumbs,
}: {
    responses: OpenAPIV3.ResponsesObject;
    context: OpenAPIV3ParserContext;
    responseBreadcrumbs: string[];
}): Response | undefined {
    for (const statusCode of SUCCESSFUL_STATUS_CODES) {
        const response = responses[statusCode];

        if (response == null) {
            continue;
        }
        if (isReferenceObject(response)) {
            throw new Error(`Converting referenced response is unsupported: ${JSON.stringify(response)}`);
        }
        const responseSchema =
            response.content?.[APPLICATION_JSON_CONTENT]?.schema ?? response.content?.[TEXT_PLAIN_CONTENT]?.schema;

        if (responseSchema == null) {
            continue;
        }

        return {
            description: response.description,
            schema: convertSchema(responseSchema, false, context, responseBreadcrumbs),
        };
    }
    return undefined;
}
