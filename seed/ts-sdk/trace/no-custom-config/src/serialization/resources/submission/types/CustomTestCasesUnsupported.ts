/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { ProblemId } from "../../commons/types/ProblemId";
import { SubmissionId } from "./SubmissionId";

export const CustomTestCasesUnsupported: core.serialization.ObjectSchema<
    serializers.CustomTestCasesUnsupported.Raw,
    SeedTrace.CustomTestCasesUnsupported
> = core.serialization.object({
    problemId: ProblemId,
    submissionId: SubmissionId,
});

export declare namespace CustomTestCasesUnsupported {
    export interface Raw {
        problemId: ProblemId.Raw;
        submissionId: SubmissionId.Raw;
    }
}
