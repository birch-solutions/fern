/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as errors from "../../../../errors/index";
import { Problem } from "../resources/problem/client/Client";
import { V3 } from "../resources/v3/client/Client";

export declare namespace V2 {
    interface Options {
        environment?: core.Supplier<environments.SeedTraceEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-Random-Header header */
        xRandomHeader?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Random-Header header */
        xRandomHeader?: string | undefined;
    }
}

export class V2 {
    constructor(protected readonly _options: V2.Options = {}) {}

    /**
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.v2.test()
     */
    public async test(requestOptions?: V2.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
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
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _problem: Problem | undefined;

    public get problem(): Problem {
        return (this._problem ??= new Problem(this._options));
    }

    protected _v3: V3 | undefined;

    public get v3(): V3 {
        return (this._v3 ??= new V3(this._options));
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
