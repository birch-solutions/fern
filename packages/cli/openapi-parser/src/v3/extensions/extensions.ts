import { Values } from "@fern-api/core-utils";

export const FernOpenAPIExtension = {
    SDK_METHOD_NAME: "x-fern-sdk-method-name",
    SDK_GROUP_NAME: "x-fern-sdk-group-name",
    STREAMING: "x-fern-streaming",
    REQUEST_NAME_V1: "x-request-name",
    REQUEST_NAME_V2: "x-fern-request-name",
    TYPE_NAME: "x-fern-type-name",
    ENUM_NAMES_V1: "x-enum-names",
    ENUM_NAMES_V2: "x-fern-enum-names",
    ENUM_VAR_NAMES_V1: "x-enum-varnames",
    ENUM_VAR_NAMES_V2: "x-fern-enum-var-names",
    SERVER_NAME_V1: "x-name",
    SERVER_NAME_V2: "x-fern-server-name",

    /**
     * Used to detect if an endpoint has an async version of it
     * Example usage:
     *   paths:
     *    /path/to/my/endpoint:
     *      x-fern-async-config:
     *        discriminant:
     *          type: header
     *          name: X-Header-Name
     *          value: async
     *        response-status-code: 202
     **/
    ASYNC_CONFIG: "x-fern-async-config",

    /**
     * Used to create veriables in the fern definition
     * Example usage:
     * x-fern-sdk-variables:
     *   appName:
     *     type: string
     * paths:
     *   /path/to/my/endpoint/{id}:
     *     parameters:
     *       - name: id
     *         in: path
     *         type: string
     *         x-fern-sdk-variable: appName
     */
    SDK_VARIABLES: "x-fern-sdk-variables",
    SDK_VARIABLE: "x-fern-sdk-variable",

    /**
     * securitySchemes:
     *   Basic:
     *     scheme: http
     *     type: basic
     *     x-fern-username-variable-name: clientId
     *     x-fern-password-variable-name: clientSecret
     */
    BASIC_AUTH_USERNAME_VARIABLE_NAME: "x-fern-username-variable-name",
    BASIC_AUTH_PASSWORD_VARIABLE_NAME: "x-fern-password-variable-name",
} as const;

export type FernOpenAPIExtension = Values<typeof FernOpenAPIExtension>;

export function getExtension<T>(
    object: object,
    extension: FernOpenAPIExtension | FernOpenAPIExtension[]
): T | undefined {
    const extensions = Array.isArray(extension) ? extension : [extension];
    for (const extension of extensions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const extensionValue = (object as any)[extension];
        if (extensionValue != null) {
            return extensionValue as T;
        }
    }
    return undefined;
}
