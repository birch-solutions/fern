import { Audiences as ConfigAudiences } from "@fern-api/config-management-commons";
import { assertNever, noop } from "@fern-api/core-utils";
import {
    ContainerType,
    DeclaredServiceName,
    DeclaredTypeName,
    ErrorDeclaration,
    FernFilepath,
    FileUploadRequestProperty,
    HttpEndpoint,
    HttpRequestBody,
    HttpResponse,
    HttpService,
    StreamingResponseChunkType,
    TypeReference,
} from "@fern-fern/ir-sdk/api";
import { IdGenerator } from "../IdGenerator";
import { FilteredIr, FilteredIrImpl } from "./FilteredIr";
import {
    AudienceId,
    EndpointId,
    EndpointNode,
    ErrorId,
    ErrorNode,
    ServiceId,
    SubpackageId,
    TypeId,
    TypeNode,
} from "./ids";

export class IrGraph {
    private types: Record<TypeId, TypeNode> = {};
    private errors: Record<TypeId, ErrorNode> = {};
    private endpoints: Record<EndpointId, EndpointNode> = {};
    private audiences: Audiences;
    private typesReferencedByService: Record<TypeId, Set<ServiceId>> = {};
    private typesNeededForAudience: Set<TypeId> = new Set();
    private servicesNeededForAudience: Set<ServiceId> = new Set();
    private endpointsNeededForAudience: Set<EndpointId> = new Set();
    private subpackagesNeededForAudience: Set<SubpackageId> = new Set();

    public constructor(audiences: ConfigAudiences) {
        this.audiences = audiencesFromConfig(audiences);
    }

    public addType(
        declaredTypeName: DeclaredTypeName,
        descendantTypeIds: Set<string>,
        descendantFilepaths: Set<FernFilepath>
    ): void {
        const typeId = IdGenerator.generateTypeId(declaredTypeName);
        const typeNode: TypeNode = {
            typeId,
            descendants: descendantTypeIds,
            referencedSubpackages: descendantFilepaths,
        };
        this.types[typeId] = typeNode;
        if (this.typesReferencedByService[typeId] == null) {
            this.typesReferencedByService[typeId] = new Set();
        }
    }

    public markTypeForAudiences(declaredTypeName: DeclaredTypeName, audiences: string[]): void {
        const typeId = IdGenerator.generateTypeId(declaredTypeName);
        if (this.hasAudience(audiences)) {
            this.typesNeededForAudience.add(typeId);
            this.addSubpackages(declaredTypeName.fernFilepath);
            this.types[typeId]?.referencedSubpackages.forEach((fernFilePath) => {
                this.addSubpackages(fernFilePath);
            });
        }
    }

    public getTypesReferencedByService(): Record<TypeId, Set<ServiceId>> {
        return this.typesReferencedByService;
    }

    public addError(errorDeclaration: ErrorDeclaration): void {
        const errorId = IdGenerator.generateErrorId(errorDeclaration.name);
        const referencedTypes = new Set<TypeId>();
        const referencedSubpackages = new Set<FernFilepath>();
        if (errorDeclaration.type != null) {
            populateReferencesFromTypeReference(errorDeclaration.type, referencedTypes, referencedSubpackages);
        }
        const errorNode: ErrorNode = {
            errorId,
            referencedTypes,
            referencedSubpackages,
        };
        this.errors[errorId] = errorNode;
    }

