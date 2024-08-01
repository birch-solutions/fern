/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import * as SeedValidation from "./api/index";
import * as serializers from "./serialization/index";
import urlJoin from "url-join";
import * as errors from "./errors/index";

export declare namespace SeedValidationClient {
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

export class SeedValidationClient {
    constructor(protected readonly _options: SeedValidationClient.Options) {
    }

    /**
     * @param {SeedValidation.CreateRequest} request
     * @param {SeedValidationClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.create({
     *         decimal: 1.1,
     *         even: 1,
     *         name: "string",
     *         shape: SeedValidation.Shape.Square
     *     })
     */
    public async create(request: SeedValidation.CreateRequest, requestOptions?: SeedValidationClient.RequestOptions): Promise<SeedValidation.Type> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/create"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/validation",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? (requestOptions.timeoutInSeconds * 1000) : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal
        });
        if (_response.ok) {
            return serializers.Type.parseOrThrow(_response.body, { unrecognizedObjectKeys: "passthrough", allowUnrecognizedUnionMembers: true, allowUnrecognizedEnumValues: true, breadcrumbsPrefix: ["response"] });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedValidationError({
                statusCode: _response.error.statusCode,
                body: _response.error.body
            });
        }

        switch (_response.error.reason) {
            case "non-json": throw new errors.SeedValidationError({
                statusCode: _response.error.statusCode,
                body: _response.error.rawBody
            });
            case "timeout": throw new errors.SeedValidationTimeoutError;
            case "unknown": throw new errors.SeedValidationError({
                message: _response.error.errorMessage
            });
        }
    }

    /**
     * @param {SeedValidation.GetRequest} request
     * @param {SeedValidationClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.get({
     *         decimal: 1.1,
     *         even: 1,
     *         name: "string"
     *     })
     */
    public async get(request: SeedValidation.GetRequest, requestOptions?: SeedValidationClient.RequestOptions): Promise<SeedValidation.Type> {
        const { decimal, even, name } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["decimal"] = decimal.toString();
        _queryParams["even"] = even.toString();
        _queryParams["name"] = name;
        const _response = await core.fetcher({
            url: await core.Supplier.get(this._options.environment),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/validation",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? (requestOptions.timeoutInSeconds * 1000) : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal
        });
        if (_response.ok) {
            return serializers.Type.parseOrThrow(_response.body, { unrecognizedObjectKeys: "passthrough", allowUnrecognizedUnionMembers: true, allowUnrecognizedEnumValues: true, breadcrumbsPrefix: ["response"] });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedValidationError({
                statusCode: _response.error.statusCode,
                body: _response.error.body
            });
        }

        switch (_response.error.reason) {
            case "non-json": throw new errors.SeedValidationError({
                statusCode: _response.error.statusCode,
                body: _response.error.rawBody
            });
            case "timeout": throw new errors.SeedValidationTimeoutError;
            case "unknown": throw new errors.SeedValidationError({
                message: _response.error.errorMessage
            });
        }
    }
}
