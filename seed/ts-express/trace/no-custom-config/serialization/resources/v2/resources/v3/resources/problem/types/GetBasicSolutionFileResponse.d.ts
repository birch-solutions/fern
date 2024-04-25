/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
export declare const GetBasicSolutionFileResponse: core.serialization.ObjectSchema<serializers.v2.v3.GetBasicSolutionFileResponse.Raw, SeedTrace.v2.v3.GetBasicSolutionFileResponse>;
export declare namespace GetBasicSolutionFileResponse {
    interface Raw {
        solutionFileByLanguage: Record<serializers.Language.Raw, serializers.v2.v3.FileInfoV2.Raw | null | undefined>;
    }
}
