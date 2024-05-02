/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedLiteral from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Headers {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Headers {
    constructor(protected readonly _options: Headers.Options) {}

    /**
     * @param {SeedLiteral.SendLiteralsInHeadersRequest} request
     * @param {Headers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await seedLiteral.headers.send({
     *         endpointVersion: "02-12-2024",
     *         async: true,
     *         query: "What is the weather today"
     *     })
     */
    public async send(
        request: SeedLiteral.SendLiteralsInHeadersRequest,
        requestOptions?: Headers.RequestOptions
    ): Promise<SeedLiteral.SendResponse> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "headers"),
            method: "POST",
            headers: {
                "X-API-Version": "02-02-2024",
                "X-API-Enable-Audit-Logging": "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/literal",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "X-Endpoint-Version": "02-12-2024",
                "X-Async": "true",
            },
            contentType: "application/json",
            body: await serializers.SendLiteralsInHeadersRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SendResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedLiteralError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedLiteralError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedLiteralTimeoutError();
            case "unknown":
                throw new errors.SeedLiteralError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
