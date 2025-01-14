/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.oauthClientCredentials.core;

import com.seed.oauthClientCredentials.resources.auth.AuthClient;
import com.seed.oauthClientCredentials.resources.auth.requests.GetTokenRequest;
import com.seed.oauthClientCredentials.resources.auth.types.TokenResponse;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.function.Supplier;

public final class OAuthTokenSupplier implements Supplier<String> {
    private static final long BUFFER_IN_MINUTES = 2;

    private final String clientId;

    private final String clientSecret;

    private final AuthClient authClient;

    private String accessToken;

    private Instant expiresAt;

    public OAuthTokenSupplier(String clientId, String clientSecret, AuthClient authClient) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.authClient = authClient;
        this.expiresAt = Instant.now();
    }

    public TokenResponse fetchToken() {
        GetTokenRequest getTokenRequest =
                GetTokenRequest.builder().cid(clientId).csr(clientSecret).build();
        return authClient.getTokenWithClientCredentials(getTokenRequest);
    }

    @java.lang.Override
    public String get() {
        if (accessToken == null || expiresAt.isBefore(Instant.now())) {
            TokenResponse authResponse = fetchToken();
            this.accessToken = authResponse.getAccessToken();
            this.expiresAt = getExpiresAt(authResponse.getExpiresIn());
        }
        return "Bearer " + accessToken;
    }

    private Instant getExpiresAt(long expiresInSeconds) {
        return Instant.now().plus(expiresInSeconds, ChronoUnit.SECONDS).minus(BUFFER_IN_MINUTES, ChronoUnit.MINUTES);
    }
}
