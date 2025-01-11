/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";

export const VersionedSnippetLanguageConfiguration: core.serialization.ObjectSchema<
    serializers.VersionedSnippetLanguageConfiguration.Raw,
    FernDocsConfig.VersionedSnippetLanguageConfiguration
> = core.serialization.object({
    version: core.serialization.string(),
    package: core.serialization.string(),
});

export declare namespace VersionedSnippetLanguageConfiguration {
    export interface Raw {
        version: string;
        package: string;
    }
}
