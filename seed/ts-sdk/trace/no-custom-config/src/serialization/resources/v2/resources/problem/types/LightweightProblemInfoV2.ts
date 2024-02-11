/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as SeedTrace from "../../../../../../api";
import * as core from "../../../../../../core";

export const LightweightProblemInfoV2: core.serialization.ObjectSchema<
    serializers.v2.LightweightProblemInfoV2.Raw,
    SeedTrace.v2.LightweightProblemInfoV2
> = core.serialization.object({
    problemId: core.serialization.lazy(async () => (await import("../../../../..")).ProblemId),
    problemName: core.serialization.string(),
    problemVersion: core.serialization.number(),
    variableTypes: core.serialization.list(
        core.serialization.lazy(async () => (await import("../../../../..")).VariableType)
    ),
});

export declare namespace LightweightProblemInfoV2 {
    interface Raw {
        problemId: serializers.ProblemId.Raw;
        problemName: string;
        problemVersion: number;
        variableTypes: serializers.VariableType.Raw[];
    }
}
