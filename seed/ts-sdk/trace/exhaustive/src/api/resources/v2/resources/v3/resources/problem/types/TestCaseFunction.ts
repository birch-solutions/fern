/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../../../index";

export type TestCaseFunction =
    | SeedTrace.v2.v3.TestCaseFunction.WithActualResult
    | SeedTrace.v2.v3.TestCaseFunction.Custom
    | SeedTrace.v2.v3.TestCaseFunction._Unknown;

export namespace TestCaseFunction {
    export interface WithActualResult extends SeedTrace.v2.v3.TestCaseWithActualResultImplementation, _Utils {
        type: "withActualResult";
    }

    export interface Custom extends SeedTrace.v2.v3.VoidFunctionDefinition, _Utils {
        type: "custom";
    }

    export interface _Unknown extends _Utils {
        type: void;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.v2.v3.TestCaseFunction._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        withActualResult: (value: SeedTrace.v2.v3.TestCaseWithActualResultImplementation) => _Result;
        custom: (value: SeedTrace.v2.v3.VoidFunctionDefinition) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const TestCaseFunction = {
    withActualResult: (
        value: SeedTrace.v2.v3.TestCaseWithActualResultImplementation,
    ): SeedTrace.v2.v3.TestCaseFunction.WithActualResult => {
        return {
            ...value,
            type: "withActualResult",
            _visit: function <_Result>(
                this: SeedTrace.v2.v3.TestCaseFunction.WithActualResult,
                visitor: SeedTrace.v2.v3.TestCaseFunction._Visitor<_Result>,
            ) {
                return SeedTrace.v2.v3.TestCaseFunction._visit(this, visitor);
            },
        };
    },

    custom: (value: SeedTrace.v2.v3.VoidFunctionDefinition): SeedTrace.v2.v3.TestCaseFunction.Custom => {
        return {
            ...value,
            type: "custom",
            _visit: function <_Result>(
                this: SeedTrace.v2.v3.TestCaseFunction.Custom,
                visitor: SeedTrace.v2.v3.TestCaseFunction._Visitor<_Result>,
            ) {
                return SeedTrace.v2.v3.TestCaseFunction._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.v2.v3.TestCaseFunction._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.v2.v3.TestCaseFunction._Unknown,
                visitor: SeedTrace.v2.v3.TestCaseFunction._Visitor<_Result>,
            ) {
                return SeedTrace.v2.v3.TestCaseFunction._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.v2.v3.TestCaseFunction,
        visitor: SeedTrace.v2.v3.TestCaseFunction._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "withActualResult":
                return visitor.withActualResult(value);
            case "custom":
                return visitor.custom(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
