/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";
import { ProblemId } from "../../commons/types/ProblemId";
import { CreateProblemError } from "./CreateProblemError";

export const CreateProblemResponse: core.serialization.Schema<
    serializers.CreateProblemResponse.Raw,
    SeedTrace.CreateProblemResponse
> = core.serialization
    .union("type", {
        success: core.serialization.object({
            value: ProblemId,
        }),
        error: core.serialization.object({
            value: CreateProblemError,
        }),
    })
    .transform<SeedTrace.CreateProblemResponse>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace CreateProblemResponse {
    type Raw = CreateProblemResponse.Success | CreateProblemResponse.Error;

    interface Success {
        type: "success";
        value: ProblemId.Raw;
    }

    interface Error {
        type: "error";
        value: CreateProblemError.Raw;
    }
}
