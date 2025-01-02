/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDocsConfig from "../../../index";

export interface DocsConfiguration {
    instances: FernDocsConfig.DocsInstance[];
    /** used as tab bar title, and in the navbar if no logo is defined */
    title?: string;
    /**
     * The `analytics` object allows you to configure analytics for your docs site.
     * Currently, only Segment is supported.
     */
    analytics?: FernDocsConfig.AnalyticsConfig;
    announcement?: FernDocsConfig.AnnouncementConfig;
    /** Global list of roles that can be used to filter the navigation and content based on the user's session. */
    roles?: FernDocsConfig.RoleId[];
    tabs?: Record<FernDocsConfig.TabId, FernDocsConfig.TabConfig>;
    versions?: FernDocsConfig.VersionConfig[];
    landingPage?: FernDocsConfig.PageConfiguration;
    /** The navigation config is skipped when multiple versions are present. */
    navigation?: FernDocsConfig.NavigationConfig;
    navbarLinks?: FernDocsConfig.NavbarLink[];
    footerLinks?: FernDocsConfig.FooterLinksConfig;
    experimental?: FernDocsConfig.ExperimentalConfig;
    defaultLanguage?: FernDocsConfig.ProgrammingLanguage;
    metadata?: FernDocsConfig.MetadataConfig;
    redirects?: FernDocsConfig.RedirectConfig[];
    logo?: FernDocsConfig.LogoConfiguration;
    favicon?: string;
    backgroundImage?: FernDocsConfig.BackgroundImageConfiguration;
    colors?: FernDocsConfig.ColorsConfiguration;
    typography?: FernDocsConfig.DocsTypographyConfig;
    layout?: FernDocsConfig.LayoutConfig;
    integrations?: FernDocsConfig.IntegrationsConfig;
    css?: FernDocsConfig.CssConfig;
    js?: FernDocsConfig.JsConfig;
}
