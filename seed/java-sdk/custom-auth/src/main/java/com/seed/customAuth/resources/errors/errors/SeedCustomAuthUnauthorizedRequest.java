/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.customAuth.resources.errors.errors;

import com.seed.customAuth.core.SeedCustomAuthApiError;
import com.seed.customAuth.resources.errors.types.UnauthorizedRequestErrorBody;

public final class SeedCustomAuthUnauthorizedRequest extends SeedCustomAuthApiError {
    /**
     * The body of the response that triggered the exception.
     */
    private final UnauthorizedRequestErrorBody body;

    public SeedCustomAuthUnauthorizedRequest(UnauthorizedRequestErrorBody body) {
        super("UnauthorizedRequest", 401, body);
        this.body = body;
    }

    /**
     * @return the body
     */
    @java.lang.Override
    public UnauthorizedRequestErrorBody body() {
        return this.body;
    }
}
