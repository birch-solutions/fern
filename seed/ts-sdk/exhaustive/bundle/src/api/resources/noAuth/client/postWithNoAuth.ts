/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fiddle from "../../../index";
import * as core from "../../../../core";

export type Error = Fiddle.noAuth.postWithNoAuth.Error.BadRequestBody | Fiddle.noAuth.postWithNoAuth.Error._Unknown;

export namespace Error {
    export interface BadRequestBody extends _Utils {
        statusCode: 400;
        content: Fiddle.BadObjectRequestInfo;
    }

    export interface _Unknown extends _Utils {
        statusCode: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: Fiddle.noAuth.postWithNoAuth.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        badRequestBody: (value: Fiddle.BadObjectRequestInfo) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    badRequestBody: (value: Fiddle.BadObjectRequestInfo): Fiddle.noAuth.postWithNoAuth.Error.BadRequestBody => {
        return {
            content: value,
            statusCode: 400,
            _visit <_Result>(
                this: Fiddle.noAuth.postWithNoAuth.Error.BadRequestBody,
                visitor: Fiddle.noAuth.postWithNoAuth.Error._Visitor<_Result>,
            ) {
                return Fiddle.noAuth.postWithNoAuth.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): Fiddle.noAuth.postWithNoAuth.Error._Unknown => {
        return {
            statusCode: undefined,
            content: fetcherError,
            _visit <_Result>(
                this: Fiddle.noAuth.postWithNoAuth.Error._Unknown,
                visitor: Fiddle.noAuth.postWithNoAuth.Error._Visitor<_Result>,
            ) {
                return Fiddle.noAuth.postWithNoAuth.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: Fiddle.noAuth.postWithNoAuth.Error,
        visitor: Fiddle.noAuth.postWithNoAuth.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.statusCode) {
            case 400:
                return visitor.badRequestBody(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
