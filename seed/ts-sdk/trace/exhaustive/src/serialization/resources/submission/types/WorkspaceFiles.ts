/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { FileInfo } from "../../commons/types/FileInfo";

export const WorkspaceFiles: core.serialization.ObjectSchema<serializers.WorkspaceFiles.Raw, SeedTrace.WorkspaceFiles> = core.serialization.object({
        "mainFile": FileInfo,
        "readOnlyFiles": core.serialization.list(FileInfo)
    });

export declare namespace WorkspaceFiles {
    interface Raw {
        "mainFile": FileInfo.Raw;
        "readOnlyFiles": FileInfo.Raw[];
    }
}
