/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const BooleanSchema: core.serialization.ObjectSchema<
    serializers.BooleanSchema.Raw,
    FernOpenapiIr.BooleanSchema
> = core.serialization.objectWithoutOptionalProperties({
    default: core.serialization.boolean().optional(),
});

export declare namespace BooleanSchema {
    interface Raw {
        default?: boolean | null;
    }
}
