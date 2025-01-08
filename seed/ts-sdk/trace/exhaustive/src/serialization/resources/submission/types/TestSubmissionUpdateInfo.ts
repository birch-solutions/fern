/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { RunningSubmissionState } from "./RunningSubmissionState.js";
import { ErrorInfo } from "./ErrorInfo.js";
import { GradedTestCaseUpdate } from "./GradedTestCaseUpdate.js";
import { RecordedTestCaseUpdate } from "./RecordedTestCaseUpdate.js";

export const TestSubmissionUpdateInfo: core.serialization.Schema<
    serializers.TestSubmissionUpdateInfo.Raw,
    SeedTrace.TestSubmissionUpdateInfo
> = core.serialization
    .union("type", {
        running: core.serialization.object({
            value: RunningSubmissionState,
        }),
        stopped: core.serialization.object({}),
        errored: core.serialization.object({
            value: ErrorInfo,
        }),
        gradedTestCase: GradedTestCaseUpdate,
        recordedTestCase: RecordedTestCaseUpdate,
        finished: core.serialization.object({}),
    })
    .transform<SeedTrace.TestSubmissionUpdateInfo>({
        transform: (value) => {
            switch (value.type) {
                case "running":
                    return SeedTrace.TestSubmissionUpdateInfo.running(value.value);
                case "stopped":
                    return SeedTrace.TestSubmissionUpdateInfo.stopped();
                case "errored":
                    return SeedTrace.TestSubmissionUpdateInfo.errored(value.value);
                case "gradedTestCase":
                    return SeedTrace.TestSubmissionUpdateInfo.gradedTestCase(value);
                case "recordedTestCase":
                    return SeedTrace.TestSubmissionUpdateInfo.recordedTestCase(value);
                case "finished":
                    return SeedTrace.TestSubmissionUpdateInfo.finished();
                default:
                    return SeedTrace.TestSubmissionUpdateInfo._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace TestSubmissionUpdateInfo {
    export type Raw =
        | TestSubmissionUpdateInfo.Running
        | TestSubmissionUpdateInfo.Stopped
        | TestSubmissionUpdateInfo.Errored
        | TestSubmissionUpdateInfo.GradedTestCase
        | TestSubmissionUpdateInfo.RecordedTestCase
        | TestSubmissionUpdateInfo.Finished;

    export interface Running {
        type: "running";
        value: RunningSubmissionState.Raw;
    }

    export interface Stopped {
        type: "stopped";
    }

    export interface Errored {
        type: "errored";
        value: ErrorInfo.Raw;
    }

    export interface GradedTestCase extends GradedTestCaseUpdate.Raw {
        type: "gradedTestCase";
    }

    export interface RecordedTestCase extends RecordedTestCaseUpdate.Raw {
        type: "recordedTestCase";
    }

    export interface Finished {
        type: "finished";
    }
}
