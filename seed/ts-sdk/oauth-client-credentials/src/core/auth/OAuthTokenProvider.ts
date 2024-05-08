import { Auth } from "../../api/resources/auth/client/Client";
import * as core from "../../core";

export class OAuthTokenProvider {
    private readonly BUFFER_IN_MINUTES = 2;
    private readonly _clientId: core.Supplier<string>;
    private readonly _clientSecret: core.Supplier<string>;
    private readonly _authClient: Auth;
    private _accessToken: string | undefined;
    private _expiresAt: Date;

    constructor({
        clientId,
        clientSecret,
        authClient,
    }: {
        clientId: core.Supplier<string>;
        clientSecret: core.Supplier<string>;
        authClient: Auth;
    }) {
        this._clientId = clientId;
        this._clientSecret = clientSecret;
        this._authClient = authClient;
        this._expiresAt = new Date();
    }

    public async getToken(): Promise<string> {
        if (this._accessToken && this._expiresAt > new Date()) {
            return this._accessToken;
        }
        return this.refresh();
    }

    private async refresh(): Promise<string> {
        const tokenResponse = await this._authClient.getTokenWithClientCredentials({
            clientId: await core.Supplier.get(this._clientId),
            clientSecret: await core.Supplier.get(this._clientSecret),
        });
        this._accessToken = tokenResponse.accessToken;
        this._expiresAt = this.getExpiresAt(tokenResponse.expiresIn, this.BUFFER_IN_MINUTES);
        return tokenResponse.accessToken;
    }

    private getExpiresAt(expiresInSeconds: number, bufferInMinutes: number): Date {
        const now = new Date();
        return new Date(now.getTime() + expiresInSeconds * 1000 - bufferInMinutes * 60 * 1000);
    }
}
