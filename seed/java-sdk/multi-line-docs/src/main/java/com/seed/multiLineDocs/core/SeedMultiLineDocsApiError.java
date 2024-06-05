/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.multiLineDocs.core;

public class SeedMultiLineDocsApiError extends SeedMultiLineDocsError {
    private final String message;

    private final int statusCode;

    private final Object body;

    public SeedMultiLineDocsApiError(String message, int statusCode, Object body) {
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
        return "SeedMultiLineDocsApiError{" + "message: " + message + ", statusCode: " + statusCode + ", body: " + body
                + "}";
    }
}