    public addEndpoint(service: HttpService, httpEndpoint: HttpEndpoint): void {
        const serviceId = IdGenerator.generateServiceId(service.name);
        const endpointId = httpEndpoint.id;
        const referencedTypes = new Set<TypeId>();
        const referencedErrors = new Set<ErrorId>();
        const referencedSubpackages = new Set<FernFilepath>();
        for (const header of [...service.headers, ...httpEndpoint.headers]) {
            populateReferencesFromTypeReference(header.valueType, referencedTypes, referencedSubpackages);
        }
        for (const pathParameter of [...service.pathParameters, ...httpEndpoint.pathParameters]) {
            populateReferencesFromTypeReference(pathParameter.valueType, referencedTypes, referencedSubpackages);
        }
        for (const queryParameter of httpEndpoint.queryParameters) {
            populateReferencesFromTypeReference(queryParameter.valueType, referencedTypes, referencedSubpackages);
        }
        if (httpEndpoint.requestBody != null) {
            HttpRequestBody._visit(httpEndpoint.requestBody, {
                inlinedRequestBody: (inlinedRequestBody) => {
                    for (const extension of inlinedRequestBody.extends) {
                        populateReferencesFromTypeName(extension, referencedTypes, referencedSubpackages);
                    }
                    for (const property of inlinedRequestBody.properties) {
                        populateReferencesFromTypeReference(property.valueType, referencedTypes, referencedSubpackages);
                    }
                },
                reference: ({ requestBodyType }) => {
                    populateReferencesFromTypeReference(requestBodyType, referencedTypes, referencedSubpackages);
                },
                fileUpload: ({ properties }) => {
                    for (const property of properties) {
                        FileUploadRequestProperty._visit(property, {
                            file: noop,
                            bodyProperty: ({ valueType }) => {
                                populateReferencesFromTypeReference(valueType, referencedTypes, referencedSubpackages);
                            },
                            _other: () => {
                                throw new Error("Unknown FileUploadRequestProperty: " + property.type);
                            },
                        });
                    }
                },
                bytes: () => {
                    return;
                },
                _other: () => {
                    throw new Error("Unknown HttpRequestBody: " + httpEndpoint.requestBody?.type);
                },
            });
        }
        if (httpEndpoint.response != null) {
            HttpResponse._visit(httpEndpoint.response, {
                fileDownload: noop,
                json: (jsonResponse) => {
                    populateReferencesFromTypeReference(
                        jsonResponse.responseBodyType,
                        referencedTypes,
                        referencedSubpackages
                    );
                },
                streaming: (streamingResponse) => {
                    StreamingResponseChunkType._visit(streamingResponse.dataEventType, {
                        json: (typeReference) =>
                            populateReferencesFromTypeReference(typeReference, referencedTypes, referencedSubpackages),
                        text: noop,
                        _other: () => {
                            throw new Error(
                                "Unknown StreamingResponseChunkType: " + streamingResponse.dataEventType.type
                            );
                        },
                    });
                },
                text: noop,
                _other: () => {
                    throw new Error("Unknown HttpResponse: " + httpEndpoint.response?.type);
                },
            });
        }
        httpEndpoint.errors.forEach((responseError) => {
            referencedErrors.add(IdGenerator.generateErrorId(responseError.error));
            referencedSubpackages.add(responseError.error.fernFilepath);
        });
        for (const typeId of referencedTypes) {
            this.markTypeForService(typeId, serviceId);
        }
        this.endpoints[endpointId] = {
            endpointId,
            referencedTypes,
            referencedErrors,
            referencedSubpackages,
        };
    }

    public markEndpointForAudience(
        declaredServiceName: DeclaredServiceName,
        httpEndpoints: HttpEndpoint[],
        audiences: AudienceId[]
    ): void {
        if (this.hasAudience(audiences)) {
            const serviceId = IdGenerator.generateServiceId(declaredServiceName);
            this.servicesNeededForAudience.add(serviceId);
            httpEndpoints.forEach((httpEndpoint) => {
                const endpointId = httpEndpoint.id;
                this.endpointsNeededForAudience.add(endpointId);
                this.endpoints[endpointId]?.referencedSubpackages.forEach((fernFilePath) => {
                    this.addSubpackages(fernFilePath);
                });
            });
            this.servicesNeededForAudience.add(serviceId);
            this.addSubpackages(declaredServiceName.fernFilepath);
        }
    }

    public build(): FilteredIr {
        const typeIds = new Set<TypeId>();
        const errorIds = new Set<ErrorId>();
        for (const endpointId of this.endpointsNeededForAudience.keys()) {
            const endpointNode = this.getEndpointNode(endpointId);
            for (const errorId of endpointNode.referencedErrors) {
                if (errorIds.has(errorId)) {
                    continue;
                }
                errorIds.add(errorId);
                const errorNode = this.getErrorNode(errorId);
                this.addReferencedTypes(typeIds, errorNode.referencedTypes);
            }
            this.addReferencedTypes(typeIds, endpointNode.referencedTypes);
        }
        this.addReferencedTypes(typeIds, this.typesNeededForAudience);
        return new FilteredIrImpl({
            types: typeIds,
            errors: errorIds,
            services: this.servicesNeededForAudience,
            endpoints: this.endpointsNeededForAudience,
            subpackages: this.subpackagesNeededForAudience,
        });
    }

