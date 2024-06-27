/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Auth } from "./api/resources/auth/client/Client";

export declare namespace SeedOauthClientCredentialsClient {
    interface Options {
        environment: core.Supplier<string>;
        clientId: core.Supplier<string>;
        clientSecret: core.Supplier<string>;
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

export class SeedOauthClientCredentialsClient {
    private readonly _oauthTokenProvider: core.OAuthTokenProvider;

    constructor(protected readonly _options: SeedOauthClientCredentialsClient.Options) {
        this._oauthTokenProvider = new core.OAuthTokenProvider({
            clientId: this._options.clientId,
            clientSecret: this._options.clientSecret,
            authClient: new Auth({
                environment: this._options.environment,
            }),
        });
    }

    protected _auth: Auth | undefined;

    public get auth(): Auth {
        return (this._auth ??= new Auth({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }
}
