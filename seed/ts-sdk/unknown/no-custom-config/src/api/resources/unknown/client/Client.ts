/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import * as SeedUnknownAsAny from "../../../index";
import urlJoin from "url-join";

export declare namespace Unknown {
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

export class Unknown {
    constructor(protected readonly _options: Unknown.Options) {}

    /**
     * @param {unknown} request
     * @param {Unknown.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.unknown.post({
     *         "key": "value"
     *     })
     */
    public async post(request?: unknown, requestOptions?: Unknown.RequestOptions): Promise<unknown[]> {
        const _response = await core.fetcher({
            url: await core.Supplier.get(this._options.environment),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/unknown",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/unknown/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.unknown.post.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedUnknownAsAnyError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedUnknownAsAnyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedUnknownAsAnyTimeoutError();
            case "unknown":
                throw new errors.SeedUnknownAsAnyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedUnknownAsAny.MyObject} request
     * @param {Unknown.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.unknown.postObject({
     *         unknown: {
     *             "key": "value"
     *         }
     *     })
     */
    public async postObject(
        request: SeedUnknownAsAny.MyObject,
        requestOptions?: Unknown.RequestOptions
    ): Promise<unknown[]> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/with-object"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/unknown",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/unknown/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.MyObject.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.unknown.postObject.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedUnknownAsAnyError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedUnknownAsAnyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedUnknownAsAnyTimeoutError();
            case "unknown":
                throw new errors.SeedUnknownAsAnyError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
