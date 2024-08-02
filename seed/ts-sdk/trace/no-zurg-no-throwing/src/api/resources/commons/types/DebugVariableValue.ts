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

export declare namespace DebugVariableValue {
    interface IntegerValue {
        type: "integerValue";
        value: number;
    }

    interface BooleanValue {
        type: "booleanValue";
        value: boolean;
    }

    interface DoubleValue {
        type: "doubleValue";
        value: number;
    }

    interface StringValue {
        type: "stringValue";
        value: string;
    }

    interface CharValue {
        type: "charValue";
        value: string;
    }

    interface MapValue extends SeedTrace.DebugMapValue {
        type: "mapValue";
    }

    interface ListValue {
        type: "listValue";
        value: SeedTrace.DebugVariableValue[];
    }

    interface BinaryTreeNodeValue extends SeedTrace.BinaryTreeNodeAndTreeValue {
        type: "binaryTreeNodeValue";
    }

    interface SinglyLinkedListNodeValue extends SeedTrace.SinglyLinkedListNodeAndListValue {
        type: "singlyLinkedListNodeValue";
    }

    interface DoublyLinkedListNodeValue extends SeedTrace.DoublyLinkedListNodeAndListValue {
        type: "doublyLinkedListNodeValue";
    }

    interface UndefinedValue {
        type: "undefinedValue";
    }

    interface NullValue {
        type: "nullValue";
    }

    interface GenericValue extends SeedTrace.GenericValue {
        type: "genericValue";
    }
}
