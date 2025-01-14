/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";

export const CasingOverridesSchema: core.serialization.ObjectSchema<
    serializers.CasingOverridesSchema.Raw,
    FernDefinition.CasingOverridesSchema
> = core.serialization.object({
    camel: core.serialization.string().optional(),
    snake: core.serialization.string().optional(),
    pascal: core.serialization.string().optional(),
    "screaming-snake": core.serialization.string().optional(),
});

export declare namespace CasingOverridesSchema {
    export interface Raw {
        camel?: string | null;
        snake?: string | null;
        pascal?: string | null;
        "screaming-snake"?: string | null;
    }
}
