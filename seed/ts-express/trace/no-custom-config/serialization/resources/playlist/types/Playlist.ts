/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const Playlist: core.serialization.ObjectSchema<serializers.Playlist.Raw, SeedTrace.Playlist> =
    core.serialization
        .object({
            playlistId: core.serialization.property(
                "playlist_id",
                core.serialization.lazy(() => serializers.PlaylistId),
            ),
            ownerId: core.serialization.property(
                "owner-id",
                core.serialization.lazy(() => serializers.UserId),
            ),
        })
        .extend(core.serialization.lazyObject(() => serializers.PlaylistCreateRequest));

export declare namespace Playlist {
    export interface Raw extends serializers.PlaylistCreateRequest.Raw {
        playlist_id: serializers.PlaylistId.Raw;
        "owner-id": serializers.UserId.Raw;
    }
}
