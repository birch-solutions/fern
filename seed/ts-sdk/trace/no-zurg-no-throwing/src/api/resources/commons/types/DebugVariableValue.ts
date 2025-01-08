/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type DebugVariableValue =
    | SeedTrace.DebugVariableValue.IntegerValue
    | SeedTrace.DebugVariableValue.BooleanValue
    | SeedTrace.DebugVariableValue.DoubleValue
    | SeedTrace.DebugVariableValue.StringValue
    | SeedTrace.DebugVariableValue.CharValue
    | SeedTrace.DebugVariableValue.MapValue
    | SeedTrace.DebugVariableValue.ListValue
    | SeedTrace.DebugVariableValue.BinaryTreeNodeValue
    | SeedTrace.DebugVariableValue.SinglyLinkedListNodeValue
    | SeedTrace.DebugVariableValue.DoublyLinkedListNodeValue
    | SeedTrace.DebugVariableValue.UndefinedValue
    | SeedTrace.DebugVariableValue.NullValue
    | SeedTrace.DebugVariableValue.GenericValue;

export namespace DebugVariableValue {
    export interface IntegerValue {
        type: "integerValue";
        value: number;
    }

    export interface BooleanValue {
        type: "booleanValue";
        value: boolean;
    }

    export interface DoubleValue {
        type: "doubleValue";
        value: number;
    }

    export interface StringValue {
        type: "stringValue";
        value: string;
    }

    export interface CharValue {
        type: "charValue";
        value: string;
    }

    export interface MapValue extends SeedTrace.DebugMapValue {
        type: "mapValue";
    }

    export interface ListValue {
        type: "listValue";
        value: SeedTrace.DebugVariableValue[];
    }

    export interface BinaryTreeNodeValue extends SeedTrace.BinaryTreeNodeAndTreeValue {
        type: "binaryTreeNodeValue";
    }

    export interface SinglyLinkedListNodeValue extends SeedTrace.SinglyLinkedListNodeAndListValue {
        type: "singlyLinkedListNodeValue";
    }

    export interface DoublyLinkedListNodeValue extends SeedTrace.DoublyLinkedListNodeAndListValue {
        type: "doublyLinkedListNodeValue";
    }

    export interface UndefinedValue {
        type: "undefinedValue";
    }

    export interface NullValue {
        type: "nullValue";
    }

    export interface GenericValue extends SeedTrace.GenericValue {
        type: "genericValue";
    }
}
