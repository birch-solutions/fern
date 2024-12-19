import { getAllOpenAPISpecs, LazyFernWorkspace, OSSWorkspace, OpenAPILoader } from "@fern-api/lazy-fern-workspace";
import {
    ErrorCollector,
    OpenApiDocumentConverterNode,
    BaseOpenApiV3_1ConverterNodeContext
} from "@fern-api/docs-parsers";
import { OpenAPIV3_1 } from "openapi-types";
import { merge } from "lodash-es";
import { AbstractAPIWorkspace } from "@fern-api/api-workspace-commons";
import { TaskContext } from "@fern-api/task-context";

export async function generateFdrFromOpenApiWorkspace(
    workspace: AbstractAPIWorkspace<unknown>,
    context: TaskContext
): Promise<ReturnType<OpenApiDocumentConverterNode["convert"]>> {
    if (workspace instanceof LazyFernWorkspace) {
        context.logger.info("Skipping, API is specified as a Fern Definition.");
        return;
    } else if (!(workspace instanceof OSSWorkspace)) {
        return;
    }

    const openApiLoader = new OpenAPILoader(workspace.absoluteFilePath);
    const openApiSpecs = await getAllOpenAPISpecs({ context, specs: workspace.specs });

    const openApiDocuments = await openApiLoader.loadDocuments({ context, specs: openApiSpecs });

    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fdrApiDefinition: ReturnType<OpenApiDocumentConverterNode["convert"]>;
    for (const openApi of openApiDocuments) {
        if (openApi.type !== "openapi") {
            continue;
        }

        const oasContext: BaseOpenApiV3_1ConverterNodeContext = {
            document: openApi.value as OpenAPIV3_1.Document,
            logger: context.logger,
            errors: new ErrorCollector()
        };

        const openApiFdrJson = new OpenApiDocumentConverterNode({
            input: openApi.value as OpenAPIV3_1.Document,
            context: oasContext,
            accessPath: [],
            pathId: workspace.workspaceName ?? "openapi parser"
        });

        fdrApiDefinition = merge(fdrApiDefinition, openApiFdrJson.convert());
    }

    return fdrApiDefinition;
}
