import { assertNever, isNonNullish, isPlainObject, MediaType } from "@fern-api/core-utils";
import {
    AutogeneratedEndpointExample,
    ExampleCodeSample,
    FernIr as Ir,
    UserSpecifiedEndpointExample
} from "@fern-api/ir-sdk";
import { FernRegistry as FdrCjsSdk } from "@fern-fern/fdr-cjs-sdk";
import { noop, startCase } from "lodash-es";
import { convertTypeReference } from "./convertTypeShape";

export function convertPackage(
    irPackage: Ir.ir.Package,
    ir: Ir.ir.IntermediateRepresentation
): FdrCjsSdk.api.v1.register.ApiDefinitionPackage {
    const service = irPackage.service != null ? ir.services[irPackage.service] : undefined;
    const webhooks = irPackage.webhooks != null ? ir.webhookGroups[irPackage.webhooks] : undefined;
    const websocket =
        irPackage.websocket != null && ir.websocketChannels != null
            ? ir.websocketChannels[irPackage.websocket]
            : undefined;
    return {
        endpoints: service != null ? convertService(service, ir) : [],
        webhooks: webhooks != null ? convertWebhookGroup(webhooks) : [],
        websockets: websocket != null ? [convertWebSocketChannel(websocket, ir)] : [],
        types: irPackage.types.map((typeId) => FdrCjsSdk.TypeId(typeId)),
        subpackages: irPackage.subpackages.map((subpackageId) => FdrCjsSdk.api.v1.SubpackageId(subpackageId)),
        pointsTo:
            irPackage.navigationConfig != null
                ? FdrCjsSdk.api.v1.SubpackageId(irPackage.navigationConfig.pointsTo)
                : undefined
    };
}

function convertWebhookGroup(webhookGroup: Ir.webhooks.WebhookGroup): FdrCjsSdk.api.v1.register.WebhookDefinition[] {
    return webhookGroup.map((webhook) => {
        return {
            description: webhook.docs ?? undefined,
            id: FdrCjsSdk.WebhookId(webhook.name.originalName),
            path: [],
            method: webhook.method,
            name: webhook.displayName ?? startCase(webhook.name.originalName),
            headers: webhook.headers.map(
                (header): FdrCjsSdk.api.v1.register.Header => ({
                    description: header.docs ?? undefined,
                    key: header.name.wireValue,
                    type: convertTypeReference(header.valueType),
                    availability: convertIrAvailability(header.availability)
                })
            ),
            payload: convertWebhookPayload(webhook.payload),
            examples:
                webhook.examples != null
                    ? webhook.examples.map((example) => {
                          return {
                              payload: example.payload.jsonExample
                          };
                      })
                    : []
        };
    });
}

