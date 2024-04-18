/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { TestSubmissionState } from "./TestSubmissionState";
import { WorkspaceSubmissionState } from "./WorkspaceSubmissionState";

export const SubmissionTypeState: core.serialization.Schema<
    serializers.SubmissionTypeState.Raw,
    SeedTrace.SubmissionTypeState
> = core.serialization
    .union("type", {
        test: TestSubmissionState,
        workspace: WorkspaceSubmissionState,
    })
    .transform<SeedTrace.SubmissionTypeState>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace SubmissionTypeState {
    type Raw = SubmissionTypeState.Test | SubmissionTypeState.Workspace;

    interface Test extends TestSubmissionState.Raw {
        type: "test";
    }

    interface Workspace extends WorkspaceSubmissionState.Raw {
        type: "workspace";
    }
}
