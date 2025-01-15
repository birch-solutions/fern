/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedNullable from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Nullable {
    export interface Options {
        environment: core.Supplier<string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
    }

    export interface RequestOptions {
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

export class Nullable {
    constructor(protected readonly _options: Nullable.Options) {}

    /**
     * @param {SeedNullable.GetUsersRequest} request
     * @param {Nullable.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nullable.getUsers({
     *         usernames: "usernames",
     *         avatar: "avatar",
     *         activated: true,
     *         tags: null,
     *         extra: null
     *     })
     */
    public async getUsers(
        request: SeedNullable.GetUsersRequest = {},
        requestOptions?: Nullable.RequestOptions,
    ): Promise<SeedNullable.User[]> {
        const { usernames, avatar, activated, tags, extra } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (usernames != null) {
            if (Array.isArray(usernames)) {
                _queryParams["usernames"] = usernames.map((item) => item);
            } else {
                _queryParams["usernames"] = usernames;
            }
        }

        if (avatar != null) {
            _queryParams["avatar"] = avatar;
        }

        if (activated != null) {
            if (Array.isArray(activated)) {
                _queryParams["activated"] = activated.map((item) => item.toString());
            } else {
                _queryParams["activated"] = activated.toString();
            }
        }

        if (tags !== undefined) {
            if (Array.isArray(tags)) {
                _queryParams["tags"] = tags.map((item) => item);
            } else {
                _queryParams["tags"] = tags;
            }
        }

        if (extra !== undefined) {
            _queryParams["extra"] = extra?.toString() ?? null;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/users",
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/nullable",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/nullable/0.0.1",
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
            return serializers.nullable.getUsers.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedNullableError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedNullableError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedNullableTimeoutError("Timeout exceeded when calling GET /users.");
            case "unknown":
                throw new errors.SeedNullableError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedNullable.CreateUserRequest} request
     * @param {Nullable.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nullable.createUser({
     *         username: "username",
     *         tags: ["tags", "tags"],
     *         metadata: {
     *             createdAt: "2024-01-15T09:30:00Z",
     *             updatedAt: "2024-01-15T09:30:00Z",
     *             avatar: "avatar",
     *             activated: true
     *         },
     *         avatar: "avatar"
     *     })
     */
    public async createUser(
        request: SeedNullable.CreateUserRequest,
        requestOptions?: Nullable.RequestOptions,
    ): Promise<SeedNullable.User> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/users",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/nullable",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/nullable/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateUserRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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
            throw new errors.SeedNullableError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedNullableError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedNullableTimeoutError("Timeout exceeded when calling POST /users.");
            case "unknown":
                throw new errors.SeedNullableError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedNullable.DeleteUserRequest} request
     * @param {Nullable.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nullable.deleteUser({
     *         username: "xy"
     *     })
     */
    public async deleteUser(
        request: SeedNullable.DeleteUserRequest = {},
        requestOptions?: Nullable.RequestOptions,
    ): Promise<boolean> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/users",
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/nullable",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/nullable/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.DeleteUserRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.nullable.deleteUser.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedNullableError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedNullableError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedNullableTimeoutError("Timeout exceeded when calling DELETE /users.");
            case "unknown":
                throw new errors.SeedNullableError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
