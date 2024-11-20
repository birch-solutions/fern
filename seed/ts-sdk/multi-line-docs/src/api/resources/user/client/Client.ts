/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import * as SeedMultiLineDocs from "../../../index";
import * as serializers from "../../../../serialization/index";

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
     * Retrieve a user.
     * This endpoint is used to retrieve a user.
     *
     * @param {string} userId - The ID of the user to retrieve.
     *                          This ID is unique to each user.
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.getUser("userId")
     */
    public getUser(userId: string, requestOptions?: User.RequestOptions): core.APIPromise<void> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        await core.Supplier.get(this._options.environment),
                        `users/${encodeURIComponent(userId)}`
                    ),
                    method: "GET",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/multi-line-docs",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/multi-line-docs/0.0.1",
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
                        body: undefined,
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedMultiLineDocsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedMultiLineDocsError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedMultiLineDocsTimeoutError();
                    case "unknown":
                        throw new errors.SeedMultiLineDocsError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * Create a new user.
     * This endpoint is used to create a new user.
     *
     * @param {SeedMultiLineDocs.CreateUserRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.createUser({
     *         name: "name",
     *         age: 1
     *     })
     */
    public createUser(
        request: SeedMultiLineDocs.CreateUserRequest,
        requestOptions?: User.RequestOptions
    ): core.APIPromise<SeedMultiLineDocs.User> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(await core.Supplier.get(this._options.environment), "users"),
                    method: "POST",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/multi-line-docs",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/multi-line-docs/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    body: serializers.CreateUserRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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
                    throw new errors.SeedMultiLineDocsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedMultiLineDocsError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedMultiLineDocsTimeoutError();
                    case "unknown":
                        throw new errors.SeedMultiLineDocsError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }
}
