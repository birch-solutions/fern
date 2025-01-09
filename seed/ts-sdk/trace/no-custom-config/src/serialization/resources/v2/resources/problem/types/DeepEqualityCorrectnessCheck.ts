/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ParameterId } from "./ParameterId";

export const DeepEqualityCorrectnessCheck: core.serialization.ObjectSchema<
    serializers.v2.DeepEqualityCorrectnessCheck.Raw,
    SeedTrace.v2.DeepEqualityCorrectnessCheck
> = core.serialization.object({
    expectedValueParameterId: ParameterId,
});

export declare namespace DeepEqualityCorrectnessCheck {
    export interface Raw {
        expectedValueParameterId: ParameterId.Raw;
    }
}
