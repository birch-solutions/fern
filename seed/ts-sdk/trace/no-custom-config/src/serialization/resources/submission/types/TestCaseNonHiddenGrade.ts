/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const TestCaseNonHiddenGrade: core.serialization.ObjectSchema<
    serializers.TestCaseNonHiddenGrade.Raw,
    SeedTrace.TestCaseNonHiddenGrade
> = core.serialization.object({
    passed: core.serialization.boolean(),
    actualResult: core.serialization.lazy(async () => (await import("../../..")).VariableValue).optional(),
    exception: core.serialization.lazy(async () => (await import("../../..")).ExceptionV2).optional(),
    stdout: core.serialization.string(),
});

export declare namespace TestCaseNonHiddenGrade {
    interface Raw {
        passed: boolean;
        actualResult?: serializers.VariableValue.Raw | null;
        exception?: serializers.ExceptionV2.Raw | null;
        stdout: string;
    }
}
