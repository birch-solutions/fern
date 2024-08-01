/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { SubmissionId } from "./SubmissionId";
import { ErrorInfo } from "./ErrorInfo";

export const ErroredResponse: core.serialization.ObjectSchema<serializers.ErroredResponse.Raw, SeedTrace.ErroredResponse> = core.serialization.object({
        "submissionId": SubmissionId,
        "errorInfo": ErrorInfo
    });

export declare namespace ErroredResponse {
    interface Raw {
        "submissionId": SubmissionId.Raw;
        "errorInfo": ErrorInfo.Raw;
    }
}
