/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { SubmissionId } from "./SubmissionId.js";

export const SubmissionIdNotFound: core.serialization.ObjectSchema<
    serializers.SubmissionIdNotFound.Raw,
    SeedTrace.SubmissionIdNotFound
> = core.serialization.object({
    missingSubmissionId: SubmissionId,
});

export declare namespace SubmissionIdNotFound {
    export interface Raw {
        missingSubmissionId: SubmissionId.Raw;
    }
}
