/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedExhaustive from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const DoubleOptional: core.serialization.ObjectSchema<
    serializers.types.DoubleOptional.Raw,
    SeedExhaustive.types.DoubleOptional
> = core.serialization.object({
    optionalAlias: core.serialization.lazy(async () => (await import("../../../../..")).types.OptionalAlias).optional(),
});

export declare namespace DoubleOptional {
    interface Raw {
        optionalAlias?: (serializers.types.OptionalAlias.Raw | undefined) | null;
    }
}
