/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.nurseryApi;

import com.seed.nurseryApi.core.ClientOptions;
import com.seed.nurseryApi.core.Environment;

public final class SeedNurseryApiClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private Environment environment;

    public SeedNurseryApiClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    /**
     * Sets the timeout (in seconds) for the client
     */
    public SeedNurseryApiClientBuilder timeout(int timeout) {
        this.clientOptionsBuilder.timeout(timeout);
        return this;
    }

    public SeedNurseryApiClient build() {
        clientOptionsBuilder.environment(this.environment);
        return new SeedNurseryApiClient(clientOptionsBuilder.build());
    }
}
