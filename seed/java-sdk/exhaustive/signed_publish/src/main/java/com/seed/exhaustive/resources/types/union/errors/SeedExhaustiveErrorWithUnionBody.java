/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.resources.types.union.errors;

import com.seed.exhaustive.core.SeedExhaustiveApiError;
import com.seed.exhaustive.resources.types.union.types.Animal;

public final class SeedExhaustiveErrorWithUnionBody extends SeedExhaustiveApiError {
    private final Animal body;

    public SeedExhaustiveErrorWithUnionBody(Animal body) {
        super("ErrorWithUnionBody", 400, body);
        this.body = body;
    }

    @Override
    public Animal body() {
        return this.body;
    }
}
