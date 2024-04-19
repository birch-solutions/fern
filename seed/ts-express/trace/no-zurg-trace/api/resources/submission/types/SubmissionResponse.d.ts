/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedTrace from "../../../index";
export declare type SubmissionResponse = SeedTrace.SubmissionResponse.ServerInitialized | SeedTrace.SubmissionResponse.ProblemInitialized | SeedTrace.SubmissionResponse.WorkspaceInitialized | SeedTrace.SubmissionResponse.ServerErrored | SeedTrace.SubmissionResponse.CodeExecutionUpdate | SeedTrace.SubmissionResponse.Terminated;
export declare namespace SubmissionResponse {
    interface ServerInitialized {
        type: "serverInitialized";
    }
    interface ProblemInitialized {
        type: "problemInitialized";
        value: SeedTrace.ProblemId;
    }
    interface WorkspaceInitialized {
        type: "workspaceInitialized";
    }
    interface ServerErrored extends SeedTrace.ExceptionInfo {
        type: "serverErrored";
    }
    interface CodeExecutionUpdate {
        type: "codeExecutionUpdate";
        value: SeedTrace.CodeExecutionUpdate;
    }
    interface Terminated extends SeedTrace.TerminatedResponse {
        type: "terminated";
    }
}
