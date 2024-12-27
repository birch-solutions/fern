/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TestCaseExpects: core.serialization.ObjectSchema<
    serializers.v2.TestCaseExpects.Raw,
    SeedTrace.v2.TestCaseExpects
> = core.serialization.object({
    expectedStdout: core.serialization.string().optional(),
});

export declare namespace TestCaseExpects {
    export interface Raw {
        expectedStdout?: string | null;
    }
}
