import { TaskContext } from "@fern-api/task-context";
import { isRawObjectDefinition, RawSchemas } from "@fern-api/yaml-schema";
import { OpenAPIV3 } from "openapi-types";
import { InlinedTypeNamer } from "./InlinedTypeNamer";
import { OpenApiV3Context, OpenAPIV3Endpoint } from "./OpenApiV3Context";
import { SchemaConverter } from "./SchemaConverter";
import { APPLICATION_JSON_CONTENT, getFernReferenceForSchema, isReferenceObject, maybeConvertSchemaToPrimitive } from "./utils";


export interface ConvertedEndpoint {
    endpoint: RawSchemas.HttpEndpointSchema;
    additionalTypeDeclarations?: Record<string, RawSchemas.TypeDeclarationSchema>
}

const TWO_HUNDRED_STATUS_CODE = 200;

export class EndpointConverter {

    private endpoint: OpenAPIV3Endpoint;
    private context: OpenApiV3Context;
    private resolvedParameters: OpenAPIV3.ParameterObject[] = [];
    private globalHeaders: Set<string> = new Set();
    private taskContext: TaskContext;
    private inlinedTypeNamer: InlinedTypeNamer;
    private breadcrumbs: string[];

    constructor(endpoint: OpenAPIV3Endpoint, context: OpenApiV3Context, taskContext: TaskContext, inlinedTypeNamer: InlinedTypeNamer) {
        this.endpoint = endpoint;
        this.context = context;
        this.taskContext = taskContext;
        this.inlinedTypeNamer = inlinedTypeNamer;
        this.breadcrumbs = [`${endpoint.httpMethod} ${endpoint.path}`];
        (this.endpoint.definition.parameters ?? []).forEach((parameter) => {
            const resolvedParameter = isReferenceObject(parameter) 
                ? this.context.maybeResolveParameterReference(parameter)
                : parameter;
            if (resolvedParameter != null) {
                this.resolvedParameters.push(resolvedParameter);
            }
        });
    }

    public convert(): ConvertedEndpoint | undefined {
        const convertedHttpMethod = convertHttpMethod(this.endpoint.httpMethod);
        if (convertedHttpMethod == null) {
            return undefined;
        }
        const pathParameters = this.getPathParameters();
        const queryParameters = this.getQueryParameters();
        const headerParameters = this.getHeaderParameters();
        const requestBody = this.endpoint.definition.requestBody != null 
            ? this.convertRequestBody(this.endpoint.definition.requestBody) 
            : undefined;
        const successResponse = this.endpoint.definition.responses[TWO_HUNDRED_STATUS_CODE];
        const responseBody = successResponse != null
            ? this.convertResponseBody(successResponse)
            : undefined;
        const additionalTypeDeclarations: Record<string, RawSchemas.TypeDeclarationSchema> = {
            ...requestBody?.additionalTypes,
            ...responseBody?.additionalTypes,
        };
           
        const endpoint: RawSchemas.HttpEndpointSchema = {
            path: this.endpoint.path,
            method: convertedHttpMethod,
            docs: this.endpoint.definition.description,
            "display-name": this.endpoint.definition.summary,
            "path-parameters": pathParameters,
            "request": {
                "query-parameters": Object.keys(queryParameters).length === 0 ? queryParameters : undefined,
                "headers": Object.keys(headerParameters).length === 0 ? headerParameters : undefined,
                "body": requestBody?.value,
            },
            "response": responseBody?.response
        };
        return {
            endpoint, 
            additionalTypeDeclarations
        };
    }

    private getPathParameters(): Record<string, RawSchemas.HttpPathParameterSchema> {
        const pathParameters: Record<string, RawSchemas.HttpPathParameterSchema> = {};
        for (const parameter of this.resolvedParameters) {
            if (parameter.in === "path") {
                const parameterType = this.convertParameterSchema(parameter);
                if (parameterType == null) {
                    continue;
                }
                const schema =  parameter.description != null ? 
                  {
                    docs: parameter.description, 
                    type: parameterType
                  }
                  : parameterType;
                pathParameters[parameter.name] = schema;
            }
        }
        return pathParameters;
    }

    private getQueryParameters(): Record<string, RawSchemas.HttpQueryParameterSchema> {
        const queryParameters: Record<string, RawSchemas.HttpPathParameterSchema> = {};
        for (const parameter of this.resolvedParameters) {
            if (parameter.in === "path") {
                const parameterType = this.convertParameterSchema(parameter);
                if (parameterType == null) {
                    continue;
                }
                const schema =  parameter.description != null ? 
                  {
                    docs: parameter.description, 
                    type: parameterType
                  }
                  : parameterType;
                queryParameters[parameter.name] = schema;
            }
        }
        return queryParameters;
    }

    private getHeaderParameters(): Record<string, RawSchemas.HttpHeaderSchema> {
        const headerParameters: Record<string, RawSchemas.HttpHeaderSchema> = {};
        for (const parameter of this.resolvedParameters) {
            if (parameter.in === "header") {
                if (this.globalHeaders.has(parameter.name)) {
                    continue;
                }
                const parameterType = this.convertParameterSchema(parameter);
                if (parameterType == null) {
                    continue;
                }
                const schema =  parameter.description != null ? 
                  {
                    docs: parameter.description, 
                    type: parameterType
                  }
                  : parameterType;
                headerParameters[parameter.name] = schema;
            }
        }
        return headerParameters;
    }

