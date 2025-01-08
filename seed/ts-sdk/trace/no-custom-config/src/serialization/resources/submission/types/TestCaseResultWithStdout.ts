/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { TestCaseResult } from "./TestCaseResult.js";

export const TestCaseResultWithStdout: core.serialization.ObjectSchema<
    serializers.TestCaseResultWithStdout.Raw,
    SeedTrace.TestCaseResultWithStdout
> = core.serialization.object({
    result: TestCaseResult,
    stdout: core.serialization.string(),
});

export declare namespace TestCaseResultWithStdout {
    export interface Raw {
        result: TestCaseResult.Raw;
        stdout: string;
    }
}
