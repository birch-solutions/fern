/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type TestCaseGrade =
    | SeedTrace.TestCaseGrade.Hidden
    | SeedTrace.TestCaseGrade.NonHidden
    | SeedTrace.TestCaseGrade._Unknown;

export declare namespace TestCaseGrade {
    interface Hidden extends SeedTrace.TestCaseHiddenGrade, _Utils {
        type: "hidden";
    }

    interface NonHidden extends SeedTrace.TestCaseNonHiddenGrade, _Utils {
        type: "nonHidden";
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.TestCaseGrade._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        hidden: (value: SeedTrace.TestCaseHiddenGrade) => _Result;
        nonHidden: (value: SeedTrace.TestCaseNonHiddenGrade) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const TestCaseGrade = {
    hidden: (value: SeedTrace.TestCaseHiddenGrade): SeedTrace.TestCaseGrade.Hidden => {
        return {
            ...value,
            type: "hidden",
            _visit: function <_Result>(
                this: SeedTrace.TestCaseGrade.Hidden,
                visitor: SeedTrace.TestCaseGrade._Visitor<_Result>
            ) {
                return SeedTrace.TestCaseGrade._visit(this, visitor);
            },
        };
    },

    nonHidden: (value: SeedTrace.TestCaseNonHiddenGrade): SeedTrace.TestCaseGrade.NonHidden => {
        return {
            ...value,
            type: "nonHidden",
            _visit: function <_Result>(
                this: SeedTrace.TestCaseGrade.NonHidden,
                visitor: SeedTrace.TestCaseGrade._Visitor<_Result>
            ) {
                return SeedTrace.TestCaseGrade._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.TestCaseGrade._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.TestCaseGrade._Unknown,
                visitor: SeedTrace.TestCaseGrade._Visitor<_Result>
            ) {
                return SeedTrace.TestCaseGrade._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: SeedTrace.TestCaseGrade, visitor: SeedTrace.TestCaseGrade._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "hidden":
                return visitor.hidden(value);
            case "nonHidden":
                return visitor.nonHidden(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
