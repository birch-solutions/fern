/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type SubmissionRequest =
    | SeedTrace.SubmissionRequest.InitializeProblemRequest
    | SeedTrace.SubmissionRequest.InitializeWorkspaceRequest
    | SeedTrace.SubmissionRequest.SubmitV2
    | SeedTrace.SubmissionRequest.WorkspaceSubmit
    | SeedTrace.SubmissionRequest.Stop;

export namespace SubmissionRequest {
    export interface InitializeProblemRequest extends SeedTrace.InitializeProblemRequest {
        type: "initializeProblemRequest";
    }

    export interface InitializeWorkspaceRequest {
        type: "initializeWorkspaceRequest";
    }

    export interface SubmitV2 extends SeedTrace.SubmitRequestV2 {
        type: "submitV2";
    }

    export interface WorkspaceSubmit extends SeedTrace.WorkspaceSubmitRequest {
        type: "workspaceSubmit";
    }

    export interface Stop extends SeedTrace.StopRequest {
        type: "stop";
    }
}