function convertService(
    irService: Ir.http.HttpService,
    ir: Ir.ir.IntermediateRepresentation
): FdrCjsSdk.api.v1.register.EndpointDefinition[] {
    const endpoints: FdrCjsSdk.api.v1.register.EndpointDefinition[] = [];
    for (const irEndpoint of irService.endpoints) {
        const autogeneratedExample = irEndpoint.autogeneratedExamples[0];
        const endpoint = {
            availability: convertIrAvailability(irEndpoint.availability ?? irService.availability),
            auth: irEndpoint.auth,
            description: irEndpoint.docs ?? undefined,
            method: convertHttpMethod(irEndpoint.method),
            defaultEnvironment:
                ir.environments?.defaultEnvironment != null
                    ? FdrCjsSdk.EnvironmentId(ir.environments.defaultEnvironment)
                    : undefined,
            environments:
                ir.environments != null
                    ? convertIrEnvironments({ environmentsConfig: ir.environments, endpoint: irEndpoint })
                    : undefined,
            id: FdrCjsSdk.EndpointId(irEndpoint.name.originalName),
            originalEndpointId: irEndpoint.id,
            name: irEndpoint.displayName ?? startCase(irEndpoint.name.originalName),
            path:
                irEndpoint.basePath != null
                    ? {
                          pathParameters: irEndpoint.pathParameters.map(
                              (pathParameter): FdrCjsSdk.api.v1.register.PathParameter => ({
                                  description: pathParameter.docs ?? undefined,
                                  key: FdrCjsSdk.PropertyKey(pathParameter.name.originalName),
                                  type: convertTypeReference(pathParameter.valueType),
                                  availability: undefined
                              })
                          ),
                          parts: [...convertHttpPath(irEndpoint.basePath), ...convertHttpPath(irEndpoint.path)]
                      }
                    : {
                          pathParameters: [
                              ...ir.pathParameters,
                              ...irService.pathParameters,
                              ...irEndpoint.pathParameters
                          ].map(
                              (pathParameter): FdrCjsSdk.api.v1.register.PathParameter => ({
                                  description: pathParameter.docs ?? undefined,
                                  key: FdrCjsSdk.PropertyKey(pathParameter.name.originalName),
                                  type: convertTypeReference(pathParameter.valueType),
                                  availability: undefined
                              })
                          ),
                          parts: [
                              ...(ir.basePath != null ? convertHttpPath(ir.basePath) : []),
                              ...convertHttpPath(irService.basePath),
                              ...convertHttpPath(irEndpoint.path)
                          ]
                      },
            queryParameters: irEndpoint.queryParameters.map(
                (queryParameter): FdrCjsSdk.api.v1.register.QueryParameter => ({
                    description: queryParameter.docs ?? undefined,
                    key: queryParameter.name.wireValue,
                    type: convertTypeReference(queryParameter.valueType),
                    availability: convertIrAvailability(queryParameter.availability)
                })
            ),
            headers: [...irService.headers, ...irEndpoint.headers].map(
                (header): FdrCjsSdk.api.v1.register.Header => ({
                    description: header.docs ?? undefined,
                    key: header.name.wireValue,
                    type: convertTypeReference(header.valueType),
                    availability: convertIrAvailability(header.availability)
                })
            ),
            request: irEndpoint.requestBody != null ? convertRequestBody(irEndpoint.requestBody) : undefined,
            response: irEndpoint.response != null ? convertResponse(irEndpoint.response) : undefined,
            errors: undefined,
            errorsV2: convertResponseErrorsV2(irEndpoint.errors, ir),
            examples:
                autogeneratedExample != null
                    ? irEndpoint.userSpecifiedExamples.map((userSpecifiedExample) =>
                          convertHttpEndpointExample({
                              autogeneratedExample,
                              userSpecifiedExample,
                              irEndpoint,
                              ir
                          })
                      )
                    : []
        };
        endpoints.push(endpoint);
    }
    return endpoints;
}

