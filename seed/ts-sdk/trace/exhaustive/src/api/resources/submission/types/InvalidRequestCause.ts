/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type InvalidRequestCause =
    /**
     * The submission request references a submission id that doesn't exist. */
    | SeedTrace.InvalidRequestCause.SubmissionIdNotFound
    | SeedTrace.InvalidRequestCause.CustomTestCasesUnsupported
    /**
     * The submission request was routed to an incorrect language executor. */
    | SeedTrace.InvalidRequestCause.UnexpectedLanguage
    | SeedTrace.InvalidRequestCause._Unknown;

export namespace InvalidRequestCause {
    export interface SubmissionIdNotFound extends SeedTrace.SubmissionIdNotFound, _Utils {
        type: "submissionIdNotFound";
    }

    export interface CustomTestCasesUnsupported extends SeedTrace.CustomTestCasesUnsupported, _Utils {
        type: "customTestCasesUnsupported";
    }

    export interface UnexpectedLanguage extends SeedTrace.UnexpectedLanguageError, _Utils {
        type: "unexpectedLanguage";
    }

    export interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.InvalidRequestCause._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        submissionIdNotFound: (value: SeedTrace.SubmissionIdNotFound) => _Result;
        customTestCasesUnsupported: (value: SeedTrace.CustomTestCasesUnsupported) => _Result;
        unexpectedLanguage: (value: SeedTrace.UnexpectedLanguageError) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const InvalidRequestCause = {
    submissionIdNotFound: (
        value: SeedTrace.SubmissionIdNotFound
    ): SeedTrace.InvalidRequestCause.SubmissionIdNotFound => {
        return {
            ...value,
            type: "submissionIdNotFound",
            _visit: function <_Result>(
                this: SeedTrace.InvalidRequestCause.SubmissionIdNotFound,
                visitor: SeedTrace.InvalidRequestCause._Visitor<_Result>
            ) {
                return SeedTrace.InvalidRequestCause._visit(this, visitor);
            },
        };
    },

    customTestCasesUnsupported: (
        value: SeedTrace.CustomTestCasesUnsupported
    ): SeedTrace.InvalidRequestCause.CustomTestCasesUnsupported => {
        return {
            ...value,
            type: "customTestCasesUnsupported",
            _visit: function <_Result>(
                this: SeedTrace.InvalidRequestCause.CustomTestCasesUnsupported,
                visitor: SeedTrace.InvalidRequestCause._Visitor<_Result>
            ) {
                return SeedTrace.InvalidRequestCause._visit(this, visitor);
            },
        };
    },

    unexpectedLanguage: (
        value: SeedTrace.UnexpectedLanguageError
    ): SeedTrace.InvalidRequestCause.UnexpectedLanguage => {
        return {
            ...value,
            type: "unexpectedLanguage",
            _visit: function <_Result>(
                this: SeedTrace.InvalidRequestCause.UnexpectedLanguage,
                visitor: SeedTrace.InvalidRequestCause._Visitor<_Result>
            ) {
                return SeedTrace.InvalidRequestCause._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.InvalidRequestCause._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.InvalidRequestCause._Unknown,
                visitor: SeedTrace.InvalidRequestCause._Visitor<_Result>
            ) {
                return SeedTrace.InvalidRequestCause._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.InvalidRequestCause,
        visitor: SeedTrace.InvalidRequestCause._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "submissionIdNotFound":
                return visitor.submissionIdNotFound(value);
            case "customTestCasesUnsupported":
                return visitor.customTestCasesUnsupported(value);
            case "unexpectedLanguage":
                return visitor.unexpectedLanguage(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
