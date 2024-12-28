/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const CreateProblemRequestV2: core.serialization.ObjectSchema<
    serializers.v2.v3.CreateProblemRequestV2.Raw,
    SeedTrace.v2.v3.CreateProblemRequestV2
> = core.serialization.object({
    problemName: core.serialization.string(),
    problemDescription: core.serialization.lazyObject(() => serializers.ProblemDescription),
    customFiles: core.serialization.lazy(() => serializers.v2.v3.CustomFiles),
    customTestCaseTemplates: core.serialization.list(
        core.serialization.lazyObject(() => serializers.v2.v3.TestCaseTemplate),
    ),
    testcases: core.serialization.list(core.serialization.lazyObject(() => serializers.v2.v3.TestCaseV2)),
    supportedLanguages: core.serialization.set(core.serialization.lazy(() => serializers.Language)),
    isPublic: core.serialization.boolean(),
});

export declare namespace CreateProblemRequestV2 {
    export interface Raw {
        problemName: string;
        problemDescription: serializers.ProblemDescription.Raw;
        customFiles: serializers.v2.v3.CustomFiles.Raw;
        customTestCaseTemplates: serializers.v2.v3.TestCaseTemplate.Raw[];
        testcases: serializers.v2.v3.TestCaseV2.Raw[];
        supportedLanguages: serializers.Language.Raw[];
        isPublic: boolean;
    }
}
