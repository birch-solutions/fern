/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.apiWideBasePath;

import com.seed.apiWideBasePath.core.ClientOptions;
import com.seed.apiWideBasePath.core.Environment;

public final class SeedApiWideBasePathClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private Environment environment;

    public SeedApiWideBasePathClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    /**
     * Sets the timeout (in seconds) for the client
     */
    public SeedApiWideBasePathClientBuilder timeout(int timeout) {
        this.clientOptionsBuilder.timeout(timeout);
        return this;
    }

    public SeedApiWideBasePathClient build() {
        clientOptionsBuilder.environment(this.environment);
        return new SeedApiWideBasePathClient(clientOptionsBuilder.build());
    }
}
