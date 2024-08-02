/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../core";
import * as Fiddle from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";

export declare namespace Params {
    interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
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

export class Params {
    constructor(protected readonly _options: Params.Options) {
    }

    /**
     * GET with path param
     *
     * @param {string} param
     * @param {Params.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.params.getWithPath("string")
     */
    public async getWithPath(param: string, requestOptions?: Params.RequestOptions): Promise<core.APIResponse<string, Fiddle.endpoints.params.getWithPath.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), `/params/path/${encodeURIComponent(param)}`),
            method: "GET",
            headers: {
                "Authorization": await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
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
            return {
                ok: true,
                body: serializers.endpoints.params.getWithPath.Response.parseOrThrow(_response.body, { unrecognizedObjectKeys: "passthrough", allowUnrecognizedUnionMembers: true, allowUnrecognizedEnumValues: true, breadcrumbsPrefix: ["response"] })
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.params.getWithPath.Error._unknown(_response.error)
        };
    }

    /**
     * GET with query param
     *
     * @param {Fiddle.endpoints.GetWithQuery} request
     * @param {Params.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.params.getWithQuery({
     *         query: "string",
     *         number: 1
     *     })
     */
    public async getWithQuery(request: Fiddle.endpoints.GetWithQuery, requestOptions?: Params.RequestOptions): Promise<core.APIResponse<void, Fiddle.endpoints.params.getWithQuery.Error>> {
        const { query, "number": number_ } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["query"] = query;
        _queryParams["number"] = number_.toString();
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/params"),
            method: "GET",
            headers: {
                "Authorization": await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
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
            return {
                ok: true,
                body: undefined
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.params.getWithQuery.Error._unknown(_response.error)
        };
    }

    /**
     * GET with multiple of same query param
     *
     * @param {Fiddle.endpoints.GetWithMultipleQuery} request
     * @param {Params.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.params.getWithAllowMultipleQuery({
     *         query: "string",
     *         numer: 1
     *     })
     */
    public async getWithAllowMultipleQuery(request: Fiddle.endpoints.GetWithMultipleQuery, requestOptions?: Params.RequestOptions): Promise<core.APIResponse<void, Fiddle.endpoints.params.getWithAllowMultipleQuery.Error>> {
        const { query, numer } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (Array.isArray(query)) {
            _queryParams["query"] = query.map(item => item);
        }
        else {
            _queryParams["query"] = query;
        }

        if (Array.isArray(numer)) {
            _queryParams["numer"] = numer.map(item => item.toString());
        }
        else {
            _queryParams["numer"] = numer.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/params"),
            method: "GET",
            headers: {
                "Authorization": await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
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
            return {
                ok: true,
                body: undefined
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.params.getWithAllowMultipleQuery.Error._unknown(_response.error)
        };
    }

    /**
     * GET with path and query params
     *
     * @param {string} param
     * @param {Fiddle.endpoints.GetWithPathAndQuery} request
     * @param {Params.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.params.getWithPathAndQuery("string", {
     *         query: "string"
     *     })
     */
    public async getWithPathAndQuery(param: string, request: Fiddle.endpoints.GetWithPathAndQuery, requestOptions?: Params.RequestOptions): Promise<core.APIResponse<void, Fiddle.endpoints.params.getWithPathAndQuery.Error>> {
        const { query } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["query"] = query;
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), `/params/path-query/${encodeURIComponent(param)}`),
            method: "GET",
            headers: {
                "Authorization": await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
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
            return {
                ok: true,
                body: undefined
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.params.getWithPathAndQuery.Error._unknown(_response.error)
        };
    }

    /**
     * PUT to update with path param
     *
     * @param {string} param
     * @param {string} request
     * @param {Params.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.params.modifyWithPath("string", "string")
     */
    public async modifyWithPath(param: string, request: string, requestOptions?: Params.RequestOptions): Promise<core.APIResponse<string, Fiddle.endpoints.params.modifyWithPath.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), `/params/path/${encodeURIComponent(param)}`),
            method: "PUT",
            headers: {
                "Authorization": await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.endpoints.params.modifyWithPath.Request.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? (requestOptions.timeoutInSeconds * 1000) : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.endpoints.params.modifyWithPath.Response.parseOrThrow(_response.body, { unrecognizedObjectKeys: "passthrough", allowUnrecognizedUnionMembers: true, allowUnrecognizedEnumValues: true, breadcrumbsPrefix: ["response"] })
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.params.modifyWithPath.Error._unknown(_response.error)
        };
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
