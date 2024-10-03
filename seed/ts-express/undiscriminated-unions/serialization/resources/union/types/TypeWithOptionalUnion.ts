/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedUndiscriminatedUnions from "../../../../api/index";
import * as core from "../../../../core";

export const TypeWithOptionalUnion: core.serialization.ObjectSchema<
    serializers.TypeWithOptionalUnion.Raw,
    SeedUndiscriminatedUnions.TypeWithOptionalUnion
> = core.serialization.object({
    myUnion: core.serialization.lazy(() => serializers.MyUnion).optional(),
});

export declare namespace TypeWithOptionalUnion {
    interface Raw {
        myUnion?: serializers.MyUnion.Raw | null;
    }
}
