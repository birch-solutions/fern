/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const AssertCorrectnessCheck: core.serialization.Schema<
    serializers.v2.v3.AssertCorrectnessCheck.Raw,
    SeedTrace.v2.v3.AssertCorrectnessCheck
> = core.serialization
    .union("type", {
        deepEquality: core.serialization.lazyObject(() => serializers.v2.v3.DeepEqualityCorrectnessCheck),
        custom: core.serialization.lazyObject(() => serializers.v2.v3.VoidFunctionDefinitionThatTakesActualResult),
    })
    .transform<SeedTrace.v2.v3.AssertCorrectnessCheck>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace AssertCorrectnessCheck {
    export type Raw = AssertCorrectnessCheck.DeepEquality | AssertCorrectnessCheck.Custom;

    export interface DeepEquality extends serializers.v2.v3.DeepEqualityCorrectnessCheck.Raw {
        type: "deepEquality";
    }

    export interface Custom extends serializers.v2.v3.VoidFunctionDefinitionThatTakesActualResult.Raw {
        type: "custom";
    }
}
