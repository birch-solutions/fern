/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { WorkspaceSubmissionUpdate } from "./WorkspaceSubmissionUpdate";

export const WorkspaceSubmissionStatusV2: core.serialization.ObjectSchema<
    serializers.WorkspaceSubmissionStatusV2.Raw,
    SeedTrace.WorkspaceSubmissionStatusV2
> = core.serialization.object({
    updates: core.serialization.list(WorkspaceSubmissionUpdate),
});

export declare namespace WorkspaceSubmissionStatusV2 {
    interface Raw {
        updates: WorkspaceSubmissionUpdate.Raw[];
    }
}
