/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { ExampleEnumType } from "./ExampleEnumType";

export const ExampleTypeShape: core.serialization.Schema<serializers.ExampleTypeShape.Raw, FernIr.ExampleTypeShape> =
    core.serialization
        .union("type", {
            alias: core.serialization.lazyObject(() => serializers.ExampleAliasType),
            enum: ExampleEnumType,
            object: core.serialization.lazyObject(() => serializers.ExampleObjectType),
            union: core.serialization.lazyObject(() => serializers.ExampleUnionType),
            undiscriminatedUnion: core.serialization.lazyObject(() => serializers.ExampleUndiscriminatedUnionType),
        })
        .transform<FernIr.ExampleTypeShape>({
            transform: (value) => {
                switch (value.type) {
                    case "alias":
                        return FernIr.ExampleTypeShape.alias(value);
                    case "enum":
                        return FernIr.ExampleTypeShape.enum(value);
                    case "object":
                        return FernIr.ExampleTypeShape.object(value);
                    case "union":
                        return FernIr.ExampleTypeShape.union(value);
                    case "undiscriminatedUnion":
                        return FernIr.ExampleTypeShape.undiscriminatedUnion(value);
                    default:
                        return value as FernIr.ExampleTypeShape;
                }
            },
            untransform: ({ _visit, ...value }) => value as any,
        });

export declare namespace ExampleTypeShape {
    export type Raw =
        | ExampleTypeShape.Alias
        | ExampleTypeShape.Enum
        | ExampleTypeShape.Object
        | ExampleTypeShape.Union
        | ExampleTypeShape.UndiscriminatedUnion;

    export interface Alias extends serializers.ExampleAliasType.Raw {
        type: "alias";
    }

    export interface Enum extends ExampleEnumType.Raw {
        type: "enum";
    }

    export interface Object extends serializers.ExampleObjectType.Raw {
        type: "object";
    }

    export interface Union extends serializers.ExampleUnionType.Raw {
        type: "union";
    }

    export interface UndiscriminatedUnion extends serializers.ExampleUndiscriminatedUnionType.Raw {
        type: "undiscriminatedUnion";
    }
}
