/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.basicAuthEnvironmentVariables.core;

public class SeedBasicAuthEnvironmentVariablesApiError extends SeedBasicAuthEnvironmentVariablesError {
    private final int statusCode;

    private final Object body;

    public SeedBasicAuthEnvironmentVariablesApiError(String message, int statusCode, Object body) {
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
        return "SeedBasicAuthEnvironmentVariablesApiError{" + "statusCode: " + statusCode + ", body: " + body + "}";
    }
}
