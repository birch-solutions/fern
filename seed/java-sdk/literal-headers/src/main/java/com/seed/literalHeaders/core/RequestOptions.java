/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.literalHeaders.core;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

public final class RequestOptions {
    private final String apiHeader;

    private final String apiTest;

    private final Optional<Integer> timeout;

    private final TimeUnit timeoutTimeUnit;

    private RequestOptions(String apiHeader, String apiTest, Optional<Integer> timeout, TimeUnit timeoutTimeUnit) {
        this.apiHeader = apiHeader;
        this.apiTest = apiTest;
        this.timeout = timeout;
        this.timeoutTimeUnit = timeoutTimeUnit;
    }

    public Optional<Integer> getTimeout() {
        return timeout;
    }

    public TimeUnit getTimeoutTimeUnit() {
        return timeoutTimeUnit;
    }

    public Map<String, String> getHeaders() {
        Map<String, String> headers = new HashMap<>();
        if (this.apiHeader != null) {
            headers.put("X-API-Header", this.apiHeader);
        }
        if (this.apiTest != null) {
            headers.put("X-API-Test", this.apiTest);
        }
        return headers;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static final class Builder {
        private String apiHeader = null;

        private String apiTest = null;

        private Optional<Integer> timeout = null;

        private TimeUnit timeoutTimeUnit = TimeUnit.SECONDS;

        public Builder apiHeader(String apiHeader) {
            this.apiHeader = apiHeader;
            return this;
        }

        public Builder apiTest(String apiTest) {
            this.apiTest = apiTest;
            return this;
        }

        public Builder timeout(Optional<Integer> timeout) {
            this.timeout = timeout;
            return this;
        }

        public Builder timeoutTimeUnit(TimeUnit timeoutTimeUnit) {
            this.timeoutTimeUnit = timeoutTimeUnit;
            return this;
        }

        public RequestOptions build() {
            return new RequestOptions(apiHeader, apiTest, timeout, timeoutTimeUnit);
        }
    }
}
