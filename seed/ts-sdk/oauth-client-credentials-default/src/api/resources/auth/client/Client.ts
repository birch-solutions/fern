/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedOauthClientCredentialsDefault from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Auth {
    interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Auth {
    constructor(protected readonly _options: Auth.Options) {}

    /**
     * @param {SeedOauthClientCredentialsDefault.GetTokenRequest} request
     * @param {Auth.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await seedOauthClientCredentialsDefault.auth.getToken({
     *         clientId: "string",
     *         clientSecret: "string",
     *         grantType: "client_credentials"
     *     })
     */
    public async getToken(
        request: SeedOauthClientCredentialsDefault.GetTokenRequest,
        requestOptions?: Auth.RequestOptions
    ): Promise<SeedOauthClientCredentialsDefault.TokenResponse> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/token"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/oauth-client-credentials-default",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: {
                ...(await serializers.GetTokenRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" })),
                grant_type: "client_credentials",
            },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.TokenResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedOauthClientCredentialsDefaultError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedOauthClientCredentialsDefaultError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedOauthClientCredentialsDefaultTimeoutError();
            case "unknown":
                throw new errors.SeedOauthClientCredentialsDefaultError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
