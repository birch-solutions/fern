/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as stream from "stream";
import * as errors from "../../../../errors/index";

export declare namespace Service {
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
    }
}

export class Service {
    constructor(protected readonly _options: Service.Options) {}

    public async downloadFile(requestOptions?: Service.RequestOptions): Promise<{
        data: stream.Readable;
        contentLengthInBytes?: number;
        contentType?: string;
    }> {
        const _response = await core.fetcher<stream.Readable>({
            url: await core.Supplier.get(this._options.environment),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/file-download",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/file-download/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            const _contentLength = core.getHeader(_response.headers ?? {}, "Content-Length");
            return {
                data: _response.body,
                contentLengthInBytes: _contentLength != null ? Number(_contentLength) : undefined,
                contentType: core.getHeader(_response.headers ?? {}, "Content-Type"),
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedFileDownloadError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedFileDownloadError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedFileDownloadTimeoutError();
            case "unknown":
                throw new errors.SeedFileDownloadError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
