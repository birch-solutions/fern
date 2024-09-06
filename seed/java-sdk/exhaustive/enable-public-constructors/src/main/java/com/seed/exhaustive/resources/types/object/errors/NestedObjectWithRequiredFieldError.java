/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.resources.types.object.errors;

import com.seed.exhaustive.core.SeedExhaustiveApiException;
import com.seed.exhaustive.resources.types.object.types.NestedObjectWithRequiredField;

public final class NestedObjectWithRequiredFieldError extends SeedExhaustiveApiException {
    /**
     * The body of the response that triggered the exception.
     */
    private final NestedObjectWithRequiredField body;

    public NestedObjectWithRequiredFieldError(NestedObjectWithRequiredField body) {
        super("NestedObjectWithRequiredFieldError", 400, body);
        this.body = body;
    }

    /**
     * @return the body
     */
    @java.lang.Override
    public NestedObjectWithRequiredField body() {
        return this.body;
    }
}
