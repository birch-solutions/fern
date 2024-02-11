/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import * as SeedTrace from "../../../../../../../../api";
import * as core from "../../../../../../../../core";

export const TestCaseImplementationDescription: core.serialization.ObjectSchema<
    serializers.v2.v3.TestCaseImplementationDescription.Raw,
    SeedTrace.v2.v3.TestCaseImplementationDescription
> = core.serialization.object({
    boards: core.serialization.list(
        core.serialization.lazy(
            async () => (await import("../../../../../../..")).v2.v3.TestCaseImplementationDescriptionBoard
        )
    ),
});

export declare namespace TestCaseImplementationDescription {
    interface Raw {
        boards: serializers.v2.v3.TestCaseImplementationDescriptionBoard.Raw[];
    }
}
