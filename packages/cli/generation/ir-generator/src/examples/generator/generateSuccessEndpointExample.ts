import { assertNever } from "@fern-api/core-utils";
import {
    HttpEndpoint,
    TypeDeclaration,
    TypeId,
    ExampleEndpointCall,
    HttpService,
    IntermediateRepresentation,
    ExamplePathParameter,
    PathParameter,
    ExampleQueryParameterShape,
    ExampleResponse,
    HttpHeader,
    ExampleHeader,
    ExampleEndpointSuccessResponse,
    ExampleRequestBody,
    ExampleInlinedRequestBodyProperty,
    ErrorDeclaration
} from "@fern-api/ir-sdk";
import { ExampleGenerationResult } from "./ExampleGenerationResult";
import { generateTypeReferenceExample } from "./generateTypeReferenceExample";
import { isOptional } from "./isTypeReferenceOptional";
import hash from "object-hash";
import { TaskContext } from "@fern-api/task-context";

export declare namespace generateEndpointExample {
    interface Args {
        ir: Omit<IntermediateRepresentation, "sdkConfig" | "subpackages" | "rootPackage">;
        service: HttpService;
        endpoint: HttpEndpoint;
        typeDeclarations: Record<TypeId, TypeDeclaration>;

        skipOptionalRequestProperties: boolean;

        generationResponse: GenerationResponseType;
    }

    type GenerationResponseType = SuccessResponseType | ErrorResponseType;

    interface SuccessResponseType {
        type: "success";
    }

    interface ErrorResponseType {
        type: "error";
        declaration: ErrorDeclaration;
    }

    interface ParameterGroup<T, K> {
        params: T[];
        add: (example: K) => void;
    }
}

