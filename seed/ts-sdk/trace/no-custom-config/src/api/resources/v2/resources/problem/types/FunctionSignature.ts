/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../index.js";

export type FunctionSignature =
    | SeedTrace.v2.FunctionSignature.Void
    | SeedTrace.v2.FunctionSignature.NonVoid
    /**
     * Useful when specifying custom grading for a testcase where actualResult is defined. */
    | SeedTrace.v2.FunctionSignature.VoidThatTakesActualResult;

export namespace FunctionSignature {
    export interface Void extends SeedTrace.v2.VoidFunctionSignature {
        type: "void";
    }

    export interface NonVoid extends SeedTrace.v2.NonVoidFunctionSignature {
        type: "nonVoid";
    }

    export interface VoidThatTakesActualResult extends SeedTrace.v2.VoidFunctionSignatureThatTakesActualResult {
        type: "voidThatTakesActualResult";
    }
}
