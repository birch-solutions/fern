import {
    ContainerType,
    DeclaredTypeName,
    FileUploadRequestProperty,
    HttpRequestBody,
    PrimitiveType,
    SingleUnionTypeProperties,
    SingleUnionTypeProperty,
    Type,
    TypeDeclaration,
    TypeReference
} from "@fern-fern/ir-sdk/api";
import { noop } from "lodash";

const ISO_DATE = "1994-11-05";
const ISO_DATETIME = "1994-11-05T13:15:30Z";
const UUID = "3d20db99-b2d9-4643-8f04-13452707b8e8";
const BASE_64 = "SGVsbG8gV29ybGQ=";

export function getMockBodyFromTypeReference({
    typeReference,
    allTypes,
    visitedTypes = new Set()
}: {
    typeReference: TypeReference;
    allTypes: TypeDeclaration[];
    visitedTypes?: Set<string>;
}): unknown {
    if (typeReference.type === "named") {
        if (visitedTypes.has(typeReference.typeId)) {
            return undefined;
        }
        visitedTypes.add(typeReference.typeId);
    }
    return TypeReference._visit(typeReference, {
        primitive: (primitive) =>
            PrimitiveType._visit<unknown>(primitive, {
                integer: () => 0,
                double: () => 0.0,
                string: () => "example",
                boolean: () => true,
                long: () => 10000000,
                dateTime: () => ISO_DATETIME,
                date: () => ISO_DATE,
                uuid: () => UUID,
                base64: () => BASE_64,
                _other: () => {
                    throw new Error("Encountered unknown primtiveType: " + primitive);
                }
            }),
        container: (container) =>
            ContainerType._visit<unknown>(container, {
                list: (value) => [getMockBodyFromTypeReference({ typeReference: value, allTypes, visitedTypes })],
                map: (value) => {
                    const result: Record<string, unknown> = {};
                    const mockKey = getMockBodyFromTypeReference({
                        typeReference: value.keyType,
                        allTypes,
                        visitedTypes
                    }) as string | number;
                    const mockValue = getMockBodyFromTypeReference({
                        typeReference: value.valueType,
                        allTypes,
                        visitedTypes
                    });
                    result[mockKey] = mockValue;
                    return result;
                },
                set: (value) => [getMockBodyFromTypeReference({ typeReference: value, allTypes, visitedTypes })],
                optional: (value) => getMockBodyFromTypeReference({ typeReference: value, allTypes, visitedTypes }),
                _other: () => {
                    throw new Error("Encountered unknown wireMessage: " + typeReference.type);
                },
                literal: () => {
                    throw new Error("Literals are unsupported!");
                }
            }),
        named: (typeName) => {
            return getMockBodyFromType(getType(typeName, allTypes), allTypes, visitedTypes);
        },
        unknown: () => "UNKNOWN",
        _other: () => {
            throw new Error("Encountered unknown type reference: " + typeReference.type);
        }
    });
}

