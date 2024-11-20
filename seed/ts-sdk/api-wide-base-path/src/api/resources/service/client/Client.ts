/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Service {
    interface Options {
        environment: core.Supplier<string>;
        pathParam: string;
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

export class Service {
    constructor(protected readonly _options: Service.Options) {}

    /**
     * @param {string} serviceParam
     * @param {string} resourceParam
     * @param {number} endpointParam
     * @param {Service.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.service.post("serviceParam", "resourceParam", 1)
     */
    public post(
        serviceParam: string,
        resourceParam: string,
        endpointParam: number,
        requestOptions?: Service.RequestOptions
    ): core.APIPromise<void> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        await core.Supplier.get(this._options.environment),
                        `/test/${encodeURIComponent(this._options.pathParam)}/${encodeURIComponent(
                            serviceParam
                        )}/${encodeURIComponent(endpointParam)}/${encodeURIComponent(resourceParam)}`
                    ),
                    method: "POST",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/api-wide-base-path",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/api-wide-base-path/0.0.1",
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
                    throw new errors.SeedApiWideBasePathError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedApiWideBasePathError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedApiWideBasePathTimeoutError();
                    case "unknown":
                        throw new errors.SeedApiWideBasePathError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }
}
