/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const RecordedResponseNotification: core.serialization.ObjectSchema<
    serializers.RecordedResponseNotification.Raw,
    SeedTrace.RecordedResponseNotification
> = core.serialization.object({
    submissionId: core.serialization.lazy(() => serializers.SubmissionId),
    traceResponsesSize: core.serialization.number(),
    testCaseId: core.serialization.string().optional(),
});

export declare namespace RecordedResponseNotification {
    interface Raw {
        submissionId: serializers.SubmissionId.Raw;
        traceResponsesSize: number;
        testCaseId?: string | null;
    }
}
