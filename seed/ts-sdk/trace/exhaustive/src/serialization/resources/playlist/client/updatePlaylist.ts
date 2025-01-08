/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { UpdatePlaylistRequest } from "../types/UpdatePlaylistRequest.js";
import { Playlist } from "../types/Playlist.js";
import { PlaylistIdNotFoundErrorBody } from "../types/PlaylistIdNotFoundErrorBody.js";

export const Request: core.serialization.Schema<
    serializers.playlist.updatePlaylist.Request.Raw,
    SeedTrace.UpdatePlaylistRequest | undefined
> = UpdatePlaylistRequest.optional();

export declare namespace Request {
    export type Raw = UpdatePlaylistRequest.Raw | null | undefined;
}

export const Response: core.serialization.Schema<
    serializers.playlist.updatePlaylist.Response.Raw,
    SeedTrace.Playlist | undefined
> = Playlist.optional();

export declare namespace Response {
    export type Raw = Playlist.Raw | null | undefined;
}

export const Error: core.serialization.Schema<
    serializers.playlist.updatePlaylist.Error.Raw,
    SeedTrace.playlist.updatePlaylist.Error
> = core.serialization
    .union("errorName", {
        PlaylistIdNotFoundError: core.serialization.object({
            content: PlaylistIdNotFoundErrorBody,
        }),
    })
    .transform<SeedTrace.playlist.updatePlaylist.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "PlaylistIdNotFoundError":
                    return SeedTrace.playlist.updatePlaylist.Error.playlistIdNotFoundError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.PlaylistIdNotFoundError;

    export interface PlaylistIdNotFoundError {
        errorName: "PlaylistIdNotFoundError";
        content: PlaylistIdNotFoundErrorBody.Raw;
    }
}
