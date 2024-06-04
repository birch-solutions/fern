/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.playlist.errors;

import com.seed.trace.core.SeedTraceApiError;
import com.seed.trace.resources.playlist.types.PlaylistIdNotFoundErrorBody;

public final class SeedTracePlaylistIdNotFoundError extends SeedTraceApiError {
    private final PlaylistIdNotFoundErrorBody body;

    public SeedTracePlaylistIdNotFoundError(PlaylistIdNotFoundErrorBody body) {
        super("PlaylistIdNotFoundError", 404, body);
        this.body = body;
    }

    @Override
    public PlaylistIdNotFoundErrorBody body() {
        return this.body;
    }
}