    private markTypeForService(typeId: TypeId, serviceId: ServiceId): void {
        const services = this.typesReferencedByService[typeId];
        if (services == null) {
            this.typesReferencedByService[typeId] = new Set(serviceId);
        } else {
            services.add(serviceId);
        }
    }

    private addReferencedTypes(types: Set<TypeId>, typesToAdd: Set<TypeId>): void {
        for (const typeId of typesToAdd) {
            if (types.has(typeId)) {
                continue;
            }
            types.add(typeId);
            const typeNode = this.getTypeNode(typeId);
            typeNode.descendants.forEach((descendantTypeId) => {
                types.add(descendantTypeId);
            });
        }
    }

    private getTypeNode(typeId: TypeId): TypeNode {
        const typeNode = this.types[typeId];
        if (typeNode == null) {
            throw new Error(`Failed to find type node with id ${typeId}`);
        }
        return typeNode;
    }

    private getErrorNode(errorId: ErrorId): ErrorNode {
        const errorNode = this.errors[errorId];
        if (errorNode == null) {
            throw new Error(`Failed to find error node with id ${errorId}`);
        }
        return errorNode;
    }

    private getEndpointNode(endpointId: EndpointId): EndpointNode {
        const endpointNode = this.endpoints[endpointId];
        if (endpointNode == null) {
            throw new Error(`Failed to find endpoint node with id ${endpointId}`);
        }
        return endpointNode;
    }

    public hasNoAudiences(): boolean {
        return this.audiences.type === "none";
    }

    private hasAudience(audiences: AudienceId[]): boolean {
        const configuredAudiences = this.audiences;
        switch (configuredAudiences.type) {
            case "none":
                return true;
            case "filtered":
                return audiences.some((audienceId) => configuredAudiences.audiences.has(audienceId));
            default:
                assertNever(configuredAudiences);
        }
    }

    private addSubpackages(fernFilePath: FernFilepath): void {
        for (let i = 1; i <= fernFilePath.allParts.length; ++i) {
            const packageFilePath = {
                ...fernFilePath,
                allParts: fernFilePath.allParts.slice(0, i),
            };
            this.subpackagesNeededForAudience.add(IdGenerator.generateSubpackageId(packageFilePath));
        }
    }
}

type Audiences = NoAudience | FilteredAudiences;

interface NoAudience {
    type: "none";
}

interface FilteredAudiences {
    type: "filtered";
    audiences: Set<string>;
}

function audiencesFromConfig(configAudiences: ConfigAudiences): Audiences {
    switch (configAudiences.type) {
        case "all":
            return { type: "none" };
        case "select":
            return { type: "filtered", audiences: new Set(configAudiences.audiences) };
        default:
            assertNever(configAudiences);
    }
}

function populateReferencesFromTypeReference(
    typeReference: TypeReference,
    referencedTypes: Set<TypeId>,
    referencedSubpackages: Set<FernFilepath>
) {
    TypeReference._visit(typeReference, {
        container: (containerType) => {
            populateReferencesFromContainer(containerType, referencedTypes, referencedSubpackages);
        },
        named: (declaredTypeName) => {
            populateReferencesFromTypeName(declaredTypeName, referencedTypes, referencedSubpackages);
        },
        primitive: noop,
        unknown: noop,
        _other: noop,
    });
}

function populateReferencesFromTypeName(
    typeName: DeclaredTypeName,
    referencedTypes: Set<TypeId>,
    referencedSubpackages: Set<FernFilepath>
) {
    referencedTypes.add(IdGenerator.generateTypeId(typeName));
    referencedSubpackages.add(typeName.fernFilepath);
}

function populateReferencesFromContainer(
    containerType: ContainerType,
    referencedTypes: Set<TypeId>,
    referencedSubpackages: Set<FernFilepath>
) {
    ContainerType._visit(containerType, {
        list: (listType) => {
            populateReferencesFromTypeReference(listType, referencedTypes, referencedSubpackages);
        },
        map: (mapType) => {
            populateReferencesFromTypeReference(mapType.keyType, referencedTypes, referencedSubpackages);
            populateReferencesFromTypeReference(mapType.valueType, referencedTypes, referencedSubpackages);
        },
        optional: (optionalType) => {
            populateReferencesFromTypeReference(optionalType, referencedTypes, referencedSubpackages);
        },
        set: (setType) => {
            populateReferencesFromTypeReference(setType, referencedTypes, referencedSubpackages);
        },
        literal: noop,
        _other: noop,
    });
}
