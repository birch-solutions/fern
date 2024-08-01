/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedUndiscriminatedUnions from "../../../index";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import urlJoin from "url-join";

export declare namespace Union {
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

export class Union {
    constructor(protected readonly _options: Union.Options) {
    }

    /**
     * @param {SeedUndiscriminatedUnions.MyUnion} request
     * @param {Union.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.union.get("string")
     */
    public async get(request: SeedUndiscriminatedUnions.MyUnion, requestOptions?: Union.RequestOptions): Promise<SeedUndiscriminatedUnions.MyUnion> {
        const _response = await core.fetcher({
            url: await core.Supplier.get(this._options.environment),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/undiscriminated-unions",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.MyUnion.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? (requestOptions.timeoutInSeconds * 1000) : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal
        });
        if (_response.ok) {
            return serializers.MyUnion.parseOrThrow(_response.body, { unrecognizedObjectKeys: "passthrough", allowUnrecognizedUnionMembers: true, allowUnrecognizedEnumValues: true, breadcrumbsPrefix: ["response"] });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedUndiscriminatedUnionsError({
                statusCode: _response.error.statusCode,
                body: _response.error.body
            });
        }

        switch (_response.error.reason) {
            case "non-json": throw new errors.SeedUndiscriminatedUnionsError({
                statusCode: _response.error.statusCode,
                body: _response.error.rawBody
            });
            case "timeout": throw new errors.SeedUndiscriminatedUnionsTimeoutError;
            case "unknown": throw new errors.SeedUndiscriminatedUnionsError({
                message: _response.error.errorMessage
            });
        }
    }

    /**
     * @param {Union.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.union.getMetadata()
     */
    public async getMetadata(requestOptions?: Union.RequestOptions): Promise<SeedUndiscriminatedUnions.Metadata> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/metadata"),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/undiscriminated-unions",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? (requestOptions.timeoutInSeconds * 1000) : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal
        });
        if (_response.ok) {
            return serializers.Metadata.parseOrThrow(_response.body, { unrecognizedObjectKeys: "passthrough", allowUnrecognizedUnionMembers: true, allowUnrecognizedEnumValues: true, breadcrumbsPrefix: ["response"] });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedUndiscriminatedUnionsError({
                statusCode: _response.error.statusCode,
                body: _response.error.body
            });
        }

        switch (_response.error.reason) {
            case "non-json": throw new errors.SeedUndiscriminatedUnionsError({
                statusCode: _response.error.statusCode,
                body: _response.error.rawBody
            });
            case "timeout": throw new errors.SeedUndiscriminatedUnionsTimeoutError;
            case "unknown": throw new errors.SeedUndiscriminatedUnionsError({
                message: _response.error.errorMessage
            });
        }
    }
}
