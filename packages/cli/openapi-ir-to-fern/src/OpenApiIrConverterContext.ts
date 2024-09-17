import { RawSchemas } from "@fern-api/fern-definition-schema";
import { Logger } from "@fern-api/logger";
import { OpenApiIntermediateRepresentation, Schema, SchemaId } from "@fern-api/openapi-ir-sdk";
import { TaskContext } from "@fern-api/task-context";
import { FernDefinitionBuilder, FernDefinitionBuilderImpl } from "./FernDefnitionBuilder";

export interface OpenApiIrConverterContextOpts {
    taskContext: TaskContext;
    ir: OpenApiIntermediateRepresentation;

    /**
     * If true, each error will be made unique per endpoint. This is the preferred behavior for Docs.
     * If false, error codes will be shared across endpoints. The side effect is that if more than one error schema is detected for each error code, then the error schema will default to unknown. This is the preferred behavior for SDKs.
     */
    enableUniqueErrorsPerEndpoint: boolean;

    /**
     * If true, the converter will detect frequently headers and add extract them as global headers within
     * the IR. This is primarily used for generating SDKs, but disabled for docs as it allows the documentation
     */
    detectGlobalHeaders: boolean;

    authOverrides?: RawSchemas.WithAuthSchema;

    environmentOverrides?: RawSchemas.WithEnvironmentsSchema;
}

export class OpenApiIrConverterContext {
    public logger: Logger;
    public taskContext: TaskContext;
    public ir: OpenApiIntermediateRepresentation;
    public builder: FernDefinitionBuilder;
    public environmentOverrides: RawSchemas.WithEnvironmentsSchema | undefined;
    public authOverrides: RawSchemas.WithAuthSchema | undefined;
    public detectGlobalHeaders: boolean;
    private defaultServerName: string | undefined = undefined;

    constructor({
        taskContext,
        ir,
        enableUniqueErrorsPerEndpoint,
        detectGlobalHeaders,
        environmentOverrides,
        authOverrides
    }: OpenApiIrConverterContextOpts) {
        this.logger = taskContext.logger;
        this.taskContext = taskContext;
        this.ir = ir;
        this.builder = new FernDefinitionBuilderImpl(ir, false, enableUniqueErrorsPerEndpoint);
        this.detectGlobalHeaders = detectGlobalHeaders;
        this.environmentOverrides = environmentOverrides;
        this.authOverrides = authOverrides;
    }

    public getSchema(id: SchemaId, namespace: string | undefined): Schema | undefined {
        if (namespace == null) {
            return this.ir.groupedSchemas.rootSchemas[id];
        }

        return this.ir.groupedSchemas.namespacedSchemas[namespace]?.[id];
    }

    /**
     * Returns the default server URL. This URL should only be set for multi-url cases.
     */
    public getDefaultServerName(): string | undefined {
        return this.defaultServerName;
    }

    /**
     * Sets the default server URL. This URL should only be set for multi-url cases.
     */
    public setDefaultServerName(name: string): void {
        this.defaultServerName = name;
    }
}
