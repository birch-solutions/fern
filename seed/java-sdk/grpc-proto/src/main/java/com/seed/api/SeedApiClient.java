/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api;

import com.seed.api.core.ClientOptions;
import com.seed.api.core.Suppliers;
import com.seed.api.resources.userservice.UserserviceClient;
import java.util.function.Supplier;

public class SeedApiClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<UserserviceClient> userserviceClient;

    public SeedApiClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.userserviceClient = Suppliers.memoize(() -> new UserserviceClient(clientOptions));
    }

    public UserserviceClient userservice() {
        return this.userserviceClient.get();
    }

    public static SeedApiClientBuilder builder() {
        return new SeedApiClientBuilder();
    }
}
