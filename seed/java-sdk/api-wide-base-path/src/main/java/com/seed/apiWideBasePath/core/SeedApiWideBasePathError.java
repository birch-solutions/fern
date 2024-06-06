/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.apiWideBasePath.core;

/**
 * This class serves as the base exception for all errors in the SDK.
 */
public class SeedApiWideBasePathError extends RuntimeException {
    public SeedApiWideBasePathError(String message) {
        super(message);
    }

    public SeedApiWideBasePathError(String message, Exception e) {
        super(message, e);
    }
}
