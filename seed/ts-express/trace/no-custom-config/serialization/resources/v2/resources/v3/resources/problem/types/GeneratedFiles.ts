/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const GeneratedFiles: core.serialization.ObjectSchema<
    serializers.v2.v3.GeneratedFiles.Raw,
    SeedTrace.v2.v3.GeneratedFiles
> = core.serialization.object({
    generatedTestCaseFiles: core.serialization.record(
        core.serialization.lazy(() => serializers.Language),
        core.serialization.lazyObject(() => serializers.v2.v3.Files).optional()
    ),
    generatedTemplateFiles: core.serialization.record(
        core.serialization.lazy(() => serializers.Language),
        core.serialization.lazyObject(() => serializers.v2.v3.Files).optional()
    ),
    other: core.serialization.record(
        core.serialization.lazy(() => serializers.Language),
        core.serialization.lazyObject(() => serializers.v2.v3.Files).optional()
    ),
});

export declare namespace GeneratedFiles {
    interface Raw {
        generatedTestCaseFiles: Record<serializers.Language.Raw, serializers.v2.v3.Files.Raw | null | undefined>;
        generatedTemplateFiles: Record<serializers.Language.Raw, serializers.v2.v3.Files.Raw | null | undefined>;
        other: Record<serializers.Language.Raw, serializers.v2.v3.Files.Raw | null | undefined>;
    }
}
