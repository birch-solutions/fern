/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.singleUrlEnvironmentDefault.core;

public class SeedSingleUrlEnvironmentDefaultApiError extends SeedSingleUrlEnvironmentDefaultError {
    private final int statusCode;

    private final Object body;

    public SeedSingleUrlEnvironmentDefaultApiError(String message, int statusCode, Object body) {
        super(message);
        this.statusCode = statusCode;
        this.body = body;
    }

    public int statusCode() {
        return this.statusCode;
    }

    public Object body() {
        return this.body;
    }

    @java.lang.Override
    public String toString() {
        return "SeedSingleUrlEnvironmentDefaultApiError{" + "statusCode: " + statusCode + ", body: " + body + "}";
    }
}
