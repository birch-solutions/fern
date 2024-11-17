import { assertNever } from "@fern-api/core-utils";
import { RawSchemas } from "@fern-api/fern-definition-schema";
import { Logger } from "@fern-api/logger";
import {
    OpenApiIntermediateRepresentation,
    Schema,
    SchemaId,
    HttpMethod,
    ObjectSchema,
    OneOfSchema
} from "@fern-api/openapi-ir";
import { TaskContext } from "@fern-api/task-context";
import { FernDefinitionBuilder, FernDefinitionBuilderImpl } from "@fern-api/importer-commons";
import { isSchemaEqual } from "@fern-api/openapi-ir-parser";
import { State } from "./State";

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

    globalHeaderOverrides?: RawSchemas.WithHeadersSchema;

    /**
     * If true, the converter will generate complex query parameters in the generated Fern Definition.
     */
    objectQueryParameters: boolean;

    /**
     * If true, the converter will respect readonly properties in OpenAPI schemas.
     */
    respectReadonlySchemas: boolean;

    /**
     * If true, the converter will only include schemas referenced by endpoints.
     */
    onlyIncludeReferencedSchemas: boolean;
}

export class OpenApiIrConverterContext {
    public logger: Logger;
    public taskContext: TaskContext;
    public ir: OpenApiIntermediateRepresentation;
    public builder: FernDefinitionBuilder;
    public environmentOverrides: RawSchemas.WithEnvironmentsSchema | undefined;
    public authOverrides: RawSchemas.WithAuthSchema | undefined;
    public globalHeaderOverrides: RawSchemas.WithHeadersSchema | undefined;
    public detectGlobalHeaders: boolean;
    public objectQueryParameters: boolean;
    public respectReadonlySchemas: boolean;
    public onlyIncludeReferencedSchemas: boolean;

    private enableUniqueErrorsPerEndpoint: boolean;
    private defaultServerName: string | undefined = undefined;
    private unknownSchema: Set<number> = new Set();

    /**
     * The set of referenced schema ids to include in the generated definition.
     * If this value is undefined, _all_ schemaIds should be treated as referenced,
     * and therefore included in the generated definition.
     */
    private referencedSchemaIds: Set<SchemaId> | undefined;

    /**
     * The current endpoint method being processed. This is used to determine
     * whether certain properties should be included in the generated definition
     * (e.g. readonly properties are excluded for POST/PUT endpoints).
     */
    private endpointMethod: HttpMethod | undefined;

    /**
     * Tracks the state in which a schema is being processed (e.g. endpoint, channel, webhook,
     * request). It's possible that a schema is being processed in multiple states (e.g. an
     * endpoint and a request).
     */
    private state: Set<State> = new Set();

    constructor({
        taskContext,
        ir,
        enableUniqueErrorsPerEndpoint,
        detectGlobalHeaders,
        environmentOverrides,
        globalHeaderOverrides,
        authOverrides,
        objectQueryParameters,
        respectReadonlySchemas,
        onlyIncludeReferencedSchemas
    }: OpenApiIrConverterContextOpts) {
        this.logger = taskContext.logger;
        this.taskContext = taskContext;
        this.ir = ir;
        this.enableUniqueErrorsPerEndpoint = enableUniqueErrorsPerEndpoint;
        this.builder = new FernDefinitionBuilderImpl(enableUniqueErrorsPerEndpoint);
        if (ir.title != null) {
            this.builder.setDisplayName({ displayName: ir.title });
        }
        this.detectGlobalHeaders = detectGlobalHeaders;
        this.environmentOverrides = environmentOverrides;
        this.authOverrides = authOverrides;
        this.globalHeaderOverrides = globalHeaderOverrides;
        this.objectQueryParameters = objectQueryParameters;
        this.respectReadonlySchemas = respectReadonlySchemas;
        this.onlyIncludeReferencedSchemas = onlyIncludeReferencedSchemas;
        this.referencedSchemaIds = onlyIncludeReferencedSchemas ? new Set() : undefined;

        const schemaByStatusCode: Record<number, Schema> = {};
        if (!this.enableUniqueErrorsPerEndpoint) {
            for (const endpoint of ir.endpoints) {
                for (const [statusCodeString, error] of Object.entries(endpoint.errors)) {
                    const statusCode = parseInt(statusCodeString);
                    const existingSchema = schemaByStatusCode[statusCode];
                    if (existingSchema == null && error.schema != null) {
                        schemaByStatusCode[statusCode] = error.schema;
                    } else if (
                        existingSchema != null &&
                        error.schema != null &&
                        isSchemaEqual(existingSchema, error.schema)
                    ) {
                        // pass
                    } else {
                        this.unknownSchema.add(statusCode);
                    }
                }
            }
        }
    }

