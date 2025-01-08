/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const ExampleUndiscriminatedUnionType: core.serialization.ObjectSchema<
    serializers.ExampleUndiscriminatedUnionType.Raw,
    FernIr.ExampleUndiscriminatedUnionType
> = core.serialization.objectWithoutOptionalProperties({
    index: core.serialization.number(),
    singleUnionType: core.serialization.lazyObject(() => serializers.ExampleTypeReference),
});

export declare namespace ExampleUndiscriminatedUnionType {
    export interface Raw {
        index: number;
        singleUnionType: serializers.ExampleTypeReference.Raw;
    }
}
