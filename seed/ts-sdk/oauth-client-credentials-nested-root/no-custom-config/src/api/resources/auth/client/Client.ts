/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedOauthClientCredentials from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Auth {
    export interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
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

export class Auth {
    constructor(protected readonly _options: Auth.Options) {}

    /**
     * @param {SeedOauthClientCredentials.auth.GetTokenRequest} request
     * @param {Auth.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.auth.getToken({
     *         clientId: "client_id",
     *         clientSecret: "client_secret",
     *         scope: "scope"
     *     })
     */
    public async getToken(
        request: SeedOauthClientCredentials.auth.GetTokenRequest,
        requestOptions?: Auth.RequestOptions,
    ): Promise<SeedOauthClientCredentials.auth.TokenResponse> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/token"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/oauth-client-credentials-nested-root",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/oauth-client-credentials-nested-root/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: {
                ...serializers.auth.GetTokenRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                audience: "https://api.example.com",
                grant_type: "client_credentials",
            },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.auth.TokenResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedOauthClientCredentialsError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedOauthClientCredentialsError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedOauthClientCredentialsTimeoutError("Timeout exceeded when calling POST /token.");
            case "unknown":
                throw new errors.SeedOauthClientCredentialsError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
