/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.oauthClientCredentials.core;

/**
 * This class serves as the base exception for all errors in the SDK.
 */
public class SeedOauthClientCredentialsError extends RuntimeException {
    public SeedOauthClientCredentialsError(String message) {
        super(message);
    }

    public SeedOauthClientCredentialsError(String message, Exception e) {
        super(message, e);
    }
}
