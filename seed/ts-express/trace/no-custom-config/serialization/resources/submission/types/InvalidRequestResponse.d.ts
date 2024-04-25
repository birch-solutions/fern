/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
export declare const InvalidRequestResponse: core.serialization.ObjectSchema<serializers.InvalidRequestResponse.Raw, SeedTrace.InvalidRequestResponse>;
export declare namespace InvalidRequestResponse {
    interface Raw {
        request: serializers.SubmissionRequest.Raw;
        cause: serializers.InvalidRequestCause.Raw;
    }
}
