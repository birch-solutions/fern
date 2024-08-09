/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import * as errors from "./errors/index";
import { A } from "./api/resources/a/client/Client";
import { Folder } from "./api/resources/folder/client/Client";

export declare namespace SeedApiClient {
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
    }
}

export class SeedApiClient {
    constructor(protected readonly _options: SeedApiClient.Options) {}

    /**
     * @param {SeedApiClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.foo()
     */
    public async foo(requestOptions?: SeedApiClient.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: await core.Supplier.get(this._options.environment),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/folders",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/folders/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedApiTimeoutError();
            case "unknown":
                throw new errors.SeedApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _a: A | undefined;

    public get a(): A {
        return (this._a ??= new A(this._options));
    }

    protected _folder: Folder | undefined;

    public get folder(): Folder {
        return (this._folder ??= new Folder(this._options));
    }
}
