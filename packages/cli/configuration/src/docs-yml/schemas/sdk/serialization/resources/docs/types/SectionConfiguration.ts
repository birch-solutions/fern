/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const SectionConfiguration: core.serialization.ObjectSchema<
    serializers.SectionConfiguration.Raw,
    FernDocsConfig.SectionConfiguration
> = core.serialization
    .object({
        section: core.serialization.string(),
        path: core.serialization.string().optional(),
        contents: core.serialization.list(
            core.serialization.lazy(async () => (await import("../../..")).NavigationItem)
        ),
        collapsed: core.serialization.boolean().optional(),
        slug: core.serialization.string().optional(),
        icon: core.serialization.string().optional(),
        hidden: core.serialization.boolean().optional(),
        skipSlug: core.serialization.property("skip-slug", core.serialization.boolean().optional()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithPermissions));

export declare namespace SectionConfiguration {
    interface Raw extends serializers.WithPermissions.Raw {
        section: string;
        path?: string | null;
        contents: serializers.NavigationItem.Raw[];
        collapsed?: boolean | null;
        slug?: string | null;
        icon?: string | null;
        hidden?: boolean | null;
        "skip-slug"?: boolean | null;
    }
}
