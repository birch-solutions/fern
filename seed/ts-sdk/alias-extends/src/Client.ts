/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core/index.js";
import * as SeedAliasExtends from "./api/index.js";
import * as serializers from "./serialization/index.js";
import urlJoin from "url-join";
import * as errors from "./errors/index.js";

export declare namespace SeedAliasExtendsClient {
    export interface Options {
        environment: core.Supplier<string>;
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

export class SeedAliasExtendsClient {
    constructor(protected readonly _options: SeedAliasExtendsClient.Options) {}

    /**
     * @param {SeedAliasExtends.InlinedChildRequest} request
     * @param {SeedAliasExtendsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.extendedInlineRequestBody({
     *         child: "child"
     *     })
     */
    public async extendedInlineRequestBody(
        request: SeedAliasExtends.InlinedChildRequest,
        requestOptions?: SeedAliasExtendsClient.RequestOptions,
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/extends/extended-inline-request-body"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/alias-extends",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/alias-extends/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.InlinedChildRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedAliasExtendsError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedAliasExtendsError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedAliasExtendsTimeoutError(
                    "Timeout exceeded when calling POST /extends/extended-inline-request-body.",
                );
            case "unknown":
                throw new errors.SeedAliasExtendsError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
