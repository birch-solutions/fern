/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.oauthClientCredentialsDefault.core;

import com.seed.oauthClientCredentialsDefault.resources.auth.AuthClient;
import com.seed.oauthClientCredentialsDefault.resources.auth.requests.GetTokenRequest;
import com.seed.oauthClientCredentialsDefault.resources.auth.types.TokenResponse;
import java.util.function.Supplier;

public final class OAuthTokenSupplier implements Supplier<String> {
    private final String clientId;

    private final String clientSecret;

    private final AuthClient authClient;

    private String accessToken;

    public OAuthTokenSupplier(String clientId, String clientSecret, AuthClient authClient) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.authClient = authClient;
    }

    public TokenResponse fetchToken() {
        GetTokenRequest getTokenRequest = GetTokenRequest.builder()
                .clientId(clientId)
                .clientSecret(clientSecret)
                .build();
        return authClient.getToken(getTokenRequest);
    }

    @java.lang.Override
    public String get() {
        if (accessToken == null) {
            TokenResponse authResponse = fetchToken();
            this.accessToken = authResponse.getAccessToken();
        }
        return "Bearer " + accessToken;
    }
}
