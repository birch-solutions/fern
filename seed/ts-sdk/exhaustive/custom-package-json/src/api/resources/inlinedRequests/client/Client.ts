/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core/index.js";
import * as Fiddle from "../../../index.js";
import * as serializers from "../../../../serialization/index.js";
import urlJoin from "url-join";

export declare namespace InlinedRequests {
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

export class InlinedRequests {
    constructor(protected readonly _options: InlinedRequests.Options) {}

    /**
     * POST with custom object in request body, response is an object
     *
     * @param {Fiddle.PostWithObjectBody} request
     * @param {InlinedRequests.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.inlinedRequests.postWithObjectBodyandResponse({
     *         string: "string",
     *         integer: 1,
     *         nestedObject: {
     *             string: "string",
     *             integer: 1,
     *             long: 1000000,
     *             double: 1.1,
     *             bool: true,
     *             datetime: "2024-01-15T09:30:00Z",
     *             date: "2023-01-15",
     *             uuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *             base64: "SGVsbG8gd29ybGQh",
     *             list: ["list", "list"],
     *             set: new Set(["set"]),
     *             map: {
     *                 1: "map"
     *             },
     *             bigint: "1000000"
     *         }
     *     })
     */
    public async postWithObjectBodyandResponse(
        request: Fiddle.PostWithObjectBody,
        requestOptions?: InlinedRequests.RequestOptions,
    ): Promise<
        core.APIResponse<
            Fiddle.types.ObjectWithOptionalField,
            Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/req-bodies/object"),
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
            body: serializers.PostWithObjectBody.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.types.ObjectWithOptionalField.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    return {
                        ok: false,
                        error: Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error.badRequestBody(
                            serializers.BadObjectRequestInfo.parseOrThrow(_response.error.body, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            }),
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error._unknown(_response.error),
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
