/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const ApiSectionConfiguration: core.serialization.ObjectSchema<
    serializers.ApiSectionConfiguration.Raw,
    FernDocsConfig.ApiSectionConfiguration
> = core.serialization.object({
    api: core.serialization.string(),
    apiName: core.serialization.property("api-name", core.serialization.string().optional()),
    audiences: core.serialization.list(core.serialization.string()).optional(),
    displayErrors: core.serialization.property("display-errors", core.serialization.boolean().optional()),
    snippets: core.serialization.lazyObject(async () => (await import("../../..")).SnippetsConfiguration).optional(),
    summary: core.serialization.string().optional(),
    layout: core.serialization.lazy(async () => (await import("../../..")).ApiNavigationItems).optional(),
    icon: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
    hidden: core.serialization.boolean().optional(),
    skipSlug: core.serialization.property("skip-slug", core.serialization.boolean().optional()),
    flattened: core.serialization.boolean().optional(),
});

export declare namespace ApiSectionConfiguration {
    interface Raw {
        api: string;
        "api-name"?: string | null;
        audiences?: string[] | null;
        "display-errors"?: boolean | null;
        snippets?: serializers.SnippetsConfiguration.Raw | null;
        summary?: string | null;
        layout?: serializers.ApiNavigationItems.Raw | null;
        icon?: string | null;
        slug?: string | null;
        hidden?: boolean | null;
        "skip-slug"?: boolean | null;
        flattened?: boolean | null;
    }
}
