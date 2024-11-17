/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.license;

import com.seed.license.core.ClientOptions;
import com.seed.license.core.Environment;

public final class SeedLicenseClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private Environment environment;

    public SeedLicenseClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    public SeedLicenseClient build() {
        clientOptionsBuilder.environment(this.environment);
        return new SeedLicenseClient(clientOptionsBuilder.build());
    }
}
