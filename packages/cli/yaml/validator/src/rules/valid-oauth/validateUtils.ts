import { FernFileContext, ResolvedType, TypeResolver } from "@fern-api/ir-generator";
import { RawSchemas } from "@fern-api/yaml-schema";
import chalk from "chalk";
import { RuleViolation } from "../../Rule";
import {
    getRequestPropertyComponents,
    getResponsePropertyComponents,
    maybePrimitiveType,
    RequestPropertyValidator,
    requestTypeHasProperty,
    REQUEST_PREFIX,
    resolvedTypeHasProperty,
    ResponsePropertyValidator,
    RESPONSE_PREFIX
} from "../../utils/propertyValidatorUtils";

export const DEFAULT_CLIENT_ID = `${REQUEST_PREFIX}client_id`;
export const DEFAULT_CLIENT_SECRET = `${REQUEST_PREFIX}client_secret`;
export const DEFAULT_ACCESS_TOKEN = `${RESPONSE_PREFIX}access_token`;
export const DEFAULT_REFRESH_TOKEN = `${REQUEST_PREFIX}refresh_token`;

export async function validateClientIdRequestProperty({
    endpointId,
    endpoint,
    typeResolver,
    file,
    clientIdProperty
}: {
    endpointId: string;
    endpoint: RawSchemas.HttpEndpointSchema;
    typeResolver: TypeResolver;
    file: FernFileContext;
    clientIdProperty: string;
}): Promise<RuleViolation[]> {
    return await validateRequestProperty({
        endpointId,
        endpoint,
        typeResolver,
        file,
        requestProperty: clientIdProperty,
        propertyValidator: {
            propertyID: "client-id",
            validate: isStringType
        }
    });
}

export async function validateClientSecretRequestProperty({
    endpointId,
    endpoint,
    typeResolver,
    file,
    clientSecretProperty
}: {
    endpointId: string;
    endpoint: RawSchemas.HttpEndpointSchema;
    typeResolver: TypeResolver;
    file: FernFileContext;
    clientSecretProperty: string;
}): Promise<RuleViolation[]> {
    return await validateRequestProperty({
        endpointId,
        endpoint,
        typeResolver,
        file,
        requestProperty: clientSecretProperty,
        propertyValidator: {
            propertyID: "client-secret",
            validate: isStringType
        }
    });
}

export async function validateScopesRequestProperty({
    endpointId,
    endpoint,
    typeResolver,
    file,
    scopesProperty
}: {
    endpointId: string;
    endpoint: RawSchemas.HttpEndpointSchema;
    typeResolver: TypeResolver;
    file: FernFileContext;
    scopesProperty: string;
}): Promise<RuleViolation[]> {
    return await validateRequestProperty({
        endpointId,
        endpoint,
        typeResolver,
        file,
        requestProperty: scopesProperty,
        propertyValidator: {
            propertyID: "scopes",
            validate: isStringType
        }
    });
}

export async function validateRefreshTokenRequestProperty({
    endpointId,
    endpoint,
    typeResolver,
    file,
    refreshTokenProperty
}: {
    endpointId: string;
    endpoint: RawSchemas.HttpEndpointSchema;
    typeResolver: TypeResolver;
    file: FernFileContext;
    refreshTokenProperty: string;
}): Promise<RuleViolation[]> {
    return await validateRequestProperty({
        endpointId,
        endpoint,
        typeResolver,
        file,
        requestProperty: refreshTokenProperty,
        propertyValidator: {
            propertyID: "refresh-token",
            validate: isStringType
        }
    });
}

export async function validateAccessTokenResponseProperty({
    endpointId,
    typeResolver,
    file,
    resolvedResponseType,
    accessTokenProperty
}: {
    endpointId: string;
    typeResolver: TypeResolver;
    file: FernFileContext;
    resolvedResponseType: ResolvedType;
    accessTokenProperty: string;
}): Promise<RuleViolation[]> {
    return await validateResponseProperty({
        endpointId,
        typeResolver,
        file,
        resolvedResponseType,
        responseProperty: accessTokenProperty,
        propertyValidator: {
            propertyID: "access-token",
            validate: isValidTokenProperty
        }
    });
}

export async function validateRefreshTokenResponseProperty({
    endpointId,
    typeResolver,
    file,
    resolvedResponseType,
    refreshTokenProperty
}: {
    endpointId: string;
    typeResolver: TypeResolver;
    file: FernFileContext;
    resolvedResponseType: ResolvedType;
    refreshTokenProperty: string;
}): Promise<RuleViolation[]> {
    return await validateResponseProperty({
        endpointId,
        typeResolver,
        file,
        resolvedResponseType,
        responseProperty: refreshTokenProperty,
        propertyValidator: {
            propertyID: "refresh-token",
            validate: isValidTokenProperty
        }
    });
}

