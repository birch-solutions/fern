/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type CreateProblemResponse =
    | SeedTrace.CreateProblemResponse.Success
    | SeedTrace.CreateProblemResponse.Error_
    | SeedTrace.CreateProblemResponse._Unknown;

export namespace CreateProblemResponse {
    export interface Success extends _Utils {
        type: "success";
        value: SeedTrace.ProblemId;
    }

    export interface Error_ extends _Utils {
        type: "error";
        value: SeedTrace.CreateProblemError;
    }

    export interface _Unknown extends _Utils {
        type: void;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.CreateProblemResponse._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        success: (value: SeedTrace.ProblemId) => _Result;
        error: (value: SeedTrace.CreateProblemError) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const CreateProblemResponse = {
    success: (value: SeedTrace.ProblemId): SeedTrace.CreateProblemResponse.Success => {
        return {
            value,
            type: "success",
            _visit <_Result>(
                this: SeedTrace.CreateProblemResponse.Success,
                visitor: SeedTrace.CreateProblemResponse._Visitor<_Result>,
            ) {
                return SeedTrace.CreateProblemResponse._visit(this, visitor);
            },
        };
    },

    error: (value: SeedTrace.CreateProblemError): SeedTrace.CreateProblemResponse.Error_ => {
        return {
            value,
            type: "error",
            _visit <_Result>(
                this: SeedTrace.CreateProblemResponse.Error_,
                visitor: SeedTrace.CreateProblemResponse._Visitor<_Result>,
            ) {
                return SeedTrace.CreateProblemResponse._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.CreateProblemResponse._Unknown => {
        return {
            ...(value as any),
            _visit <_Result>(
                this: SeedTrace.CreateProblemResponse._Unknown,
                visitor: SeedTrace.CreateProblemResponse._Visitor<_Result>,
            ) {
                return SeedTrace.CreateProblemResponse._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.CreateProblemResponse,
        visitor: SeedTrace.CreateProblemResponse._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "success":
                return visitor.success(value.value);
            case "error":
                return visitor.error(value.value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
