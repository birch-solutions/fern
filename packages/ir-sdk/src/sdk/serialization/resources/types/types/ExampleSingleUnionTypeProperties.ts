/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const ExampleSingleUnionTypeProperties: core.serialization.Schema<
    serializers.ExampleSingleUnionTypeProperties.Raw,
    FernIr.ExampleSingleUnionTypeProperties
> = core.serialization
    .union("type", {
        samePropertiesAsObject: core.serialization.lazyObject(() => serializers.ExampleObjectTypeWithTypeId),
        singleProperty: core.serialization.lazyObject(() => serializers.ExampleTypeReference),
        noProperties: core.serialization.object({}),
    })
    .transform<FernIr.ExampleSingleUnionTypeProperties>({
        transform: (value) => {
            switch (value.type) {
                case "samePropertiesAsObject":
                    return FernIr.ExampleSingleUnionTypeProperties.samePropertiesAsObject(value);
                case "singleProperty":
                    return FernIr.ExampleSingleUnionTypeProperties.singleProperty(value);
                case "noProperties":
                    return FernIr.ExampleSingleUnionTypeProperties.noProperties();
                default:
                    return value as FernIr.ExampleSingleUnionTypeProperties;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace ExampleSingleUnionTypeProperties {
    export type Raw =
        | ExampleSingleUnionTypeProperties.SamePropertiesAsObject
        | ExampleSingleUnionTypeProperties.SingleProperty
        | ExampleSingleUnionTypeProperties.NoProperties;

    export interface SamePropertiesAsObject extends serializers.ExampleObjectTypeWithTypeId.Raw {
        type: "samePropertiesAsObject";
    }

    export interface SingleProperty extends serializers.ExampleTypeReference.Raw {
        type: "singleProperty";
    }

    export interface NoProperties {
        type: "noProperties";
    }
}
