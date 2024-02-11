/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";
export declare const VariableValue: core.serialization.Schema<serializers.VariableValue.Raw, SeedTrace.VariableValue>;
export declare namespace VariableValue {
    type Raw = VariableValue.IntegerValue | VariableValue.BooleanValue | VariableValue.DoubleValue | VariableValue.StringValue | VariableValue.CharValue | VariableValue.MapValue | VariableValue.ListValue | VariableValue.BinaryTreeValue | VariableValue.SinglyLinkedListValue | VariableValue.DoublyLinkedListValue | VariableValue.NullValue;
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
    interface MapValue extends serializers.MapValue.Raw {
        type: "mapValue";
    }
    interface ListValue {
        type: "listValue";
        value: serializers.VariableValue.Raw[];
    }
    interface BinaryTreeValue extends serializers.BinaryTreeValue.Raw {
        type: "binaryTreeValue";
    }
    interface SinglyLinkedListValue extends serializers.SinglyLinkedListValue.Raw {
        type: "singlyLinkedListValue";
    }
    interface DoublyLinkedListValue extends serializers.DoublyLinkedListValue.Raw {
        type: "doublyLinkedListValue";
    }
    interface NullValue {
        type: "nullValue";
    }
}