    public getReferencedSchemaIds(): SchemaId[] | undefined {
        if (this.referencedSchemaIds == null) {
            return undefined;
        }
        return Array.from(this.referencedSchemaIds);
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

    /**
     * Is error an unknown schema
     */
    public isErrorUnknownSchema(statusCode: number): boolean {
        return this.unknownSchema.has(statusCode);
    }

    /**
     * Returns the current endpoint method being processed
     */
    public getEndpointMethod(): HttpMethod | undefined {
        return this.endpointMethod;
    }

    /**
     * Sets the current endpoint method being processed
     */
    public setEndpointMethod(method: HttpMethod): void {
        this.endpointMethod = method;
    }

    /**
     * Unsets the current endpoint method being processed
     */
    public unsetEndpointMethod(): void {
        this.endpointMethod = undefined;
    }

    /**
     * Returns whether we're currently processing the given state.
     */
    public isInState(state: State): boolean {
        return this.state.has(state);
    }

    /**
     * Sets that we're currently processing the given state.
     */
    public setInState(state: State): void {
        this.state.add(state);
    }

    /**
     * Unsets that we're currently processing the given state.
     */
    public unsetInState(state: State): void {
        this.state.delete(state);
    }

    public shouldMarkSchemaAsReferenced(): boolean {
        return this.onlyIncludeReferencedSchemas && this.isInAnyState(State.Channel, State.Endpoint, State.Webhook);
    }

    /**
     * Marks a schema as referenced.
     */
    public markSchemaAsReferenced(schema: Schema, namespace: string | undefined): void {
        switch (schema.type) {
            case "primitive":
                return;
            case "object":
                this.markObjectSchemaAsReferenced(schema, namespace);
                return;
            case "array":
                this.markSchemaAsReferenced(schema.value, namespace);
                return;
            case "map":
                this.markSchemaAsReferenced(schema.value, namespace);
                return;
            case "optional":
                this.markSchemaAsReferenced(schema.value, namespace);
                return;
            case "reference":
                this.markSchemaIdAsReferenced(schema.schema, namespace);
                return;
            case "oneOf":
                this.markOneofSchemaAsReferenced(schema.value, namespace);
                return;
            case "nullable":
                this.markSchemaAsReferenced(schema.value, namespace);
                return;
            case "enum":
                return;
            case "literal":
                return;
            case "unknown":
                return;
            default:
                assertNever(schema);
        }
    }

    private markObjectSchemaAsReferenced(schema: ObjectSchema, namespace: string | undefined): void {
        for (const allOf of schema.allOf) {
            this.markSchemaIdAsReferenced(allOf.schema, namespace);
        }
        for (const property of schema.properties) {
            this.markSchemaAsReferenced(property.schema, namespace);
        }
    }

    private markOneofSchemaAsReferenced(schema: OneOfSchema, namespace: string | undefined): void {
        switch (schema.type) {
            case "discriminated":
                for (const oneOf of Object.values(schema.schemas)) {
                    this.markSchemaAsReferenced(oneOf, namespace);
                }
                return;
            case "undisciminated":
                for (const oneOf of schema.schemas) {
                    this.markSchemaAsReferenced(oneOf, namespace);
                }
                return;
            default:
                assertNever(schema);
        }
    }

    private markSchemaIdAsReferenced(id: SchemaId, namespace: string | undefined): void {
        if (this.referencedSchemaIds != null && !this.referencedSchemaIds.has(id)) {
            this.referencedSchemaIds.add(id);

            const schema = this.getSchema(id, namespace);
            if (schema != null) {
                this.markSchemaAsReferenced(schema, namespace);
            }
        }
    }

    private isInAnyState(...states: State[]): boolean {
        return states.some((state) => this.isInState(state));
    }
}
