/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import * as SeedTrace from "../../../../../../../../api";
import * as core from "../../../../../../../../core";

export const TestCaseImplementationReference: core.serialization.Schema<
    serializers.v2.v3.TestCaseImplementationReference.Raw,
    SeedTrace.v2.v3.TestCaseImplementationReference
> = core.serialization
    .union("type", {
        templateId: core.serialization.object({
            value: core.serialization.lazy(async () => (await import("../../../../../../..")).v2.v3.TestCaseTemplateId),
        }),
        implementation: core.serialization.lazyObject(
            async () => (await import("../../../../../../..")).v2.v3.TestCaseImplementation
        ),
    })
    .transform<SeedTrace.v2.v3.TestCaseImplementationReference>({
        transform: (value) => value,
        untransform: (value) => value,
    });

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