function convertWebSocketChannel(
    channel: Ir.websocket.WebSocketChannel,
    ir: Ir.ir.IntermediateRepresentation
): FdrCjsSdk.api.v1.register.WebSocketChannel {
    return {
        auth: channel.auth,
        availability: convertIrAvailability(channel.availability),
        description: channel.docs ?? undefined,
        defaultEnvironment:
            ir.environments?.defaultEnvironment != null
                ? FdrCjsSdk.EnvironmentId(ir.environments.defaultEnvironment)
                : undefined,
        environments:
            ir.environments != null
                ? convertIrWebSocketEnvironments({ environmentsConfig: ir.environments, channel })
                : [],
        id: FdrCjsSdk.WebSocketId(channel.name.originalName),
        name: channel.displayName ?? startCase(channel.name.originalName),
        path: {
            pathParameters: channel.pathParameters.map(
                (pathParameter): FdrCjsSdk.api.v1.register.PathParameter => ({
                    description: pathParameter.docs ?? undefined,
                    key: FdrCjsSdk.PropertyKey(pathParameter.name.originalName),
                    type: convertTypeReference(pathParameter.valueType),
                    availability: undefined
                })
            ),
            parts: convertHttpPath(channel.path)
        },
        headers: channel.headers.map(
            (header): FdrCjsSdk.api.v1.register.Header => ({
                key: header.name.wireValue,
                type: convertTypeReference(header.valueType),
                description: header.docs,
                availability: convertIrAvailability(header.availability)
            })
        ),
        queryParameters: channel.queryParameters.map(
            (queryParameter): FdrCjsSdk.api.v1.register.QueryParameter => ({
                description: queryParameter.docs ?? undefined,
                key: queryParameter.name.wireValue,
                type: convertTypeReference(queryParameter.valueType),
                availability: convertIrAvailability(queryParameter.availability)
            })
        ),
        messages: channel.messages.map(
            (message): FdrCjsSdk.api.v1.register.WebSocketMessage => ({
                type: FdrCjsSdk.api.v1.WebSocketMessageId(message.type),
                displayName: message.displayName,
                origin: message.origin,
                body: convertMessageBody(message.body),
                description: message.docs,
                availability: convertIrAvailability(message.availability)
            })
        ),
        examples: channel.examples.map(
            (example): FdrCjsSdk.api.v1.register.ExampleWebSocketSession => ({
                name: example.name?.originalName,
                description: example.docs,
                path: example.url,
                pathParameters: example.pathParameters.reduce<
                    FdrCjsSdk.api.v1.register.ExampleWebSocketSession["pathParameters"]
                >((pathParameters, irPathParameterExample) => {
                    pathParameters[FdrCjsSdk.PropertyKey(irPathParameterExample.name.originalName)] =
                        irPathParameterExample.value.jsonExample;
                    return pathParameters;
                }, {}),
                queryParameters: example.queryParameters.reduce<
                    FdrCjsSdk.api.v1.register.ExampleWebSocketSession["queryParameters"]
                >((queryParameters, irQueryParameterExample) => {
                    queryParameters[irQueryParameterExample.name.wireValue] = irQueryParameterExample.value.jsonExample;
                    return queryParameters;
                }, {}),
                headers: example.headers.reduce<FdrCjsSdk.api.v1.register.ExampleWebSocketSession["headers"]>(
                    (headers, irHeaderExample) => {
                        headers[irHeaderExample.name.wireValue] = irHeaderExample.value.jsonExample;
                        return headers;
                    },
                    {}
                ),
                messages: example.messages.map(
                    (message): FdrCjsSdk.api.v1.register.ExampleWebSocketMessage => ({
                        type: FdrCjsSdk.api.v1.WebSocketMessageId(message.type),
                        body: message.body.jsonExample
                    })
                )
            })
        )
    };
}

export function convertIrAvailability(availability: Ir.Availability | undefined): FdrCjsSdk.Availability | undefined {
    if (availability == null) {
        return undefined;
    }
    switch (availability.status) {
        case "DEPRECATED":
            return FdrCjsSdk.Availability.Deprecated;
        case "PRE_RELEASE":
            return FdrCjsSdk.Availability.Beta;
        case "GENERAL_AVAILABILITY":
            return FdrCjsSdk.Availability.GenerallyAvailable;
        case "IN_DEVELOPMENT":
            return FdrCjsSdk.Availability.Beta;
        default:
            assertNever(availability.status);
    }
}

function convertIrEnvironments({
    environmentsConfig,
    endpoint
}: {
    environmentsConfig: Ir.environment.EnvironmentsConfig;
    endpoint: Ir.http.HttpEndpoint;
}): FdrCjsSdk.api.v1.commons.Environment[] {
    const environmentsConfigValue = environmentsConfig.environments;
    const endpointBaseUrlId = endpoint.baseUrl;
    switch (environmentsConfigValue.type) {
        case "singleBaseUrl":
            return environmentsConfigValue.environments.map((singleBaseUrlEnvironment) => {
                return {
                    id: FdrCjsSdk.EnvironmentId(singleBaseUrlEnvironment.id),
                    baseUrl: singleBaseUrlEnvironment.url
                };
            });
        case "multipleBaseUrls":
            if (endpointBaseUrlId == null) {
                throw new Error(`Expected endpoint ${endpoint.name.originalName} to have base url.`);
            }
            return environmentsConfigValue.environments.map((singleBaseUrlEnvironment) => {
                const endpointBaseUrl = singleBaseUrlEnvironment.urls[endpointBaseUrlId];
                if (endpointBaseUrl == null) {
                    throw new Error(
                        `Expected environment ${singleBaseUrlEnvironment.id} to contain url for ${endpointBaseUrlId}`
                    );
                }
                return {
                    id: FdrCjsSdk.EnvironmentId(singleBaseUrlEnvironment.id),
                    baseUrl: endpointBaseUrl
                };
            });
        default:
            assertNever(environmentsConfigValue);
    }
}

