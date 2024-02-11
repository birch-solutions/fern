/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Service {
    interface Options {
        environment: core.Supplier<string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
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
    public async getWithBearerToken(requestOptions?: Service.RequestOptions): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "apiKey"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.service.getWithBearerToken.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedBearerTokenEnvironmentVariableError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedBearerTokenEnvironmentVariableError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedBearerTokenEnvironmentVariableTimeoutError();
            case "unknown":
                throw new errors.SeedBearerTokenEnvironmentVariableError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const bearer = (await core.Supplier.get(this._options.apiKey)) ?? process.env["COURIER_API_KEY"];
        if (bearer == null) {
            throw new errors.SeedBearerTokenEnvironmentVariableError({
                message: "Please specify COURIER_API_KEY when instantiating the client.",
            });
        }

        return `Bearer ${bearer}`;
    }
}
