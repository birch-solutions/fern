import { BaseOpenAPIWorkspace } from "@fern-api/api-workspace-commons";
import { OpenAPI } from "openapi-types";
import { AbsoluteFilePath } from "@fern-api/path-utils";
import { TaskContext } from "@fern-api/task-context";
import { OpenApiIntermediateRepresentation } from "@fern-api/openapi-ir";
import { parse } from "@fern-api/openapi-ir-parser";
import { InMemoryOpenAPILoader } from "./InMemoryOpenAPILoader";
import { generatorsYml } from "@fern-api/configuration";

const IN_MEMORY_ABSOLUTE_FILEPATH = AbsoluteFilePath.of("/<memory>");

const DEFAULT_WORKSPACE_ARGS = {
    absoluteFilePath: IN_MEMORY_ABSOLUTE_FILEPATH,
    cliVersion: "<unknown>",
    workspaceName: "anonymous"
};

export declare namespace OpenAPIWorkspace {
    export interface Args {
        spec: Spec;
        generatorsConfiguration: generatorsYml.GeneratorsConfiguration | undefined;
    }

    export interface Spec {
        parsed: OpenAPI.Document;
        overrides?: OpenAPI.Document;
        settings?: Settings;
    }

    export type Settings = BaseOpenAPIWorkspace.Settings;
}

export class OpenAPIWorkspace extends BaseOpenAPIWorkspace {
    private spec: OpenAPIWorkspace.Spec;
    private loader: InMemoryOpenAPILoader;

    constructor({ spec, generatorsConfiguration }: OpenAPIWorkspace.Args) {
        super({
            ...DEFAULT_WORKSPACE_ARGS,
            generatorsConfiguration,
            respectReadonlySchemas: spec.settings?.respectReadonlySchemas,
            onlyIncludeReferencedSchemas: spec.settings?.onlyIncludeReferencedSchemas,
            inlinePathParameters: spec.settings?.inlinePathParameters,
            objectQueryParameters: spec.settings?.objectQueryParameters
        });
        this.spec = spec;
        this.loader = new InMemoryOpenAPILoader();
    }

    public async getOpenAPIIr(
        {
            context
        }: {
            context: TaskContext;
        },
        options?: OpenAPIWorkspace.Settings
    ): Promise<OpenApiIntermediateRepresentation> {
        const document = await this.loader.loadDocument(this.spec);
        return await parse({
            context,
            documents: [document],
            options: {
                ...options,
                onlyIncludeReferencedSchemas:
                    options?.onlyIncludeReferencedSchemas ?? this.onlyIncludeReferencedSchemas,
                respectReadonlySchemas: options?.respectReadonlySchemas ?? this.respectReadonlySchemas,
                inlinePathParameters: options?.inlinePathParameters ?? this.inlinePathParameters,
                objectQueryParameters: options?.objectQueryParameters ?? this.objectQueryParameters
            }
        });
    }

    public getAbsoluteFilePaths(): AbsoluteFilePath[] {
        return [];
    }
}
