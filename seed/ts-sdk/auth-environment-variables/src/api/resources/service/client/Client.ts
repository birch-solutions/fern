/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";
import * as SeedAuthEnvironmentVariables from "../../..";

export declare namespace Service {
    interface Options {
        environment: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
        xAnotherHeader: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Service {
    constructor(protected readonly _options: Service.Options) {}

    /**
     * GET request with custom api key
     */
    public async getWithApiKey(requestOptions?: Service.RequestOptions): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "apiKey"),
            method: "GET",
            headers: {
                "X-Another-Header": await core.Supplier.get(this._options.xAnotherHeader),
                "X-FERN-API-KEY": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.service.getWithApiKey.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedAuthEnvironmentVariablesError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedAuthEnvironmentVariablesError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedAuthEnvironmentVariablesTimeoutError();
            case "unknown":
                throw new errors.SeedAuthEnvironmentVariablesError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * GET request with custom api key
     */
    public async getWithHeader(
        request: SeedAuthEnvironmentVariables.HeaderAuthRequest,
        requestOptions?: Service.RequestOptions
    ): Promise<string> {
        const { xEndpointHeader } = request;
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "apiKeyInHeader"),
            method: "GET",
            headers: {
                "X-Another-Header": await core.Supplier.get(this._options.xAnotherHeader),
                "X-FERN-API-KEY": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "X-Endpoint-Header": xEndpointHeader,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.service.getWithHeader.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedAuthEnvironmentVariablesError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedAuthEnvironmentVariablesError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedAuthEnvironmentVariablesTimeoutError();
            case "unknown":
                throw new errors.SeedAuthEnvironmentVariablesError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