function convertIrWebSocketEnvironments({
    environmentsConfig,
    channel
}: {
    environmentsConfig: Ir.environment.EnvironmentsConfig;
    channel: Ir.websocket.WebSocketChannel;
}): FdrCjsSdk.api.v1.commons.Environment[] {
    const environmentsConfigValue = environmentsConfig.environments;
    switch (environmentsConfigValue.type) {
        case "singleBaseUrl":
            return environmentsConfigValue.environments.map((singleBaseUrlEnvironment) => {
                return {
                    id: FdrCjsSdk.EnvironmentId(singleBaseUrlEnvironment.id),
                    baseUrl: replaceProtocol(singleBaseUrlEnvironment.url, "wss")
                };
            });
        case "multipleBaseUrls":
            throw new Error(`Multiple base URLs are not supported for WebSocket "${channel.name.originalName}"`);
        default:
            assertNever(environmentsConfigValue);
    }
}

function replaceProtocol(url: string, protocol: string): string {
    return url.replace(/^[^:]+/, protocol);
}

function convertHttpMethod(method: Ir.http.HttpMethod): FdrCjsSdk.HttpMethod {
    return Ir.http.HttpMethod._visit<FdrCjsSdk.HttpMethod>(method, {
        get: () => FdrCjsSdk.HttpMethod.Get,
        post: () => FdrCjsSdk.HttpMethod.Post,
        put: () => FdrCjsSdk.HttpMethod.Put,
        patch: () => FdrCjsSdk.HttpMethod.Patch,
        delete: () => FdrCjsSdk.HttpMethod.Delete,
        _other: () => {
            throw new Error("Unknown http method: " + method);
        }
    });
}

function convertHttpPath(irPath: Ir.http.HttpPath): FdrCjsSdk.api.v1.register.EndpointPathPart[] {
    const endpointPaths: FdrCjsSdk.api.v1.register.EndpointPathPart[] = irPath.parts.flatMap((part) => [
        {
            type: "pathParameter",
            value: FdrCjsSdk.PropertyKey(part.pathParameter)
        },
        {
            type: "literal",
            value: part.tail
        }
    ]);
    return [
        {
            type: "literal",
            value: irPath.head
        },
        ...endpointPaths
    ];
}

