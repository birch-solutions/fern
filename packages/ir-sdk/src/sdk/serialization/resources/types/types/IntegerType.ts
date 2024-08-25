/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { IntegerValidationRules } from "./IntegerValidationRules";

export const IntegerType: core.serialization.ObjectSchema<serializers.IntegerType.Raw, FernIr.IntegerType> =
    core.serialization.objectWithoutOptionalProperties({
        default: core.serialization.number().optional(),
        validation: IntegerValidationRules.optional(),
    });

export declare namespace IntegerType {
    interface Raw {
        default?: number | null;
        validation?: IntegerValidationRules.Raw | null;
    }
}
