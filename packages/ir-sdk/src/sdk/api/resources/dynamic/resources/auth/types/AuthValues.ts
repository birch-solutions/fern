/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../../../index";

export type AuthValues =
    | FernIr.dynamic.AuthValues.Basic
    | FernIr.dynamic.AuthValues.Bearer
    | FernIr.dynamic.AuthValues.Header;

export namespace AuthValues {
    export interface Basic extends FernIr.dynamic.BasicAuthValues, _Utils {
        type: "basic";
    }

    export interface Bearer extends FernIr.dynamic.BearerAuthValues, _Utils {
        type: "bearer";
    }

    export interface Header extends FernIr.dynamic.HeaderAuthValues, _Utils {
        type: "header";
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernIr.dynamic.AuthValues._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        basic: (value: FernIr.dynamic.BasicAuthValues) => _Result;
        bearer: (value: FernIr.dynamic.BearerAuthValues) => _Result;
        header: (value: FernIr.dynamic.HeaderAuthValues) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const AuthValues = {
    basic: (value: FernIr.dynamic.BasicAuthValues): FernIr.dynamic.AuthValues.Basic => {
        return {
            ...value,
            type: "basic",
            _visit: function <_Result>(
                this: FernIr.dynamic.AuthValues.Basic,
                visitor: FernIr.dynamic.AuthValues._Visitor<_Result>,
            ) {
                return FernIr.dynamic.AuthValues._visit(this, visitor);
            },
        };
    },

    bearer: (value: FernIr.dynamic.BearerAuthValues): FernIr.dynamic.AuthValues.Bearer => {
        return {
            ...value,
            type: "bearer",
            _visit: function <_Result>(
                this: FernIr.dynamic.AuthValues.Bearer,
                visitor: FernIr.dynamic.AuthValues._Visitor<_Result>,
            ) {
                return FernIr.dynamic.AuthValues._visit(this, visitor);
            },
        };
    },

    header: (value: FernIr.dynamic.HeaderAuthValues): FernIr.dynamic.AuthValues.Header => {
        return {
            ...value,
            type: "header",
            _visit: function <_Result>(
                this: FernIr.dynamic.AuthValues.Header,
                visitor: FernIr.dynamic.AuthValues._Visitor<_Result>,
            ) {
                return FernIr.dynamic.AuthValues._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.dynamic.AuthValues,
        visitor: FernIr.dynamic.AuthValues._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "basic":
                return visitor.basic(value);
            case "bearer":
                return visitor.bearer(value);
            case "header":
                return visitor.header(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
