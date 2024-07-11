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
        /** Override the X-API-Version header */
        version?: "02-02-2024";
        /** Override the X-API-Enable-Audit-Logging header */
        auditLogging?: true;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-API-Version header */
        version?: "02-02-2024";
        /** Override the X-API-Enable-Audit-Logging header */
        auditLogging?: true;
    }
}

export class Headers {
    constructor(protected readonly _options: Headers.Options) {}

    /**
     * @param {SeedLiteral.SendLiteralsInHeadersRequest} request
     * @param {Headers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.headers.send({
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
                "X-API-Version": requestOptions?.version ?? this._options?.version ?? "02-02-2024",
                "X-API-Enable-Audit-Logging":
                    requestOptions?.auditLogging != null
                        ? requestOptions.auditLogging.toString()
                        : this._options?.auditLogging != null
                        ? this._options.auditLogging.toString()
                        : "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/literal",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "X-Endpoint-Version": "02-12-2024",
                "X-Async": "true",
            },
            contentType: "application/json",
            body: serializers.SendLiteralsInHeadersRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SendResponse.parseOrThrow(_response.body, {
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
