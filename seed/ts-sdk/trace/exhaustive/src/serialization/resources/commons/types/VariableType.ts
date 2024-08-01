/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const VariableType: core.serialization.Schema<serializers.VariableType.Raw, SeedTrace.VariableType> = core.serialization.union("type", {
        "integerType": core.serialization.object({}),
        "doubleType": core.serialization.object({}),
        "booleanType": core.serialization.object({}),
        "stringType": core.serialization.object({}),
        "charType": core.serialization.object({}),
        "listType": core.serialization.lazyObject(() => serializers.ListType),
        "mapType": core.serialization.lazyObject(() => serializers.MapType),
        "binaryTreeType": core.serialization.object({}),
        "singlyLinkedListType": core.serialization.object({}),
        "doublyLinkedListType": core.serialization.object({})
    }).transform<SeedTrace.VariableType>({
        transform: value => {
            switch (value.type) {
                case "integerType": return SeedTrace.VariableType.integerType();
                case "doubleType": return SeedTrace.VariableType.doubleType();
                case "booleanType": return SeedTrace.VariableType.booleanType();
                case "stringType": return SeedTrace.VariableType.stringType();
                case "charType": return SeedTrace.VariableType.charType();
                case "listType": return SeedTrace.VariableType.listType(value);
                case "mapType": return SeedTrace.VariableType.mapType(value);
                case "binaryTreeType": return SeedTrace.VariableType.binaryTreeType();
                case "singlyLinkedListType": return SeedTrace.VariableType.singlyLinkedListType();
                case "doublyLinkedListType": return SeedTrace.VariableType.doublyLinkedListType();
                default: return SeedTrace.VariableType._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any
    });

export declare namespace VariableType {
    type Raw = VariableType.IntegerType | VariableType.DoubleType | VariableType.BooleanType | VariableType.StringType | VariableType.CharType | VariableType.ListType | VariableType.MapType | VariableType.BinaryTreeType | VariableType.SinglyLinkedListType | VariableType.DoublyLinkedListType;

    interface IntegerType {
        "type": "integerType";
    }

    interface DoubleType {
        "type": "doubleType";
    }

    interface BooleanType {
        "type": "booleanType";
    }

    interface StringType {
        "type": "stringType";
    }

    interface CharType {
        "type": "charType";
    }

    interface ListType extends serializers.ListType.Raw {
        "type": "listType";
    }

    interface MapType extends serializers.MapType.Raw {
        "type": "mapType";
    }

    interface BinaryTreeType {
        "type": "binaryTreeType";
    }

    interface SinglyLinkedListType {
        "type": "singlyLinkedListType";
    }

    interface DoublyLinkedListType {
        "type": "doublyLinkedListType";
    }
}
