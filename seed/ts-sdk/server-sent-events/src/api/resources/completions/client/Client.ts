/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedServerSentEvents from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as stream from "stream";
import * as errors from "../../../../errors/index";

export declare namespace Completions {
    export interface Options {
        environment: core.Supplier<string>;
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

export class Completions {
    constructor(protected readonly _options: Completions.Options) {}

    public async stream(
        request: SeedServerSentEvents.StreamCompletionRequest,
        requestOptions?: Completions.RequestOptions,
    ): Promise<core.Stream<SeedServerSentEvents.StreamedCompletion>> {
        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(await core.Supplier.get(this._options.environment), "stream"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/server-sent-events",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/server-sent-events/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.StreamCompletionRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            responseType: "sse",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: async (data) => {
                    return serializers.StreamedCompletion.parseOrThrow(data, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    });
                },
                signal: requestOptions?.abortSignal,
                eventShape: {
                    type: "sse",
                    streamTerminator: "[[DONE]]",
                },
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedServerSentEventsError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedServerSentEventsError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedServerSentEventsTimeoutError("Timeout exceeded when calling POST /stream.");
            case "unknown":
                throw new errors.SeedServerSentEventsError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
