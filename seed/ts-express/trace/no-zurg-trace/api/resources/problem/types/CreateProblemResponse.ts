/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type CreateProblemResponse = SeedTrace.CreateProblemResponse.Success | SeedTrace.CreateProblemResponse.Error_;

export namespace CreateProblemResponse {
    export interface Success {
        type: "success";
        value: SeedTrace.ProblemId;
    }

    export interface Error_ {
        type: "error";
        value: SeedTrace.CreateProblemError;
    }
}
