/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type TestSubmissionUpdateInfo =
    | SeedTrace.TestSubmissionUpdateInfo.Running
    | SeedTrace.TestSubmissionUpdateInfo.Stopped
    | SeedTrace.TestSubmissionUpdateInfo.Errored
    | SeedTrace.TestSubmissionUpdateInfo.GradedTestCase
    | SeedTrace.TestSubmissionUpdateInfo.RecordedTestCase
    | SeedTrace.TestSubmissionUpdateInfo.Finished;

export namespace TestSubmissionUpdateInfo {
    export interface Running {
        type: "running";
        value: SeedTrace.RunningSubmissionState;
    }

    export interface Stopped {
        type: "stopped";
    }

    export interface Errored {
        type: "errored";
        value: SeedTrace.ErrorInfo;
    }

    export interface GradedTestCase extends SeedTrace.GradedTestCaseUpdate {
        type: "gradedTestCase";
    }

    export interface RecordedTestCase extends SeedTrace.RecordedTestCaseUpdate {
        type: "recordedTestCase";
    }

    export interface Finished {
        type: "finished";
    }
}
