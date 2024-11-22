/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedMixedFileDirectory from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import { Events } from "../resources/events/client/Client";

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
     * List all users.
     *
     * @param {SeedMixedFileDirectory.ListUsersRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.list({
     *         limit: 1
     *     })
     */
    public list(
        request: SeedMixedFileDirectory.ListUsersRequest = {},
        requestOptions?: User.RequestOptions
    ): core.APIPromise<SeedMixedFileDirectory.User[]> {
        return core.APIPromise.from(
            (async () => {
                const { limit } = request;
                const _queryParams: Record<string, string | string[] | object | object[]> = {};
                if (limit != null) {
                    _queryParams["limit"] = limit.toString();
                }
                const _response = await core.fetcher({
                    url: urlJoin(await core.Supplier.get(this._options.environment), "/users/"),
                    method: "GET",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/mixed-file-directory",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/mixed-file-directory/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    queryParameters: _queryParams,
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.user.list.Response.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedMixedFileDirectoryError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedMixedFileDirectoryError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedMixedFileDirectoryTimeoutError(
                            "Timeout exceeded when calling GET /users/."
                        );
                    case "unknown":
                        throw new errors.SeedMixedFileDirectoryError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    protected _events: Events | undefined;

    public get events(): Events {
        return (this._events ??= new Events(this._options));
    }
}
