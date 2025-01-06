/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.version;

import com.seed.version.core.ClientOptions;
import com.seed.version.core.Environment;

public final class SeedVersionClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private Environment environment;

    public SeedVersionClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    /**
     * Sets the timeout (in seconds) for the client
     */
    public SeedVersionClientBuilder timeout(int timeout) {
        this.clientOptionsBuilder.timeout(timeout);
        return this;
    }

    public SeedVersionClient build() {
        clientOptionsBuilder.environment(this.environment);
        return new SeedVersionClient(clientOptionsBuilder.build());
    }
}
