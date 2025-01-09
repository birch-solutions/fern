/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../../../index";

export type FunctionSignature =
    | SeedTrace.v2.v3.FunctionSignature.Void
    | SeedTrace.v2.v3.FunctionSignature.NonVoid
    /**
     * Useful when specifying custom grading for a testcase where actualResult is defined. */
    | SeedTrace.v2.v3.FunctionSignature.VoidThatTakesActualResult;

export namespace FunctionSignature {
    export interface Void extends SeedTrace.v2.v3.VoidFunctionSignature {
        type: "void";
    }

    export interface NonVoid extends SeedTrace.v2.v3.NonVoidFunctionSignature {
        type: "nonVoid";
    }

    export interface VoidThatTakesActualResult extends SeedTrace.v2.v3.VoidFunctionSignatureThatTakesActualResult {
        type: "voidThatTakesActualResult";
    }
}
