/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../core";
import * as SeedMixedFileDirectory from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";
import { Metadata } from "../resources/metadata/client/Client";

export declare namespace Events {
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

export class Events {
    constructor(protected readonly _options: Events.Options) {}

    /**
     * List all user events.
     *
     * @param {SeedMixedFileDirectory.user.ListUserEventsRequest} request
     * @param {Events.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.events.listEvents({
     *         limit: 1
     *     })
     */
    public listEvents(
        request: SeedMixedFileDirectory.user.ListUserEventsRequest = {},
        requestOptions?: Events.RequestOptions
    ): core.APIPromise<SeedMixedFileDirectory.user.Event[]> {
        return core.APIPromise.from(
            (async () => {
                const { limit } = request;
                const _queryParams: Record<string, string | string[] | object | object[]> = {};
                if (limit != null) {
                    _queryParams["limit"] = limit.toString();
                }
                const _response = await core.fetcher({
                    url: urlJoin(await core.Supplier.get(this._options.environment), "/users/events/"),
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
                        body: serializers.user.events.listEvents.Response.parseOrThrow(_response.body, {
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
                            "Timeout exceeded when calling GET /users/events/."
                        );
                    case "unknown":
                        throw new errors.SeedMixedFileDirectoryError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    protected _metadata: Metadata | undefined;

    public get metadata(): Metadata {
        return (this._metadata ??= new Metadata(this._options));
    }
}
