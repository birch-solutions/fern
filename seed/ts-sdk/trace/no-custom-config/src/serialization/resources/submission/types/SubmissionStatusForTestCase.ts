/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { TestCaseResultWithStdout } from "./TestCaseResultWithStdout";
import { TestCaseGrade } from "./TestCaseGrade";
import { TracedTestCase } from "./TracedTestCase";

export const SubmissionStatusForTestCase: core.serialization.Schema<
    serializers.SubmissionStatusForTestCase.Raw,
    SeedTrace.SubmissionStatusForTestCase
> = core.serialization
    .union("type", {
        graded: TestCaseResultWithStdout,
        gradedV2: core.serialization.object({
            value: TestCaseGrade,
        }),
        traced: TracedTestCase,
    })
    .transform<SeedTrace.SubmissionStatusForTestCase>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace SubmissionStatusForTestCase {
    type Raw =
        | SubmissionStatusForTestCase.Graded
        | SubmissionStatusForTestCase.GradedV2
        | SubmissionStatusForTestCase.Traced;

    interface Graded extends TestCaseResultWithStdout.Raw {
        type: "graded";
    }

    interface GradedV2 {
        type: "gradedV2";
        value: TestCaseGrade.Raw;
    }

    interface Traced extends TracedTestCase.Raw {
        type: "traced";
    }
}
