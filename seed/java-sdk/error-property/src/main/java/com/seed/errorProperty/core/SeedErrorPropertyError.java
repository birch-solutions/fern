/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.errorProperty.core;

/**
 * This class serves as the base exception for all errors in the SDK.
 */
public class SeedErrorPropertyError extends RuntimeException {
    public SeedErrorPropertyError(String message) {
        super(message);
    }

    public SeedErrorPropertyError(String message, Exception e) {
        super(message, e);
    }
}
