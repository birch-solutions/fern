/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const ApiReferenceSectionConfiguration: core.serialization.ObjectSchema<
    serializers.ApiReferenceSectionConfiguration.Raw,
    FernDocsConfig.ApiReferenceSectionConfiguration
> = core.serialization.object({
    section: core.serialization.string(),
    referencedPackages: core.serialization.property(
        "referenced-packages",
        core.serialization.list(core.serialization.string()).optional()
    ),
    summary: core.serialization.string().optional(),
    contents: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).ApiReferenceLayoutItem))
        .optional(),
    slug: core.serialization.string().optional(),
    icon: core.serialization.string().optional(),
    hidden: core.serialization.boolean().optional(),
    skipSlug: core.serialization.property("skip-slug", core.serialization.boolean().optional()),
    playground: core.serialization.lazyObject(async () => (await import("../../..")).PlaygroundSettings).optional(),
});

export declare namespace ApiReferenceSectionConfiguration {
    interface Raw {
        section: string;
        "referenced-packages"?: string[] | null;
        summary?: string | null;
        contents?: serializers.ApiReferenceLayoutItem.Raw[] | null;
        slug?: string | null;
        icon?: string | null;
        hidden?: boolean | null;
        "skip-slug"?: boolean | null;
        playground?: serializers.PlaygroundSettings.Raw | null;
    }
}
