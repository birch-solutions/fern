/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const ChangelogConfiguration: core.serialization.ObjectSchema<
    serializers.ChangelogConfiguration.Raw,
    FernDocsConfig.ChangelogConfiguration
> = core.serialization.object({
    changelog: core.serialization.lazy(async () => (await import("../../..")).ChangelogFolderRelativePath),
    title: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
    icon: core.serialization.string().optional(),
    hidden: core.serialization.boolean().optional(),
});

export declare namespace ChangelogConfiguration {
    interface Raw {
        changelog: serializers.ChangelogFolderRelativePath.Raw;
        title?: string | null;
        slug?: string | null;
        icon?: string | null;
        hidden?: boolean | null;
    }
}
