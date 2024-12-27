/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../index";

export type FunctionSignature =
    | SeedTrace.v2.FunctionSignature.Void
    | SeedTrace.v2.FunctionSignature.NonVoid
    /**
     * Useful when specifying custom grading for a testcase where actualResult is defined. */
    | SeedTrace.v2.FunctionSignature.VoidThatTakesActualResult
    | SeedTrace.v2.FunctionSignature._Unknown;

export namespace FunctionSignature {
    export interface Void extends SeedTrace.v2.VoidFunctionSignature, _Utils {
        type: "void";
    }

    export interface NonVoid extends SeedTrace.v2.NonVoidFunctionSignature, _Utils {
        type: "nonVoid";
    }

    export interface VoidThatTakesActualResult extends SeedTrace.v2.VoidFunctionSignatureThatTakesActualResult, _Utils {
        type: "voidThatTakesActualResult";
    }

    export interface _Unknown extends _Utils {
        type: void;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.v2.FunctionSignature._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        void: (value: SeedTrace.v2.VoidFunctionSignature) => _Result;
        nonVoid: (value: SeedTrace.v2.NonVoidFunctionSignature) => _Result;
        voidThatTakesActualResult: (value: SeedTrace.v2.VoidFunctionSignatureThatTakesActualResult) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const FunctionSignature = {
    void: (value: SeedTrace.v2.VoidFunctionSignature): SeedTrace.v2.FunctionSignature.Void => {
        return {
            ...value,
            type: "void",
            _visit: function <_Result>(
                this: SeedTrace.v2.FunctionSignature.Void,
                visitor: SeedTrace.v2.FunctionSignature._Visitor<_Result>,
            ) {
                return SeedTrace.v2.FunctionSignature._visit(this, visitor);
            },
        };
    },

    nonVoid: (value: SeedTrace.v2.NonVoidFunctionSignature): SeedTrace.v2.FunctionSignature.NonVoid => {
        return {
            ...value,
            type: "nonVoid",
            _visit: function <_Result>(
                this: SeedTrace.v2.FunctionSignature.NonVoid,
                visitor: SeedTrace.v2.FunctionSignature._Visitor<_Result>,
            ) {
                return SeedTrace.v2.FunctionSignature._visit(this, visitor);
            },
        };
    },

    voidThatTakesActualResult: (
        value: SeedTrace.v2.VoidFunctionSignatureThatTakesActualResult,
    ): SeedTrace.v2.FunctionSignature.VoidThatTakesActualResult => {
        return {
            ...value,
            type: "voidThatTakesActualResult",
            _visit: function <_Result>(
                this: SeedTrace.v2.FunctionSignature.VoidThatTakesActualResult,
                visitor: SeedTrace.v2.FunctionSignature._Visitor<_Result>,
            ) {
                return SeedTrace.v2.FunctionSignature._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.v2.FunctionSignature._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.v2.FunctionSignature._Unknown,
                visitor: SeedTrace.v2.FunctionSignature._Visitor<_Result>,
            ) {
                return SeedTrace.v2.FunctionSignature._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.v2.FunctionSignature,
        visitor: SeedTrace.v2.FunctionSignature._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "void":
                return visitor.void(value);
            case "nonVoid":
                return visitor.nonVoid(value);
            case "voidThatTakesActualResult":
                return visitor.voidThatTakesActualResult(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
