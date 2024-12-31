/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const StopRequest: core.serialization.ObjectSchema<serializers.StopRequest.Raw, SeedTrace.StopRequest> =
    core.serialization.object({
        submissionId: core.serialization.lazy(() => serializers.SubmissionId),
    });

export declare namespace StopRequest {
    export interface Raw {
        submissionId: serializers.SubmissionId.Raw;
    }
}