function convertRequestBody(irRequest: Ir.http.HttpRequestBody): FdrCjsSdk.api.v1.register.HttpRequest | undefined {
    const requestBodyShape = Ir.http.HttpRequestBody._visit<FdrCjsSdk.api.v1.register.HttpRequestBodyShape | undefined>(
        irRequest,
        {
            inlinedRequestBody: (inlinedRequestBody) => {
                return {
                    type: "json",
                    contentType: inlinedRequestBody.contentType ?? MediaType.APPLICATION_JSON,
                    shape: {
                        type: "object",
                        extends: inlinedRequestBody.extends.map((extension) => FdrCjsSdk.TypeId(extension.typeId)),
                        properties: inlinedRequestBody.properties.map(
                            (property): FdrCjsSdk.api.v1.register.ObjectProperty => ({
                                description: property.docs ?? undefined,
                                key: FdrCjsSdk.PropertyKey(property.name.wireValue),
                                valueType: convertTypeReference(property.valueType),
                                availability: convertIrAvailability(property.availability)
                            })
                        )
                    },
                    description: inlinedRequestBody.docs ?? undefined
                };
            },
            reference: (reference) => {
                return {
                    type: "json",
                    contentType: reference.contentType ?? MediaType.APPLICATION_JSON,
                    shape: {
                        type: "reference",
                        value: convertTypeReference(reference.requestBodyType)
                    },
                    description: reference.docs ?? undefined
                };
            },
            fileUpload: (fileUpload) => ({
                type: "fileUpload",
                value: {
                    name: fileUpload.name.originalName,
                    // TODO: support description and availability
                    description: undefined,
                    availability: undefined,
                    properties: fileUpload.properties
                        .map((property) => {
                            return property._visit<FdrCjsSdk.api.v1.register.FormDataProperty | undefined>({
                                file: (file) => {
                                    const fileValue = file._visit<
                                        FdrCjsSdk.api.v1.register.FormDataFileProperty | undefined
                                    >({
                                        file: (singleFile) => ({
                                            type: "file",
                                            key: FdrCjsSdk.PropertyKey(singleFile.key.wireValue),
                                            isOptional: singleFile.isOptional,
                                            contentType: singleFile.contentType,
                                            description: undefined,
                                            availability: undefined
                                        }),
                                        fileArray: (multipleFiles) => ({
                                            type: "fileArray",
                                            key: FdrCjsSdk.PropertyKey(multipleFiles.key.wireValue),
                                            isOptional: multipleFiles.isOptional,
                                            contentType: multipleFiles.contentType,
                                            description: undefined,
                                            availability: undefined
                                        }),
                                        _other: () => undefined
                                    });
                                    if (fileValue == null) {
                                        return;
                                    }
                                    return { type: "file", value: fileValue };
                                },
                                bodyProperty: (bodyProperty) => ({
                                    type: "bodyProperty",
                                    key: FdrCjsSdk.PropertyKey(bodyProperty.name.wireValue),
                                    valueType: convertTypeReference(bodyProperty.valueType),
                                    contentType: bodyProperty.contentType,
                                    description: bodyProperty.docs,
                                    availability: convertIrAvailability(bodyProperty.availability)
                                }),
                                _other: () => undefined
                            });
                        })
                        .filter(isNonNullish)
                },
                description: fileUpload.docs ?? undefined
            }),
            bytes: (bytes) => ({
                type: "bytes",
                // TODO: support description and availability
                description: bytes.docs ?? undefined,
                availability: undefined,
                isOptional: bytes.isOptional,
                contentType: bytes.contentType
            }),
            _other: () => {
                throw new Error("Unknown HttpRequestBody: " + irRequest.type);
            }
        }
    );
    return requestBodyShape != null ? { type: requestBodyShape, description: irRequest.docs } : undefined;
}

function convertResponse(irResponse: Ir.http.HttpResponse): FdrCjsSdk.api.v1.register.HttpResponse | undefined {
    if (irResponse.body == null) {
        return undefined;
    }
    let description;
    const type = Ir.http.HttpResponseBody._visit<FdrCjsSdk.api.v1.register.HttpResponseBodyShape | undefined>(
        irResponse.body,
        {
            fileDownload: (fileDownload) => {
                description = fileDownload.docs;
                return {
                    type: "fileDownload",
                    contentType: undefined
                };
            },
            json: (jsonResponse) => {
                description = jsonResponse.docs;
                return {
                    type: "reference",
                    value: convertTypeReference(jsonResponse.responseBodyType)
                };
            },
            text: () => undefined, // TODO: support text/plain in FDR
            streamParameter: () => undefined, // TODO: support stream parameter in FDR
            streaming: (streamingResponse) => {
                if (streamingResponse.type === "text") {
                    description = streamingResponse.docs;
                    return {
                        type: "streamingText"
                    };
                } else if (streamingResponse.type === "json") {
                    description = streamingResponse.docs;
                    return {
                        type: "stream",
                        shape: { type: "reference", value: convertTypeReference(streamingResponse.payload) },
                        terminator: streamingResponse.terminator
                    };
                    // TODO(dsinghvi): update FDR with SSE.
                } else if (streamingResponse.type === "sse") {
                    description = streamingResponse.docs;
                    return {
                        type: "stream",
                        shape: { type: "reference", value: convertTypeReference(streamingResponse.payload) },
                        terminator: streamingResponse.terminator
                    };
                }

                return undefined;
            },
            _other: () => {
                throw new Error("Unknown HttpResponse: " + irResponse.body);
            }
        }
    );
    if (type != null) {
        return { type, statusCode: irResponse.statusCode, description };
    } else {
        return undefined;
    }
}

