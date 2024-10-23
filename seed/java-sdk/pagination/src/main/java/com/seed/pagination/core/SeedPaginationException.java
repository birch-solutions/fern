/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.pagination.core;

/**
 * This class serves as the base exception for all errors in the SDK.
 */
public class SeedPaginationException extends RuntimeException {
    public SeedPaginationException(String message) {
        super(message);
    }

    public SeedPaginationException(String message, Exception e) {
        super(message, e);
    }
}
