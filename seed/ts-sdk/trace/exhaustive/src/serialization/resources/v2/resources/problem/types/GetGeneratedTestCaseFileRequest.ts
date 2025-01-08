/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index.js";
import * as SeedTrace from "../../../../../../api/index.js";
import * as core from "../../../../../../core/index.js";
import { TestCaseTemplate } from "./TestCaseTemplate.js";
import { TestCaseV2 } from "./TestCaseV2.js";

export const GetGeneratedTestCaseFileRequest: core.serialization.ObjectSchema<
    serializers.v2.GetGeneratedTestCaseFileRequest.Raw,
    SeedTrace.v2.GetGeneratedTestCaseFileRequest
> = core.serialization.object({
    template: TestCaseTemplate.optional(),
    testCase: TestCaseV2,
});

export declare namespace GetGeneratedTestCaseFileRequest {
    export interface Raw {
        template?: TestCaseTemplate.Raw | null;
        testCase: TestCaseV2.Raw;
    }
}
