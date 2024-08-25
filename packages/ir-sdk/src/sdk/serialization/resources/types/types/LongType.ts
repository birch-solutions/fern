/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const LongType: core.serialization.ObjectSchema<serializers.LongType.Raw, FernIr.LongType> =
    core.serialization.objectWithoutOptionalProperties({
        default: core.serialization.number().optional(),
    });

export declare namespace LongType {
    interface Raw {
        default?: number | null;
    }
}
