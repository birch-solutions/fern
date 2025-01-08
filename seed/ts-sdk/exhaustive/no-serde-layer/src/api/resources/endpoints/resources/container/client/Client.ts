/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../core/index.js";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index.js";
import * as SeedExhaustive from "../../../../../index.js";

export declare namespace Container {
    export interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
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

export class Container {
    constructor(protected readonly _options: Container.Options) {}

    /**
     * @param {string[]} request
     * @param {Container.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.container.getAndReturnListOfPrimitives(["string", "string"])
     */
    public async getAndReturnListOfPrimitives(
        request: string[],
        requestOptions?: Container.RequestOptions,
    ): Promise<string[]> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/list-of-primitives"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/exhaustive/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as string[];
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError(
                    "Timeout exceeded when calling POST /container/list-of-primitives.",
                );
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedExhaustive.types.ObjectWithRequiredField[]} request
     * @param {Container.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.container.getAndReturnListOfObjects([{
     *             string: "string"
     *         }, {
     *             string: "string"
     *         }])
     */
    public async getAndReturnListOfObjects(
        request: SeedExhaustive.types.ObjectWithRequiredField[],
        requestOptions?: Container.RequestOptions,
    ): Promise<SeedExhaustive.types.ObjectWithRequiredField[]> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/list-of-objects"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/exhaustive/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as SeedExhaustive.types.ObjectWithRequiredField[];
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError(
                    "Timeout exceeded when calling POST /container/list-of-objects.",
                );
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string[]} request
     * @param {Container.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.container.getAndReturnSetOfPrimitives(new Set(["string"]))
     */
    public async getAndReturnSetOfPrimitives(
        request: string[],
        requestOptions?: Container.RequestOptions,
    ): Promise<string[]> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/set-of-primitives"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/exhaustive/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as string[];
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError(
                    "Timeout exceeded when calling POST /container/set-of-primitives.",
                );
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedExhaustive.types.ObjectWithRequiredField[]} request
     * @param {Container.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.container.getAndReturnSetOfObjects(new Set([{
     *             string: "string"
     *         }]))
     */
    public async getAndReturnSetOfObjects(
        request: SeedExhaustive.types.ObjectWithRequiredField[],
        requestOptions?: Container.RequestOptions,
    ): Promise<SeedExhaustive.types.ObjectWithRequiredField[]> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/set-of-objects"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/exhaustive/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as SeedExhaustive.types.ObjectWithRequiredField[];
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError(
                    "Timeout exceeded when calling POST /container/set-of-objects.",
                );
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Record<string, string>} request
     * @param {Container.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.container.getAndReturnMapPrimToPrim({
     *         "string": "string"
     *     })
     */
    public async getAndReturnMapPrimToPrim(
        request: Record<string, string>,
        requestOptions?: Container.RequestOptions,
    ): Promise<Record<string, string>> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/map-prim-to-prim"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/exhaustive/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Record<string, string>;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError(
                    "Timeout exceeded when calling POST /container/map-prim-to-prim.",
                );
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Record<string, SeedExhaustive.types.ObjectWithRequiredField>} request
     * @param {Container.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.container.getAndReturnMapOfPrimToObject({
     *         "string": {
     *             string: "string"
     *         }
     *     })
     */
    public async getAndReturnMapOfPrimToObject(
        request: Record<string, SeedExhaustive.types.ObjectWithRequiredField>,
        requestOptions?: Container.RequestOptions,
    ): Promise<Record<string, SeedExhaustive.types.ObjectWithRequiredField>> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/map-prim-to-object"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/exhaustive/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Record<string, SeedExhaustive.types.ObjectWithRequiredField>;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError(
                    "Timeout exceeded when calling POST /container/map-prim-to-object.",
                );
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedExhaustive.types.ObjectWithRequiredField} request
     * @param {Container.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.container.getAndReturnOptional({
     *         string: "string"
     *     })
     */
    public async getAndReturnOptional(
        request?: SeedExhaustive.types.ObjectWithRequiredField,
        requestOptions?: Container.RequestOptions,
    ): Promise<SeedExhaustive.types.ObjectWithRequiredField | undefined> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/opt-objects"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/exhaustive/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request != null ? request : undefined,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as SeedExhaustive.types.ObjectWithRequiredField | undefined;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError(
                    "Timeout exceeded when calling POST /container/opt-objects.",
                );
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
