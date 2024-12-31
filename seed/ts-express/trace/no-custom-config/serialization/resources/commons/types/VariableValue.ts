/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const VariableValue: core.serialization.Schema<serializers.VariableValue.Raw, SeedTrace.VariableValue> =
    core.serialization
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
            mapValue: core.serialization.lazyObject(() => serializers.MapValue),
            listValue: core.serialization.object({
                value: core.serialization.list(core.serialization.lazy(() => serializers.VariableValue)),
            }),
            binaryTreeValue: core.serialization.lazyObject(() => serializers.BinaryTreeValue),
            singlyLinkedListValue: core.serialization.lazyObject(() => serializers.SinglyLinkedListValue),
            doublyLinkedListValue: core.serialization.lazyObject(() => serializers.DoublyLinkedListValue),
            nullValue: core.serialization.object({}),
        })
        .transform<SeedTrace.VariableValue>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace VariableValue {
    export type Raw =
        | VariableValue.IntegerValue
        | VariableValue.BooleanValue
        | VariableValue.DoubleValue
        | VariableValue.StringValue
        | VariableValue.CharValue
        | VariableValue.MapValue
        | VariableValue.ListValue
        | VariableValue.BinaryTreeValue
        | VariableValue.SinglyLinkedListValue
        | VariableValue.DoublyLinkedListValue
        | VariableValue.NullValue;

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

    export interface MapValue extends serializers.MapValue.Raw {
        type: "mapValue";
    }

    export interface ListValue {
        type: "listValue";
        value: serializers.VariableValue.Raw[];
    }

    export interface BinaryTreeValue extends serializers.BinaryTreeValue.Raw {
        type: "binaryTreeValue";
    }

    export interface SinglyLinkedListValue extends serializers.SinglyLinkedListValue.Raw {
        type: "singlyLinkedListValue";
    }

    export interface DoublyLinkedListValue extends serializers.DoublyLinkedListValue.Raw {
        type: "doublyLinkedListValue";
    }

    export interface NullValue {
        type: "nullValue";
    }
}
