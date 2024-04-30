/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const CodeExecutionUpdate: core.serialization.Schema<
    serializers.CodeExecutionUpdate.Raw,
    SeedTrace.CodeExecutionUpdate
> = core.serialization
    .union("type", {
        buildingExecutor: core.serialization.lazyObject(
            async () => (await import("../../..")).BuildingExecutorResponse
        ),
        running: core.serialization.lazyObject(async () => (await import("../../..")).RunningResponse),
        errored: core.serialization.lazyObject(async () => (await import("../../..")).ErroredResponse),
        stopped: core.serialization.lazyObject(async () => (await import("../../..")).StoppedResponse),
        graded: core.serialization.lazyObject(async () => (await import("../../..")).GradedResponse),
        gradedV2: core.serialization.lazyObject(async () => (await import("../../..")).GradedResponseV2),
        workspaceRan: core.serialization.lazyObject(async () => (await import("../../..")).WorkspaceRanResponse),
        recording: core.serialization.lazyObject(async () => (await import("../../..")).RecordingResponseNotification),
        recorded: core.serialization.lazyObject(async () => (await import("../../..")).RecordedResponseNotification),
        invalidRequest: core.serialization.lazyObject(async () => (await import("../../..")).InvalidRequestResponse),
        finished: core.serialization.lazyObject(async () => (await import("../../..")).FinishedResponse),
    })
    .transform<SeedTrace.CodeExecutionUpdate>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace CodeExecutionUpdate {
    type Raw =
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

    interface BuildingExecutor extends serializers.BuildingExecutorResponse.Raw {
        type: "buildingExecutor";
    }

    interface Running extends serializers.RunningResponse.Raw {
        type: "running";
    }

    interface Errored extends serializers.ErroredResponse.Raw {
        type: "errored";
    }

    interface Stopped extends serializers.StoppedResponse.Raw {
        type: "stopped";
    }

    interface Graded extends serializers.GradedResponse.Raw {
        type: "graded";
    }

    interface GradedV2 extends serializers.GradedResponseV2.Raw {
        type: "gradedV2";
    }

    interface WorkspaceRan extends serializers.WorkspaceRanResponse.Raw {
        type: "workspaceRan";
    }

    interface Recording extends serializers.RecordingResponseNotification.Raw {
        type: "recording";
    }

    interface Recorded extends serializers.RecordedResponseNotification.Raw {
        type: "recorded";
    }

    interface InvalidRequest extends serializers.InvalidRequestResponse.Raw {
        type: "invalidRequest";
    }

    interface Finished extends serializers.FinishedResponse.Raw {
        type: "finished";
    }
}
