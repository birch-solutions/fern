/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedApi from "../../api/index";
import * as core from "../../core";

export const UploadResponse: core.serialization.ObjectSchema<serializers.UploadResponse.Raw, SeedApi.UploadResponse> =
    core.serialization.object({
        count: core.serialization.number().optional(),
    });

export declare namespace UploadResponse {
    export interface Raw {
        count?: number | null;
    }
}
