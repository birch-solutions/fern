/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedStreaming from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as stream from "stream";
import * as errors from "../../../../errors/index";

export declare namespace Dummy {
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

export class Dummy {
    constructor(protected readonly _options: Dummy.Options) {}

    public async generateStream(
        request: SeedStreaming.GenerateStreamRequest,
        requestOptions?: Dummy.RequestOptions
    ): Promise<core.Stream<SeedStreaming.StreamResponse>> {
        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(await core.Supplier.get(this._options.environment), "generate-stream"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/streaming",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/streaming/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: {
                ...serializers.GenerateStreamRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                stream: true,
            },
            responseType: "sse",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: async (data) => {
                    return serializers.StreamResponse.parseOrThrow(data, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    });
                },
                signal: requestOptions?.abortSignal,
                eventShape: {
                    type: "json",
                    messageTerminator: "\n",
                },
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedStreamingError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedStreamingError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedStreamingTimeoutError("Timeout exceeded when calling POST /generate-stream.");
            case "unknown":
                throw new errors.SeedStreamingError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedStreaming.Generateequest} request
     * @param {Dummy.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.dummy.generate({
     *         numEvents: 5
     *     })
     */
    public async generate(
        request: SeedStreaming.Generateequest,
        requestOptions?: Dummy.RequestOptions
    ): Promise<SeedStreaming.StreamResponse> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "generate"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/streaming",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/streaming/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: {
                ...serializers.Generateequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                stream: false,
            },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.StreamResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedStreamingError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedStreamingError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedStreamingTimeoutError("Timeout exceeded when calling POST /generate.");
            case "unknown":
                throw new errors.SeedStreamingError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
