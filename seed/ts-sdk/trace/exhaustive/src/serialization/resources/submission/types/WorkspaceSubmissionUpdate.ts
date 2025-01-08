/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { WorkspaceSubmissionUpdateInfo } from "./WorkspaceSubmissionUpdateInfo.js";

export const WorkspaceSubmissionUpdate: core.serialization.ObjectSchema<
    serializers.WorkspaceSubmissionUpdate.Raw,
    SeedTrace.WorkspaceSubmissionUpdate
> = core.serialization.object({
    updateTime: core.serialization.date(),
    updateInfo: WorkspaceSubmissionUpdateInfo,
});

export declare namespace WorkspaceSubmissionUpdate {
    export interface Raw {
        updateTime: string;
        updateInfo: WorkspaceSubmissionUpdateInfo.Raw;
    }
}
