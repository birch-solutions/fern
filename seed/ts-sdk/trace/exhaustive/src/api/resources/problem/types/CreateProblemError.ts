/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type CreateProblemError = SeedTrace.CreateProblemError.Generic | SeedTrace.CreateProblemError._Unknown;

export declare namespace CreateProblemError {
    interface Generic extends SeedTrace.GenericCreateProblemError, _Utils {
        errorType: "generic";
    }

    interface _Unknown extends _Utils {
        errorType: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.CreateProblemError._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        generic: (value: SeedTrace.GenericCreateProblemError) => _Result;
        _other: (value: { errorType: string }) => _Result;
    }
}

export const CreateProblemError = {
    generic: (value: SeedTrace.GenericCreateProblemError): SeedTrace.CreateProblemError.Generic => {
        return {
            ...value,
            errorType: "generic",
            _visit: function <_Result>(
                this: SeedTrace.CreateProblemError.Generic,
                visitor: SeedTrace.CreateProblemError._Visitor<_Result>
            ) {
                return SeedTrace.CreateProblemError._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { errorType: string }): SeedTrace.CreateProblemError._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.CreateProblemError._Unknown,
                visitor: SeedTrace.CreateProblemError._Visitor<_Result>
            ) {
                return SeedTrace.CreateProblemError._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.CreateProblemError,
        visitor: SeedTrace.CreateProblemError._Visitor<_Result>
    ): _Result => {
        switch (value.errorType) {
            case "generic":
                return visitor.generic(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
