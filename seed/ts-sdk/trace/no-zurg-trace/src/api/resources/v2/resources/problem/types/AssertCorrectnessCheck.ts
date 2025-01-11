/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../index";

export type AssertCorrectnessCheck =
    | SeedTrace.v2.AssertCorrectnessCheck.DeepEquality
    | SeedTrace.v2.AssertCorrectnessCheck.Custom;

export namespace AssertCorrectnessCheck {
    export interface DeepEquality extends SeedTrace.v2.DeepEqualityCorrectnessCheck {
        type: "deepEquality";
    }

    export interface Custom extends SeedTrace.v2.VoidFunctionDefinitionThatTakesActualResult {
        type: "custom";
    }
}
