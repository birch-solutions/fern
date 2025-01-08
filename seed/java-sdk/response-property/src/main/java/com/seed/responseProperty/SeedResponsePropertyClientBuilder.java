/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.responseProperty;

import com.seed.responseProperty.core.ClientOptions;
import com.seed.responseProperty.core.Environment;

public final class SeedResponsePropertyClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private Environment environment;

    public SeedResponsePropertyClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    /**
     * Sets the timeout (in seconds) for the client
     */
    public SeedResponsePropertyClientBuilder timeout(int timeout) {
        this.clientOptionsBuilder.timeout(timeout);
        return this;
    }

    public SeedResponsePropertyClient build() {
        clientOptionsBuilder.environment(this.environment);
        return new SeedResponsePropertyClient(clientOptionsBuilder.build());
    }
}
