/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../..";
import * as SeedTrace from "../../../../../../../../api";
import * as core from "../../../../../../../../core";
export declare const BasicTestCaseTemplate: core.serialization.ObjectSchema<serializers.v2.v3.BasicTestCaseTemplate.Raw, SeedTrace.v2.v3.BasicTestCaseTemplate>;
export declare namespace BasicTestCaseTemplate {
    interface Raw {
        templateId: serializers.v2.v3.TestCaseTemplateId.Raw;
        name: string;
        description: serializers.v2.v3.TestCaseImplementationDescription.Raw;
        expectedValueParameterId: serializers.v2.v3.ParameterId.Raw;
    }
}
