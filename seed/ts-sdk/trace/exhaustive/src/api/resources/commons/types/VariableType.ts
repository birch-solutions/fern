/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../..";

export type VariableType =
    | SeedTrace.VariableType.IntegerType
    | SeedTrace.VariableType.DoubleType
    | SeedTrace.VariableType.BooleanType
    | SeedTrace.VariableType.StringType
    | SeedTrace.VariableType.CharType
    | SeedTrace.VariableType.ListType
    | SeedTrace.VariableType.MapType
    | SeedTrace.VariableType.BinaryTreeType
    | SeedTrace.VariableType.SinglyLinkedListType
    | SeedTrace.VariableType.DoublyLinkedListType
    | SeedTrace.VariableType._Unknown;

export declare namespace VariableType {
    interface IntegerType extends _Utils {
        type: "integerType";
    }

    interface DoubleType extends _Utils {
        type: "doubleType";
    }

    interface BooleanType extends _Utils {
        type: "booleanType";
    }

    interface StringType extends _Utils {
        type: "stringType";
    }

    interface CharType extends _Utils {
        type: "charType";
    }

    interface ListType extends SeedTrace.ListType, _Utils {
        type: "listType";
    }

    interface MapType extends SeedTrace.MapType, _Utils {
        type: "mapType";
    }

    interface BinaryTreeType extends _Utils {
        type: "binaryTreeType";
    }

    interface SinglyLinkedListType extends _Utils {
        type: "singlyLinkedListType";
    }

    interface DoublyLinkedListType extends _Utils {
        type: "doublyLinkedListType";
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.VariableType._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        integerType: () => _Result;
        doubleType: () => _Result;
        booleanType: () => _Result;
        stringType: () => _Result;
        charType: () => _Result;
        listType: (value: SeedTrace.ListType) => _Result;
        mapType: (value: SeedTrace.MapType) => _Result;
        binaryTreeType: () => _Result;
        singlyLinkedListType: () => _Result;
        doublyLinkedListType: () => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const VariableType = {
    integerType: (): SeedTrace.VariableType.IntegerType => {
        return {
            type: "integerType",
            _visit: function <_Result>(
                this: SeedTrace.VariableType.IntegerType,
                visitor: SeedTrace.VariableType._Visitor<_Result>
            ) {
                return SeedTrace.VariableType._visit(this, visitor);
            },
        };
    },

    doubleType: (): SeedTrace.VariableType.DoubleType => {
        return {
            type: "doubleType",
            _visit: function <_Result>(
                this: SeedTrace.VariableType.DoubleType,
                visitor: SeedTrace.VariableType._Visitor<_Result>
            ) {
                return SeedTrace.VariableType._visit(this, visitor);
            },
        };
    },

    booleanType: (): SeedTrace.VariableType.BooleanType => {
        return {
            type: "booleanType",
            _visit: function <_Result>(
                this: SeedTrace.VariableType.BooleanType,
                visitor: SeedTrace.VariableType._Visitor<_Result>
            ) {
                return SeedTrace.VariableType._visit(this, visitor);
            },
        };
    },

    stringType: (): SeedTrace.VariableType.StringType => {
        return {
            type: "stringType",
            _visit: function <_Result>(
                this: SeedTrace.VariableType.StringType,
                visitor: SeedTrace.VariableType._Visitor<_Result>
            ) {
                return SeedTrace.VariableType._visit(this, visitor);
            },
        };
    },

    charType: (): SeedTrace.VariableType.CharType => {
        return {
            type: "charType",
            _visit: function <_Result>(
                this: SeedTrace.VariableType.CharType,
                visitor: SeedTrace.VariableType._Visitor<_Result>
            ) {
                return SeedTrace.VariableType._visit(this, visitor);
            },
        };
    },

    listType: (value: SeedTrace.ListType): SeedTrace.VariableType.ListType => {
        return {
            ...value,
            type: "listType",
            _visit: function <_Result>(
                this: SeedTrace.VariableType.ListType,
                visitor: SeedTrace.VariableType._Visitor<_Result>
            ) {
                return SeedTrace.VariableType._visit(this, visitor);
            },
        };
    },

    mapType: (value: SeedTrace.MapType): SeedTrace.VariableType.MapType => {
        return {
            ...value,
            type: "mapType",
            _visit: function <_Result>(
                this: SeedTrace.VariableType.MapType,
                visitor: SeedTrace.VariableType._Visitor<_Result>
            ) {
                return SeedTrace.VariableType._visit(this, visitor);
            },
        };
    },

    binaryTreeType: (): SeedTrace.VariableType.BinaryTreeType => {
        return {
            type: "binaryTreeType",
            _visit: function <_Result>(
                this: SeedTrace.VariableType.BinaryTreeType,
                visitor: SeedTrace.VariableType._Visitor<_Result>
            ) {
                return SeedTrace.VariableType._visit(this, visitor);
            },
        };
    },

    singlyLinkedListType: (): SeedTrace.VariableType.SinglyLinkedListType => {
        return {
            type: "singlyLinkedListType",
            _visit: function <_Result>(
                this: SeedTrace.VariableType.SinglyLinkedListType,
                visitor: SeedTrace.VariableType._Visitor<_Result>
            ) {
                return SeedTrace.VariableType._visit(this, visitor);
            },
        };
    },

    doublyLinkedListType: (): SeedTrace.VariableType.DoublyLinkedListType => {
        return {
            type: "doublyLinkedListType",
            _visit: function <_Result>(
                this: SeedTrace.VariableType.DoublyLinkedListType,
                visitor: SeedTrace.VariableType._Visitor<_Result>
            ) {
                return SeedTrace.VariableType._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.VariableType._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.VariableType._Unknown,
                visitor: SeedTrace.VariableType._Visitor<_Result>
            ) {
                return SeedTrace.VariableType._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: SeedTrace.VariableType, visitor: SeedTrace.VariableType._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "integerType":
                return visitor.integerType();
            case "doubleType":
                return visitor.doubleType();
            case "booleanType":
                return visitor.booleanType();
            case "stringType":
                return visitor.stringType();
            case "charType":
                return visitor.charType();
            case "listType":
                return visitor.listType(value);
            case "mapType":
                return visitor.mapType(value);
            case "binaryTreeType":
                return visitor.binaryTreeType();
            case "singlyLinkedListType":
                return visitor.singlyLinkedListType();
            case "doublyLinkedListType":
                return visitor.doublyLinkedListType();
            default:
                return visitor._other(value as any);
        }
    },
} as const;
