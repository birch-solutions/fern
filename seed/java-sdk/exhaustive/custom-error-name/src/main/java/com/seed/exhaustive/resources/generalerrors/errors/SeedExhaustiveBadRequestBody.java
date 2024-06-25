/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.resources.generalerrors.errors;

import com.seed.exhaustive.core.CustomApiError;
import com.seed.exhaustive.resources.generalerrors.types.BadObjectRequestInfo;

public final class SeedExhaustiveBadRequestBody extends CustomApiError {
    /**
     * The body of the response that triggered the exception.
     */
    private final BadObjectRequestInfo body;

    public SeedExhaustiveBadRequestBody(BadObjectRequestInfo body) {
        super("BadRequestBody", 400, body);
        this.body = body;
    }

    /**
     * @return the body
     */
    @java.lang.Override
    public BadObjectRequestInfo body() {
        return this.body;
    }
}
