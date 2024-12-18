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
        tenant_id: string;
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
     * @param {SeedPathParameters.GetUsersRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.getUser({
     *         user_id: "user_id"
     *     })
     */
    public async getUser(
        request: SeedPathParameters.GetUsersRequest,
        requestOptions?: User.RequestOptions
    ): Promise<SeedPathParameters.User> {
        const { user_id: userId } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `/${encodeURIComponent(this._options.tenant_id)}/user/${encodeURIComponent(userId)}`
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.User.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
                    "Timeout exceeded when calling GET /{tenant_id}/user/{user_id}."
                );
            case "unknown":
                throw new errors.SeedPathParametersError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedPathParameters.User} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.createUser({
     *         name: "name",
     *         tags: ["tags", "tags"]
     *     })
     */
    public async createUser(
        request: SeedPathParameters.User,
        requestOptions?: User.RequestOptions
    ): Promise<SeedPathParameters.User> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `/${encodeURIComponent(this._options.tenant_id)}/user/`
            ),
            method: "POST",
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
            body: serializers.User.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.User.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
                    "Timeout exceeded when calling POST /{tenant_id}/user/."
                );
            case "unknown":
                throw new errors.SeedPathParametersError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedPathParameters.UpdateUserRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.updateUser({
     *         user_id: "user_id",
     *         body: {
     *             name: "name",
     *             tags: ["tags", "tags"]
     *         }
     *     })
     */
    public async updateUser(
        request: SeedPathParameters.UpdateUserRequest,
        requestOptions?: User.RequestOptions
    ): Promise<SeedPathParameters.User> {
        const { user_id: userId, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `/${encodeURIComponent(this._options.tenant_id)}/user/${encodeURIComponent(userId)}`
            ),
            method: "PATCH",
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
            body: serializers.User.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.User.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
                    "Timeout exceeded when calling PATCH /{tenant_id}/user/{user_id}."
                );
            case "unknown":
                throw new errors.SeedPathParametersError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedPathParameters.SearchUsersRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.searchUsers({
     *         user_id: "user_id",
     *         limit: 1
     *     })
     */
    public async searchUsers(
        request: SeedPathParameters.SearchUsersRequest,
        requestOptions?: User.RequestOptions
    ): Promise<SeedPathParameters.User[]> {
        const { user_id: userId, limit } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `/${encodeURIComponent(this._options.tenant_id)}/user/${encodeURIComponent(userId)}/search`
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
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.user.searchUsers.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
                    "Timeout exceeded when calling GET /{tenant_id}/user/{user_id}/search."
                );
            case "unknown":
                throw new errors.SeedPathParametersError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
