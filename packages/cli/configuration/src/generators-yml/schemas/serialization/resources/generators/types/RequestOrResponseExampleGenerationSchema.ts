/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";

export const RequestOrResponseExampleGenerationSchema: core.serialization.ObjectSchema<
    serializers.RequestOrResponseExampleGenerationSchema.Raw,
    FernDefinition.RequestOrResponseExampleGenerationSchema
> = core.serialization.object({
    "max-depth": core.serialization.number().optional(),
});

export declare namespace RequestOrResponseExampleGenerationSchema {
    interface Raw {
        "max-depth"?: number | null;
    }
}
