/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../../../index";

export type AssertCorrectnessCheck =
    | SeedTrace.v2.v3.AssertCorrectnessCheck.DeepEquality
    | SeedTrace.v2.v3.AssertCorrectnessCheck.Custom
    | SeedTrace.v2.v3.AssertCorrectnessCheck._Unknown;

export namespace AssertCorrectnessCheck {
    export interface DeepEquality extends SeedTrace.v2.v3.DeepEqualityCorrectnessCheck, _Utils {
        type: "deepEquality";
    }

    export interface Custom extends SeedTrace.v2.v3.VoidFunctionDefinitionThatTakesActualResult, _Utils {
        type: "custom";
    }

    export interface _Unknown extends _Utils {
        type: void;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.v2.v3.AssertCorrectnessCheck._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        deepEquality: (value: SeedTrace.v2.v3.DeepEqualityCorrectnessCheck) => _Result;
        custom: (value: SeedTrace.v2.v3.VoidFunctionDefinitionThatTakesActualResult) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const AssertCorrectnessCheck = {
    deepEquality: (
        value: SeedTrace.v2.v3.DeepEqualityCorrectnessCheck,
    ): SeedTrace.v2.v3.AssertCorrectnessCheck.DeepEquality => {
        return {
            ...value,
            type: "deepEquality",
            _visit <_Result>(
                this: SeedTrace.v2.v3.AssertCorrectnessCheck.DeepEquality,
                visitor: SeedTrace.v2.v3.AssertCorrectnessCheck._Visitor<_Result>,
            ) {
                return SeedTrace.v2.v3.AssertCorrectnessCheck._visit(this, visitor);
            },
        };
    },

    custom: (
        value: SeedTrace.v2.v3.VoidFunctionDefinitionThatTakesActualResult,
    ): SeedTrace.v2.v3.AssertCorrectnessCheck.Custom => {
        return {
            ...value,
            type: "custom",
            _visit <_Result>(
                this: SeedTrace.v2.v3.AssertCorrectnessCheck.Custom,
                visitor: SeedTrace.v2.v3.AssertCorrectnessCheck._Visitor<_Result>,
            ) {
                return SeedTrace.v2.v3.AssertCorrectnessCheck._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.v2.v3.AssertCorrectnessCheck._Unknown => {
        return {
            ...(value as any),
            _visit <_Result>(
                this: SeedTrace.v2.v3.AssertCorrectnessCheck._Unknown,
                visitor: SeedTrace.v2.v3.AssertCorrectnessCheck._Visitor<_Result>,
            ) {
                return SeedTrace.v2.v3.AssertCorrectnessCheck._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.v2.v3.AssertCorrectnessCheck,
        visitor: SeedTrace.v2.v3.AssertCorrectnessCheck._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "deepEquality":
                return visitor.deepEquality(value);
            case "custom":
                return visitor.custom(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
