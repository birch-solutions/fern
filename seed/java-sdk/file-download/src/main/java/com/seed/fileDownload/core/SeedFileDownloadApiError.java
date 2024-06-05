/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.fileDownload.core;

public class SeedFileDownloadApiError extends SeedFileDownloadError {
    private final String message;

    private final int statusCode;

    private final Object body;

    public SeedFileDownloadApiError(String message, int statusCode, Object body) {
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
        return "SeedFileDownloadApiError{" + "message: " + message + ", statusCode: " + statusCode + ", body: " + body
                + "}";
    }
}
