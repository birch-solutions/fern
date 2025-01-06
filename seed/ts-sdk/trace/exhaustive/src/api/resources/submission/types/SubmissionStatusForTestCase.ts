/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type SubmissionStatusForTestCase =
    | SeedTrace.SubmissionStatusForTestCase.Graded
    | SeedTrace.SubmissionStatusForTestCase.GradedV2
    | SeedTrace.SubmissionStatusForTestCase.Traced
    | SeedTrace.SubmissionStatusForTestCase._Unknown;

export namespace SubmissionStatusForTestCase {
    export interface Graded extends SeedTrace.TestCaseResultWithStdout, _Utils {
        type: "graded";
    }

    export interface GradedV2 extends _Utils {
        type: "gradedV2";
        value: SeedTrace.TestCaseGrade;
    }

    export interface Traced extends SeedTrace.TracedTestCase, _Utils {
        type: "traced";
    }

    export interface _Unknown extends _Utils {
        type: void;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.SubmissionStatusForTestCase._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        graded: (value: SeedTrace.TestCaseResultWithStdout) => _Result;
        gradedV2: (value: SeedTrace.TestCaseGrade) => _Result;
        traced: (value: SeedTrace.TracedTestCase) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const SubmissionStatusForTestCase = {
    graded: (value: SeedTrace.TestCaseResultWithStdout): SeedTrace.SubmissionStatusForTestCase.Graded => {
        return {
            ...value,
            type: "graded",
            _visit <_Result>(
                this: SeedTrace.SubmissionStatusForTestCase.Graded,
                visitor: SeedTrace.SubmissionStatusForTestCase._Visitor<_Result>,
            ) {
                return SeedTrace.SubmissionStatusForTestCase._visit(this, visitor);
            },
        };
    },

    gradedV2: (value: SeedTrace.TestCaseGrade): SeedTrace.SubmissionStatusForTestCase.GradedV2 => {
        return {
            value,
            type: "gradedV2",
            _visit <_Result>(
                this: SeedTrace.SubmissionStatusForTestCase.GradedV2,
                visitor: SeedTrace.SubmissionStatusForTestCase._Visitor<_Result>,
            ) {
                return SeedTrace.SubmissionStatusForTestCase._visit(this, visitor);
            },
        };
    },

    traced: (value: SeedTrace.TracedTestCase): SeedTrace.SubmissionStatusForTestCase.Traced => {
        return {
            ...value,
            type: "traced",
            _visit <_Result>(
                this: SeedTrace.SubmissionStatusForTestCase.Traced,
                visitor: SeedTrace.SubmissionStatusForTestCase._Visitor<_Result>,
            ) {
                return SeedTrace.SubmissionStatusForTestCase._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.SubmissionStatusForTestCase._Unknown => {
        return {
            ...(value as any),
            _visit <_Result>(
                this: SeedTrace.SubmissionStatusForTestCase._Unknown,
                visitor: SeedTrace.SubmissionStatusForTestCase._Visitor<_Result>,
            ) {
                return SeedTrace.SubmissionStatusForTestCase._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.SubmissionStatusForTestCase,
        visitor: SeedTrace.SubmissionStatusForTestCase._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "graded":
                return visitor.graded(value);
            case "gradedV2":
                return visitor.gradedV2(value.value);
            case "traced":
                return visitor.traced(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
