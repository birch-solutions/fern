/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../..";

export type PrimitiveSchemaValue =
    | FernOpenapiIr.PrimitiveSchemaValue.Int
    | FernOpenapiIr.PrimitiveSchemaValue.Int64
    | FernOpenapiIr.PrimitiveSchemaValue.Float
    | FernOpenapiIr.PrimitiveSchemaValue.Double
    | FernOpenapiIr.PrimitiveSchemaValue.String
    | FernOpenapiIr.PrimitiveSchemaValue.Datetime
    | FernOpenapiIr.PrimitiveSchemaValue.Date_
    | FernOpenapiIr.PrimitiveSchemaValue.Base64
    | FernOpenapiIr.PrimitiveSchemaValue.Boolean;

export declare namespace PrimitiveSchemaValue {
    interface Int extends FernOpenapiIr.IntSchema, _Utils {
        type: "int";
    }

    interface Int64 extends FernOpenapiIr.LongSchema, _Utils {
        type: "int64";
    }

    interface Float extends _Utils {
        type: "float";
    }

    interface Double extends FernOpenapiIr.DoubleSchema, _Utils {
        type: "double";
    }

    interface String extends FernOpenapiIr.StringSchema, _Utils {
        type: "string";
    }

    interface Datetime extends _Utils {
        type: "datetime";
    }

    interface Date_ extends _Utils {
        type: "date";
    }

    interface Base64 extends _Utils {
        type: "base64";
    }

    interface Boolean extends FernOpenapiIr.BooleanSchema, _Utils {
        type: "boolean";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernOpenapiIr.PrimitiveSchemaValue._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        int: (value: FernOpenapiIr.IntSchema) => _Result;
        int64: (value: FernOpenapiIr.LongSchema) => _Result;
        float: () => _Result;
        double: (value: FernOpenapiIr.DoubleSchema) => _Result;
        string: (value: FernOpenapiIr.StringSchema) => _Result;
        datetime: () => _Result;
        date: () => _Result;
        base64: () => _Result;
        boolean: (value: FernOpenapiIr.BooleanSchema) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const PrimitiveSchemaValue = {
    int: (value: FernOpenapiIr.IntSchema): FernOpenapiIr.PrimitiveSchemaValue.Int => {
        return {
            ...value,
            type: "int",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValue.Int,
                visitor: FernOpenapiIr.PrimitiveSchemaValue._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValue._visit(this, visitor);
            },
        };
    },

    int64: (value: FernOpenapiIr.LongSchema): FernOpenapiIr.PrimitiveSchemaValue.Int64 => {
        return {
            ...value,
            type: "int64",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValue.Int64,
                visitor: FernOpenapiIr.PrimitiveSchemaValue._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValue._visit(this, visitor);
            },
        };
    },

    float: (): FernOpenapiIr.PrimitiveSchemaValue.Float => {
        return {
            type: "float",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValue.Float,
                visitor: FernOpenapiIr.PrimitiveSchemaValue._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValue._visit(this, visitor);
            },
        };
    },

    double: (value: FernOpenapiIr.DoubleSchema): FernOpenapiIr.PrimitiveSchemaValue.Double => {
        return {
            ...value,
            type: "double",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValue.Double,
                visitor: FernOpenapiIr.PrimitiveSchemaValue._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValue._visit(this, visitor);
            },
        };
    },

    string: (value: FernOpenapiIr.StringSchema): FernOpenapiIr.PrimitiveSchemaValue.String => {
        return {
            ...value,
            type: "string",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValue.String,
                visitor: FernOpenapiIr.PrimitiveSchemaValue._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValue._visit(this, visitor);
            },
        };
    },

    datetime: (): FernOpenapiIr.PrimitiveSchemaValue.Datetime => {
        return {
            type: "datetime",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValue.Datetime,
                visitor: FernOpenapiIr.PrimitiveSchemaValue._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValue._visit(this, visitor);
            },
        };
    },

    date: (): FernOpenapiIr.PrimitiveSchemaValue.Date_ => {
        return {
            type: "date",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValue.Date_,
                visitor: FernOpenapiIr.PrimitiveSchemaValue._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValue._visit(this, visitor);
            },
        };
    },

    base64: (): FernOpenapiIr.PrimitiveSchemaValue.Base64 => {
        return {
            type: "base64",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValue.Base64,
                visitor: FernOpenapiIr.PrimitiveSchemaValue._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValue._visit(this, visitor);
            },
        };
    },

    boolean: (value: FernOpenapiIr.BooleanSchema): FernOpenapiIr.PrimitiveSchemaValue.Boolean => {
        return {
            ...value,
            type: "boolean",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValue.Boolean,
                visitor: FernOpenapiIr.PrimitiveSchemaValue._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValue._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernOpenapiIr.PrimitiveSchemaValue,
        visitor: FernOpenapiIr.PrimitiveSchemaValue._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "int":
                return visitor.int(value);
            case "int64":
                return visitor.int64(value);
            case "float":
                return visitor.float();
            case "double":
                return visitor.double(value);
            case "string":
                return visitor.string(value);
            case "datetime":
                return visitor.datetime();
            case "date":
                return visitor.date();
            case "base64":
                return visitor.base64();
            case "boolean":
                return visitor.boolean(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
