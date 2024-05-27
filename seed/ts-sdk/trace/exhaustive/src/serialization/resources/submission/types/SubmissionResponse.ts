/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { ProblemId } from "../../commons/types/ProblemId";
import { ExceptionInfo } from "./ExceptionInfo";
import { CodeExecutionUpdate } from "./CodeExecutionUpdate";
import { TerminatedResponse } from "./TerminatedResponse";

export const SubmissionResponse: core.serialization.Schema<
    serializers.SubmissionResponse.Raw,
    SeedTrace.SubmissionResponse
> = core.serialization
    .union("type", {
        serverInitialized: core.serialization.object({}),
        problemInitialized: core.serialization.object({
            value: ProblemId,
        }),
        workspaceInitialized: core.serialization.object({}),
        serverErrored: ExceptionInfo,
        codeExecutionUpdate: core.serialization.object({
            value: CodeExecutionUpdate,
        }),
        terminated: TerminatedResponse,
    })
    .transform<SeedTrace.SubmissionResponse>({
        transform: (value) => {
            switch (value.type) {
                case "serverInitialized":
                    return SeedTrace.SubmissionResponse.serverInitialized();
                case "problemInitialized":
                    return SeedTrace.SubmissionResponse.problemInitialized(value.value);
                case "workspaceInitialized":
                    return SeedTrace.SubmissionResponse.workspaceInitialized();
                case "serverErrored":
                    return SeedTrace.SubmissionResponse.serverErrored(value);
                case "codeExecutionUpdate":
                    return SeedTrace.SubmissionResponse.codeExecutionUpdate(value.value);
                case "terminated":
                    return SeedTrace.SubmissionResponse.terminated(value);
                default:
                    return SeedTrace.SubmissionResponse._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace SubmissionResponse {
    type Raw =
        | SubmissionResponse.ServerInitialized
        | SubmissionResponse.ProblemInitialized
        | SubmissionResponse.WorkspaceInitialized
        | SubmissionResponse.ServerErrored
        | SubmissionResponse.CodeExecutionUpdate
        | SubmissionResponse.Terminated;

    interface ServerInitialized {
        type: "serverInitialized";
    }

    interface ProblemInitialized {
        type: "problemInitialized";
        value: ProblemId.Raw;
    }

    interface WorkspaceInitialized {
        type: "workspaceInitialized";
    }

    interface ServerErrored extends ExceptionInfo.Raw {
        type: "serverErrored";
    }

    interface CodeExecutionUpdate {
        type: "codeExecutionUpdate";
        value: CodeExecutionUpdate.Raw;
    }

    interface Terminated extends TerminatedResponse.Raw {
        type: "terminated";
    }
}
