/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TestCaseTemplateId } from "./TestCaseTemplateId";
import { TestCaseImplementationDescription } from "./TestCaseImplementationDescription";
import { ParameterId } from "./ParameterId";

export const BasicTestCaseTemplate: core.serialization.ObjectSchema<
    serializers.v2.BasicTestCaseTemplate.Raw,
    SeedTrace.v2.BasicTestCaseTemplate
> = core.serialization.object({
    templateId: TestCaseTemplateId,
    name: core.serialization.string(),
    description: TestCaseImplementationDescription,
    expectedValueParameterId: ParameterId,
});

export declare namespace BasicTestCaseTemplate {
    interface Raw {
        templateId: TestCaseTemplateId.Raw;
        name: string;
        description: TestCaseImplementationDescription.Raw;
        expectedValueParameterId: ParameterId.Raw;
    }
}
