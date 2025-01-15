/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedNurseryApi from "../../../index";
import * as errors from "../../../../errors/index";

export declare namespace Package {
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

export class Package {
    constructor(protected readonly _options: Package.Options) {}

    /**
     * @param {SeedNurseryApi.TestRequest} request
     * @param {Package.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.package.test({
     *         for: "for"
     *     })
     */
    public async test(request: SeedNurseryApi.TestRequest, requestOptions?: Package.RequestOptions): Promise<void> {
        const { for: for_ } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["for"] = for_;
        const _response = await core.fetcher({
            url:
                (await core.Supplier.get(this._options.baseUrl)) ??
                (await core.Supplier.get(this._options.environment)),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/reserved-keywords",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/reserved-keywords/0.0.1",
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
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedNurseryApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedNurseryApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedNurseryApiTimeoutError("Timeout exceeded when calling POST /.");
            case "unknown":
                throw new errors.SeedNurseryApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
