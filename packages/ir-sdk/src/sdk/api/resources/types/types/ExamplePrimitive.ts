/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

export type ExamplePrimitive =
    | FernIr.ExamplePrimitive.Integer
    | FernIr.ExamplePrimitive.Uint
    | FernIr.ExamplePrimitive.Uint64
    | FernIr.ExamplePrimitive.Double
    | FernIr.ExamplePrimitive.String
    | FernIr.ExamplePrimitive.Boolean
    | FernIr.ExamplePrimitive.Long
    | FernIr.ExamplePrimitive.Datetime
    | FernIr.ExamplePrimitive.Date_
    | FernIr.ExamplePrimitive.Uuid;

export declare namespace ExamplePrimitive {
    interface Integer extends _Utils {
        type: "integer";
        integer: number;
    }

    interface Uint extends _Utils {
        type: "uint";
        uint: number;
    }

    interface Uint64 extends _Utils {
        type: "uint64";
        uint64: number;
    }

    interface Double extends _Utils {
        type: "double";
        double: number;
    }

    interface String extends _Utils {
        type: "string";
        string: FernIr.EscapedString;
    }

    interface Boolean extends _Utils {
        type: "boolean";
        boolean: boolean;
    }

    interface Long extends _Utils {
        type: "long";
        long: number;
    }

    interface Datetime extends _Utils {
        type: "datetime";
        datetime: Date;
    }

    interface Date_ extends _Utils {
        type: "date";
        date: string;
    }

    interface Uuid extends _Utils {
        type: "uuid";
        uuid: string;
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ExamplePrimitive._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        integer: (value: number) => _Result;
        uint: (value: number) => _Result;
        uint64: (value: number) => _Result;
        double: (value: number) => _Result;
        string: (value: FernIr.EscapedString) => _Result;
        boolean: (value: boolean) => _Result;
        long: (value: number) => _Result;
        datetime: (value: Date) => _Result;
        date: (value: string) => _Result;
        uuid: (value: string) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ExamplePrimitive = {
    integer: (value: number): FernIr.ExamplePrimitive.Integer => {
        return {
            integer: value,
            type: "integer",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Integer,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    uint: (value: number): FernIr.ExamplePrimitive.Uint => {
        return {
            uint: value,
            type: "uint",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Uint,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    uint64: (value: number): FernIr.ExamplePrimitive.Uint64 => {
        return {
            uint64: value,
            type: "uint64",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Uint64,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    double: (value: number): FernIr.ExamplePrimitive.Double => {
        return {
            double: value,
            type: "double",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Double,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    string: (value: FernIr.EscapedString): FernIr.ExamplePrimitive.String => {
        return {
            string: value,
            type: "string",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.String,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    boolean: (value: boolean): FernIr.ExamplePrimitive.Boolean => {
        return {
            boolean: value,
            type: "boolean",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Boolean,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    long: (value: number): FernIr.ExamplePrimitive.Long => {
        return {
            long: value,
            type: "long",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Long,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    datetime: (value: Date): FernIr.ExamplePrimitive.Datetime => {
        return {
            datetime: value,
            type: "datetime",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Datetime,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    date: (value: string): FernIr.ExamplePrimitive.Date_ => {
        return {
            date: value,
            type: "date",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Date_,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    uuid: (value: string): FernIr.ExamplePrimitive.Uuid => {
        return {
            uuid: value,
            type: "uuid",
            _visit: function <_Result>(
                this: FernIr.ExamplePrimitive.Uuid,
                visitor: FernIr.ExamplePrimitive._Visitor<_Result>
            ) {
                return FernIr.ExamplePrimitive._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: FernIr.ExamplePrimitive, visitor: FernIr.ExamplePrimitive._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "integer":
                return visitor.integer(value.integer);
            case "uint":
                return visitor.uint(value.uint);
            case "uint64":
                return visitor.uint64(value.uint64);
            case "double":
                return visitor.double(value.double);
            case "string":
                return visitor.string(value.string);
            case "boolean":
                return visitor.boolean(value.boolean);
            case "long":
                return visitor.long(value.long);
            case "datetime":
                return visitor.datetime(value.datetime);
            case "date":
                return visitor.date(value.date);
            case "uuid":
                return visitor.uuid(value.uuid);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
