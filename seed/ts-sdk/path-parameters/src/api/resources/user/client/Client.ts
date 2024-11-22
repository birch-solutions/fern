/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedPathParameters from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace User {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class User {
    constructor(protected readonly _options: User.Options) {}

    /**
     * @param {string} organizationId
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.getOrganization("organizationId")
     */
    public getOrganization(
        organizationId: string,
        requestOptions?: User.RequestOptions
    ): core.APIPromise<SeedPathParameters.User> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        await core.Supplier.get(this._options.environment),
                        `/user/organizations/${encodeURIComponent(organizationId)}`
                    ),
                    method: "GET",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/path-parameters",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/path-parameters/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.User.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedPathParametersError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedPathParametersError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedPathParametersTimeoutError(
                            "Timeout exceeded when calling GET /user/organizations/{organizationId}."
                        );
                    case "unknown":
                        throw new errors.SeedPathParametersError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * @param {string} userId
     * @param {SeedPathParameters.GetUsersRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.getUser("userId")
     */
    public getUser(
        userId: string,
        request: SeedPathParameters.GetUsersRequest = {},
        requestOptions?: User.RequestOptions
    ): core.APIPromise<SeedPathParameters.User> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        await core.Supplier.get(this._options.environment),
                        `/user/users/${encodeURIComponent(userId)}`
                    ),
                    method: "GET",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/path-parameters",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/path-parameters/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.User.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedPathParametersError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedPathParametersError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedPathParametersTimeoutError(
                            "Timeout exceeded when calling GET /user/users/{userId}."
                        );
                    case "unknown":
                        throw new errors.SeedPathParametersError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * @param {string} organizationId
     * @param {string} userId
     * @param {SeedPathParameters.GetOrganizationUserRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.getOrganizationUser("organizationId", "userId")
     */
    public getOrganizationUser(
        organizationId: string,
        userId: string,
        request: SeedPathParameters.GetOrganizationUserRequest = {},
        requestOptions?: User.RequestOptions
    ): core.APIPromise<SeedPathParameters.User> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        await core.Supplier.get(this._options.environment),
                        `/user/organizations/${encodeURIComponent(organizationId)}/users/${encodeURIComponent(userId)}`
                    ),
                    method: "GET",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/path-parameters",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/path-parameters/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.User.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedPathParametersError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedPathParametersError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedPathParametersTimeoutError(
                            "Timeout exceeded when calling GET /user/organizations/{organizationId}/users/{userId}."
                        );
                    case "unknown":
                        throw new errors.SeedPathParametersError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }
}
