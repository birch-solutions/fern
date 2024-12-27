/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type CodeExecutionUpdate =
    /**
     * Statuses if an executor for the session isn't ready (Before RunningResponse). */
    | SeedTrace.CodeExecutionUpdate.BuildingExecutor
    /**
     * Sent once a test submission is executing. */
    | SeedTrace.CodeExecutionUpdate.Running
    /**
     * Sent if a submission cannot be run (i.e. Compile Error). */
    | SeedTrace.CodeExecutionUpdate.Errored
    /**
     * Sent if a submission is stopped. */
    | SeedTrace.CodeExecutionUpdate.Stopped
    /**
     * Graded testcases without trace information. */
    | SeedTrace.CodeExecutionUpdate.Graded
    /**
     * Graded submission for v2 problems. */
    | SeedTrace.CodeExecutionUpdate.GradedV2
    /**
     * Workspace run without trace information. */
    | SeedTrace.CodeExecutionUpdate.WorkspaceRan
    /**
     * Gives progress about what is being recorded. */
    | SeedTrace.CodeExecutionUpdate.Recording
    /**
     * Graded testcases with trace information. */
    | SeedTrace.CodeExecutionUpdate.Recorded
    /**
     * Sent if an invalid request is sent for a submission. */
    | SeedTrace.CodeExecutionUpdate.InvalidRequest
    /**
     * Sent once a submission is graded and fully recorded. */
    | SeedTrace.CodeExecutionUpdate.Finished
    | SeedTrace.CodeExecutionUpdate._Unknown;

export namespace CodeExecutionUpdate {
    export interface BuildingExecutor extends SeedTrace.BuildingExecutorResponse, _Utils {
        type: "buildingExecutor";
    }

    export interface Running extends SeedTrace.RunningResponse, _Utils {
        type: "running";
    }

    export interface Errored extends SeedTrace.ErroredResponse, _Utils {
        type: "errored";
    }

    export interface Stopped extends SeedTrace.StoppedResponse, _Utils {
        type: "stopped";
    }

    export interface Graded extends SeedTrace.GradedResponse, _Utils {
        type: "graded";
    }

    export interface GradedV2 extends SeedTrace.GradedResponseV2, _Utils {
        type: "gradedV2";
    }

    export interface WorkspaceRan extends SeedTrace.WorkspaceRanResponse, _Utils {
        type: "workspaceRan";
    }

    export interface Recording extends SeedTrace.RecordingResponseNotification, _Utils {
        type: "recording";
    }

    export interface Recorded extends SeedTrace.RecordedResponseNotification, _Utils {
        type: "recorded";
    }

    export interface InvalidRequest extends SeedTrace.InvalidRequestResponse, _Utils {
        type: "invalidRequest";
    }

    export interface Finished extends SeedTrace.FinishedResponse, _Utils {
        type: "finished";
    }

    export interface _Unknown extends _Utils {
        type: void;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        buildingExecutor: (value: SeedTrace.BuildingExecutorResponse) => _Result;
        running: (value: SeedTrace.RunningResponse) => _Result;
        errored: (value: SeedTrace.ErroredResponse) => _Result;
        stopped: (value: SeedTrace.StoppedResponse) => _Result;
        graded: (value: SeedTrace.GradedResponse) => _Result;
        gradedV2: (value: SeedTrace.GradedResponseV2) => _Result;
        workspaceRan: (value: SeedTrace.WorkspaceRanResponse) => _Result;
        recording: (value: SeedTrace.RecordingResponseNotification) => _Result;
        recorded: (value: SeedTrace.RecordedResponseNotification) => _Result;
        invalidRequest: (value: SeedTrace.InvalidRequestResponse) => _Result;
        finished: (value: SeedTrace.FinishedResponse) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const CodeExecutionUpdate = {
    buildingExecutor: (value: SeedTrace.BuildingExecutorResponse): SeedTrace.CodeExecutionUpdate.BuildingExecutor => {
        return {
            ...value,
            type: "buildingExecutor",
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate.BuildingExecutor,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    running: (value: SeedTrace.RunningResponse): SeedTrace.CodeExecutionUpdate.Running => {
        return {
            ...value,
            type: "running",
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate.Running,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    errored: (value: SeedTrace.ErroredResponse): SeedTrace.CodeExecutionUpdate.Errored => {
        return {
            ...value,
            type: "errored",
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate.Errored,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    stopped: (value: SeedTrace.StoppedResponse): SeedTrace.CodeExecutionUpdate.Stopped => {
        return {
            ...value,
            type: "stopped",
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate.Stopped,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    graded: (value: SeedTrace.GradedResponse): SeedTrace.CodeExecutionUpdate.Graded => {
        return {
            ...value,
            type: "graded",
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate.Graded,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    gradedV2: (value: SeedTrace.GradedResponseV2): SeedTrace.CodeExecutionUpdate.GradedV2 => {
        return {
            ...value,
            type: "gradedV2",
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate.GradedV2,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    workspaceRan: (value: SeedTrace.WorkspaceRanResponse): SeedTrace.CodeExecutionUpdate.WorkspaceRan => {
        return {
            ...value,
            type: "workspaceRan",
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate.WorkspaceRan,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    recording: (value: SeedTrace.RecordingResponseNotification): SeedTrace.CodeExecutionUpdate.Recording => {
        return {
            ...value,
            type: "recording",
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate.Recording,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    recorded: (value: SeedTrace.RecordedResponseNotification): SeedTrace.CodeExecutionUpdate.Recorded => {
        return {
            ...value,
            type: "recorded",
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate.Recorded,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    invalidRequest: (value: SeedTrace.InvalidRequestResponse): SeedTrace.CodeExecutionUpdate.InvalidRequest => {
        return {
            ...value,
            type: "invalidRequest",
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate.InvalidRequest,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    finished: (value: SeedTrace.FinishedResponse): SeedTrace.CodeExecutionUpdate.Finished => {
        return {
            ...value,
            type: "finished",
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate.Finished,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.CodeExecutionUpdate._Unknown => {
        return {
            ...(value as any),
            _visit <_Result>(
                this: SeedTrace.CodeExecutionUpdate._Unknown,
                visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
            ) {
                return SeedTrace.CodeExecutionUpdate._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.CodeExecutionUpdate,
        visitor: SeedTrace.CodeExecutionUpdate._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "buildingExecutor":
                return visitor.buildingExecutor(value);
            case "running":
                return visitor.running(value);
            case "errored":
                return visitor.errored(value);
            case "stopped":
                return visitor.stopped(value);
            case "graded":
                return visitor.graded(value);
            case "gradedV2":
                return visitor.gradedV2(value);
            case "workspaceRan":
                return visitor.workspaceRan(value);
            case "recording":
                return visitor.recording(value);
            case "recorded":
                return visitor.recorded(value);
            case "invalidRequest":
                return visitor.invalidRequest(value);
            case "finished":
                return visitor.finished(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
