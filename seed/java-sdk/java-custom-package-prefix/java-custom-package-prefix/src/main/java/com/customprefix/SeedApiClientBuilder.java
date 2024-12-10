/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.customprefix;

import com.customprefix.core.ClientOptions;
import com.customprefix.core.Environment;

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

    public SeedApiClient build() {
        this.clientOptionsBuilder.addHeader("Authorization", "Bearer " + this.token);
        clientOptionsBuilder.environment(this.environment);
        return new SeedApiClient(clientOptionsBuilder.build());
    }
}
