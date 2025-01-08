/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { SubmissionId } from "./SubmissionId.js";

export const StderrResponse: core.serialization.ObjectSchema<serializers.StderrResponse.Raw, SeedTrace.StderrResponse> =
    core.serialization.object({
        submissionId: SubmissionId,
        stderr: core.serialization.string(),
    });

export declare namespace StderrResponse {
    export interface Raw {
        submissionId: SubmissionId.Raw;
        stderr: string;
    }
}
