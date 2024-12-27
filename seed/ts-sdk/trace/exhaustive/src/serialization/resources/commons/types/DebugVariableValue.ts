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

export const DebugVariableValue: core.serialization.Schema<
    serializers.DebugVariableValue.Raw,
    SeedTrace.DebugVariableValue
> = core.serialization
    .union("type", {
        integerValue: core.serialization.object({
            value: core.serialization.number(),
        }),
        booleanValue: core.serialization.object({
            value: core.serialization.boolean(),
        }),
        doubleValue: core.serialization.object({
            value: core.serialization.number(),
        }),
        stringValue: core.serialization.object({
            value: core.serialization.string(),
        }),
        charValue: core.serialization.object({
            value: core.serialization.string(),
        }),
        mapValue: core.serialization.lazyObject(() => serializers.DebugMapValue),
        listValue: core.serialization.object({
            value: core.serialization.list(core.serialization.lazy(() => serializers.DebugVariableValue)),
        }),
        binaryTreeNodeValue: BinaryTreeNodeAndTreeValue,
        singlyLinkedListNodeValue: SinglyLinkedListNodeAndListValue,
        doublyLinkedListNodeValue: DoublyLinkedListNodeAndListValue,
        undefinedValue: core.serialization.object({}),
        nullValue: core.serialization.object({}),
        genericValue: GenericValue,
    })
    .transform<SeedTrace.DebugVariableValue>({
        transform: (value) => {
            switch (value.type) {
                case "integerValue":
                    return SeedTrace.DebugVariableValue.integerValue(value.value);
                case "booleanValue":
                    return SeedTrace.DebugVariableValue.booleanValue(value.value);
                case "doubleValue":
                    return SeedTrace.DebugVariableValue.doubleValue(value.value);
                case "stringValue":
                    return SeedTrace.DebugVariableValue.stringValue(value.value);
                case "charValue":
                    return SeedTrace.DebugVariableValue.charValue(value.value);
                case "mapValue":
                    return SeedTrace.DebugVariableValue.mapValue(value);
                case "listValue":
                    return SeedTrace.DebugVariableValue.listValue(value.value);
                case "binaryTreeNodeValue":
                    return SeedTrace.DebugVariableValue.binaryTreeNodeValue(value);
                case "singlyLinkedListNodeValue":
                    return SeedTrace.DebugVariableValue.singlyLinkedListNodeValue(value);
                case "doublyLinkedListNodeValue":
                    return SeedTrace.DebugVariableValue.doublyLinkedListNodeValue(value);
                case "undefinedValue":
                    return SeedTrace.DebugVariableValue.undefinedValue();
                case "nullValue":
                    return SeedTrace.DebugVariableValue.nullValue();
                case "genericValue":
                    return SeedTrace.DebugVariableValue.genericValue(value);
                default:
                    return SeedTrace.DebugVariableValue._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace DebugVariableValue {
    export type Raw =
        | DebugVariableValue.IntegerValue
        | DebugVariableValue.BooleanValue
        | DebugVariableValue.DoubleValue
        | DebugVariableValue.StringValue
        | DebugVariableValue.CharValue
        | DebugVariableValue.MapValue
        | DebugVariableValue.ListValue
        | DebugVariableValue.BinaryTreeNodeValue
        | DebugVariableValue.SinglyLinkedListNodeValue
        | DebugVariableValue.DoublyLinkedListNodeValue
        | DebugVariableValue.UndefinedValue
        | DebugVariableValue.NullValue
        | DebugVariableValue.GenericValue;

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

    export interface MapValue extends serializers.DebugMapValue.Raw {
        type: "mapValue";
    }

    export interface ListValue {
        type: "listValue";
        value: serializers.DebugVariableValue.Raw[];
    }

    export interface BinaryTreeNodeValue extends BinaryTreeNodeAndTreeValue.Raw {
        type: "binaryTreeNodeValue";
    }

    export interface SinglyLinkedListNodeValue extends SinglyLinkedListNodeAndListValue.Raw {
        type: "singlyLinkedListNodeValue";
    }

    export interface DoublyLinkedListNodeValue extends DoublyLinkedListNodeAndListValue.Raw {
        type: "doublyLinkedListNodeValue";
    }

    export interface UndefinedValue {
        type: "undefinedValue";
    }

    export interface NullValue {
        type: "nullValue";
    }

    export interface GenericValue extends GenericValue.Raw {
        type: "genericValue";
    }
}
