/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const TraceResponseV2: core.serialization.ObjectSchema<
    serializers.TraceResponseV2.Raw,
    SeedTrace.TraceResponseV2
> = core.serialization.object({
    submissionId: core.serialization.lazy(async () => (await import("../../..")).SubmissionId),
    lineNumber: core.serialization.number(),
    file: core.serialization.lazyObject(async () => (await import("../../..")).TracedFile),
    returnValue: core.serialization.lazy(async () => (await import("../../..")).DebugVariableValue).optional(),
    expressionLocation: core.serialization
        .lazyObject(async () => (await import("../../..")).ExpressionLocation)
        .optional(),
    stack: core.serialization.lazyObject(async () => (await import("../../..")).StackInformation),
    stdout: core.serialization.string().optional(),
});

export declare namespace TraceResponseV2 {
    interface Raw {
        submissionId: serializers.SubmissionId.Raw;
        lineNumber: number;
        file: serializers.TracedFile.Raw;
        returnValue?: serializers.DebugVariableValue.Raw | null;
        expressionLocation?: serializers.ExpressionLocation.Raw | null;
        stack: serializers.StackInformation.Raw;
        stdout?: string | null;
    }
}
