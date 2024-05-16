/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";
import { DocsInstances } from "./DocsInstances";
import { TabId } from "./TabId";
import { TabConfig } from "./TabConfig";
import { VersionConfig } from "./VersionConfig";
import { NavigationConfig } from "./NavigationConfig";
import { NavbarLink } from "./NavbarLink";
import { FooterLinksConfig } from "./FooterLinksConfig";
import { MetadataConfig } from "./MetadataConfig";
import { RedirectConfig } from "./RedirectConfig";
import { LogoConfiguration } from "./LogoConfiguration";
import { BackgroundImageConfiguration } from "./BackgroundImageConfiguration";
import { ColorsConfiguration } from "./ColorsConfiguration";
import { DocsTypographyConfig } from "./DocsTypographyConfig";
import { LayoutConfig } from "./LayoutConfig";
import { IntegrationsConfig } from "./IntegrationsConfig";
import { CssConfig } from "./CssConfig";
import { JsConfig } from "./JsConfig";

export const DocsConfiguration: core.serialization.ObjectSchema<
    serializers.DocsConfiguration.Raw,
    FernDocsConfig.DocsConfiguration
> = core.serialization.object({
    instances: core.serialization.list(DocsInstances),
    title: core.serialization.string().optional(),
    tabs: core.serialization.record(TabId, TabConfig).optional(),
    versions: core.serialization.list(VersionConfig).optional(),
    navigation: NavigationConfig.optional(),
    navbarLinks: core.serialization.property("navbar-links", core.serialization.list(NavbarLink).optional()),
    footerLinks: core.serialization.property("footer-links", FooterLinksConfig.optional()),
    metadata: MetadataConfig.optional(),
    redirects: core.serialization.list(RedirectConfig).optional(),
    logo: LogoConfiguration.optional(),
    favicon: core.serialization.string().optional(),
    backgroundImage: core.serialization.property("background-image", BackgroundImageConfiguration.optional()),
    colors: ColorsConfiguration.optional(),
    typography: DocsTypographyConfig.optional(),
    layout: LayoutConfig.optional(),
    integrations: IntegrationsConfig.optional(),
    css: CssConfig.optional(),
    js: JsConfig.optional(),
});

export declare namespace DocsConfiguration {
    interface Raw {
        instances: DocsInstances.Raw[];
        title?: string | null;
        tabs?: Record<TabId.Raw, TabConfig.Raw> | null;
        versions?: VersionConfig.Raw[] | null;
        navigation?: NavigationConfig.Raw | null;
        "navbar-links"?: NavbarLink.Raw[] | null;
        "footer-links"?: FooterLinksConfig.Raw | null;
        metadata?: MetadataConfig.Raw | null;
        redirects?: RedirectConfig.Raw[] | null;
        logo?: LogoConfiguration.Raw | null;
        favicon?: string | null;
        "background-image"?: BackgroundImageConfiguration.Raw | null;
        colors?: ColorsConfiguration.Raw | null;
        typography?: DocsTypographyConfig.Raw | null;
        layout?: LayoutConfig.Raw | null;
        integrations?: IntegrationsConfig.Raw | null;
        css?: CssConfig.Raw | null;
        js?: JsConfig.Raw | null;
    }
}
