/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.mixedCase.core;

/**
 * This class serves as the base exception for all errors in the SDK.
 */
public class SeedMixedCaseException extends RuntimeException {
    public SeedMixedCaseException(String message) {
        super(message);
    }

    public SeedMixedCaseException(String message, Exception e) {
        super(message, e);
    }
}
