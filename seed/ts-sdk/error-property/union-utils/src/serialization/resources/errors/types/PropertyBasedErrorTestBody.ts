/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedErrorProperty from "../../../../api/index";
import * as core from "../../../../core";

export const PropertyBasedErrorTestBody: core.serialization.ObjectSchema<
    serializers.PropertyBasedErrorTestBody.Raw,
    SeedErrorProperty.PropertyBasedErrorTestBody
> = core.serialization.object({
    message: core.serialization.string(),
});

export declare namespace PropertyBasedErrorTestBody {
    interface Raw {
        message: string;
    }
}
