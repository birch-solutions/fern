/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
export declare const WorkspaceStarterFilesResponseV2: core.serialization.ObjectSchema<serializers.WorkspaceStarterFilesResponseV2.Raw, SeedTrace.WorkspaceStarterFilesResponseV2>;
export declare namespace WorkspaceStarterFilesResponseV2 {
    interface Raw {
        filesByLanguage: Record<serializers.Language.Raw, serializers.v2.Files.Raw | null | undefined>;
    }
}
