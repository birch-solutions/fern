/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { ErrorInfo } from "./ErrorInfo.js";
import { RunningSubmissionState } from "./RunningSubmissionState.js";
import { SubmissionStatusForTestCase } from "./SubmissionStatusForTestCase.js";

export const TestSubmissionStatus: core.serialization.Schema<
    serializers.TestSubmissionStatus.Raw,
    SeedTrace.TestSubmissionStatus
> = core.serialization
    .union("type", {
        stopped: core.serialization.object({}),
        errored: core.serialization.object({
            value: ErrorInfo,
        }),
        running: core.serialization.object({
            value: RunningSubmissionState,
        }),
        testCaseIdToState: core.serialization.object({
            value: core.serialization.record(core.serialization.string(), SubmissionStatusForTestCase),
        }),
    })
    .transform<SeedTrace.TestSubmissionStatus>({
        transform: (value) => {
            switch (value.type) {
                case "stopped":
                    return SeedTrace.TestSubmissionStatus.stopped();
                case "errored":
                    return SeedTrace.TestSubmissionStatus.errored(value.value);
                case "running":
                    return SeedTrace.TestSubmissionStatus.running(value.value);
                case "testCaseIdToState":
                    return SeedTrace.TestSubmissionStatus.testCaseIdToState(value.value);
                default:
                    return SeedTrace.TestSubmissionStatus._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace TestSubmissionStatus {
    export type Raw =
        | TestSubmissionStatus.Stopped
        | TestSubmissionStatus.Errored
        | TestSubmissionStatus.Running
        | TestSubmissionStatus.TestCaseIdToState;

    export interface Stopped {
        type: "stopped";
    }

    export interface Errored {
        type: "errored";
        value: ErrorInfo.Raw;
    }

    export interface Running {
        type: "running";
        value: RunningSubmissionState.Raw;
    }

    export interface TestCaseIdToState {
        type: "testCaseIdToState";
        value: Record<string, SubmissionStatusForTestCase.Raw>;
    }
}
