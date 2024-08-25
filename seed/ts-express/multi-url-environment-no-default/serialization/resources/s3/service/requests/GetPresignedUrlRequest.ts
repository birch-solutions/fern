/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as SeedMultiUrlEnvironmentNoDefault from "../../../../../api/index";
import * as core from "../../../../../core";

export const GetPresignedUrlRequest: core.serialization.Schema<
    serializers.GetPresignedUrlRequest.Raw,
    SeedMultiUrlEnvironmentNoDefault.GetPresignedUrlRequest
> = core.serialization.object({
    s3Key: core.serialization.string(),
});

export declare namespace GetPresignedUrlRequest {
    interface Raw {
        s3Key: string;
    }
}
