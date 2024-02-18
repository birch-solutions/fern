/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../..";

export type VariableValue =
    | SeedTrace.VariableValue.IntegerValue
    | SeedTrace.VariableValue.BooleanValue
    | SeedTrace.VariableValue.DoubleValue
    | SeedTrace.VariableValue.StringValue
    | SeedTrace.VariableValue.CharValue
    | SeedTrace.VariableValue.MapValue
    | SeedTrace.VariableValue.ListValue
    | SeedTrace.VariableValue.BinaryTreeValue
    | SeedTrace.VariableValue.SinglyLinkedListValue
    | SeedTrace.VariableValue.DoublyLinkedListValue
    | SeedTrace.VariableValue.NullValue
    | SeedTrace.VariableValue._Unknown;

export declare namespace VariableValue {
    interface IntegerValue extends _Utils {
        type: "integerValue";
        value: number;
    }

    interface BooleanValue extends _Utils {
        type: "booleanValue";
        value: boolean;
    }

    interface DoubleValue extends _Utils {
        type: "doubleValue";
        value: number;
    }

    interface StringValue extends _Utils {
        type: "stringValue";
        value: string;
    }

    interface CharValue extends _Utils {
        type: "charValue";
        value: string;
    }

    interface MapValue extends SeedTrace.MapValue, _Utils {
        type: "mapValue";
    }

    interface ListValue extends _Utils {
        type: "listValue";
        value: SeedTrace.VariableValue[];
    }

    interface BinaryTreeValue extends SeedTrace.BinaryTreeValue, _Utils {
        type: "binaryTreeValue";
    }

    interface SinglyLinkedListValue extends SeedTrace.SinglyLinkedListValue, _Utils {
        type: "singlyLinkedListValue";
    }

    interface DoublyLinkedListValue extends SeedTrace.DoublyLinkedListValue, _Utils {
        type: "doublyLinkedListValue";
    }

    interface NullValue extends _Utils {
        type: "nullValue";
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.VariableValue._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        integerValue: (value: number) => _Result;
        booleanValue: (value: boolean) => _Result;
        doubleValue: (value: number) => _Result;
        stringValue: (value: string) => _Result;
        charValue: (value: string) => _Result;
        mapValue: (value: SeedTrace.MapValue) => _Result;
        listValue: (value: SeedTrace.VariableValue[]) => _Result;
        binaryTreeValue: (value: SeedTrace.BinaryTreeValue) => _Result;
        singlyLinkedListValue: (value: SeedTrace.SinglyLinkedListValue) => _Result;
        doublyLinkedListValue: (value: SeedTrace.DoublyLinkedListValue) => _Result;
        nullValue: () => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const VariableValue = {
    integerValue: (value: number): SeedTrace.VariableValue.IntegerValue => {
        return {
            value: value,
            type: "integerValue",
            _visit: function <_Result>(
                this: SeedTrace.VariableValue.IntegerValue,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    booleanValue: (value: boolean): SeedTrace.VariableValue.BooleanValue => {
        return {
            value: value,
            type: "booleanValue",
            _visit: function <_Result>(
                this: SeedTrace.VariableValue.BooleanValue,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    doubleValue: (value: number): SeedTrace.VariableValue.DoubleValue => {
        return {
            value: value,
            type: "doubleValue",
            _visit: function <_Result>(
                this: SeedTrace.VariableValue.DoubleValue,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    stringValue: (value: string): SeedTrace.VariableValue.StringValue => {
        return {
            value: value,
            type: "stringValue",
            _visit: function <_Result>(
                this: SeedTrace.VariableValue.StringValue,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    charValue: (value: string): SeedTrace.VariableValue.CharValue => {
        return {
            value: value,
            type: "charValue",
            _visit: function <_Result>(
                this: SeedTrace.VariableValue.CharValue,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    mapValue: (value: SeedTrace.MapValue): SeedTrace.VariableValue.MapValue => {
        return {
            ...value,
            type: "mapValue",
            _visit: function <_Result>(
                this: SeedTrace.VariableValue.MapValue,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    listValue: (value: SeedTrace.VariableValue[]): SeedTrace.VariableValue.ListValue => {
        return {
            value: value,
            type: "listValue",
            _visit: function <_Result>(
                this: SeedTrace.VariableValue.ListValue,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    binaryTreeValue: (value: SeedTrace.BinaryTreeValue): SeedTrace.VariableValue.BinaryTreeValue => {
        return {
            ...value,
            type: "binaryTreeValue",
            _visit: function <_Result>(
                this: SeedTrace.VariableValue.BinaryTreeValue,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    singlyLinkedListValue: (value: SeedTrace.SinglyLinkedListValue): SeedTrace.VariableValue.SinglyLinkedListValue => {
        return {
            ...value,
            type: "singlyLinkedListValue",
            _visit: function <_Result>(
                this: SeedTrace.VariableValue.SinglyLinkedListValue,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    doublyLinkedListValue: (value: SeedTrace.DoublyLinkedListValue): SeedTrace.VariableValue.DoublyLinkedListValue => {
        return {
            ...value,
            type: "doublyLinkedListValue",
            _visit: function <_Result>(
                this: SeedTrace.VariableValue.DoublyLinkedListValue,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    nullValue: (): SeedTrace.VariableValue.NullValue => {
        return {
            type: "nullValue",
            _visit: function <_Result>(
                this: SeedTrace.VariableValue.NullValue,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.VariableValue._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.VariableValue._Unknown,
                visitor: SeedTrace.VariableValue._Visitor<_Result>
            ) {
                return SeedTrace.VariableValue._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: SeedTrace.VariableValue, visitor: SeedTrace.VariableValue._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "integerValue":
                return visitor.integerValue(value.value);
            case "booleanValue":
                return visitor.booleanValue(value.value);
            case "doubleValue":
                return visitor.doubleValue(value.value);
            case "stringValue":
                return visitor.stringValue(value.value);
            case "charValue":
                return visitor.charValue(value.value);
            case "mapValue":
                return visitor.mapValue(value);
            case "listValue":
                return visitor.listValue(value.value);
            case "binaryTreeValue":
                return visitor.binaryTreeValue(value);
            case "singlyLinkedListValue":
                return visitor.singlyLinkedListValue(value);
            case "doublyLinkedListValue":
                return visitor.doublyLinkedListValue(value);
            case "nullValue":
                return visitor.nullValue();
            default:
                return visitor._other(value as any);
        }
    },
} as const;
