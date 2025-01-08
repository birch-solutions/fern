/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index.js";
import * as core from "../../../../core/index.js";

export type Error = SeedTrace.sysprop.getNumWarmInstances.Error._Unknown;

export namespace Error {
    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.sysprop.getNumWarmInstances.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    _unknown: (fetcherError: core.Fetcher.Error): SeedTrace.sysprop.getNumWarmInstances.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: SeedTrace.sysprop.getNumWarmInstances.Error._Unknown,
                visitor: SeedTrace.sysprop.getNumWarmInstances.Error._Visitor<_Result>,
            ) {
                return SeedTrace.sysprop.getNumWarmInstances.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.sysprop.getNumWarmInstances.Error,
        visitor: SeedTrace.sysprop.getNumWarmInstances.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            default:
                return visitor._other(value as any);
        }
    },
} as const;
