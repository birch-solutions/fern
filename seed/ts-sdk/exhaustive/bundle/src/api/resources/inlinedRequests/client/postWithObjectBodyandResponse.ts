/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fiddle from "../../../index";
import * as core from "../../../../core";

export type Error =
    | Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error.BadRequestBody
    | Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error._Unknown;

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
        _visit: <_Result>(
            visitor: Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error._Visitor<_Result>,
        ) => _Result;
    }

    export interface _Visitor<_Result> {
        badRequestBody: (value: Fiddle.BadObjectRequestInfo) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    badRequestBody: (
        value: Fiddle.BadObjectRequestInfo,
    ): Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error.BadRequestBody => {
        return {
            content: value,
            statusCode: 400,
            _visit: function <_Result>(
                this: Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error.BadRequestBody,
                visitor: Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error._Visitor<_Result>,
            ) {
                return Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (
        fetcherError: core.Fetcher.Error,
    ): Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error._Unknown => {
        return {
            statusCode: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error._Unknown,
                visitor: Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error._Visitor<_Result>,
            ) {
                return Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error,
        visitor: Fiddle.inlinedRequests.postWithObjectBodyandResponse.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.statusCode) {
            case 400:
                return visitor.badRequestBody(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
