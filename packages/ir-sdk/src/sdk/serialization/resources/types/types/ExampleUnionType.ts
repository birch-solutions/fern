/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const ExampleUnionType: core.serialization.ObjectSchema<
    serializers.ExampleUnionType.Raw,
    FernIr.ExampleUnionType
> = core.serialization.objectWithoutOptionalProperties({
    discriminant: core.serialization.lazyObject(async () => (await import("../../..")).NameAndWireValue),
    singleUnionType: core.serialization.lazyObject(async () => (await import("../../..")).ExampleSingleUnionType),
});

export declare namespace ExampleUnionType {
    interface Raw {
        discriminant: serializers.NameAndWireValue.Raw;
        singleUnionType: serializers.ExampleSingleUnionType.Raw;
    }
}
