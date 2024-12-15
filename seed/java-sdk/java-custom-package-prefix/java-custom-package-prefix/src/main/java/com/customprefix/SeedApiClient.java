/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.customprefix;

import com.customprefix.core.ClientOptions;
import com.customprefix.core.Suppliers;
import com.customprefix.resources.imdb.ImdbClient;
import java.util.function.Supplier;

public class SeedApiClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<ImdbClient> imdbClient;

    public SeedApiClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.imdbClient = Suppliers.memoize(() -> new ImdbClient(clientOptions));
    }

    public ImdbClient imdb() {
        return this.imdbClient.get();
    }

    public static SeedApiClientBuilder builder() {
        return new SeedApiClientBuilder();
    }
}
