/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         clientId: "client_id",
 *         clientSecret: "client_secret",
 *         refreshToken: "refresh_token",
 *         scope: undefined
 *     }
 */
export interface RefreshTokenRequest {
    clientId: string;
    clientSecret: string;
    refreshToken: string;
    scope?: string;
}
