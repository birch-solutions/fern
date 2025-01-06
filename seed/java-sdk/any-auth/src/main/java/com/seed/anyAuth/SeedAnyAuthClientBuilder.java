/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.anyAuth;

import com.seed.anyAuth.core.ClientOptions;
import com.seed.anyAuth.core.Environment;
import com.seed.anyAuth.core.OAuthTokenSupplier;
import com.seed.anyAuth.resources.auth.AuthClient;

public final class SeedAnyAuthClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private String token = System.getenv("MY_TOKEN");

    private String apiKey = System.getenv("MY_API_KEY");

    private String clientId = System.getenv("MY_CLIENT_ID");

    private String clientSecret = System.getenv("MY_CLIENT_SECRET");

    private Environment environment;

    /**
     * Sets token.
     * Defaults to the MY_TOKEN environment variable.
     */
    public SeedAnyAuthClientBuilder token(String token) {
        this.token = token;
        return this;
    }

    /**
     * Sets apiKey.
     * Defaults to the MY_API_KEY environment variable.
     */
    public SeedAnyAuthClientBuilder apiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }

    /**
     * Sets clientId.
     * Defaults to the MY_CLIENT_ID environment variable.
     */
    public SeedAnyAuthClientBuilder clientId(String clientId) {
        this.clientId = clientId;
        return this;
    }

    /**
     * Sets clientSecret.
     * Defaults to the MY_CLIENT_SECRET environment variable.
     */
    public SeedAnyAuthClientBuilder clientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }

    public SeedAnyAuthClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    /**
     * Sets the timeout (in seconds) for the client
     */
    public SeedAnyAuthClientBuilder timeout(int timeout) {
        this.clientOptionsBuilder.timeout(timeout);
        return this;
    }

    public SeedAnyAuthClient build() {
        this.clientOptionsBuilder.addHeader("Authorization", "Bearer " + this.token);
        if (apiKey == null) {
            throw new RuntimeException("Please provide apiKey or set the MY_API_KEY environment variable.");
        }
        this.clientOptionsBuilder.addHeader("X-API-Key", this.apiKey);
        AuthClient authClient = new AuthClient(
                ClientOptions.builder().environment(this.environment).build());
        OAuthTokenSupplier oAuthTokenSupplier = new OAuthTokenSupplier(clientId, clientSecret, authClient);
        this.clientOptionsBuilder.addHeader("Authorization", oAuthTokenSupplier);
        clientOptionsBuilder.environment(this.environment);
        return new SeedAnyAuthClient(clientOptionsBuilder.build());
    }
}
