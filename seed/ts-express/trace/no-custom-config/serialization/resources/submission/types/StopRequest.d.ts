/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";
export declare const StopRequest: core.serialization.ObjectSchema<serializers.StopRequest.Raw, SeedTrace.StopRequest>;
export declare namespace StopRequest {
    interface Raw {
        submissionId: serializers.SubmissionId.Raw;
    }
}
