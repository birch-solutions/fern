/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index.js";

export interface GetSubmissionStateResponse {
    timeSubmitted?: string;
    submission: string;
    language: SeedTrace.Language;
    submissionTypeState: SeedTrace.SubmissionTypeState;
}
