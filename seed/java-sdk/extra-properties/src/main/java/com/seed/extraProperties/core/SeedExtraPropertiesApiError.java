/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.extraProperties.core;

public class SeedExtraPropertiesApiError extends SeedExtraPropertiesError {
    private final String message;

    private final int statusCode;

    private final Object body;

    public SeedExtraPropertiesApiError(String message, int statusCode, Object body) {
        super(message);
        this.message = message;
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
        return "SeedExtraPropertiesApiError{" + "message: " + message + ", statusCode: " + statusCode + ", body: "
                + body + "}";
    }
}
