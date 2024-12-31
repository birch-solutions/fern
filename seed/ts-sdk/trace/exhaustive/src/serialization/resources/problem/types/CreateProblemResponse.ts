/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
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
        transform: (value) => {
            switch (value.type) {
                case "success":
                    return SeedTrace.CreateProblemResponse.success(value.value);
                case "error":
                    return SeedTrace.CreateProblemResponse.error(value.value);
                default:
                    return SeedTrace.CreateProblemResponse._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace CreateProblemResponse {
    export type Raw = CreateProblemResponse.Success | CreateProblemResponse.Error;

    export interface Success {
        type: "success";
        value: ProblemId.Raw;
    }

    export interface Error {
        type: "error";
        value: CreateProblemError.Raw;
    }
}
