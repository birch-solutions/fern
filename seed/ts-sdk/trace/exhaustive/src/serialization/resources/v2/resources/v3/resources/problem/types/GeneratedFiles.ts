/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index.js";
import * as SeedTrace from "../../../../../../../../api/index.js";
import * as core from "../../../../../../../../core/index.js";
import { Files } from "./Files.js";
import { Language } from "../../../../../../commons/types/Language.js";

export const GeneratedFiles: core.serialization.ObjectSchema<
    serializers.v2.v3.GeneratedFiles.Raw,
    SeedTrace.v2.v3.GeneratedFiles
> = core.serialization.object({
    generatedTestCaseFiles: core.serialization.record(Language, Files.optional()),
    generatedTemplateFiles: core.serialization.record(Language, Files.optional()),
    other: core.serialization.record(Language, Files.optional()),
});

export declare namespace GeneratedFiles {
    export interface Raw {
        generatedTestCaseFiles: Record<Language.Raw, Files.Raw | null | undefined>;
        generatedTemplateFiles: Record<Language.Raw, Files.Raw | null | undefined>;
        other: Record<Language.Raw, Files.Raw | null | undefined>;
    }
}
