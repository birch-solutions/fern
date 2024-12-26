/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fiddle from "../../../../../index";
import * as core from "../../../../../../core";

export type Error = Fiddle.endpoints.container.getAndReturnMapOfPrimToObject.Error._Unknown;

export namespace Error {
    export interface _Unknown extends _Utils {
        statusCode: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(
            visitor: Fiddle.endpoints.container.getAndReturnMapOfPrimToObject.Error._Visitor<_Result>,
        ) => _Result;
    }

    interface _Visitor<_Result> {
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    _unknown: (
        fetcherError: core.Fetcher.Error,
    ): Fiddle.endpoints.container.getAndReturnMapOfPrimToObject.Error._Unknown => {
        return {
            statusCode: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: Fiddle.endpoints.container.getAndReturnMapOfPrimToObject.Error._Unknown,
                visitor: Fiddle.endpoints.container.getAndReturnMapOfPrimToObject.Error._Visitor<_Result>,
            ) {
                return Fiddle.endpoints.container.getAndReturnMapOfPrimToObject.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: Fiddle.endpoints.container.getAndReturnMapOfPrimToObject.Error,
        visitor: Fiddle.endpoints.container.getAndReturnMapOfPrimToObject.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.statusCode) {
            default:
                return visitor._other(value as any);
        }
    },
} as const;
