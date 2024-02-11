/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.playlist.updatePlaylist.Request.Raw,
    SeedTrace.UpdatePlaylistRequest | undefined
> = core.serialization.lazyObject(async () => (await import("../../..")).UpdatePlaylistRequest).optional();

export declare namespace Request {
    type Raw = serializers.UpdatePlaylistRequest.Raw | null | undefined;
}

export const Response: core.serialization.Schema<
    serializers.playlist.updatePlaylist.Response.Raw,
    SeedTrace.Playlist | undefined
> = core.serialization.lazyObject(async () => (await import("../../..")).Playlist).optional();

export declare namespace Response {
    type Raw = serializers.Playlist.Raw | null | undefined;
}
