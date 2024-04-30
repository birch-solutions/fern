/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const TestCaseMetadata: core.serialization.ObjectSchema<
    serializers.v2.v3.TestCaseMetadata.Raw,
    SeedTrace.v2.v3.TestCaseMetadata
> = core.serialization.object({
    id: core.serialization.lazy(async () => (await import("../../../../../../..")).v2.v3.TestCaseId),
    name: core.serialization.string(),
    hidden: core.serialization.boolean(),
});

export declare namespace TestCaseMetadata {
    interface Raw {
        id: serializers.v2.v3.TestCaseId.Raw;
        name: string;
        hidden: boolean;
    }
}