function convertResponseErrorsV2(
    irResponseErrors: Ir.http.ResponseErrors,
    ir: Ir.ir.IntermediateRepresentation
): FdrCjsSdk.api.v1.register.ErrorDeclarationV2[] {
    const errors: FdrCjsSdk.api.v1.register.ErrorDeclarationV2[] = [];
    if (ir.errorDiscriminationStrategy.type === "statusCode") {
        for (const irResponseError of irResponseErrors) {
            const errorDeclaration = ir.errors[irResponseError.error.errorId];
            if (errorDeclaration) {
                errors.push({
                    type:
                        errorDeclaration.type == null
                            ? undefined
                            : {
                                  type: "alias",
                                  value: convertTypeReference(errorDeclaration.type)
                              },
                    statusCode: errorDeclaration.statusCode,
                    description: errorDeclaration.docs ?? undefined,
                    name: errorDeclaration.name.name.originalName,
                    availability: undefined,
                    examples: errorDeclaration.examples.map((irExample) => {
                        return {
                            name: irExample.name?.originalName,
                            responseBody: { type: "json", value: irExample.jsonExample },
                            description: irExample.docs
                        };
                    })
                });
            }
        }
    } else {
        for (const irResponseError of irResponseErrors) {
            const errorDeclaration = ir.errors[irResponseError.error.errorId];
            if (errorDeclaration) {
                const properties: FdrCjsSdk.api.v1.register.ObjectProperty[] = [
                    {
                        key: FdrCjsSdk.PropertyKey(ir.errorDiscriminationStrategy.discriminant.wireValue),
                        valueType: {
                            type: "literal",
                            value: {
                                type: "stringLiteral",
                                value: errorDeclaration.discriminantValue.name.originalName
                            }
                        },
                        description: errorDeclaration.docs,
                        availability: undefined
                    }
                ];

                if (errorDeclaration.type != null) {
                    properties.push({
                        key: FdrCjsSdk.PropertyKey(ir.errorDiscriminationStrategy.contentProperty.wireValue),
                        valueType: convertTypeReference(errorDeclaration.type),
                        description: errorDeclaration.docs,
                        availability: undefined
                    });
                }

                errors.push({
                    type:
                        errorDeclaration.type == null
                            ? undefined
                            : {
                                  type: "object",
                                  extends: [],
                                  properties
                              },
                    statusCode: errorDeclaration.statusCode,
                    description: errorDeclaration.docs ?? undefined,
                    availability: undefined,
                    name: errorDeclaration.name.name.originalName,
                    examples: errorDeclaration.examples.map((irExample) => {
                        return {
                            name: irExample.name?.originalName,
                            responseBody: { type: "json", value: irExample.jsonExample },
                            description: irExample.docs
                        };
                    })
                });
            }
        }
    }
    return errors;
}

