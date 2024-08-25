/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const GetBasicSolutionFileResponse: core.serialization.ObjectSchema<
    serializers.v2.GetBasicSolutionFileResponse.Raw,
    SeedTrace.v2.GetBasicSolutionFileResponse
> = core.serialization.object({
    solutionFileByLanguage: core.serialization.record(
        core.serialization.lazy(() => serializers.Language),
        core.serialization.lazyObject(() => serializers.v2.FileInfoV2).optional()
    ),
});

export declare namespace GetBasicSolutionFileResponse {
    interface Raw {
        solutionFileByLanguage: Record<serializers.Language.Raw, serializers.v2.FileInfoV2.Raw | null | undefined>;
    }
}