function getMockBodyFromType(
    type: TypeDeclaration,
    allTypes: TypeDeclaration[],
    visitedTypes: Set<string> | undefined
): unknown {
    if (type.examples[0] != null) {
        return type.examples[0].jsonExample;
    }
    return Type._visit<unknown>(type.shape, {
        object: (objectDeclaration) => {
            return {
                ...objectDeclaration.properties.reduce<Record<string, unknown>>(
                    (combined, objectProperty) => ({
                        ...combined,
                        [objectProperty.name.wireValue]: getMockBodyFromTypeReference({
                            typeReference: objectProperty.valueType,
                            allTypes,
                            visitedTypes
                        })
                    }),
                    {}
                ),
                ...objectDeclaration.extends.reduce<Record<string, unknown>>((combined, extension) => {
                    const mockBody = getMockBodyFromType(getType(extension, allTypes), allTypes, visitedTypes);
                    return {
                        ...combined,
                        ...(typeof mockBody === "object" ? mockBody : {})
                    };
                }, {})
            };
        },
        alias: ({ aliasOf }) => getMockBodyFromTypeReference({ typeReference: aliasOf, allTypes, visitedTypes }),
        enum: ({ values }) => {
            const firstValue = values[0];
            if (firstValue == null) {
                throw new Error("No values for enum.");
            }
            return firstValue.name.wireValue;
        },
        union: (unionDeclaration) => {
            const firstUnionType = unionDeclaration.types[0];
            if (firstUnionType == null) {
                throw new Error("No values for union.");
            }

            const discriminantProperties: Record<string, string> = {
                [unionDeclaration.discriminant.wireValue]: firstUnionType.discriminantValue.wireValue
            };

            return SingleUnionTypeProperties._visit(firstUnionType.shape, {
                samePropertiesAsObject: (value) => {
                    // TODO this doesn't support named aliases of primitive types
                    const mockBody = getMockBodyFromTypeReference({
                        typeReference: TypeReference.named(value),
                        allTypes,
                        visitedTypes
                    });
                    return {
                        ...discriminantProperties,
                        ...(typeof mockBody === "object" ? mockBody : {})
                    };
                },
                singleProperty: (value: SingleUnionTypeProperty) => {
                    return {
                        ...discriminantProperties,
                        [value.name.wireValue]: getMockBodyFromTypeReference({
                            typeReference: value.type,
                            allTypes,
                            visitedTypes
                        })
                    };
                },
                noProperties: () => {
                    return {
                        ...discriminantProperties
                    };
                },
                _other: () => {
                    throw new Error("Encountered unknown typeReference: " + firstUnionType.shape.propertiesType);
                }
            });
        },
        undiscriminatedUnion: (unionDeclaration) => {
            const firstUnionType = unionDeclaration.members[0];
            if (firstUnionType == null) {
                throw new Error("No values for union.");
            }

            return getMockBodyFromTypeReference({
                typeReference: firstUnionType.type,
                allTypes,
                visitedTypes
            });
        },
        _other: () => {
            throw new Error("Unknown type: " + type.shape.type);
        }
    });
}

function getType(declaredTypeName: DeclaredTypeName, allTypes: TypeDeclaration[]): TypeDeclaration {
    const namedType = allTypes.find((val) => val.name.typeId === declaredTypeName.typeId);
    if (namedType == null) {
        throw new Error("Cannot find type: " + declaredTypeName.name.originalName);
    }
    return namedType;
}

export function getMockRequestBody({
    requestBody,
    allTypes,
    visitedTypes = new Set()
}: {
    requestBody: HttpRequestBody;
    allTypes: TypeDeclaration[];
    visitedTypes?: Set<string>;
}): unknown {
    return HttpRequestBody._visit<unknown>(requestBody, {
        inlinedRequestBody: (inlinedRequestBody) => ({
            ...inlinedRequestBody.properties.reduce<Record<string, unknown>>(
                (combined, objectProperty) => ({
                    ...combined,
                    [objectProperty.name.wireValue]: getMockBodyFromTypeReference({
                        typeReference: objectProperty.valueType,
                        allTypes,
                        visitedTypes
                    })
                }),
                {}
            ),
            ...inlinedRequestBody.extends.reduce<Record<string, unknown>>((combined, extension) => {
                const mockBody = getMockBodyFromType(getType(extension, allTypes), allTypes, visitedTypes);
                return {
                    ...combined,
                    ...(typeof mockBody === "object" ? mockBody : {})
                };
            }, {})
        }),
        reference: ({ requestBodyType }) =>
            getMockBodyFromTypeReference({ typeReference: requestBodyType, allTypes, visitedTypes }),
        fileUpload: ({ properties }) => {
            return properties.reduce<Record<string, unknown>>((obj, property) => {
                FileUploadRequestProperty._visit(property, {
                    file: noop,
                    bodyProperty: (bodyProperty) => {
                        obj[bodyProperty.name.wireValue] = getMockBodyFromTypeReference({
                            typeReference: bodyProperty.valueType,
                            allTypes,
                            visitedTypes
                        });
                    },
                    _other: () => {
                        throw new Error("Unknown FileUploadRequestProperty: " + property.type);
                    }
                });
                return obj;
            }, {});
        },
        bytes: () => {
            throw new Error("bytes is not supported");
        },
        _other: () => {
            throw new Error("Unknown HttpRequestBody: " + requestBody.type);
        }
    });
}
