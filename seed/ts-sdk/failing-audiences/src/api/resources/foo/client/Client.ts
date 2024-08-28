/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedAudiences from "../../../index";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Foo {
    interface Options {
        environment: core.Supplier<environments.SeedAudiencesEnvironment | string>;
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

export class Foo {
    constructor(protected readonly _options: Foo.Options) {}

    /**
     * @param {SeedAudiences.FindRequest} request
     * @param {Foo.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.foo.find({
     *         optionalString: "string",
     *         publicProperty: "string",
     *         privateProperty: 1
     *     })
     */
    public async find(
        request: SeedAudiences.FindRequest = {},
        requestOptions?: Foo.RequestOptions
    ): Promise<SeedAudiences.ImportingType> {
        const { optionalString, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (optionalString != null) {
            _queryParams["optionalString"] = optionalString;
        }

        const _response = await core.fetcher({
            url: await core.Supplier.get(this._options.environment),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/failing-audiences",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/failing-audiences/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.FindRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ImportingType.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedAudiencesError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedAudiencesError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedAudiencesTimeoutError();
            case "unknown":
                throw new errors.SeedAudiencesError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
