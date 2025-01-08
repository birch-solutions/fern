/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index.js";
import * as SeedTrace from "../../../../../../../../api/index.js";
import * as core from "../../../../../../../../core/index.js";
import { DeepEqualityCorrectnessCheck } from "./DeepEqualityCorrectnessCheck.js";
import { VoidFunctionDefinitionThatTakesActualResult } from "./VoidFunctionDefinitionThatTakesActualResult.js";

export const AssertCorrectnessCheck: core.serialization.Schema<
    serializers.v2.v3.AssertCorrectnessCheck.Raw,
    SeedTrace.v2.v3.AssertCorrectnessCheck
> = core.serialization
    .union("type", {
        deepEquality: DeepEqualityCorrectnessCheck,
        custom: VoidFunctionDefinitionThatTakesActualResult,
    })
    .transform<SeedTrace.v2.v3.AssertCorrectnessCheck>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace AssertCorrectnessCheck {
    export type Raw = AssertCorrectnessCheck.DeepEquality | AssertCorrectnessCheck.Custom;

    export interface DeepEquality extends DeepEqualityCorrectnessCheck.Raw {
        type: "deepEquality";
    }

    export interface Custom extends VoidFunctionDefinitionThatTakesActualResult.Raw {
        type: "custom";
    }
}
