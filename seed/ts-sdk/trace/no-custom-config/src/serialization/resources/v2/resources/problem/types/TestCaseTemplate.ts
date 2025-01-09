/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TestCaseTemplateId } from "./TestCaseTemplateId";
import { TestCaseImplementation } from "./TestCaseImplementation";

export const TestCaseTemplate: core.serialization.ObjectSchema<
    serializers.v2.TestCaseTemplate.Raw,
    SeedTrace.v2.TestCaseTemplate
> = core.serialization.object({
    templateId: TestCaseTemplateId,
    name: core.serialization.string(),
    implementation: TestCaseImplementation,
});

export declare namespace TestCaseTemplate {
    export interface Raw {
        templateId: TestCaseTemplateId.Raw;
        name: string;
        implementation: TestCaseImplementation.Raw;
    }
}
