/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedExhaustive from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ObjectWithMapOfMap: core.serialization.ObjectSchema<
    serializers.types.ObjectWithMapOfMap.Raw,
    SeedExhaustive.types.ObjectWithMapOfMap
> = core.serialization.object({
    map: core.serialization.record(
        core.serialization.string(),
        core.serialization.record(core.serialization.string(), core.serialization.string()),
    ),
});

export declare namespace ObjectWithMapOfMap {
    interface Raw {
        map: Record<string, Record<string, string>>;
    }
}
