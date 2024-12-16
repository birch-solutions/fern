import { AsyncAPIObject } from "@asyncapi/parser/esm/spec-types/v3";
import { Logger } from "@fern-api/logger";
import { Namespace, SdkGroup, SdkGroupName } from "@fern-api/openapi-ir";
import { TaskContext } from "@fern-api/task-context";
import { OpenAPIV3 } from "openapi-types";
import { ParseOpenAPIOptions } from "../options";
import { SCHEMA_REFERENCE_PREFIX } from "../schema/convertSchemas";
import { SchemaParserContext } from "../schema/SchemaParserContext";
import { isReferenceObject } from "../schema/utils/isReferenceObject";

export abstract class AbstractAsyncAPIV2ParserContext implements SchemaParserContext {
    public logger: Logger;
    public document: AsyncAPIObject;
    public taskContext: TaskContext;
    public DUMMY: SchemaParserContext;
    public options: ParseOpenAPIOptions;
    public namespace: string | undefined;

    constructor({
        document,
        taskContext,
        options,
        namespace
    }: {
        document: AsyncAPIObject;
        taskContext: TaskContext;
        options: ParseOpenAPIOptions;
        namespace: string | undefined;
    }) {
        this.document = document;
        this.taskContext = taskContext;
        this.logger = taskContext.logger;
        this.DUMMY = this;
        this.options = options;
        this.namespace = namespace;
    }

    public resolveGroupName(groupName: SdkGroupName): SdkGroupName {
        if (this.namespace != null) {
            return [{ type: "namespace", name: this.namespace }, ...groupName];
        }

        return groupName;
    }

    public resolveTags(operationTags: string[] | undefined, fallback?: string): SdkGroup[] {
        if (this.namespace == null && operationTags == null && fallback != null) {
            return [fallback];
        }

        const tags: SdkGroup[] = [];
        if (this.namespace != null) {
            const namespaceSegment: Namespace = {
                type: "namespace",
                name: this.namespace
            };

            tags.push(namespaceSegment);
        }
        return tags.concat(operationTags ?? []);
    }

    public resolveSchemaReference(schema: OpenAPIV3.ReferenceObject): OpenAPIV3.SchemaObject {
        if (
            this.document.components == null ||
            this.document.components.schemas == null ||
            !schema.$ref.startsWith(SCHEMA_REFERENCE_PREFIX)
        ) {
            throw new Error(`Failed to resolve ${schema.$ref}`);
        }
        const schemaKey = schema.$ref.substring(SCHEMA_REFERENCE_PREFIX.length);
        const splitSchemaKey = schemaKey.split("/");
        if (splitSchemaKey[0] == null) {
            throw new Error(`${schema.$ref} is undefined`);
        }
        let resolvedSchema = this.document.components.schemas[splitSchemaKey[0]];
        if (resolvedSchema == null) {
            throw new Error(`${splitSchemaKey[0]} is undefined`);
        }

        if (splitSchemaKey[1] === "properties" && splitSchemaKey[2] != null) {
            const resolvedProperty = resolvedSchema.properties?.[splitSchemaKey[2]];
            if (resolvedProperty == null) {
                throw new Error(`${schema.$ref} is undefiened. Property does not exist on object.`);
            } else if (isReferenceObject(resolvedProperty)) {
                resolvedSchema = this.resolveSchemaReference(resolvedProperty);
            } else {
                resolvedSchema = resolvedProperty;
            }
        }

        return resolvedSchema;
    }

    public referenceExists(ref: string): boolean {
        // Step 1: Get keys
        const keys = ref
            .substring(2)
            .split("/")
            .map((key) => key.replace(/~1/g, "/"));

        // Step 2: Index recursively into the document with all the keys
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let resolvedSchema: any = this.document;
        for (const key of keys) {
            if (typeof resolvedSchema !== "object" || resolvedSchema == null) {
                return false;
            }
            resolvedSchema = resolvedSchema[key];
        }
        return true;
    }

    public abstract markSchemaAsReferencedByNonRequest(schemaId: string): void;

    public abstract markSchemaAsReferencedByRequest(schemaId: string): void;

    public abstract markReferencedByDiscriminatedUnion(
        schema: OpenAPIV3.ReferenceObject,
        discrminant: string,
        times: number
    ): void;

    public abstract markSchemaWithDiscriminantValue(
        schema: OpenAPIV3.ReferenceObject,
        discrminant: string,
        discriminantValue: string
    ): void;
}

export class AsyncAPIV2ParserContext extends AbstractAsyncAPIV2ParserContext {
    constructor({
        document,
        taskContext,
        options,
        namespace
    }: {
        document: AsyncAPIObject;
        taskContext: TaskContext;
        options: ParseOpenAPIOptions;
        namespace: string | undefined;
    }) {
        super({
            document,
            taskContext,
            options,
            namespace
        });
    }

    markSchemaAsReferencedByNonRequest(schemaId: string): void {
        return;
    }

    markSchemaAsReferencedByRequest(schemaId: string): void {
        return;
    }

    markReferencedByDiscriminatedUnion(schema: OpenAPIV3.ReferenceObject, discrminant: string, times: number): void {
        return;
    }

    markSchemaWithDiscriminantValue(
        schema: OpenAPIV3.ReferenceObject,
        discrminant: string,
        discriminantValue: string
    ): void {
        return;
    }
}