/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";

export const StringValidationSchema: core.serialization.ObjectSchema<
    serializers.StringValidationSchema.Raw,
    FernDefinition.StringValidationSchema
> = core.serialization.object({
    minLength: core.serialization.number().optional(),
    maxLength: core.serialization.number().optional(),
    pattern: core.serialization.string().optional(),
    format: core.serialization.string().optional(),
});

export declare namespace StringValidationSchema {
    export interface Raw {
        minLength?: number | null;
        maxLength?: number | null;
        pattern?: string | null;
        format?: string | null;
    }
}
