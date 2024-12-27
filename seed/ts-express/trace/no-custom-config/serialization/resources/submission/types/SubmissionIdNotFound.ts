/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const SubmissionIdNotFound: core.serialization.ObjectSchema<
    serializers.SubmissionIdNotFound.Raw,
    SeedTrace.SubmissionIdNotFound
> = core.serialization.object({
    missingSubmissionId: core.serialization.lazy(() => serializers.SubmissionId),
});

export declare namespace SubmissionIdNotFound {
    export interface Raw {
        missingSubmissionId: serializers.SubmissionId.Raw;
    }
}
