/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Files } from "./Files";
import { Language } from "../../../../commons/types/Language";

export const GeneratedFiles: core.serialization.ObjectSchema<
    serializers.v2.GeneratedFiles.Raw,
    SeedTrace.v2.GeneratedFiles
> = core.serialization.object({
    generatedTestCaseFiles: core.serialization.record(Language, Files.optional()),
    generatedTemplateFiles: core.serialization.record(Language, Files.optional()),
    other: core.serialization.record(Language, Files.optional()),
});

export declare namespace GeneratedFiles {
    interface Raw {
        generatedTestCaseFiles: Record<Language.Raw, Files.Raw | null | undefined>;
        generatedTemplateFiles: Record<Language.Raw, Files.Raw | null | undefined>;
        other: Record<Language.Raw, Files.Raw | null | undefined>;
    }
}
