/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { ProblemId } from "../../commons/types/ProblemId";
import { TestCase } from "../../commons/types/TestCase";
import { TestSubmissionStatus } from "./TestSubmissionStatus";

export const TestSubmissionState: core.serialization.ObjectSchema<
    serializers.TestSubmissionState.Raw,
    SeedTrace.TestSubmissionState
> = core.serialization.object({
    problemId: ProblemId,
    defaultTestCases: core.serialization.list(TestCase),
    customTestCases: core.serialization.list(TestCase),
    status: TestSubmissionStatus,
});

export declare namespace TestSubmissionState {
    interface Raw {
        problemId: ProblemId.Raw;
        defaultTestCases: TestCase.Raw[];
        customTestCases: TestCase.Raw[];
        status: TestSubmissionStatus.Raw;
    }
}
