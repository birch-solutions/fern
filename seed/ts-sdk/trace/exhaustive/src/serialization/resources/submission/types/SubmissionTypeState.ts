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
        transform: (value) => {
            switch (value.type) {
                case "test":
                    return SeedTrace.SubmissionTypeState.test(value);
                case "workspace":
                    return SeedTrace.SubmissionTypeState.workspace(value);
                default:
                    return SeedTrace.SubmissionTypeState._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace SubmissionTypeState {
    export type Raw = SubmissionTypeState.Test | SubmissionTypeState.Workspace;

    export interface Test extends TestSubmissionState.Raw {
        type: "test";
    }

    export interface Workspace extends WorkspaceSubmissionState.Raw {
        type: "workspace";
    }
}
