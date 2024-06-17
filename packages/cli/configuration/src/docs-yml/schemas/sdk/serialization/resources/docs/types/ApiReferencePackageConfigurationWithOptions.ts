/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const ApiReferencePackageConfigurationWithOptions: core.serialization.ObjectSchema<
    serializers.ApiReferencePackageConfigurationWithOptions.Raw,
    FernDocsConfig.ApiReferencePackageConfigurationWithOptions
> = core.serialization.object({
    title: core.serialization.string().optional(),
    summary: core.serialization.string().optional(),
    contents: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).ApiReferenceLayoutItem))
        .optional(),
    slug: core.serialization.string().optional(),
    icon: core.serialization.string().optional(),
    hidden: core.serialization.boolean().optional(),
    skipSlug: core.serialization.property("skip-slug", core.serialization.boolean().optional()),
});

export declare namespace ApiReferencePackageConfigurationWithOptions {
    interface Raw {
        title?: string | null;
        summary?: string | null;
        contents?: serializers.ApiReferenceLayoutItem.Raw[] | null;
        slug?: string | null;
        icon?: string | null;
        hidden?: boolean | null;
        "skip-slug"?: boolean | null;
    }
}
