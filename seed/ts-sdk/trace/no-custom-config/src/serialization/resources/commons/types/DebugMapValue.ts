/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const DebugMapValue: core.serialization.ObjectSchema<serializers.DebugMapValue.Raw, SeedTrace.DebugMapValue> =
    core.serialization.object({
        keyValuePairs: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).DebugKeyValuePairs)
        ),
    });

export declare namespace DebugMapValue {
    interface Raw {
        keyValuePairs: serializers.DebugKeyValuePairs.Raw[];
    }
}
