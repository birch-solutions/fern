/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.customAuth;

import com.seed.customAuth.core.ClientOptions;
import com.seed.customAuth.core.Environment;

public final class SeedCustomAuthClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private String customAuthScheme = null;

    private Environment environment;

    /**
     * Sets customAuthScheme
     */
    public SeedCustomAuthClientBuilder customAuthScheme(String customAuthScheme) {
        this.customAuthScheme = customAuthScheme;
        return this;
    }

    public SeedCustomAuthClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    /**
     * Sets the timeout (in seconds) for the client
     */
    public SeedCustomAuthClientBuilder timeout(int timeout) {
        this.clientOptionsBuilder.timeout(timeout);
        return this;
    }

    public SeedCustomAuthClient build() {
        if (customAuthScheme == null) {
            throw new RuntimeException("Please provide customAuthScheme");
        }
        this.clientOptionsBuilder.addHeader("X-API-KEY", this.customAuthScheme);
        clientOptionsBuilder.environment(this.environment);
        return new SeedCustomAuthClient(clientOptionsBuilder.build());
    }
}