export function generateEndpointExample({
    ir,
    endpoint,
    service,
    typeDeclarations,
    skipOptionalRequestProperties,
    generationResponse
}: generateEndpointExample.Args): ExampleGenerationResult<ExampleEndpointCall> {
    const result: Omit<ExampleEndpointCall, "id" | "url"> = {
        name: undefined,
        endpointHeaders: [],
        endpointPathParameters: [],
        queryParameters: [],
        servicePathParameters: [],
        serviceHeaders: [],
        rootPathParameters: [],
        request: undefined,
        response: ExampleResponse.ok(ExampleEndpointSuccessResponse.body(undefined)),
        docs: undefined
    };

    const pathParameterGroups: generateEndpointExample.ParameterGroup<PathParameter, ExamplePathParameter>[] = [
        {
            params: endpoint.pathParameters,
            add: (example: ExamplePathParameter) => result.endpointPathParameters.push(example)
        },
        {
            params: service.pathParameters,
            add: (example: ExamplePathParameter) => result.servicePathParameters.push(example)
        },
        {
            params: ir.pathParameters,
            add: (example: ExamplePathParameter) => result.rootPathParameters.push(example)
        }
    ];

    for (const group of pathParameterGroups) {
        for (const pathParameter of group.params) {
            const generatedExample = generateTypeReferenceExample({
                fieldName: pathParameter.name.originalName,
                currentDepth: 0,
                maxDepth: 1,
                typeDeclarations,
                typeReference: pathParameter.valueType,
                skipOptionalProperties: skipOptionalRequestProperties
            });
            if (generatedExample.type === "failure") {
                return generatedExample;
            }
            const { example } = generatedExample;
            group.add({
                name: pathParameter.name,
                value: example
            });
        }
    }

    for (const queryParameter of endpoint.queryParameters) {
        if (
            skipOptionalRequestProperties &&
            isOptional({ typeDeclarations, typeReference: queryParameter.valueType })
        ) {
            continue;
        }
        const generatedExample = generateTypeReferenceExample({
            fieldName: queryParameter.name.name.originalName,
            currentDepth: 0,
            maxDepth: 1,
            typeDeclarations,
            typeReference: queryParameter.valueType,
            skipOptionalProperties: skipOptionalRequestProperties
        });
        if (generatedExample.type === "failure") {
            return generatedExample;
        }
        const { example } = generatedExample;
        result.queryParameters.push({
            name: queryParameter.name,
            shape: queryParameter.allowMultiple
                ? ExampleQueryParameterShape.exploded()
                : ExampleQueryParameterShape.single(),
            value: example
        });
    }

    const headerGroup: generateEndpointExample.ParameterGroup<HttpHeader, ExampleHeader>[] = [
        {
            params: endpoint.headers,
            add: (example: ExampleHeader) => result.endpointHeaders.push(example)
        },
        {
            params: service.headers,
            add: (example: ExampleHeader) => result.serviceHeaders.push(example)
        }
    ];

    for (const group of headerGroup) {
        for (const header of group.params) {
            if (skipOptionalRequestProperties && isOptional({ typeDeclarations, typeReference: header.valueType })) {
                continue;
            }
            const generatedExample = generateTypeReferenceExample({
                fieldName: header.name.name.originalName,
                currentDepth: 0,
                maxDepth: 1,
                typeDeclarations,
                typeReference: header.valueType,
                skipOptionalProperties: skipOptionalRequestProperties
            });
            if (generatedExample.type === "failure") {
                return generatedExample;
            }
            const { example } = generatedExample;
            group.add({
                name: header.name,
                value: example
            });
        }
    }

    if (endpoint.requestBody != null) {
        switch (endpoint.requestBody.type) {
            case "bytes":
                return { type: "failure", message: "Bytes request unsupported" };
            case "fileUpload":
                return { type: "failure", message: "File upload unsupported" };
            case "inlinedRequestBody": {
                const jsonExample: Record<string, unknown> = {};
                const properties: ExampleInlinedRequestBodyProperty[] = [];
                for (const property of [
                    ...(endpoint.requestBody.properties ?? []),
                    ...(endpoint.requestBody.extendedProperties ?? [])
                ]) {
                    const propertyExample = generateTypeReferenceExample({
                        fieldName: property.name.wireValue,
                        typeReference: property.valueType,
                        typeDeclarations,
                        currentDepth: 1,
                        maxDepth: 10,
                        skipOptionalProperties: skipOptionalRequestProperties
                    });
                    if (
                        propertyExample.type === "failure" &&
                        !isOptional({ typeDeclarations, typeReference: property.valueType })
                    ) {
                        return {
                            type: "failure",
                            message: `Failed to generate required property ${property.name.wireValue} b/c ${propertyExample.message}`
                        };
                    } else if (propertyExample.type === "failure") {
                        continue;
                    }
                    const { example, jsonExample: propertyJsonExample } = propertyExample;
                    properties.push({
                        name: property.name,
                        originalTypeDeclaration: undefined,
                        value: example
                    });
                    jsonExample[property.name.wireValue] = propertyJsonExample;
                }
                result.request = ExampleRequestBody.inlinedRequestBody({
                    jsonExample,
                    properties
                });
                break;
            }
            case "reference": {
                const generatedExample = generateTypeReferenceExample({
                    currentDepth: 0,
                    maxDepth: 10,
                    typeDeclarations,
                    typeReference: endpoint.requestBody.requestBodyType,
                    skipOptionalProperties: skipOptionalRequestProperties
                });
                if (generatedExample.type === "failure") {
                    return generatedExample;
                }
                const { example } = generatedExample;
                result.request = ExampleRequestBody.reference(example);
                break;
            }
            default:
                assertNever(endpoint.requestBody);
        }
    }

    if (generationResponse.type === "success" && endpoint.response?.body != null) {
        switch (endpoint.response.body.type) {
            case "fileDownload":
                return { type: "failure", message: "File download unsupported" };
            case "json": {
                const generatedExample = generateTypeReferenceExample({
                    currentDepth: 0,
                    maxDepth: 10,
                    typeDeclarations,
                    typeReference: endpoint.response.body.value.responseBodyType,
                    skipOptionalProperties: false
                });
                if (generatedExample.type === "failure") {
                    return generatedExample;
                }
                const { example, jsonExample } = generatedExample;
                result.response = ExampleResponse.ok(ExampleEndpointSuccessResponse.body({ ...example, jsonExample }));
                break;
            }
            case "streamParameter":
                return { type: "failure", message: "Stream parameter unsupported" };
            case "streaming":
                return { type: "failure", message: "Streaming unsupported" };
            case "text":
                return { type: "failure", message: "Text unsupported" };
            default:
                assertNever(endpoint.response.body);
        }
    } else if (generationResponse.type === "error") {
        if (generationResponse.declaration.type == null) {
            result.response = ExampleResponse.error({
                body: undefined,
                error: generationResponse.declaration.name
            });
        } else {
            const generatedExample = generateTypeReferenceExample({
                currentDepth: 0,
                maxDepth: 10,
                typeDeclarations,
                typeReference: generationResponse.declaration.type,
                skipOptionalProperties: skipOptionalRequestProperties
            });
            if (generatedExample.type === "failure") {
                return generatedExample;
            }
            const { example } = generatedExample;
            result.response = ExampleResponse.error({
                body: example,
                error: generationResponse.declaration.name
            });
        }
    }

    return {
        type: "success",
        example: {
            id: hash(result),
            url: getUrlForExample(endpoint, result),
            ...result
        },
        jsonExample: undefined // dummmy
    };
}

function getUrlForExample(endpoint: HttpEndpoint, example: Omit<ExampleEndpointCall, "id" | "url">): string {
    const pathParameters: Record<string, string> = {};
    [...example.rootPathParameters, ...example.servicePathParameters, ...example.endpointPathParameters].forEach(
        (examplePathParameter) => {
            const value = examplePathParameter.value.jsonExample;
            const stringValue = typeof value === "string" ? value : JSON.stringify(value);
            pathParameters[examplePathParameter.name.originalName] = stringValue;
        }
    );
    const url =
        endpoint.fullPath.head +
        endpoint.fullPath.parts.map((pathPart) => pathParameters[pathPart.pathParameter] + pathPart.tail).join("");
    return url.startsWith("/") || url === "" ? url : `/${url}`;
}
