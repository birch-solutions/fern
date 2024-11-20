/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedLiteral from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Reference {
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
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Reference {
    constructor(protected readonly _options: Reference.Options) {}

    /**
     * @param {SeedLiteral.SendRequest} request
     * @param {Reference.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.reference.send({
     *         prompt: "You are a helpful assistant",
     *         stream: false,
     *         context: "You're super wise",
     *         query: "What is the weather today",
     *         containerObject: {
     *             nestedObjects: [{
     *                     literal1: "literal1",
     *                     literal2: "literal2",
     *                     strProp: "strProp"
     *                 }]
     *         }
     *     })
     */
    public send(
        request: SeedLiteral.SendRequest,
        requestOptions?: Reference.RequestOptions
    ): core.APIPromise<SeedLiteral.SendResponse> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(await core.Supplier.get(this._options.environment), "reference"),
                    method: "POST",
                    headers: {
                        "X-API-Version": requestOptions?.version ?? this._options?.version ?? "02-02-2024",
                        "X-API-Enable-Audit-Logging": (
                            requestOptions?.auditLogging ??
                            this._options?.auditLogging ??
                            true
                        ).toString(),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/literal",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/literal/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    body: serializers.SendRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.SendResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
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
            })()
        );
    }
}
