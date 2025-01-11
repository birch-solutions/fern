/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type TestCaseGrade = SeedTrace.TestCaseGrade.Hidden | SeedTrace.TestCaseGrade.NonHidden;

export namespace TestCaseGrade {
    export interface Hidden extends SeedTrace.TestCaseHiddenGrade {
        type: "hidden";
    }

    export interface NonHidden extends SeedTrace.TestCaseNonHiddenGrade {
        type: "nonHidden";
    }
}
