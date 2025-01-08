/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { InitializeProblemRequest } from "./InitializeProblemRequest.js";
import { SubmitRequestV2 } from "./SubmitRequestV2.js";
import { WorkspaceSubmitRequest } from "./WorkspaceSubmitRequest.js";
import { StopRequest } from "./StopRequest.js";

export const SubmissionRequest: core.serialization.Schema<
    serializers.SubmissionRequest.Raw,
    SeedTrace.SubmissionRequest
> = core.serialization
    .union("type", {
        initializeProblemRequest: InitializeProblemRequest,
        initializeWorkspaceRequest: core.serialization.object({}),
        submitV2: SubmitRequestV2,
        workspaceSubmit: WorkspaceSubmitRequest,
        stop: StopRequest,
    })
    .transform<SeedTrace.SubmissionRequest>({
        transform: (value) => {
            switch (value.type) {
                case "initializeProblemRequest":
                    return SeedTrace.SubmissionRequest.initializeProblemRequest(value);
                case "initializeWorkspaceRequest":
                    return SeedTrace.SubmissionRequest.initializeWorkspaceRequest();
                case "submitV2":
                    return SeedTrace.SubmissionRequest.submitV2(value);
                case "workspaceSubmit":
                    return SeedTrace.SubmissionRequest.workspaceSubmit(value);
                case "stop":
                    return SeedTrace.SubmissionRequest.stop(value);
                default:
                    return SeedTrace.SubmissionRequest._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace SubmissionRequest {
    export type Raw =
        | SubmissionRequest.InitializeProblemRequest
        | SubmissionRequest.InitializeWorkspaceRequest
        | SubmissionRequest.SubmitV2
        | SubmissionRequest.WorkspaceSubmit
        | SubmissionRequest.Stop;

    export interface InitializeProblemRequest extends InitializeProblemRequest.Raw {
        type: "initializeProblemRequest";
    }

    export interface InitializeWorkspaceRequest {
        type: "initializeWorkspaceRequest";
    }

    export interface SubmitV2 extends SubmitRequestV2.Raw {
        type: "submitV2";
    }

    export interface WorkspaceSubmit extends WorkspaceSubmitRequest.Raw {
        type: "workspaceSubmit";
    }

    export interface Stop extends StopRequest.Raw {
        type: "stop";
    }
}
