/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
export declare const GetTraceResponsesPageRequest: core.serialization.ObjectSchema<serializers.GetTraceResponsesPageRequest.Raw, SeedTrace.GetTraceResponsesPageRequest>;
export declare namespace GetTraceResponsesPageRequest {
    interface Raw {
        offset?: number | null;
    }
}
