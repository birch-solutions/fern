/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const MapValue: core.serialization.ObjectSchema<serializers.MapValue.Raw, SeedTrace.MapValue> =
    core.serialization.object({
        keyValuePairs: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).KeyValuePair)
        ),
    });

export declare namespace MapValue {
    interface Raw {
        keyValuePairs: serializers.KeyValuePair.Raw[];
    }
}
