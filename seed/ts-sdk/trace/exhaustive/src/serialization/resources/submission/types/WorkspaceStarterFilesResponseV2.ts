/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const WorkspaceStarterFilesResponseV2: core.serialization.ObjectSchema<
    serializers.WorkspaceStarterFilesResponseV2.Raw,
    SeedTrace.WorkspaceStarterFilesResponseV2
> = core.serialization.object({
    filesByLanguage: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../..")).Language),
        core.serialization.lazyObject(async () => (await import("../../..")).v2.Files).optional()
    ),
});

export declare namespace WorkspaceStarterFilesResponseV2 {
    interface Raw {
        filesByLanguage: Record<serializers.Language.Raw, serializers.v2.Files.Raw | null | undefined>;
    }
}
