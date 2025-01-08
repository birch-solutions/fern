/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index.js";
import * as core from "../../../../core/index.js";

export type Error =
    | SeedTrace.playlist.getPlaylist.Error.PlaylistIdNotFoundError
    | SeedTrace.playlist.getPlaylist.Error.UnauthorizedError
    | SeedTrace.playlist.getPlaylist.Error._Unknown;

export namespace Error {
    export interface PlaylistIdNotFoundError {
        errorName: "PlaylistIdNotFoundError";
        content: SeedTrace.PlaylistIdNotFoundErrorBody;
    }

    export interface UnauthorizedError {
        errorName: "UnauthorizedError";
    }

    export interface _Unknown {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Visitor<_Result> {
        playlistIdNotFoundError: (value: SeedTrace.PlaylistIdNotFoundErrorBody) => _Result;
        unauthorizedError: () => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    playlistIdNotFoundError: (
        value: SeedTrace.PlaylistIdNotFoundErrorBody,
    ): SeedTrace.playlist.getPlaylist.Error.PlaylistIdNotFoundError => {
        return {
            content: value,
            errorName: "PlaylistIdNotFoundError",
        };
    },

    unauthorizedError: (): SeedTrace.playlist.getPlaylist.Error.UnauthorizedError => {
        return {
            errorName: "UnauthorizedError",
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): SeedTrace.playlist.getPlaylist.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
        };
    },

    _visit: <_Result>(
        value: SeedTrace.playlist.getPlaylist.Error,
        visitor: SeedTrace.playlist.getPlaylist.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            case "PlaylistIdNotFoundError":
                return visitor.playlistIdNotFoundError(value.content);
            case "UnauthorizedError":
                return visitor.unauthorizedError();
            default:
                return visitor._other(value as any);
        }
    },
} as const;
