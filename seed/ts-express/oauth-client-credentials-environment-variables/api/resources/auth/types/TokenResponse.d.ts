/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * An OAuth token response.
 */
export interface TokenResponse {
    accessToken: string;
    expiresIn: number;
    refreshToken?: string;
}
