/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const TestCaseHiddenGrade: core.serialization.ObjectSchema<
    serializers.TestCaseHiddenGrade.Raw,
    SeedTrace.TestCaseHiddenGrade
> = core.serialization.object({
    passed: core.serialization.boolean(),
});

export declare namespace TestCaseHiddenGrade {
    export interface Raw {
        passed: boolean;
    }
}
