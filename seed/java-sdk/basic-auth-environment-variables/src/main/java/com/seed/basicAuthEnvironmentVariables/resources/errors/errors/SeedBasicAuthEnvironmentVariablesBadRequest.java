/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.basicAuthEnvironmentVariables.resources.errors.errors;

import com.seed.basicAuthEnvironmentVariables.core.SeedBasicAuthEnvironmentVariablesApiError;

public final class SeedBasicAuthEnvironmentVariablesBadRequest extends SeedBasicAuthEnvironmentVariablesApiError {
    public SeedBasicAuthEnvironmentVariablesBadRequest(Object body) {
        super("BadRequest", 400, body);
    }
}
