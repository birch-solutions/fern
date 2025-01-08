/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { BuildingExecutorResponse } from "./BuildingExecutorResponse.js";
import { RunningResponse } from "./RunningResponse.js";
import { ErroredResponse } from "./ErroredResponse.js";
import { StoppedResponse } from "./StoppedResponse.js";
import { GradedResponse } from "./GradedResponse.js";
import { GradedResponseV2 } from "./GradedResponseV2.js";
import { WorkspaceRanResponse } from "./WorkspaceRanResponse.js";
import { RecordingResponseNotification } from "./RecordingResponseNotification.js";
import { RecordedResponseNotification } from "./RecordedResponseNotification.js";
import { InvalidRequestResponse } from "./InvalidRequestResponse.js";
import { FinishedResponse } from "./FinishedResponse.js";

export const CodeExecutionUpdate: core.serialization.Schema<
    serializers.CodeExecutionUpdate.Raw,
    SeedTrace.CodeExecutionUpdate
> = core.serialization
    .union("type", {
        buildingExecutor: BuildingExecutorResponse,
        running: RunningResponse,
        errored: ErroredResponse,
        stopped: StoppedResponse,
        graded: GradedResponse,
        gradedV2: GradedResponseV2,
        workspaceRan: WorkspaceRanResponse,
        recording: RecordingResponseNotification,
        recorded: RecordedResponseNotification,
        invalidRequest: InvalidRequestResponse,
        finished: FinishedResponse,
    })
    .transform<SeedTrace.CodeExecutionUpdate>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace CodeExecutionUpdate {
    export type Raw =
        | CodeExecutionUpdate.BuildingExecutor
        | CodeExecutionUpdate.Running
        | CodeExecutionUpdate.Errored
        | CodeExecutionUpdate.Stopped
        | CodeExecutionUpdate.Graded
        | CodeExecutionUpdate.GradedV2
        | CodeExecutionUpdate.WorkspaceRan
        | CodeExecutionUpdate.Recording
        | CodeExecutionUpdate.Recorded
        | CodeExecutionUpdate.InvalidRequest
        | CodeExecutionUpdate.Finished;

    export interface BuildingExecutor extends BuildingExecutorResponse.Raw {
        type: "buildingExecutor";
    }

    export interface Running extends RunningResponse.Raw {
        type: "running";
    }

    export interface Errored extends ErroredResponse.Raw {
        type: "errored";
    }

    export interface Stopped extends StoppedResponse.Raw {
        type: "stopped";
    }

    export interface Graded extends GradedResponse.Raw {
        type: "graded";
    }

    export interface GradedV2 extends GradedResponseV2.Raw {
        type: "gradedV2";
    }

    export interface WorkspaceRan extends WorkspaceRanResponse.Raw {
        type: "workspaceRan";
    }

    export interface Recording extends RecordingResponseNotification.Raw {
        type: "recording";
    }

    export interface Recorded extends RecordedResponseNotification.Raw {
        type: "recorded";
    }

    export interface InvalidRequest extends InvalidRequestResponse.Raw {
        type: "invalidRequest";
    }

    export interface Finished extends FinishedResponse.Raw {
        type: "finished";
    }
}
