/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../../index";

export type LiteralSchemaValue = FernOpenapiIr.LiteralSchemaValue.Boolean | FernOpenapiIr.LiteralSchemaValue.String;

export declare namespace LiteralSchemaValue {
    interface Boolean extends _Utils {
        type: "boolean";
        value: boolean;
    }

    interface String extends _Utils {
        type: "string";
        value: string;
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernOpenapiIr.LiteralSchemaValue._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        boolean: (value: boolean) => _Result;
        string: (value: string) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const LiteralSchemaValue = {
    boolean: (value: boolean): FernOpenapiIr.LiteralSchemaValue.Boolean => {
        return {
            value: value,
            type: "boolean",
            _visit: function <_Result>(
                this: FernOpenapiIr.LiteralSchemaValue.Boolean,
                visitor: FernOpenapiIr.LiteralSchemaValue._Visitor<_Result>
            ) {
                return FernOpenapiIr.LiteralSchemaValue._visit(this, visitor);
            }
        };
    },

    string: (value: string): FernOpenapiIr.LiteralSchemaValue.String => {
        return {
            value: value,
            type: "string",
            _visit: function <_Result>(
                this: FernOpenapiIr.LiteralSchemaValue.String,
                visitor: FernOpenapiIr.LiteralSchemaValue._Visitor<_Result>
            ) {
                return FernOpenapiIr.LiteralSchemaValue._visit(this, visitor);
            }
        };
    },

    _visit: <_Result>(
        value: FernOpenapiIr.LiteralSchemaValue,
        visitor: FernOpenapiIr.LiteralSchemaValue._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "boolean":
                return visitor.boolean(value.value);
            case "string":
                return visitor.string(value.value);
            default:
                return visitor._other(value as any);
        }
    }
} as const;
