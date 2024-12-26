/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedOauthClientCredentials from "../../../index";
import * as core from "../../../../core";

export type Error = SeedOauthClientCredentials.auth.getToken.Error._Unknown;

export namespace Error {
    export interface _Unknown extends _Utils {
        statusCode: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedOauthClientCredentials.auth.getToken.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    _unknown: (fetcherError: core.Fetcher.Error): SeedOauthClientCredentials.auth.getToken.Error._Unknown => {
        return {
            statusCode: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: SeedOauthClientCredentials.auth.getToken.Error._Unknown,
                visitor: SeedOauthClientCredentials.auth.getToken.Error._Visitor<_Result>,
            ) {
                return SeedOauthClientCredentials.auth.getToken.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedOauthClientCredentials.auth.getToken.Error,
        visitor: SeedOauthClientCredentials.auth.getToken.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.statusCode) {
            default:
                return visitor._other(value as any);
        }
    },
} as const;
