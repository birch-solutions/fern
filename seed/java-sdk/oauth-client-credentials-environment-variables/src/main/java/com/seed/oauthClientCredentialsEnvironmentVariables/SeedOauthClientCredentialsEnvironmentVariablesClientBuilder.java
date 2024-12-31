/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.oauthClientCredentialsEnvironmentVariables;

import com.seed.oauthClientCredentialsEnvironmentVariables.core.ClientOptions;
import com.seed.oauthClientCredentialsEnvironmentVariables.core.Environment;
import com.seed.oauthClientCredentialsEnvironmentVariables.core.OAuthTokenSupplier;
import com.seed.oauthClientCredentialsEnvironmentVariables.resources.auth.AuthClient;

public final class SeedOauthClientCredentialsEnvironmentVariablesClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private String clientId = System.getenv("CLIENT_ID");

    private String clientSecret = System.getenv("CLIENT_SECRET");

    private Environment environment;

    /**
     * Sets clientId.
     * Defaults to the CLIENT_ID environment variable.
     */
    public SeedOauthClientCredentialsEnvironmentVariablesClientBuilder clientId(String clientId) {
        this.clientId = clientId;
        return this;
    }

    /**
     * Sets clientSecret.
     * Defaults to the CLIENT_SECRET environment variable.
     */
    public SeedOauthClientCredentialsEnvironmentVariablesClientBuilder clientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }

    public SeedOauthClientCredentialsEnvironmentVariablesClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    /**
     * Sets the timeout (in seconds) for the client
     */
    public SeedOauthClientCredentialsEnvironmentVariablesClientBuilder timeout(int timeout) {
        this.clientOptionsBuilder.timeout(timeout);
        return this;
    }

    public SeedOauthClientCredentialsEnvironmentVariablesClient build() {
        AuthClient authClient = new AuthClient(
                ClientOptions.builder().environment(this.environment).build());
        OAuthTokenSupplier oAuthTokenSupplier = new OAuthTokenSupplier(clientId, clientSecret, authClient);
        this.clientOptionsBuilder.addHeader("Authorization", oAuthTokenSupplier);
        clientOptionsBuilder.environment(this.environment);
        return new SeedOauthClientCredentialsEnvironmentVariablesClient(clientOptionsBuilder.build());
    }
}
