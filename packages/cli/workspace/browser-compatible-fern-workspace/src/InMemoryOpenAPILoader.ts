import { getParseOptions, OpenAPIDocument } from "@fern-api/openapi-ir-parser";
import { OpenAPIWorkspace } from "./OpenAPIWorkspace";
import { OpenAPI } from "openapi-types";
import { bundle, Source } from "@redocly/openapi-core";
import { DEFAULT_OPENAPI_BUNDLE_OPTIONS } from "@fern-api/api-workspace-commons";
import { mergeWithOverrides as coreMergeWithOverrides } from "@fern-api/core-utils";

export class InMemoryOpenAPILoader {
    public async loadDocument(spec: OpenAPIWorkspace.Spec): Promise<OpenAPIDocument> {
        return {
            type: "openapi",
            value: await this.loadParsedOpenAPI({
                openapi: spec.parsed,
                overrides: spec.overrides
            }),
            settings: spec.settings != null ? getParseOptions({ overrides: spec.settings }) : undefined
        };
    }

    private async loadParsedOpenAPI({
        openapi,
        overrides
    }: {
        openapi: OpenAPI.Document;
        overrides: OpenAPI.Document | undefined;
    }): Promise<OpenAPI.Document> {
        const parsed = await this.parseOpenAPI({
            parsed: openapi
        });
        if (overrides != null) {
            const merged = await coreMergeWithOverrides({ data: parsed, overrides });
            return await this.parseOpenAPI({
                parsed: merged
            });
        }
        return parsed;
    }

    private async parseOpenAPI({ parsed }: { parsed: OpenAPI.Document }): Promise<OpenAPI.Document> {
        const result = await bundle({
            ...DEFAULT_OPENAPI_BUNDLE_OPTIONS,
            doc: {
                source: new Source("<memory>", "<openapi>"),
                parsed
            }
        });
        return result.bundle.parsed;
    }
}
