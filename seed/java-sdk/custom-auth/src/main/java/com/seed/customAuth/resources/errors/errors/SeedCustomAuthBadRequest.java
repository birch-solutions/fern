/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.customAuth.resources.errors.errors;

import com.seed.customAuth.core.SeedCustomAuthApiError;

public final class SeedCustomAuthBadRequest extends SeedCustomAuthApiError {
    public SeedCustomAuthBadRequest(Object body) {
        super("BadRequest", 400, body);
    }
}
