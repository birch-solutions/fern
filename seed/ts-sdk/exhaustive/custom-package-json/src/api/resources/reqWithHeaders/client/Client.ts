/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as Fiddle from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace ReqWithHeaders {
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

export class ReqWithHeaders {
    constructor(protected readonly _options: ReqWithHeaders.Options) {
    }

    /**
     * @param {Fiddle.ReqWithHeaders} request
     * @param {ReqWithHeaders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.reqWithHeaders.getWithCustomHeader({
     *         xTestServiceHeader: "string",
     *         xTestEndpointHeader: "string",
     *         body: "string"
     *     })
     */
    public async getWithCustomHeader(request: Fiddle.ReqWithHeaders, requestOptions?: ReqWithHeaders.RequestOptions): Promise<core.APIResponse<void, Fiddle.reqWithHeaders.getWithCustomHeader.Error>> {
        const { xTestServiceHeader, xTestEndpointHeader, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/test-headers/custom-header"),
            method: "POST",
            headers: {
                "Authorization": await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "X-TEST-SERVICE-HEADER": xTestServiceHeader,
                "X-TEST-ENDPOINT-HEADER": xTestEndpointHeader
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.reqWithHeaders.getWithCustomHeader.Request.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
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
            error: Fiddle.reqWithHeaders.getWithCustomHeader.Error._unknown(_response.error)
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
