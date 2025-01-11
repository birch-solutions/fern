/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fiddle from "../../../index";
import * as core from "../../../../core";

export type Error = Fiddle.reqWithHeaders.getWithCustomHeader.Error._Unknown;

export namespace Error {
    export interface _Unknown extends _Utils {
        statusCode: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: Fiddle.reqWithHeaders.getWithCustomHeader.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    _unknown: (fetcherError: core.Fetcher.Error): Fiddle.reqWithHeaders.getWithCustomHeader.Error._Unknown => {
        return {
            statusCode: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: Fiddle.reqWithHeaders.getWithCustomHeader.Error._Unknown,
                visitor: Fiddle.reqWithHeaders.getWithCustomHeader.Error._Visitor<_Result>,
            ) {
                return Fiddle.reqWithHeaders.getWithCustomHeader.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: Fiddle.reqWithHeaders.getWithCustomHeader.Error,
        visitor: Fiddle.reqWithHeaders.getWithCustomHeader.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.statusCode) {
            default:
                return visitor._other(value as any);
        }
    },
} as const;
