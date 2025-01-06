/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.idempotencyHeaders;

import com.seed.idempotencyHeaders.core.ClientOptions;
import com.seed.idempotencyHeaders.core.Environment;

public final class SeedIdempotencyHeadersClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private String token = null;

    private Environment environment;

    /**
     * Sets token
     */
    public SeedIdempotencyHeadersClientBuilder token(String token) {
        this.token = token;
        return this;
    }

    public SeedIdempotencyHeadersClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    /**
     * Sets the timeout (in seconds) for the client
     */
    public SeedIdempotencyHeadersClientBuilder timeout(int timeout) {
        this.clientOptionsBuilder.timeout(timeout);
        return this;
    }

    public SeedIdempotencyHeadersClient build() {
        if (token == null) {
            throw new RuntimeException("Please provide token");
        }
        this.clientOptionsBuilder.addHeader("Authorization", "Bearer " + this.token);
        clientOptionsBuilder.environment(this.environment);
        return new SeedIdempotencyHeadersClient(clientOptionsBuilder.build());
    }
}
