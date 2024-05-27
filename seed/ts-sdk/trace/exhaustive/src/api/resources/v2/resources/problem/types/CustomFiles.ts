/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../index";

export type CustomFiles =
    | SeedTrace.v2.CustomFiles.Basic
    | SeedTrace.v2.CustomFiles.Custom
    | SeedTrace.v2.CustomFiles._Unknown;

export declare namespace CustomFiles {
    interface Basic extends SeedTrace.v2.BasicCustomFiles, _Utils {
        type: "basic";
    }

    interface Custom extends _Utils {
        type: "custom";
        value: Record<SeedTrace.Language, SeedTrace.v2.Files | undefined>;
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.v2.CustomFiles._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        basic: (value: SeedTrace.v2.BasicCustomFiles) => _Result;
        custom: (value: Record<SeedTrace.Language, SeedTrace.v2.Files | undefined>) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const CustomFiles = {
    basic: (value: SeedTrace.v2.BasicCustomFiles): SeedTrace.v2.CustomFiles.Basic => {
        return {
            ...value,
            type: "basic",
            _visit: function <_Result>(
                this: SeedTrace.v2.CustomFiles.Basic,
                visitor: SeedTrace.v2.CustomFiles._Visitor<_Result>
            ) {
                return SeedTrace.v2.CustomFiles._visit(this, visitor);
            },
        };
    },

    custom: (value: Record<SeedTrace.Language, SeedTrace.v2.Files | undefined>): SeedTrace.v2.CustomFiles.Custom => {
        return {
            value: value,
            type: "custom",
            _visit: function <_Result>(
                this: SeedTrace.v2.CustomFiles.Custom,
                visitor: SeedTrace.v2.CustomFiles._Visitor<_Result>
            ) {
                return SeedTrace.v2.CustomFiles._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.v2.CustomFiles._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.v2.CustomFiles._Unknown,
                visitor: SeedTrace.v2.CustomFiles._Visitor<_Result>
            ) {
                return SeedTrace.v2.CustomFiles._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.v2.CustomFiles,
        visitor: SeedTrace.v2.CustomFiles._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "basic":
                return visitor.basic(value);
            case "custom":
                return visitor.custom(value.value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
