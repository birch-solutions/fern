/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.v2.problem.getProblems.Response.Raw,
    SeedTrace.v2.ProblemInfoV2[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../../../..")).v2.ProblemInfoV2)
);

export declare namespace Response {
    type Raw = serializers.v2.ProblemInfoV2.Raw[];
}
