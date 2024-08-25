/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.playlist.errors;

import com.seed.trace.core.SeedTraceApiException;
import com.seed.trace.resources.playlist.types.PlaylistIdNotFoundErrorBody;

public final class PlaylistIdNotFoundError extends SeedTraceApiException {
    /**
     * The body of the response that triggered the exception.
     */
    private final PlaylistIdNotFoundErrorBody body;

    public PlaylistIdNotFoundError(PlaylistIdNotFoundErrorBody body) {
        super("PlaylistIdNotFoundError", 404, body);
        this.body = body;
    }

    /**
     * @return the body
     */
    @java.lang.Override
    public PlaylistIdNotFoundErrorBody body() {
        return this.body;
    }
}
