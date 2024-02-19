/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.literal;

import com.seed.literal.core.ClientOptions;
import com.seed.literal.core.Suppliers;
import com.seed.literal.resources.headers.HeadersClient;
import com.seed.literal.resources.inlined.InlinedClient;
import com.seed.literal.resources.path.PathClient;
import com.seed.literal.resources.query.QueryClient;
import com.seed.literal.resources.reference.ReferenceClient;
import java.util.function.Supplier;

public class SeedLiteralClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<HeadersClient> headersClient;

    protected final Supplier<InlinedClient> inlinedClient;

    protected final Supplier<PathClient> pathClient;

    protected final Supplier<QueryClient> queryClient;

    protected final Supplier<ReferenceClient> referenceClient;

    public SeedLiteralClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.headersClient = Suppliers.memoize(() -> new HeadersClient(clientOptions));
        this.inlinedClient = Suppliers.memoize(() -> new InlinedClient(clientOptions));
        this.pathClient = Suppliers.memoize(() -> new PathClient(clientOptions));
        this.queryClient = Suppliers.memoize(() -> new QueryClient(clientOptions));
        this.referenceClient = Suppliers.memoize(() -> new ReferenceClient(clientOptions));
    }

    public HeadersClient headers() {
        return this.headersClient.get();
    }

    public InlinedClient inlined() {
        return this.inlinedClient.get();
    }

    public PathClient path() {
        return this.pathClient.get();
    }

    public QueryClient query() {
        return this.queryClient.get();
    }

    public ReferenceClient reference() {
        return this.referenceClient.get();
    }

    public static SeedLiteralClientBuilder builder() {
        return new SeedLiteralClientBuilder();
    }
}
