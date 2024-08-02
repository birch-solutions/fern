/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { SubmissionRequest } from "./SubmissionRequest";
import { InvalidRequestCause } from "./InvalidRequestCause";

export const InvalidRequestResponse: core.serialization.ObjectSchema<serializers.InvalidRequestResponse.Raw, SeedTrace.InvalidRequestResponse> = core.serialization.object({
        "request": SubmissionRequest,
        "cause": InvalidRequestCause
    });

export declare namespace InvalidRequestResponse {
    interface Raw {
        "request": SubmissionRequest.Raw;
        "cause": InvalidRequestCause.Raw;
    }
}
