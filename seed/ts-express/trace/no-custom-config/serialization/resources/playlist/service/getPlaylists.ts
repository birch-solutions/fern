/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.playlist.getPlaylists.Response.Raw, SeedTrace.Playlist[]> =
    core.serialization.list(core.serialization.lazyObject(() => serializers.Playlist));

export declare namespace Response {
    type Raw = serializers.Playlist.Raw[];
}
