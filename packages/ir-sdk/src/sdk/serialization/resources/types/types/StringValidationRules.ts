/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const StringValidationRules: core.serialization.ObjectSchema<
    serializers.StringValidationRules.Raw,
    FernIr.StringValidationRules
> = core.serialization.objectWithoutOptionalProperties({
    format: core.serialization.string().optional(),
    pattern: core.serialization.string().optional(),
    minLength: core.serialization.number().optional(),
    maxLength: core.serialization.number().optional(),
});

export declare namespace StringValidationRules {
    interface Raw {
        format?: string | null;
        pattern?: string | null;
        minLength?: number | null;
        maxLength?: number | null;
    }
}
