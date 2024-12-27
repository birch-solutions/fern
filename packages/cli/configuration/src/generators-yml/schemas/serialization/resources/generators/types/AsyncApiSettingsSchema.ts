/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";

export const AsyncApiSettingsSchema: core.serialization.ObjectSchema<
    serializers.AsyncApiSettingsSchema.Raw,
    FernDefinition.AsyncApiSettingsSchema
> = core.serialization.object({
    "title-as-schema-name": core.serialization.boolean().optional(),
    "optional-additional-properties": core.serialization.boolean().optional(),
    "coerce-enums-to-literals": core.serialization.boolean().optional(),
});

export declare namespace AsyncApiSettingsSchema {
    export interface Raw {
        "title-as-schema-name"?: boolean | null;
        "optional-additional-properties"?: boolean | null;
        "coerce-enums-to-literals"?: boolean | null;
    }
}
