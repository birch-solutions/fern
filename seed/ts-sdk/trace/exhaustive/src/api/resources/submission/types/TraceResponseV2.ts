/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export interface TraceResponseV2 {
    "submissionId": SeedTrace.SubmissionId;
    "lineNumber": number;
    "file": SeedTrace.TracedFile;
    "returnValue"?: SeedTrace.DebugVariableValue;
    "expressionLocation"?: SeedTrace.ExpressionLocation;
    "stack": SeedTrace.StackInformation;
    "stdout"?: string;
}
