import { OpenAPIIntermediateRepresentation } from "@fern-fern/openapi-ir-model/ir/_types";
import { OpenAPIV3 } from "openapi-types";
import { convertPathItem } from "./converters/convertPathItem";
import { convertSchema } from "./converters/convertSchemas";
import { convertSecurityScheme } from "./converters/convertSecurityScheme";
import { convertServer } from "./converters/convertServer";

export function generateIr(openApi: OpenAPIV3.Document): OpenAPIIntermediateRepresentation {
    return {
        title: openApi.info.title,
        description: openApi.info.description,
        servers: (openApi.servers ?? []).map((server) => convertServer(server)),
        tags: [],
        endpoints: Object.entries(openApi.paths).flatMap(([path, pathItem]) => {
            if (pathItem == null) {
                return [];
            }
            return convertPathItem(path, pathItem, openApi);
        }),
        schemas: Object.fromEntries(
            Object.entries(openApi.components?.schemas ?? {}).map(([key, schema]) => [key, convertSchema(schema)])
        ),
        securitySchemes: Object.fromEntries(
            Object.entries(openApi.components?.securitySchemes ?? {}).map(([key, securityScheme]) => [
                key,
                convertSecurityScheme(securityScheme),
            ])
        ),
    };
}
