/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";
export declare const GetDefaultStarterFilesResponse: core.serialization.ObjectSchema<serializers.GetDefaultStarterFilesResponse.Raw, SeedTrace.GetDefaultStarterFilesResponse>;
export declare namespace GetDefaultStarterFilesResponse {
    interface Raw {
        files: Record<serializers.Language.Raw, serializers.ProblemFiles.Raw | null | undefined>;
    }
}