export async function validateExpiresInResponseProperty({
    endpointId,
    typeResolver,
    file,
    resolvedResponseType,
    expiresInProperty
}: {
    endpointId: string;
    typeResolver: TypeResolver;
    file: FernFileContext;
    resolvedResponseType: ResolvedType;
    expiresInProperty: string;
}): Promise<RuleViolation[]> {
    return await validateResponseProperty({
        endpointId,
        typeResolver,
        file,
        resolvedResponseType,
        responseProperty: expiresInProperty,
        propertyValidator: {
            propertyID: "expires-in",
            validate: isValidExpiresInProperty
        }
    });
}

async function isValidExpiresInProperty({
    typeResolver,
    file,
    resolvedType,
    propertyComponents
}: {
    typeResolver: TypeResolver;
    file: FernFileContext;
    resolvedType: ResolvedType | undefined;
    propertyComponents: string[];
}): Promise<boolean> {
    return await resolvedTypeHasProperty({
        typeResolver,
        file,
        resolvedType,
        propertyComponents,
        validate: isIntegerType
    });
}

async function isValidTokenProperty({
    typeResolver,
    file,
    resolvedType,
    propertyComponents
}: {
    typeResolver: TypeResolver;
    file: FernFileContext;
    resolvedType: ResolvedType | undefined;
    propertyComponents: string[];
}): Promise<boolean> {
    return await resolvedTypeHasProperty({
        typeResolver,
        file,
        resolvedType,
        propertyComponents,
        validate: isStringType
    });
}

async function validateRequestProperty({
    endpointId,
    endpoint,
    typeResolver,
    file,
    requestProperty,
    propertyValidator
}: {
    endpointId: string;
    endpoint: RawSchemas.HttpEndpointSchema;
    typeResolver: TypeResolver;
    file: FernFileContext;
    requestProperty: string;
    propertyValidator: RequestPropertyValidator;
}): Promise<RuleViolation[]> {
    const violations: RuleViolation[] = [];

    const requestPropertyComponents = getRequestPropertyComponents(requestProperty);
    if (requestPropertyComponents == null) {
        violations.push({
            severity: "error",
            message: `OAuth configuration for endpoint ${chalk.bold(endpointId)} must define a dot-delimited '${
                propertyValidator.propertyID
            }' property starting with $request (e.g. $request.${propertyValidator.propertyID}).`
        });
        return violations;
    }
    if (requestPropertyComponents.length > 1) {
        // For now, we prevent request properties from being nested further than the top-level.
        violations.push({
            severity: "error",
            message: `OAuth configuration for endpoint ${chalk.bold(
                endpointId
            )} cannot reference nested $request properties like '${requestProperty}'; expected '$request.${
                propertyValidator.propertyID
            }' instead.`
        });
        return violations;
    }
    if (
        !(await requestTypeHasProperty({
            typeResolver,
            file,
            endpoint,
            propertyComponents: requestPropertyComponents,
            validate: propertyValidator.validate
        }))
    ) {
        violations.push({
            severity: "error",
            message: `OAuth configuration for endpoint ${chalk.bold(endpointId)} specifies '${
                propertyValidator.propertyID
            }' ${requestProperty}, which is not a valid '${propertyValidator.propertyID}' type.`
        });
    }

    return violations;
}

async function validateResponseProperty({
    endpointId,
    typeResolver,
    file,
    resolvedResponseType,
    responseProperty,
    propertyValidator
}: {
    endpointId: string;
    typeResolver: TypeResolver;
    file: FernFileContext;
    resolvedResponseType: ResolvedType;
    responseProperty: string;
    propertyValidator: ResponsePropertyValidator;
}): Promise<RuleViolation[]> {
    const violations: RuleViolation[] = [];

    const responsePropertyComponents = getResponsePropertyComponents(responseProperty);
    if (responsePropertyComponents == null) {
        violations.push({
            severity: "error",
            message: `OAuth configuration for endpoint ${chalk.bold(endpointId)} must define a dot-delimited '${
                propertyValidator.propertyID
            }' property starting with $response (e.g. $response.${propertyValidator.propertyID}).`
        });
    }

    if (
        responsePropertyComponents != null &&
        !(await propertyValidator.validate({
            typeResolver,
            file,
            resolvedType: resolvedResponseType,
            propertyComponents: responsePropertyComponents
        }))
    ) {
        violations.push({
            severity: "error",
            message: `OAuth configuration for endpoint ${chalk.bold(endpointId)} specifies '${
                propertyValidator.propertyID
            }' ${responseProperty}, which is not a valid '${propertyValidator.propertyID}' type.`
        });
    }

    return violations;
}

function isIntegerType({ resolvedType }: { resolvedType: ResolvedType | undefined }): boolean {
    return maybePrimitiveType(resolvedType) === "INTEGER";
}

function isStringType({ resolvedType }: { resolvedType: ResolvedType | undefined }): boolean {
    return maybePrimitiveType(resolvedType) === "STRING";
}