    private convertParameterSchema(parameter: OpenAPIV3.ParameterObject): string | undefined {
        if (parameter.schema == null) {
            return undefined;
        }

        const resolvedSchema = isReferenceObject(parameter.schema)
            ? this.context.maybeResolveSchemaReference(parameter.schema)?.schemaObject
            : parameter.schema;
        if (resolvedSchema == null) {
            return undefined;
        }
        
        const convertedPrimitive = maybeConvertSchemaToPrimitive(resolvedSchema);
        if (convertedPrimitive == null) {
            this.taskContext.logger.warn(`${this.endpoint.httpMethod} ${this.endpoint.path} parameter ${parameter.name} has non primitive schema: ${JSON.stringify(
                resolvedSchema,
                undefined,
                2
            )}`);
        }

        const parameterType = parameter.required != null && parameter.required
            ? convertedPrimitive
            : `optional<${convertedPrimitive}>`;
        return parameterType;
    }

    private convertRequestBody(requestBody: OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject): ReferencedRequest | InlinedRequest | undefined {
        if (isReferenceObject(requestBody)) {
            return {
                type: "referenced",
                value: getFernReferenceForSchema(requestBody, this.context),
            };
        }

        const requestBodySchema = requestBody.content[APPLICATION_JSON_CONTENT]?.schema;
        if (requestBodySchema == null) {
            return undefined;
        }
        if (isReferenceObject(requestBodySchema)) {
            return {
                type: "referenced",
                value: getFernReferenceForSchema(requestBodySchema, this.context),
            };
        }

        const breadcrumbs = [...this.breadcrumbs, "requestBody"];
        const schemaConverter = new SchemaConverter({
            schema: requestBodySchema, 
            taskContext: this.taskContext, 
            inlinedTypeNamer: this.inlinedTypeNamer, 
            context: this.context,
            breadcrumbs
        });
        const convertedSchema = schemaConverter.convert();

        if (convertedSchema == null) {
            this.taskContext.logger.warn(`${breadcrumbs.join(" > ")}: Failed to convert request body`);
            return undefined;
        }

        if (isRawObjectDefinition(convertedSchema.typeDeclaration)) {
            return {
                type: "inlined",
                value: convertedSchema.typeDeclaration, 
                additionalTypes: convertedSchema.additionalTypeDeclarations,
            };
        }

        const requestTypeName = this.inlinedTypeNamer.getName();
        return {
            type: "referenced",
            value: requestTypeName,
            additionalTypes: {
                ...convertedSchema.additionalTypeDeclarations,
                [requestTypeName]: convertedSchema.typeDeclaration
            }
        };
    }

    private convertResponseBody(responseBody: OpenAPIV3.ReferenceObject | OpenAPIV3.ResponseObject): ConvertedResponse | undefined {
        if (isReferenceObject(responseBody)) {
            return {
                response: getFernReferenceForSchema(responseBody, this.context),
            };
        }

        if (responseBody.content == null) {
            return undefined;
        }

        const responseBodySchema = responseBody.content[APPLICATION_JSON_CONTENT]?.schema;
        if (responseBodySchema == null) {
            return undefined;
        }
        if (isReferenceObject(responseBodySchema)) {
            return {
                response: getFernReferenceForSchema(responseBodySchema, this.context),
            };
        }

        const breadcrumbs = [...this.breadcrumbs, "responseBody"];
        const schemaConverter = new SchemaConverter({
            schema: responseBodySchema, 
            taskContext: this.taskContext, 
            inlinedTypeNamer: this.inlinedTypeNamer, 
            context: this.context,
            breadcrumbs
        });
        const convertedSchema = schemaConverter.convert();

        if (convertedSchema == null) {
            this.taskContext.logger.warn(`${breadcrumbs.join(" > ")}: Failed to convert response body`);
            return undefined;
        }

        const responseTypeName = this.inlinedTypeNamer.getName();
        return {
            response: responseTypeName,
            additionalTypes: {
                ...convertedSchema.additionalTypeDeclarations,
                [responseTypeName]: convertedSchema.typeDeclaration
            }
        };
    }
}

interface ReferencedRequest {
    type: "referenced", 
    value: string | RawSchemas.HttpReferencedRequestBodySchema,
    additionalTypes?: Record<string, RawSchemas.TypeDeclarationSchema>,
}

interface InlinedRequest {
    type: "inlined", 
    value: RawSchemas.HttpInlineRequestBodySchema,
    additionalTypes?: Record<string, RawSchemas.TypeDeclarationSchema>,
}

interface ConvertedResponse {
    response: string,
    additionalTypes?: Record<string, RawSchemas.TypeDeclarationSchema>,
}

export function isObjectSchema(
    parameter: RawSchemas.TypeDeclarationSchema
): parameter is RawSchemas.ObjectSchema {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return (parameter as RawSchemas.ObjectSchema).properties != null;
}

function convertHttpMethod(httpMethod: OpenAPIV3.HttpMethods): RawSchemas.HttpMethodSchema | undefined {
    switch(httpMethod) {
        case OpenAPIV3.HttpMethods.GET: 
            return "GET";
        case OpenAPIV3.HttpMethods.POST: 
            return "POST";
        case OpenAPIV3.HttpMethods.PUT: 
            return "PUT";
        case OpenAPIV3.HttpMethods.PATCH: 
            return "PATCH";
        case OpenAPIV3.HttpMethods.DELETE: 
            return "DELETE";
        default: 
            return undefined;
    }
}
