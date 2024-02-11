/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const GetDefaultStarterFilesResponse: core.serialization.ObjectSchema<
    serializers.GetDefaultStarterFilesResponse.Raw,
    SeedTrace.GetDefaultStarterFilesResponse
> = core.serialization.object({
    files: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../..")).Language),
        core.serialization.lazyObject(async () => (await import("../../..")).ProblemFiles).optional()
    ),
});

export declare namespace GetDefaultStarterFilesResponse {
    interface Raw {
        files: Record<serializers.Language.Raw, serializers.ProblemFiles.Raw | null | undefined>;
    }
}
