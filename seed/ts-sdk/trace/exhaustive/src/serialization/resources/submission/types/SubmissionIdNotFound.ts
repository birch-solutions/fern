/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { SubmissionId } from "./SubmissionId";

export const SubmissionIdNotFound: core.serialization.ObjectSchema<
    serializers.SubmissionIdNotFound.Raw,
    SeedTrace.SubmissionIdNotFound
> = core.serialization.object({
    missingSubmissionId: SubmissionId,
});

export declare namespace SubmissionIdNotFound {
    interface Raw {
        missingSubmissionId: SubmissionId.Raw;
    }
}
