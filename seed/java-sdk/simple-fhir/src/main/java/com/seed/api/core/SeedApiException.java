/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.core;

/**
 * This class serves as the base exception for all errors in the SDK.
 */
public class SeedApiException extends RuntimeException {
    public SeedApiException(String message) {
        super(message);
    }

    public SeedApiException(String message, Exception e) {
        super(message, e);
    }
}
