/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedOauthClientCredentials from "../../../../api/index";
import * as core from "../../../../core";

export const TokenResponse: core.serialization.ObjectSchema<
    serializers.auth.TokenResponse.Raw,
    SeedOauthClientCredentials.auth.TokenResponse
> = core.serialization.object({
    accessToken: core.serialization.property("access_token", core.serialization.string()),
    expiresIn: core.serialization.property("expires_in", core.serialization.number()),
    refreshToken: core.serialization.property("refresh_token", core.serialization.string().optional()),
});

export declare namespace TokenResponse {
    export interface Raw {
        access_token: string;
        expires_in: number;
        refresh_token?: string | null;
    }
}
