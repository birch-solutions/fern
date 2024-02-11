/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const StderrResponse: core.serialization.ObjectSchema<serializers.StderrResponse.Raw, SeedTrace.StderrResponse> =
    core.serialization.object({
        submissionId: core.serialization.lazy(async () => (await import("../../..")).SubmissionId),
        stderr: core.serialization.string(),
    });

export declare namespace StderrResponse {
    interface Raw {
        submissionId: serializers.SubmissionId.Raw;
        stderr: string;
    }
}