function convertHttpEndpointExample({
    userSpecifiedExample,
    autogeneratedExample,
    irEndpoint,
    ir
}: {
    userSpecifiedExample: UserSpecifiedEndpointExample;
    autogeneratedExample: AutogeneratedEndpointExample;
    irEndpoint: Ir.http.HttpEndpoint;
    ir: Ir.ir.IntermediateRepresentation;
}): FdrCjsSdk.api.v1.register.ExampleEndpointCall {
    const requiredGlobalHeaders: Ir.ExampleHeader[] = ir.headers
        .map((header) => {
            const value =
                header.valueType.type === "container" && header.valueType.container.type === "literal"
                    ? header.valueType.container.literal._visit<string | undefined>({
                          boolean: (val) => `${val}`,
                          string: (val) => val,
                          _other: () => undefined
                      })
                    : undefined;
            if (value != null) {
                return {
                    name: header.name,
                    value: {
                        jsonExample: value,
                        shape: Ir.ExampleTypeReferenceShape.primitive(Ir.ExamplePrimitive.string({ original: value }))
                    }
                };
            }
            return undefined;
        })
        .filter(isNonNullish);
    const example = userSpecifiedExample.example ?? autogeneratedExample.example;
    const { codeSamples } = userSpecifiedExample;
    return {
        name: example.name?.originalName,
        description: example.docs,
        path: example.url,
        pathParameters: [
            ...example.rootPathParameters,
            ...example.servicePathParameters,
            ...example.endpointPathParameters
        ].reduce<FdrCjsSdk.api.v1.register.ExampleEndpointCall["pathParameters"]>(
            (pathParameters, irPathParameterExample) => {
                pathParameters[FdrCjsSdk.PropertyKey(irPathParameterExample.name.originalName)] =
                    irPathParameterExample.value.jsonExample;
                return pathParameters;
            },
            {}
        ),
        queryParameters: example.queryParameters.reduce<
            FdrCjsSdk.api.v1.register.ExampleEndpointCall["queryParameters"]
        >((queryParameters, irQueryParameterExample) => {
            queryParameters[irQueryParameterExample.name.wireValue] = irQueryParameterExample.value.jsonExample;
            return queryParameters;
        }, {}),
        headers: [...requiredGlobalHeaders, ...example.serviceHeaders, ...example.endpointHeaders].reduce<
            FdrCjsSdk.api.v1.register.ExampleEndpointCall["headers"]
        >((headers, irHeaderExample) => {
            headers[irHeaderExample.name.wireValue] = irHeaderExample.value.jsonExample;
            return headers;
        }, {}),
        requestBody: example.request?.jsonExample,
        requestBodyV3: irEndpoint.requestBody?._visit<FdrCjsSdk.api.v1.register.ExampleEndpointRequest | undefined>({
            inlinedRequestBody: () =>
                example.request != null ? { type: "json", value: example.request.jsonExample } : undefined,
            reference: () =>
                example.request != null ? { type: "json", value: example.request.jsonExample } : undefined,
            fileUpload: (fileUploadSchema) => {
                if (example.request == null) {
                    return undefined;
                }

                const value: Record<string, FdrCjsSdk.api.v1.register.FormValue> = {};

                if (isPlainObject(example.request.jsonExample)) {
                    const fullExample = example.request.jsonExample;
                    for (const property of fileUploadSchema.properties) {
                        property._visit({
                            file: (file) => {
                                const maybeFile = fullExample[file.key.wireValue];
                                // TODO: support filename with data in examples
                                if (file.type === "file") {
                                    value[file.key.wireValue] = {
                                        type: "filename",
                                        value: typeof maybeFile === "string" ? maybeFile : "<file1>"
                                    };
                                } else if (file.type === "fileArray") {
                                    const filenames = (Array.isArray(maybeFile) ? maybeFile : [maybeFile]).filter(
                                        (filename) => typeof filename === "string"
                                    ) as string[];
                                    value[file.key.wireValue] = {
                                        type: "filenames",
                                        value: filenames
                                    };
                                }
                            },
                            bodyProperty: (bodyProperty) => {
                                value[bodyProperty.name.wireValue] = {
                                    type: "json",
                                    value: fullExample[bodyProperty.name.wireValue]
                                };
                            },
                            _other: noop
                        });
                    }
                }

                return { type: "form", value };
            },
            // TODO: support bytes
            bytes: () => undefined,
            _other: () => undefined
        }),
        responseStatusCode: Ir.http.ExampleResponse._visit(example.response, {
            ok: (ok) =>
                ok._visit({
                    body: (body) => (body != null ? 200 : 204),
                    stream: (stream) => (stream.length > 0 ? 200 : 204),
                    sse: (stream) => (stream.length > 0 ? 200 : 204),
                    _other: () => {
                        throw new Error("Unknown ExampleResponseBody: " + ok.type);
                    }
                }),
            error: ({ error: errorName }) => {
                const error = ir.errors[errorName.errorId];
                if (error == null) {
                    throw new Error("Cannot find error " + errorName.errorId);
                }
                return error.statusCode;
            },
            _other: () => {
                throw new Error("Unknown ExampleResponse: " + example.response.type);
            }
        }),
        responseBody: example.response._visit({
            ok: (ok) =>
                ok._visit({
                    body: (body) => body?.jsonExample,
                    stream: () => undefined,
                    sse: () => undefined,
                    _other: () => undefined
                }),
            error: (error) => error.body?.jsonExample,
            _other: () => undefined
        }),
        responseBodyV3: example.response._visit<FdrCjsSdk.api.v1.register.ExampleEndpointResponse | undefined>({
            ok: (ok) =>
                ok._visit<FdrCjsSdk.api.v1.register.ExampleEndpointResponse | undefined>({
                    body: (body) => (body != null ? { type: "json", value: body.jsonExample } : undefined),
                    stream: (stream) => ({ type: "stream", value: stream.map((stream) => stream.jsonExample) }),
                    sse: (sse) => ({
                        type: "sse",
                        value: sse.map(({ event, data }) => ({ event, data: data.jsonExample }))
                    }),
                    _other: () => {
                        throw new Error("Unknown ExampleResponseBody: " + ok.type);
                    }
                }),
            error: (error) => (error.body != null ? { type: "json", value: error.body.jsonExample } : undefined),
            _other: () => {
                throw new Error("Unknown ExampleResponse: " + example.response.type);
            }
        }),
        // irExample.response.body != null ? { type: "json", value: irExample.response.body.jsonExample } : undefined,
        codeSamples: codeSamples
            ?.map((codeSample) =>
                ExampleCodeSample._visit<FdrCjsSdk.api.v1.register.CustomCodeSample | undefined>(codeSample, {
                    language: (value) => ({
                        language: value.language,
                        code: value.code,
                        name: value.name?.originalName,
                        description: value.docs ?? undefined,
                        install: value.install
                    }),
                    sdk: (value) => ({
                        // TODO: switch to storing as SDK
                        language: value.sdk,
                        code: value.code,
                        name: value.name?.originalName,
                        description: value.docs ?? undefined,
                        install: undefined
                    }),
                    _other: () => undefined
                })
            )
            .filter(isNonNullish)
    };
}

