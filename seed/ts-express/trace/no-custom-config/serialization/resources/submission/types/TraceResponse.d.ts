/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";
export declare const TraceResponse: core.serialization.ObjectSchema<serializers.TraceResponse.Raw, SeedTrace.TraceResponse>;
export declare namespace TraceResponse {
    interface Raw {
        submissionId: serializers.SubmissionId.Raw;
        lineNumber: number;
        returnValue?: serializers.DebugVariableValue.Raw | null;
        expressionLocation?: serializers.ExpressionLocation.Raw | null;
        stack: serializers.StackInformation.Raw;
        stdout?: string | null;
    }
}
