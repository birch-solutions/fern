/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedOauthClientCredentials from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace Auth {
    interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
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

export class Auth {
    constructor(protected readonly _options: Auth.Options) {
    }

    /**
     * @param {SeedOauthClientCredentials.auth.GetTokenRequest} request
     * @param {Auth.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.auth.getToken({
     *         clientId: "string",
     *         clientSecret: "string",
     *         scope: "string"
     *     })
     */
    public async getToken(request: SeedOauthClientCredentials.auth.GetTokenRequest, requestOptions?: Auth.RequestOptions): Promise<core.APIResponse<SeedOauthClientCredentials.auth.TokenResponse, SeedOauthClientCredentials.auth.getToken.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/token"),
            method: "POST",
            headers: {
                "Authorization": await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/oauth-client-credentials-nested-root",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version
            },
            contentType: "application/json",
            requestType: "json",
            body: { ...(serializers.auth.GetTokenRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" })), audience: "https://api.example.com", grant_type: "client_credentials" },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? (requestOptions.timeoutInSeconds * 1000) : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.auth.TokenResponse.parseOrThrow(_response.body, { unrecognizedObjectKeys: "passthrough", allowUnrecognizedUnionMembers: true, allowUnrecognizedEnumValues: true, breadcrumbsPrefix: ["response"] })
            };
        }

        return {
            ok: false,
            error: SeedOauthClientCredentials.auth.getToken.Error._unknown(_response.error)
        };
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
