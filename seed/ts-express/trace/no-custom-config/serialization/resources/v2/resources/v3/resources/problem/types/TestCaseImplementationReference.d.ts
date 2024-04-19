/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
export declare const TestCaseImplementationReference: core.serialization.Schema<serializers.v2.v3.TestCaseImplementationReference.Raw, SeedTrace.v2.v3.TestCaseImplementationReference>;
export declare namespace TestCaseImplementationReference {
    type Raw = TestCaseImplementationReference.TemplateId | TestCaseImplementationReference.Implementation;
    interface TemplateId {
        type: "templateId";
        value: serializers.v2.v3.TestCaseTemplateId.Raw;
    }
    interface Implementation extends serializers.v2.v3.TestCaseImplementation.Raw {
        type: "implementation";
    }
}
