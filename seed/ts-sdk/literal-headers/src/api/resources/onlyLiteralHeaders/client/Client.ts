/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace OnlyLiteralHeaders {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class OnlyLiteralHeaders {
    constructor(protected readonly _options: OnlyLiteralHeaders.Options) {}

    public async get(requestOptions?: OnlyLiteralHeaders.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/only-literal-headers"),
            method: "POST",
            headers: {
                "X-API-Header": "api header value",
                "X-API-Test": "false",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                literalServiceHeader: "service header",
                literalEndpointHeader: "endpoint header",
                falseEndpointHeader: "false",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedLiteralHeadersError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedLiteralHeadersError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedLiteralHeadersTimeoutError();
            case "unknown":
                throw new errors.SeedLiteralHeadersError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
