/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const WorkspaceFiles: core.serialization.ObjectSchema<serializers.WorkspaceFiles.Raw, SeedTrace.WorkspaceFiles> =
    core.serialization.object({
        mainFile: core.serialization.lazyObject(async () => (await import("../../..")).FileInfo),
        readOnlyFiles: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).FileInfo)
        ),
    });

export declare namespace WorkspaceFiles {
    interface Raw {
        mainFile: serializers.FileInfo.Raw;
        readOnlyFiles: serializers.FileInfo.Raw[];
    }
}
