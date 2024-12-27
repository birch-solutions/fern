/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";
import * as core from "../../../../core";

export type Error = SeedTrace.playlist.createPlaylist.Error._Unknown;

export namespace Error {
    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.playlist.createPlaylist.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    _unknown: (fetcherError: core.Fetcher.Error): SeedTrace.playlist.createPlaylist.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit <_Result>(
                this: SeedTrace.playlist.createPlaylist.Error._Unknown,
                visitor: SeedTrace.playlist.createPlaylist.Error._Visitor<_Result>,
            ) {
                return SeedTrace.playlist.createPlaylist.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.playlist.createPlaylist.Error,
        visitor: SeedTrace.playlist.createPlaylist.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            default:
                return visitor._other(value as any);
        }
    },
} as const;
