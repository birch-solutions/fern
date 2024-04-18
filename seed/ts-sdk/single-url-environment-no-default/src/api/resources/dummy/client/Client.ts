/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Dummy {
    interface Options {
        environment: core.Supplier<environments.SeedSingleUrlEnvironmentNoDefaultEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Dummy {
    constructor(protected readonly _options: Dummy.Options) {}

    public async getDummy(requestOptions?: Dummy.RequestOptions): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "dummy"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/single-url-environment-no-default",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.dummy.getDummy.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedSingleUrlEnvironmentNoDefaultError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedSingleUrlEnvironmentNoDefaultError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedSingleUrlEnvironmentNoDefaultTimeoutError();
            case "unknown":
                throw new errors.SeedSingleUrlEnvironmentNoDefaultError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
