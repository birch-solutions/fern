/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.multiUrlEnvironment;

import com.seed.multiUrlEnvironment.core.ClientOptions;
import com.seed.multiUrlEnvironment.core.Environment;

public final class SeedMultiUrlEnvironmentClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private String token = null;

    private Environment environment = Environment.PRODUCTION;

    /**
     * Sets token
     */
    public SeedMultiUrlEnvironmentClientBuilder token(String token) {
        this.token = token;
        return this;
    }

    public SeedMultiUrlEnvironmentClientBuilder environment(Environment environment) {
        this.environment = environment;
        return this;
    }

    /**
     * Sets the timeout (in seconds) for the client
     */
    public SeedMultiUrlEnvironmentClientBuilder timeout(int timeout) {
        this.clientOptionsBuilder.timeout(timeout);
        return this;
    }

    public SeedMultiUrlEnvironmentClient build() {
        if (token == null) {
            throw new RuntimeException("Please provide token");
        }
        this.clientOptionsBuilder.addHeader("Authorization", "Bearer " + this.token);
        clientOptionsBuilder.environment(this.environment);
        return new SeedMultiUrlEnvironmentClient(clientOptionsBuilder.build());
    }
}