function convertWebhookPayload(irWebhookPayload: Ir.webhooks.WebhookPayload): FdrCjsSdk.api.v1.register.WebhookPayload {
    switch (irWebhookPayload.type) {
        case "inlinedPayload":
            return {
                type: {
                    type: "object",
                    extends: irWebhookPayload.extends.map((extension) => FdrCjsSdk.TypeId(extension.typeId)),
                    properties: irWebhookPayload.properties.map(
                        (property): FdrCjsSdk.api.v1.register.ObjectProperty => ({
                            description: property.docs ?? undefined,
                            key: FdrCjsSdk.PropertyKey(property.name.wireValue),
                            valueType: convertTypeReference(property.valueType),
                            availability: convertIrAvailability(property.availability)
                        })
                    )
                },
                description: undefined
            };
        case "reference":
            return {
                type: {
                    type: "reference",
                    value: convertTypeReference(irWebhookPayload.payloadType)
                },
                description: irWebhookPayload.docs
            };
        default:
            assertNever(irWebhookPayload);
    }
}

function convertMessageBody(
    irWebSocketBody: Ir.websocket.WebSocketMessageBody
): FdrCjsSdk.api.v1.register.WebSocketMessageBodyShape {
    switch (irWebSocketBody.type) {
        case "inlinedBody":
            return {
                type: "object",
                extends: irWebSocketBody.extends.map((extension) => FdrCjsSdk.TypeId(extension.typeId)),
                properties: irWebSocketBody.properties.map(
                    (property): FdrCjsSdk.api.v1.register.ObjectProperty => ({
                        description: property.docs ?? undefined,
                        key: FdrCjsSdk.PropertyKey(property.name.wireValue),
                        valueType: convertTypeReference(property.valueType),
                        availability: convertIrAvailability(property.availability)
                    })
                )
            };
        case "reference":
            return {
                type: "reference",
                value: convertTypeReference(irWebSocketBody.bodyType)
            };
        default:
            assertNever(irWebSocketBody);
    }
}
