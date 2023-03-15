import { GeneratorName } from "@fern-api/generators-configuration";
import { mapValues } from "lodash-es";
import { IrVersions } from "../../ir-versions";
import { IrMigrationContext } from "../../IrMigrationContext";
import { AlwaysRunMigration, IrMigration } from "../../types/IrMigration";

export const V12_TO_V11_MIGRATION: IrMigration<
    IrVersions.V12.ir.IntermediateRepresentation,
    IrVersions.V11.ir.IntermediateRepresentation
> = {
    laterVersion: "v12",
    earlierVersion: "v11",
    minGeneratorVersionsToExclude: {
        [GeneratorName.TYPESCRIPT]: AlwaysRunMigration,
        [GeneratorName.TYPESCRIPT_SDK]: "0.5.0-rc0-6-g80f89f98",
        [GeneratorName.TYPESCRIPT_EXPRESS]: "0.5.0-rc0-6-g80f89f98",
        [GeneratorName.JAVA]: AlwaysRunMigration,
        [GeneratorName.JAVA_MODEL]: AlwaysRunMigration,
        [GeneratorName.JAVA_SDK]: AlwaysRunMigration,
        [GeneratorName.JAVA_SPRING]: AlwaysRunMigration,
        [GeneratorName.PYTHON_FASTAPI]: AlwaysRunMigration,
        [GeneratorName.PYTHON_PYDANTIC]: AlwaysRunMigration,
        [GeneratorName.OPENAPI_PYTHON_CLIENT]: AlwaysRunMigration,
        [GeneratorName.STOPLIGHT]: "0.0.23-8-g479c860",
        [GeneratorName.OPENAPI]: "0.0.22-1-g1c86b58",
        [GeneratorName.POSTMAN]: AlwaysRunMigration,
    },
    migrateBackwards: (v12, { taskContext, targetGenerator }): IrVersions.V11.ir.IntermediateRepresentation => {
        const v11Types: Record<string, IrVersions.V11.types.TypeDeclaration> = mapValues(
            v12.types,
            (typeDeclaration) => {
                return {
                    ...typeDeclaration,
                    shape: IrVersions.V12.types.Type._visit<IrVersions.V11.types.Type>(typeDeclaration.shape, {
                        union: IrVersions.V11.types.Type.union,
                        enum: IrVersions.V11.types.Type.enum,
                        object: IrVersions.V11.types.Type.object,
                        alias: (aliasTypeDeclaration) => {
                            return IrVersions.V11.types.Type.alias({
                                aliasOf: aliasTypeDeclaration.aliasOf,
                                resolvedType:
                                    IrVersions.V12.types.ResolvedTypeReference._visit<IrVersions.V11.types.ResolvedTypeReference>(
                                        aliasTypeDeclaration.resolvedType,
                                        {
                                            container: IrVersions.V11.types.ResolvedTypeReference.container,
                                            primitive: IrVersions.V11.types.ResolvedTypeReference.primitive,
                                            named: (namedType) => {
                                                if (namedType.shape === "UNDISCRIMINATED_UNION") {
                                                    return taskContext.failAndThrow(
                                                        getUndiscriminatedUnionsErrorMessage({
                                                            taskContext,
                                                            targetGenerator,
                                                        })
                                                    );
                                                } else {
                                                    return IrVersions.V11.types.ResolvedTypeReference.named({
                                                        shape: namedType.shape,
                                                        name: namedType.name,
                                                    });
                                                }
                                            },
                                            unknown: IrVersions.V11.types.ResolvedTypeReference.unknown,
                                            _unknown: () => {
                                                throw new Error("Encountered unknown alias");
                                            },
                                        }
                                    ),
                            });
                        },
                        undiscriminatedUnion: () => {
                            return taskContext.failAndThrow(
                                getUndiscriminatedUnionsErrorMessage({ taskContext, targetGenerator })
                            );
                        },
                        _unknown: () => {
                            throw new Error("Encountered unknown shape");
                        },
                    }),
                };
            }
        );

        return {
            ...v12,
            types: v11Types,
            services: mapValues(v12.services, (service) => convertService(service, { taskContext, targetGenerator })),
        };
    },
};

function getUndiscriminatedUnionsErrorMessage(context: IrMigrationContext): string {
    return (
        `Generator ${context.targetGenerator.name}@${context.targetGenerator.version}` +
        " does not support undiscriminated unions" +
        ` If you'd like to use this feature, please upgrade ${context.targetGenerator.name}` +
        " to a compatible version."
    );
}

function convertService(
    service: IrVersions.V12.http.HttpService,
    context: IrMigrationContext
): IrVersions.V11.http.HttpService {
    return {
        ...service,
        endpoints: service.endpoints.map((endpoint) => convertEndpoint(endpoint, context)),
    };
}

function convertEndpoint(
    endpoint: IrVersions.V12.http.HttpEndpoint,
    { taskContext, targetGenerator }: IrMigrationContext
): IrVersions.V11.http.HttpEndpoint {
    if (endpoint.streamingResponse != null) {
        return taskContext.failAndThrow(
            `Generator ${targetGenerator.name}@${targetGenerator.version}` +
                " does not support streaming responses." +
                ` If you'd like to use this feature, please upgrade ${targetGenerator.name}` +
                " to a compatible version."
        );
    }

    return {
        ...endpoint,
        requestBody:
            endpoint.requestBody != null
                ? IrVersions.V12.http.HttpRequestBody._visit<IrVersions.V11.http.HttpRequestBody>(
                      endpoint.requestBody,
                      {
                          inlinedRequestBody: IrVersions.V11.http.HttpRequestBody.inlinedRequestBody,
                          reference: IrVersions.V11.http.HttpRequestBody.reference,
                          fileUpload: () => {
                              return taskContext.failAndThrow(
                                  `Generator ${targetGenerator.name}@${targetGenerator.version}` +
                                      " does not support file upload requests." +
                                      ` If you'd like to use this feature, please upgrade ${targetGenerator.name}` +
                                      " to a compatible version."
                              );
                          },
                          _unknown: () => {
                              throw new Error("Unknown HttpRequestBody type: " + endpoint.requestBody?.type);
                          },
                      }
                  )
                : undefined,
        response:
            endpoint.response != null
                ? { docs: endpoint.response.docs, type: endpoint.response.responseBodyType }
                : { docs: undefined, type: undefined },
    };
}
