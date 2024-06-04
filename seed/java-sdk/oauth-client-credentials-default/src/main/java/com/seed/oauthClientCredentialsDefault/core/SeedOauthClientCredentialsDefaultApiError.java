/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.oauthClientCredentialsDefault.core;

public class SeedOauthClientCredentialsDefaultApiError extends SeedOauthClientCredentialsDefaultError {
    private final int statusCode;

    private final Object body;

    public SeedOauthClientCredentialsDefaultApiError(String message, int statusCode, Object body) {
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
        return "SeedOauthClientCredentialsDefaultApiError{" + "statusCode: " + statusCode + ", body: " + body + "}";
    }
}
