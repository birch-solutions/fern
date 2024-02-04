/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.undiscriminatedUnions.core;

import java.util.HashMap;
import java.util.Map;

public final class RequestOptions {
    private RequestOptions() {}

    public Map<String, String> getHeaders() {
        Map<String, String> headers = new HashMap<>();
        return headers;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static final class Builder {
        public RequestOptions build() {
            return new RequestOptions();
        }
    }
}
