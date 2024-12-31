/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { WorkspaceSubmissionStatus } from "./WorkspaceSubmissionStatus";

export const WorkspaceSubmissionState: core.serialization.ObjectSchema<
    serializers.WorkspaceSubmissionState.Raw,
    SeedTrace.WorkspaceSubmissionState
> = core.serialization.object({
    status: WorkspaceSubmissionStatus,
});

export declare namespace WorkspaceSubmissionState {
    export interface Raw {
        status: WorkspaceSubmissionStatus.Raw;
    }
}
