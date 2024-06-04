/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.basicAuth.resources.errors.errors;

import com.seed.basicAuth.core.SeedBasicAuthApiError;
import com.seed.basicAuth.resources.errors.types.UnauthorizedRequestErrorBody;

public final class SeedBasicAuthUnauthorizedRequest extends SeedBasicAuthApiError {
    private final UnauthorizedRequestErrorBody body;

    public SeedBasicAuthUnauthorizedRequest(UnauthorizedRequestErrorBody body) {
        super("UnauthorizedRequest", 401, body);
        this.body = body;
    }

    @Override
    public UnauthorizedRequestErrorBody body() {
        return this.body;
    }
}
