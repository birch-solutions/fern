/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { CasingOverrides } from "./CasingOverrides";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithAvailability } from "../../commons/types/WithAvailability";

export const EnumValue: core.serialization.ObjectSchema<serializers.EnumValue.Raw, FernOpenapiIr.EnumValue> =
    core.serialization
        .objectWithoutOptionalProperties({
            nameOverride: core.serialization.string().optional(),
            generatedName: core.serialization.string(),
            value: core.serialization.string(),
            casing: CasingOverrides.optional()
        })
        .extend(WithDescription)
        .extend(WithAvailability);

export declare namespace EnumValue {
    interface Raw extends WithDescription.Raw, WithAvailability.Raw {
        nameOverride?: string | null;
        generatedName: string;
        value: string;
        casing?: CasingOverrides.Raw | null;
    }
}
