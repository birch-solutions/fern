/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

export type AuthScheme =
    | FernIr.AuthScheme.Bearer
    | FernIr.AuthScheme.Basic
    | FernIr.AuthScheme.Header
    | FernIr.AuthScheme.Oauth;

export declare namespace AuthScheme {
    interface Bearer extends FernIr.BearerAuthScheme, _Utils {
        type: "bearer";
    }

    interface Basic extends FernIr.BasicAuthScheme, _Utils {
        type: "basic";
    }

    interface Header extends FernIr.HeaderAuthScheme, _Utils {
        type: "header";
    }

    interface Oauth extends FernIr.OAuthScheme, _Utils {
        type: "oauth";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.AuthScheme._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        bearer: (value: FernIr.BearerAuthScheme) => _Result;
        basic: (value: FernIr.BasicAuthScheme) => _Result;
        header: (value: FernIr.HeaderAuthScheme) => _Result;
        oauth: (value: FernIr.OAuthScheme) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const AuthScheme = {
    bearer: (value: FernIr.BearerAuthScheme): FernIr.AuthScheme.Bearer => {
        return {
            ...value,
            type: "bearer",
            _visit: function <_Result>(this: FernIr.AuthScheme.Bearer, visitor: FernIr.AuthScheme._Visitor<_Result>) {
                return FernIr.AuthScheme._visit(this, visitor);
            },
        };
    },

    basic: (value: FernIr.BasicAuthScheme): FernIr.AuthScheme.Basic => {
        return {
            ...value,
            type: "basic",
            _visit: function <_Result>(this: FernIr.AuthScheme.Basic, visitor: FernIr.AuthScheme._Visitor<_Result>) {
                return FernIr.AuthScheme._visit(this, visitor);
            },
        };
    },

    header: (value: FernIr.HeaderAuthScheme): FernIr.AuthScheme.Header => {
        return {
            ...value,
            type: "header",
            _visit: function <_Result>(this: FernIr.AuthScheme.Header, visitor: FernIr.AuthScheme._Visitor<_Result>) {
                return FernIr.AuthScheme._visit(this, visitor);
            },
        };
    },

    oauth: (value: FernIr.OAuthScheme): FernIr.AuthScheme.Oauth => {
        return {
            ...value,
            type: "oauth",
            _visit: function <_Result>(this: FernIr.AuthScheme.Oauth, visitor: FernIr.AuthScheme._Visitor<_Result>) {
                return FernIr.AuthScheme._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: FernIr.AuthScheme, visitor: FernIr.AuthScheme._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "bearer":
                return visitor.bearer(value);
            case "basic":
                return visitor.basic(value);
            case "header":
                return visitor.header(value);
            case "oauth":
                return visitor.oauth(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
