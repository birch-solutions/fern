/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const MapType: core.serialization.ObjectSchema<serializers.MapType.Raw, FernIr.MapType> =
    core.serialization.objectWithoutOptionalProperties({
        keyType: core.serialization.lazy(async () => (await import("../../..")).TypeReference),
        valueType: core.serialization.lazy(async () => (await import("../../..")).TypeReference),
    });

export declare namespace MapType {
    interface Raw {
        keyType: serializers.TypeReference.Raw;
        valueType: serializers.TypeReference.Raw;
    }
}
