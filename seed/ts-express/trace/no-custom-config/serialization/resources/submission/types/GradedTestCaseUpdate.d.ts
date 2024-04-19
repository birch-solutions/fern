/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
export declare const GradedTestCaseUpdate: core.serialization.ObjectSchema<serializers.GradedTestCaseUpdate.Raw, SeedTrace.GradedTestCaseUpdate>;
export declare namespace GradedTestCaseUpdate {
    interface Raw {
        testCaseId: serializers.v2.TestCaseId.Raw;
        grade: serializers.TestCaseGrade.Raw;
    }
}
