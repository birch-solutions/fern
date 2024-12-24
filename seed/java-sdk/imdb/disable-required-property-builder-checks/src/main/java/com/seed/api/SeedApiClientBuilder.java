/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api;

import com.seed.api.core.ClientOptions;
import com.seed.api.core.Environment;

public final class SeedApiClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private String token = null;

    private Environment environment;

    /**
     * Sets token
     */
    public SeedApiClientBuilder token(String token) {
        this.token = token;
        return this;
    }

    public SeedApiClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    /**
     * Sets the timeout (in seconds) for the client
     */
    public SeedApiClientBuilder timeout(int timeout) {
        this.clientOptionsBuilder.timeout(timeout);
        return this;
    }

    public SeedApiClient build() {
        this.clientOptionsBuilder.addHeader("Authorization", "Bearer " + this.token);
        clientOptionsBuilder.environment(this.environment);
        return new SeedApiClient(clientOptionsBuilder.build());
    }
}
