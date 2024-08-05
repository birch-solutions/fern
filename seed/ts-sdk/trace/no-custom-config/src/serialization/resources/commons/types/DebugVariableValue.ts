/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { BinaryTreeNodeAndTreeValue } from "./BinaryTreeNodeAndTreeValue";
import { SinglyLinkedListNodeAndListValue } from "./SinglyLinkedListNodeAndListValue";
import { DoublyLinkedListNodeAndListValue } from "./DoublyLinkedListNodeAndListValue";
import { GenericValue } from "./GenericValue";

export const DebugVariableValue: core.serialization.Schema<serializers.DebugVariableValue.Raw, SeedTrace.DebugVariableValue> = core.serialization.union("type", {
        "integerValue": core.serialization.object({
            "value": core.serialization.number()
        }),
        "booleanValue": core.serialization.object({
            "value": core.serialization.boolean()
        }),
        "doubleValue": core.serialization.object({
            "value": core.serialization.number()
        }),
        "stringValue": core.serialization.object({
            "value": core.serialization.string()
        }),
        "charValue": core.serialization.object({
            "value": core.serialization.string()
        }),
        "mapValue": core.serialization.lazyObject(() => serializers.DebugMapValue),
        "listValue": core.serialization.object({
            "value": core.serialization.list(core.serialization.lazy(() => serializers.DebugVariableValue))
        }),
        "binaryTreeNodeValue": BinaryTreeNodeAndTreeValue,
        "singlyLinkedListNodeValue": SinglyLinkedListNodeAndListValue,
        "doublyLinkedListNodeValue": DoublyLinkedListNodeAndListValue,
        "undefinedValue": core.serialization.object({}),
        "nullValue": core.serialization.object({}),
        "genericValue": GenericValue
    }).transform<SeedTrace.DebugVariableValue>({
        transform: value => value,
        untransform: value => value
    });

export declare namespace DebugVariableValue {
    type Raw = DebugVariableValue.IntegerValue | DebugVariableValue.BooleanValue | DebugVariableValue.DoubleValue | DebugVariableValue.StringValue | DebugVariableValue.CharValue | DebugVariableValue.MapValue | DebugVariableValue.ListValue | DebugVariableValue.BinaryTreeNodeValue | DebugVariableValue.SinglyLinkedListNodeValue | DebugVariableValue.DoublyLinkedListNodeValue | DebugVariableValue.UndefinedValue | DebugVariableValue.NullValue | DebugVariableValue.GenericValue;

    interface IntegerValue {
        "type": "integerValue";
        "value": number;
    }

    interface BooleanValue {
        "type": "booleanValue";
        "value": boolean;
    }

    interface DoubleValue {
        "type": "doubleValue";
        "value": number;
    }

    interface StringValue {
        "type": "stringValue";
        "value": string;
    }

    interface CharValue {
        "type": "charValue";
        "value": string;
    }

    interface MapValue extends serializers.DebugMapValue.Raw {
        "type": "mapValue";
    }

    interface ListValue {
        "type": "listValue";
        "value": serializers.DebugVariableValue.Raw[];
    }

    interface BinaryTreeNodeValue extends BinaryTreeNodeAndTreeValue.Raw {
        "type": "binaryTreeNodeValue";
    }

    interface SinglyLinkedListNodeValue extends SinglyLinkedListNodeAndListValue.Raw {
        "type": "singlyLinkedListNodeValue";
    }

    interface DoublyLinkedListNodeValue extends DoublyLinkedListNodeAndListValue.Raw {
        "type": "doublyLinkedListNodeValue";
    }

    interface UndefinedValue {
        "type": "undefinedValue";
    }

    interface NullValue {
        "type": "nullValue";
    }

    interface GenericValue extends GenericValue.Raw {
        "type": "genericValue";
    }
}
