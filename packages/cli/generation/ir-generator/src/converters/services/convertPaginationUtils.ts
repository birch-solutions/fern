import { ObjectProperty } from "@fern-api/ir-sdk";
import { isRawObjectDefinition, RawSchemas } from "@fern-api/yaml-schema";
import { FernFileContext } from "../../FernFileContext";
import { ResolvedType } from "../../resolvers/ResolvedType";
import { TypeResolver } from "../../resolvers/TypeResolver";
import { getObjectPropertyFromResolvedType } from "./getObjectPropertyFromResolvedType";

export type PaginationPropertyComponents = CursorPaginationPropertyComponents | OffsetPaginationPropertyComponents;

export interface CursorPaginationPropertyComponents {
    type: "cursor";
    cursor: string;
    next_cursor: string[];
    results: string[];
}

export interface OffsetPaginationPropertyComponents {
    type: "offset";
    offset: string;
    results: string[];
}

export function getPaginationPropertyComponents(
    endpointPagination: RawSchemas.PaginationSchema
): PaginationPropertyComponents {
    if (isRawOffsetPaginationSchema(endpointPagination)) {
        return {
            type: "offset",
            offset: getRequestProperty(endpointPagination.offset),
            results: getResponsePropertyComponents(endpointPagination.results)
        };
    }
    return {
        type: "cursor",
        cursor: getRequestProperty(endpointPagination.cursor),
        next_cursor: getResponsePropertyComponents(endpointPagination.next_cursor),
        results: getResponsePropertyComponents(endpointPagination.results)
    };
}

export async function getNestedObjectPropertyFromResolvedType({
    typeResolver,
    file,
    resolvedType,
    propertyComponents
}: {
    typeResolver: TypeResolver;
    file: FernFileContext;
    resolvedType: ResolvedType;
    propertyComponents: string[];
}): Promise<ObjectProperty | undefined> {
    if (propertyComponents.length === 0) {
        return undefined;
    }
    if (propertyComponents.length === 1) {
        return await getObjectPropertyFromResolvedType({
            typeResolver,
            file,
            resolvedType,
            property: propertyComponents[0] ?? ""
        });
    }
    const objectSchema = maybeObjectSchema(resolvedType);
    if (objectSchema == null) {
        return undefined;
    }
    const propertyType = await getPropertyTypeFromObjectSchema({
        typeResolver,
        file,
        objectSchema,
        property: propertyComponents[0] ?? ""
    });
    const resolvedTypeProperty = typeResolver.resolveTypeOrThrow({
        type: propertyType,
        file
    });
    return getNestedObjectPropertyFromResolvedType({
        typeResolver,
        file: maybeFileFromResolvedType(resolvedTypeProperty) ?? file,
        resolvedType: resolvedTypeProperty,
        propertyComponents: propertyComponents.slice(1)
    });
}

export function resolveResponseType({
    endpoint,
    typeResolver,
    file
}: {
    endpoint: RawSchemas.HttpEndpointSchema;
    typeResolver: TypeResolver;
    file: FernFileContext;
}): ResolvedType {
    return typeResolver.resolveTypeOrThrow({
        type: (typeof endpoint.response !== "string" ? endpoint.response?.type : endpoint.response) ?? "",
        file
    });
}

export function maybeFileFromResolvedType(resolvedType: ResolvedType | undefined): FernFileContext | undefined {
    if (resolvedType == null) {
        return undefined;
    }
    if (resolvedType._type === "named") {
        return resolvedType.file;
    }
    if (resolvedType._type === "container" && resolvedType.container._type === "optional") {
        return maybeFileFromResolvedType(resolvedType.container.itemType);
    }
    return undefined;
}

async function getPropertyTypeFromObjectSchema({
    typeResolver,
    file,
    objectSchema,
    property
}: {
    typeResolver: TypeResolver;
    file: FernFileContext;
    objectSchema: RawSchemas.ObjectSchema;
    property: string;
}): Promise<string> {
    const properties = await getAllPropertiesForRawObjectSchema({
        typeResolver,
        file,
        objectSchema
    });
    const propertyType = properties[property];
    if (propertyType == null) {
        throw new Error(`Response does not have a property named ${property}.`);
    }
    return propertyType;
}

async function getAllPropertiesForRawObjectSchema({
    typeResolver,
    file,
    objectSchema
}: {
    typeResolver: TypeResolver;
    file: FernFileContext;
    objectSchema: RawSchemas.ObjectSchema;
}): Promise<Record<string, string>> {
    let extendedTypes: string[] = [];
    if (typeof objectSchema.extends === "string") {
        extendedTypes = [objectSchema.extends];
    } else if (Array.isArray(objectSchema.extends)) {
        extendedTypes = objectSchema.extends;
    }

    const properties: Record<string, string> = {};
    for (const extendedType of extendedTypes) {
        const extendedProperties = await getAllPropertiesForExtendedType({
            typeResolver,
            file,
            extendedType
        });
        Object.entries(extendedProperties).map(([propertyKey, propertyType]) => {
            properties[propertyKey] = propertyType;
        });
    }

    if (objectSchema.properties != null) {
        Object.entries(objectSchema.properties).map(([propertyKey, propertyType]) => {
            properties[propertyKey] = typeof propertyType === "string" ? propertyType : propertyType.type;
        });
    }

    return properties;
}

async function getAllPropertiesForExtendedType({
    typeResolver,
    file,
    extendedType
}: {
    typeResolver: TypeResolver;
    file: FernFileContext;
    extendedType: string;
}): Promise<Record<string, string>> {
    const resolvedType = typeResolver.resolveNamedTypeOrThrow({
        referenceToNamedType: extendedType,
        file
    });
    if (resolvedType._type === "named" && isRawObjectDefinition(resolvedType.declaration)) {
        return await getAllPropertiesForRawObjectSchema({
            typeResolver,
            file: maybeFileFromResolvedType(resolvedType) ?? file,
            objectSchema: resolvedType.declaration
        });
    }
    // This should be unreachable; extended types must be named objects.
    throw new Error(`Extended type ${extendedType} must be another named type.`);
}

function maybeObjectSchema(resolvedType: ResolvedType | undefined): RawSchemas.ObjectSchema | undefined {
    if (resolvedType == null) {
        return undefined;
    }
    if (resolvedType._type === "named" && isRawObjectDefinition(resolvedType.declaration)) {
        return resolvedType.declaration;
    }
    if (resolvedType._type === "container" && resolvedType.container._type === "optional") {
        return maybeObjectSchema(resolvedType.container.itemType);
    }
    return undefined;
}

function getRequestProperty(value: string): string {
    return value.substring("$request.".length);
}

function getResponsePropertyComponents(value: string): string[] {
    const trimmed = value.substring("$response.".length);
    return trimmed?.split(".") ?? [];
}

function isRawOffsetPaginationSchema(
    rawPaginationSchema: RawSchemas.PaginationSchema
): rawPaginationSchema is RawSchemas.OffsetPaginationSchema {
    return (
        (rawPaginationSchema as RawSchemas.OffsetPaginationSchema).offset != null &&
        (rawPaginationSchema as RawSchemas.OffsetPaginationSchema).results != null
    );
}
