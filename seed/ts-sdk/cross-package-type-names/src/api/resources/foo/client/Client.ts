/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedCrossPackageTypeNames from "../../../index";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Foo {
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
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Foo {
    constructor(protected readonly _options: Foo.Options) {}

    /**
     * @param {SeedCrossPackageTypeNames.FindRequest} request
     * @param {Foo.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.foo.find({
     *         optionalString: "optionalString",
     *         publicProperty: "publicProperty",
     *         privateProperty: 1
     *     })
     */
    public find(
        request: SeedCrossPackageTypeNames.FindRequest = {},
        requestOptions?: Foo.RequestOptions
    ): core.APIPromise<SeedCrossPackageTypeNames.ImportingType> {
        return core.APIPromise.from(
            (async () => {
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
                        "X-Fern-SDK-Name": "@fern/cross-package-type-names",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/cross-package-type-names/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    queryParameters: _queryParams,
                    requestType: "json",
                    body: serializers.FindRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.ImportingType.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedCrossPackageTypeNamesError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedCrossPackageTypeNamesError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedCrossPackageTypeNamesTimeoutError();
                    case "unknown":
                        throw new errors.SeedCrossPackageTypeNamesError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }
}
