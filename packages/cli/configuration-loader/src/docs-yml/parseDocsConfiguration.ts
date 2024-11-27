import { assertNever, isPlainObject } from "@fern-api/core-utils";
import { AbsoluteFilePath, dirname, doesPathExist, listFiles, resolve } from "@fern-api/fs-utils";
import { TaskContext } from "@fern-api/task-context";
import { FernRegistry as CjsFdrSdk } from "@fern-fern/fdr-cjs-sdk";
import { readFile } from "fs/promises";
import yaml from "js-yaml";
import { WithoutQuestionMarks } from "../commons/WithoutQuestionMarks";
import { convertColorsConfiguration } from "./convertColorsConfiguration";
import { getAllPages, loadAllPages } from "./getAllPages";
import { Audiences, docsYml } from "@fern-api/configuration";

export async function parseDocsConfiguration({
    rawDocsConfiguration,
    absolutePathToFernFolder,
    absoluteFilepathToDocsConfig,
    context
}: {
    rawDocsConfiguration: docsYml.FernDocsConfig.DocsConfiguration;
    absolutePathToFernFolder: AbsoluteFilePath;
    absoluteFilepathToDocsConfig: AbsoluteFilePath;
    context: TaskContext;
}): Promise<WithoutQuestionMarks<docsYml.ParsedDocsConfiguration>> {
    const {
        instances,
        title,

        /* navigation */
        tabs,
        versions,
        navigation: rawNavigation,
        navbarLinks,
        footerLinks,
        defaultLanguage,

        /* seo */
        metadata: rawMetadata,
        redirects,

        /* branding */
        logo: rawLogo,
        favicon: faviconRef,
        backgroundImage: rawBackgroundImage,
        colors,
        typography: rawTypography,
        layout,
        analytics: analyticsConfig,
        /* integrations */
        integrations,

        /* scripts */
        css: rawCssConfig,
        js: rawJsConfig,

        experimental
    } = rawDocsConfiguration;

    const landingPage = parsePageConfig(rawDocsConfiguration.landingPage, absoluteFilepathToDocsConfig);

    const convertedNavigationPromise = getNavigationConfiguration({
        tabs,
        versions,
        navigation: rawNavigation,
        absolutePathToFernFolder,
        absolutePathToConfig: absoluteFilepathToDocsConfig,
        context
    });

    const pagesPromise = convertedNavigationPromise.then((convertedNavigation) =>
        loadAllPages({
            files: getAllPages({ navigation: convertedNavigation, landingPage }),
            absolutePathToFernFolder
        })
    );

    const logo = convertLogoReference(rawLogo, absoluteFilepathToDocsConfig);

    const favicon = resolveFilepath(faviconRef, absoluteFilepathToDocsConfig);

    const backgroundImage = convertBackgroundImage(rawBackgroundImage, absoluteFilepathToDocsConfig);

    const typographyPromise =
        rawTypography != null
            ? convertTypographyConfiguration({
                  rawTypography,
                  absoluteFilepathToDocsConfig
              })
            : undefined;

    const cssPromise = convertCssConfig(rawCssConfig, absoluteFilepathToDocsConfig);
    const jsPromise = convertJsConfig(rawJsConfig, absoluteFilepathToDocsConfig);

    const metadataPromise = convertMetadata(rawMetadata, absoluteFilepathToDocsConfig);

    const [navigation, pages, typography, css, js, metadata] = await Promise.all([
        convertedNavigationPromise,
        pagesPromise,
        typographyPromise,
        cssPromise,
        jsPromise,
        metadataPromise
    ]);

    return {
        title,
        // absoluteFilepath: absoluteFilepathToDocsConfig,
        instances,
        roles: rawDocsConfiguration.roles,

        /* filepath of page to contents */
        pages,

        /* navigation */
        landingPage,
        navigation,
        navbarLinks: convertNavbarLinks(navbarLinks),
        footerLinks: convertFooterLinks(footerLinks),
        defaultLanguage,
        announcement: rawDocsConfiguration.announcement,

        /* seo */
        metadata,
        redirects: redirects?.map((redirect) => ({
            ...redirect,
            permanent: redirect?.permanent
        })),

        /* branding */
        logo,
        favicon,
        backgroundImage,
        colors: convertColorsConfiguration(colors, context),
        typography,
        layout: convertLayoutConfig(layout),
        analyticsConfig: {
            ...rawDocsConfiguration.analytics,
            intercom: rawDocsConfiguration.analytics?.intercom
                ? {
                      ...rawDocsConfiguration.analytics.intercom,
                      appId: rawDocsConfiguration.analytics.intercom.appId,
                      apiBase: rawDocsConfiguration.analytics.intercom.apiBase
                  }
                : undefined,
            fullstory: rawDocsConfiguration.analytics?.fullstory,
            posthog: rawDocsConfiguration.analytics?.posthog
                ? {
                      ...rawDocsConfiguration.analytics.posthog,
                      apiKey: rawDocsConfiguration.analytics.posthog.apiKey,
                      endpoint: rawDocsConfiguration.analytics.posthog.endpoint
                  }
                : undefined,
            segment: rawDocsConfiguration.analytics?.segment,
            gtm: undefined,
            ga4: undefined,
            amplitude: undefined,
            mixpanel: undefined,
            hotjar: undefined,
            koala: undefined,
            logrocket: undefined,
            pirsch: undefined,
            plausible: undefined,
            fathom: undefined,
            clearbit: undefined,
            heap: undefined
        },

        /* integrations */
        integrations: {
            ...integrations,
            intercom: integrations?.intercom ? integrations.intercom : undefined
        },

        /* scripts */
        css,
        js,

        experimental
    };
}

function convertLogoReference(
    rawLogo: docsYml.FernDocsConfig.LogoConfiguration | undefined,
    absoluteFilepathToDocsConfig: AbsoluteFilePath
): docsYml.ParsedDocsConfiguration["logo"] {
    return rawLogo != null
        ? {
              dark: resolveFilepath(rawLogo.dark, absoluteFilepathToDocsConfig),
              light: resolveFilepath(rawLogo.light, absoluteFilepathToDocsConfig),
              height: rawLogo.height,
              href: rawLogo.href != null ? CjsFdrSdk.Url(rawLogo.href) : undefined
          }
        : undefined;
}

function convertBackgroundImage(
    rawBackgroundImage: docsYml.FernDocsConfig.BackgroundImageConfiguration | undefined,
    absoluteFilepathToDocsConfig: AbsoluteFilePath
): docsYml.ParsedDocsConfiguration["backgroundImage"] {
    if (rawBackgroundImage == null) {
        return undefined;
    } else if (typeof rawBackgroundImage === "string") {
        const image = resolveFilepath(rawBackgroundImage, absoluteFilepathToDocsConfig);

        return { dark: image, light: image };
    } else {
        const dark = resolveFilepath(rawBackgroundImage.dark, absoluteFilepathToDocsConfig);
        const light = resolveFilepath(rawBackgroundImage.light, absoluteFilepathToDocsConfig);

        return { dark, light };
    }
}

async function convertCssConfig(
    css: docsYml.FernDocsConfig.CssConfig | undefined,
    absoluteFilepathToDocsConfig: AbsoluteFilePath
): Promise<docsYml.ParsedDocsConfiguration["css"]> {
    if (css == null) {
        return undefined;
    }
    const cssFilePaths = typeof css === "string" ? [css] : css;
    return {
        inline: await Promise.all(
            cssFilePaths.map(async (cssFilePath) => {
                const content = await readFile(resolveFilepath(cssFilePath, absoluteFilepathToDocsConfig));
                return content.toString();
            })
        )
    };
}

function isRemoteJsConfig(
    config: docsYml.FernDocsConfig.JsRemoteConfig | docsYml.FernDocsConfig.JsFileConfigSettings
): config is docsYml.FernDocsConfig.JsRemoteConfig {
    return Object.hasOwn(config, "url");
}

function isFileJsConfig(
    config: docsYml.FernDocsConfig.JsRemoteConfig | docsYml.FernDocsConfig.JsFileConfigSettings
): config is docsYml.FernDocsConfig.JsFileConfigSettings {
    return Object.hasOwn(config, "path");
}

async function convertJsConfig(
    js: docsYml.FernDocsConfig.JsConfig | undefined,
    absoluteFilepathToDocsConfig: AbsoluteFilePath
): Promise<JavascriptConfig> {
    const remote: CjsFdrSdk.docs.v1.commons.JsRemoteConfig[] = [];
    const files: AbsoluteJsFileConfig[] = [];
    if (js == null) {
        return { files: [] };
    }

    const configs = Array.isArray(js) ? js : [js];

    for (const config of configs) {
        if (typeof config === "string") {
            files.push({
                absolutePath: resolveFilepath(config, absoluteFilepathToDocsConfig)
            });
        } else if (isRemoteJsConfig(config)) {
            remote.push({
                strategy: config.strategy,
                url: CjsFdrSdk.Url(config.url)
            });
        } else if (isFileJsConfig(config)) {
            files.push({
                absolutePath: resolveFilepath(config.path, absoluteFilepathToDocsConfig),
                strategy: config.strategy
            });
        }
    }

    return { remote, files };
}

function convertLayoutConfig(layout: RawDocs.LayoutConfig | undefined): ParsedDocsConfiguration["layout"] {
    if (layout == null) {
        return undefined;
    }

    return {
        pageWidth:
            layout.pageWidth?.trim().toLowerCase() === "full" ? { type: "full" } : parseSizeConfig(layout.pageWidth),
        contentWidth: parseSizeConfig(layout.contentWidth),
        sidebarWidth: parseSizeConfig(layout.sidebarWidth),
        headerHeight: parseSizeConfig(layout.headerHeight),

        searchbarPlacement:
            layout.searchbarPlacement === "header"
                ? CjsFdrSdk.docs.v1.commons.SearchbarPlacement.Header
                : layout.searchbarPlacement === "header-tabs"
                ? CjsFdrSdk.docs.v1.commons.SearchbarPlacement.HeaderTabs
                : CjsFdrSdk.docs.v1.commons.SearchbarPlacement.Sidebar,
        tabsPlacement:
            layout.tabsPlacement === "header"
                ? CjsFdrSdk.docs.v1.commons.TabsPlacement.Header
                : CjsFdrSdk.docs.v1.commons.TabsPlacement.Sidebar,
        contentAlignment:
            layout.contentAlignment === "left"
                ? CjsFdrSdk.docs.v1.commons.ContentAlignment.Left
                : CjsFdrSdk.docs.v1.commons.ContentAlignment.Center,
        headerPosition:
            layout.headerPosition === "static"
                ? CjsFdrSdk.docs.v1.commons.HeaderPosition.Absolute
                : CjsFdrSdk.docs.v1.commons.HeaderPosition.Fixed,
        disableHeader: layout.disableHeader ?? false
    };
}

function parseSizeConfig(sizeAsString: string | undefined): CjsFdrSdk.docs.v1.commons.SizeConfig | undefined {
    if (sizeAsString == null) {
        return undefined;
    }

    const sizeAsStringClean = sizeAsString.trim().toLowerCase();

    const pxMatch = sizeAsStringClean.match(/^(\d+)px$/);
    if (pxMatch != null && pxMatch[1] != null) {
        return {
            type: "px",
            value: parseFloat(pxMatch[1])
        };
    }

    const remMatch = sizeAsStringClean.match(/^(\d+)rem$/);
    if (remMatch != null && remMatch[1] != null) {
        return {
            type: "rem",
            value: parseFloat(remMatch[1])
        };
    }

    return undefined;
}

async function getNavigationConfiguration({
    tabs,
    versions,
    navigation,
    absolutePathToFernFolder,
    absolutePathToConfig,
    context
}: {
    tabs?: Record<string, RawDocs.TabConfig>;
    versions?: VersionConfig[];
    navigation?: NavigationConfig;
    absolutePathToFernFolder: AbsoluteFilePath;
    absolutePathToConfig: AbsoluteFilePath;
    context: TaskContext;
}): Promise<DocsNavigationConfiguration> {
    if (navigation != null) {
        return await convertNavigationConfiguration({
            tabs,
            rawNavigationConfig: navigation,
            absolutePathToFernFolder,
            absolutePathToConfig,
            context
        });
    } else if (versions != null) {
        const versionedNavbars: VersionInfo[] = [];
        for (const version of versions) {
            const absoluteFilepathToVersionFile = resolve(absolutePathToFernFolder, version.path);
            const content = yaml.load((await readFile(absoluteFilepathToVersionFile)).toString());
            const result = await Serializer.VersionFileConfig.parseOrThrow(content);
            const navigation = await convertNavigationConfiguration({
                tabs: result.tabs,
                rawNavigationConfig: result.navigation,
                absolutePathToFernFolder,
                absolutePathToConfig: absoluteFilepathToVersionFile,
                context
            });
            versionedNavbars.push({
                landingPage: parsePageConfig(result.landingPage, absoluteFilepathToVersionFile),
                version: version.displayName,
                navigation,
                availability: version.availability,
                slug: version.slug,
                viewers: parseRoles(version.viewers),
                orphaned: version.orphaned
            });
        }
        return {
            type: "versioned",
            versions: versionedNavbars
        };
    }
    throw new Error("Unexpected. Docs have neither navigation or versions defined.");
}

async function convertTypographyConfiguration({
    rawTypography,
    absoluteFilepathToDocsConfig
}: {
    rawTypography: RawDocs.DocsTypographyConfig;
    absoluteFilepathToDocsConfig: AbsoluteFilePath;
}): Promise<TypographyConfig> {
    return {
        headingsFont:
            rawTypography.headingsFont != null
                ? await convertFontConfig({
                      rawFontConfig: rawTypography.headingsFont,
                      absoluteFilepathToDocsConfig
                  })
                : undefined,
        bodyFont:
            rawTypography.bodyFont != null
                ? await convertFontConfig({
                      rawFontConfig: rawTypography.bodyFont,
                      absoluteFilepathToDocsConfig
                  })
                : undefined,
        codeFont:
            rawTypography.codeFont != null
                ? await convertFontConfig({
                      rawFontConfig: rawTypography.codeFont,
                      absoluteFilepathToDocsConfig
                  })
                : undefined
    };
}

async function convertFontConfig({
    rawFontConfig,
    absoluteFilepathToDocsConfig
}: {
    rawFontConfig: RawDocs.FontConfig;
    absoluteFilepathToDocsConfig: AbsoluteFilePath;
}): Promise<FontConfig> {
    return {
        name: rawFontConfig.name,
        variants: await constructVariants(rawFontConfig, absoluteFilepathToDocsConfig),
        display: rawFontConfig.display,
        fallback: rawFontConfig.fallback,
        fontVariationSettings: rawFontConfig.fontVariationSettings
    };
}

function constructVariants(
    rawFontConfig: RawDocs.FontConfig,
    absoluteFilepathToDocsConfig: AbsoluteFilePath
): Promise<FontConfig["variants"]> {
    const variants: RawDocs.FontConfigVariant[] = [];

    if (rawFontConfig.path != null) {
        variants.push({
            path: rawFontConfig.path,
            weight: rawFontConfig.weight,
            style: rawFontConfig.style
        });
    }

    rawFontConfig.paths?.forEach((rawVariant) => {
        if (typeof rawVariant === "string") {
            variants.push({
                path: rawVariant,
                weight: rawFontConfig.weight,
                style: rawFontConfig.style
            });
        } else {
            variants.push({
                path: rawVariant.path,
                weight: rawVariant.weight ?? rawFontConfig.weight,
                style: rawVariant.style ?? rawFontConfig.style
            });
        }
    });

    return Promise.all(
        variants.map(async (rawVariant) => ({
            absolutePath: resolveFilepath(rawVariant.path, absoluteFilepathToDocsConfig),
            weight: parseWeight(rawVariant.weight),
            style: rawVariant.style
        }))
    );
}

function parseWeight(weight: string | number | undefined): string[] | undefined {
    if (weight == null) {
        return undefined;
    }

    if (typeof weight === "number") {
        return [weight.toString()];
    }

    const weights = weight
        .split(/\D+/)
        .filter(
            (item) => item !== "" && ["100", "200", "300", "400", "500", "600", "700", "800", "900"].includes(item)
        );

    return weights;
}

async function convertNavigationTabConfiguration({
    tabs,
    item,
    absolutePathToFernFolder,
    absolutePathToConfig,
    context
}: {
    tabs: Record<string, RawDocs.TabConfig>;
    item: RawDocs.TabbedNavigationItem;
    absolutePathToFernFolder: AbsoluteFilePath;
    absolutePathToConfig: AbsoluteFilePath;
    context: TaskContext;
}): Promise<TabbedNavigation> {
    const tab = tabs[item.tab];
    if (tab == null) {
        throw new Error(`Tab ${item.tab} is not defined in the tabs config.`);
    }

    if (item.layout != null) {
        const layout = await Promise.all(
            item.layout.map((item) =>
                convertNavigationItem({ rawConfig: item, absolutePathToFernFolder, absolutePathToConfig, context })
            )
        );
        return {
            title: tab.displayName,
            icon: tab.icon,
            slug: tab.slug,
            skipUrlSlug: tab.skipSlug,
            hidden: tab.hidden,
            child: {
                type: "layout",
                layout
            },
            viewers: parseRoles(tab.viewers),
            orphaned: tab.orphaned
        };
    }

    if (tab.href != null) {
        return {
            title: tab.displayName,
            icon: tab.icon,
            slug: tab.slug,
            skipUrlSlug: tab.skipSlug,
            hidden: tab.hidden,
            child: {
                type: "link",
                href: tab.href
            },
            viewers: parseRoles(tab.viewers),
            orphaned: tab.orphaned
        };
    }

    if (tab.changelog != null) {
        return {
            title: tab.displayName,
            icon: tab.icon,
            slug: tab.slug,
            skipUrlSlug: tab.skipSlug,
            hidden: tab.hidden,
            child: {
                type: "changelog",
                changelog: await listFiles(resolveFilepath(tab.changelog, absolutePathToConfig), "{md,mdx}")
            },
            viewers: parseRoles(tab.viewers),
            orphaned: tab.orphaned
        };
    }

    assertNever(tab as never);
}

async function convertNavigationConfiguration({
    tabs = {},
    rawNavigationConfig,
    absolutePathToFernFolder,
    absolutePathToConfig,
    context
}: {
    tabs?: Record<string, RawDocs.TabConfig>;
    rawNavigationConfig: RawDocs.NavigationConfig;
    absolutePathToFernFolder: AbsoluteFilePath;
    absolutePathToConfig: AbsoluteFilePath;
    context: TaskContext;
}): Promise<UntabbedDocsNavigation | TabbedDocsNavigation> {
    if (isTabbedNavigationConfig(rawNavigationConfig)) {
        const tabbedNavigationItems = await Promise.all(
            rawNavigationConfig.map((item) =>
                convertNavigationTabConfiguration({
                    tabs,
                    item,
                    absolutePathToFernFolder,
                    absolutePathToConfig,
                    context
                })
            )
        );
        return {
            type: "tabbed",
            items: tabbedNavigationItems
        };
    } else {
        return {
            type: "untabbed",
            items: await Promise.all(
                rawNavigationConfig.map((item) =>
                    convertNavigationItem({ rawConfig: item, absolutePathToFernFolder, absolutePathToConfig, context })
                )
            )
        };
    }
}

const DEFAULT_CHANGELOG_TITLE = "Changelog";

async function convertNavigationItem({
    rawConfig,
    absolutePathToFernFolder,
    absolutePathToConfig,
    context
}: {
    rawConfig: RawDocs.NavigationItem;
    absolutePathToFernFolder: AbsoluteFilePath;
    absolutePathToConfig: AbsoluteFilePath;
    context: TaskContext;
}): Promise<DocsNavigationItem> {
    if (isRawPageConfig(rawConfig)) {
        return parsePageConfig(rawConfig, absolutePathToConfig);
    }
    if (isRawSectionConfig(rawConfig)) {
        return {
            type: "section",
            title: rawConfig.section,
            icon: rawConfig.icon,
            contents: await Promise.all(
                rawConfig.contents.map((item) =>
                    convertNavigationItem({ rawConfig: item, absolutePathToFernFolder, absolutePathToConfig, context })
                )
            ),
            slug: rawConfig.slug ?? undefined,
            collapsed: rawConfig.collapsed ?? undefined,
            hidden: rawConfig.hidden ?? undefined,
            skipUrlSlug: rawConfig.skipSlug ?? false,
            overviewAbsolutePath: resolveFilepath(rawConfig.path, absolutePathToConfig),
            viewers: parseRoles(rawConfig.viewers),
            orphaned: rawConfig.orphaned
        };
    }
    if (isRawApiSectionConfig(rawConfig)) {
        return {
            type: "apiSection",
            title: rawConfig.api,
            icon: rawConfig.icon,
            apiName: rawConfig.apiName ?? undefined,
            audiences:
                rawConfig.audiences != null ? { type: "select", audiences: rawConfig.audiences } : { type: "all" },
            showErrors: rawConfig.displayErrors ?? false,
            snippetsConfiguration:
                rawConfig.snippets != null
                    ? convertSnippetsConfiguration({ rawConfig: rawConfig.snippets })
                    : undefined,
            navigation:
                rawConfig.layout?.flatMap((item) => parseApiReferenceLayoutItem(item, absolutePathToConfig)) ?? [],
            overviewAbsolutePath: resolveFilepath(rawConfig.summary, absolutePathToConfig),
            hidden: rawConfig.hidden ?? undefined,
            slug: rawConfig.slug,
            skipUrlSlug: rawConfig.skipSlug ?? false,
            flattened: rawConfig.flattened ?? false,
            alphabetized: rawConfig.alphabetized ?? false,
            paginated: rawConfig.paginated ?? false,
            playground: rawConfig.playground,
            viewers: parseRoles(rawConfig.viewers),
            orphaned: rawConfig.orphaned
        };
    }
    if (isRawLinkConfig(rawConfig)) {
        return {
            type: "link",
            text: rawConfig.link,
            url: rawConfig.href,
            icon: rawConfig.icon
        };
    }
    if (isRawChangelogConfig(rawConfig)) {
        return {
            type: "changelog",
            changelog: await listFiles(resolveFilepath(rawConfig.changelog, absolutePathToConfig), "{md,mdx}"),
            hidden: rawConfig.hidden ?? false,
            icon: rawConfig.icon,
            title: rawConfig.title ?? DEFAULT_CHANGELOG_TITLE,
            slug: rawConfig.slug,
            viewers: parseRoles(rawConfig.viewers),
            orphaned: rawConfig.orphaned
        };
    }
    assertNever(rawConfig);
}

function parsePageConfig(
    item: RawDocs.PageConfiguration,
    absolutePathToConfig: AbsoluteFilePath
): DocsNavigationItem.Page;
function parsePageConfig(
    item: RawDocs.PageConfiguration | undefined,
    absolutePathToConfig: AbsoluteFilePath
): DocsNavigationItem.Page | undefined;
function parsePageConfig(
    item: RawDocs.PageConfiguration | undefined,
    absolutePathToConfig: AbsoluteFilePath
): DocsNavigationItem.Page | undefined {
    if (item == null) {
        return undefined;
    }
    return {
        type: "page",
        title: item.page,
        absolutePath: resolveFilepath(item.path, absolutePathToConfig),
        slug: item.slug,
        icon: item.icon,
        hidden: item.hidden,
        // TODO: implement noindex
        noindex: undefined,
        viewers: parseRoles(item.viewers),
        orphaned: item.orphaned
    };
}

function parseApiReferenceLayoutItem(
    item: RawDocs.ApiReferenceLayoutItem,
    absolutePathToConfig: AbsoluteFilePath
): ParsedApiReferenceLayoutItem[] {
    if (typeof item === "string") {
        return [{ type: "item", value: item }];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (isRawPageConfig(item)) {
        return [parsePageConfig(item, absolutePathToConfig)];
    } else if (isRawLinkConfig(item)) {
        return [
            {
                type: "link",
                text: item.link,
                url: item.href,
                icon: item.icon
            }
        ];
    } else if (isRawApiRefSectionConfiguration(item)) {
        return [
            {
                type: "section",
                title: item.section,
                referencedSubpackages: item.referencedPackages ?? [],
                overviewAbsolutePath: resolveFilepath(item.summary, absolutePathToConfig),
                contents:
                    item.contents?.flatMap((value) => parseApiReferenceLayoutItem(value, absolutePathToConfig)) ?? [],
                slug: item.slug,
                hidden: item.hidden,
                skipUrlSlug: item.skipSlug,
                icon: item.icon,
                playground: item.playground,
                viewers: parseRoles(item.viewers),
                orphaned: item.orphaned
            }
        ];
    } else if (isRawApiRefEndpointConfiguration(item)) {
        return [
            {
                type: "endpoint",
                endpoint: item.endpoint,
                title: item.title,
                icon: item.icon,
                slug: item.slug,
                hidden: item.hidden,
                playground: item.playground,
                viewers: parseRoles(item.viewers),
                orphaned: item.orphaned
            }
        ];
    }
    return Object.entries(item).map(([key, value]): ParsedApiReferenceLayoutItem.Package => {
        if (isRawApiRefPackageConfiguration(value)) {
            return {
                type: "package",
                title: value.title,
                package: key,
                overviewAbsolutePath: resolveFilepath(value.summary, absolutePathToConfig),
                contents:
                    value.contents?.flatMap((value) => parseApiReferenceLayoutItem(value, absolutePathToConfig)) ?? [],
                slug: value.slug,
                hidden: value.hidden,
                skipUrlSlug: value.skipSlug,
                icon: value.icon,
                playground: value.playground,
                viewers: parseRoles(value.viewers),
                orphaned: value.orphaned
            };
        }
        return {
            type: "package",
            title: undefined,
            package: key,
            overviewAbsolutePath: undefined,
            contents: value.flatMap((value) => parseApiReferenceLayoutItem(value, absolutePathToConfig)),
            hidden: false,
            slug: undefined,
            skipUrlSlug: false,
            icon: undefined,
            playground: undefined,
            viewers: undefined,
            orphaned: undefined
        };
    });
}

function convertSnippetsConfiguration({
    rawConfig
}: {
    rawConfig: RawDocs.SnippetsConfiguration;
}): DocsNavigationItem.SnippetsConfiguration {
    return {
        python: rawConfig.python,
        typescript: rawConfig.typescript,
        go: rawConfig.go,
        java: rawConfig.java,
        ruby: rawConfig.ruby
    };
}

function isRawPageConfig(item: unknown): item is RawDocs.PageConfiguration {
    return isPlainObject(item) && typeof item.page === "string" && typeof item.path === "string";
}

function isRawSectionConfig(item: RawDocs.NavigationItem): item is RawDocs.SectionConfiguration {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return (item as RawDocs.SectionConfiguration).section != null;
}

function isRawApiSectionConfig(item: RawDocs.NavigationItem): item is RawDocs.ApiReferenceConfiguration {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return (item as RawDocs.ApiReferenceConfiguration).api != null;
}

function isRawLinkConfig(item: unknown): item is RawDocs.LinkConfiguration {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    RawDocs;
    return isPlainObject(item) && typeof item.link === "string" && typeof item.href === "string";
}

function isRawChangelogConfig(item: unknown): item is RawDocs.ChangelogConfiguration {
    return isPlainObject(item) && typeof item.changelog === "string";
}

function isRawApiRefSectionConfiguration(item: unknown): item is RawDocs.ApiReferenceSectionConfiguration {
    return isPlainObject(item) && typeof item.section === "string" && Array.isArray(item.contents);
}

function isRawApiRefEndpointConfiguration(item: unknown): item is RawDocs.ApiReferenceEndpointConfiguration {
    return isPlainObject(item) && typeof item.endpoint === "string";
}

function isRawApiRefPackageConfiguration(
    item: RawDocs.ApiReferencePackageConfiguration
): item is RawDocs.ApiReferencePackageConfigurationWithOptions {
    return !Array.isArray(item);
}

export function resolveFilepath(unresolvedFilepath: string, absolutePath: AbsoluteFilePath): AbsoluteFilePath;
export function resolveFilepath(
    unresolvedFilepath: string | undefined,
    absolutePath: AbsoluteFilePath
): AbsoluteFilePath | undefined;
export function resolveFilepath(
    unresolvedFilepath: string | undefined,
    absoluteFilepathToDocsConfig: AbsoluteFilePath
): AbsoluteFilePath | undefined {
    if (unresolvedFilepath == null) {
        return undefined;
    }
    return resolve(dirname(absoluteFilepathToDocsConfig), unresolvedFilepath);
}

function isTabbedNavigationConfig(
    navigationConfig: RawDocs.NavigationConfig
): navigationConfig is RawDocs.TabbedNavigationConfig {
    return (
        Array.isArray(navigationConfig) &&
        navigationConfig.length > 0 &&
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        (navigationConfig[0] as RawDocs.TabbedNavigationItem).tab != null
    );
}

function convertNavbarLinks(
    navbarLinks: RawDocs.NavbarLink[] | undefined
): CjsFdrSdk.docs.v1.commons.NavbarLink[] | undefined {
    return navbarLinks?.map((navbarLink): WithoutQuestionMarks<CjsFdrSdk.docs.v1.commons.NavbarLink> => {
        if (navbarLink.type === "github") {
            return { type: "github", url: CjsFdrSdk.Url(navbarLink.value) };
        }

        return {
            type: navbarLink.type,
            text: navbarLink.text,
            url: CjsFdrSdk.Url(navbarLink.href ?? navbarLink.url ?? "/"),
            icon: navbarLink.icon,
            rightIcon: navbarLink.rightIcon,
            rounded: navbarLink.rounded
        };
    });
}

function convertFooterLinks(
    footerLinks: RawDocs.FooterLinksConfig | undefined
): CjsFdrSdk.docs.v1.commons.FooterLink[] | undefined {
    if (footerLinks == null) {
        return undefined;
    }

    const links: CjsFdrSdk.docs.v1.commons.FooterLink[] = [];

    (Object.keys(footerLinks) as (keyof RawDocs.FooterLinksConfig)[]).forEach((key) => {
        const link = footerLinks[key];
        if (link == null) {
            return;
        }
        links.push({ type: key, value: CjsFdrSdk.Url(link) });
    });

    if (links.length === 0) {
        return undefined;
    }

    return links;
}

async function convertMetadata(
    metadata: RawDocs.MetadataConfig | undefined,
    absoluteFilepathToDocsConfig: AbsoluteFilePath
): Promise<ParsedMetadataConfig | undefined> {
    if (metadata == null) {
        return undefined;
    }

    return {
        "og:site_name": metadata.ogSiteName,
        "og:title": metadata.ogTitle,
        "og:description": metadata.ogDescription,
        "og:url": metadata.ogUrl,
        "og:image": await convertFilepathOrUrl(metadata.ogImage, absoluteFilepathToDocsConfig),
        "og:image:width": metadata.ogImageWidth,
        "og:image:height": metadata.ogImageHeight,
        "og:locale": metadata.ogLocale,
        "og:logo": await convertFilepathOrUrl(metadata.ogLogo, absoluteFilepathToDocsConfig),
        "twitter:title": metadata.twitterTitle,
        "twitter:description": metadata.twitterDescription,
        "twitter:image": await convertFilepathOrUrl(metadata.twitterImage, absoluteFilepathToDocsConfig),
        "twitter:handle": metadata.twitterHandle,
        "twitter:site": metadata.twitterSite,
        "twitter:url": metadata.twitterUrl,
        "twitter:card": metadata.twitterCard,
        nofollow: undefined,
        noindex: undefined
    };
}

async function convertFilepathOrUrl(
    value: string | undefined,
    absoluteFilepathToDocsConfig: AbsoluteFilePath
): Promise<FilepathOrUrl | undefined> {
    if (value == null) {
        return undefined;
    }

    if (value.startsWith("http")) {
        return { type: "url", value };
    }

    const filepath = resolveFilepath(value, absoluteFilepathToDocsConfig);

    if (await doesPathExist(filepath)) {
        return { type: "filepath", value: filepath };
    }

    // If the file does not exist, fallback to a URL
    return { type: "url", value };
}

function parseRoles(raw: string | string[] | undefined): CjsFdrSdk.RoleId[] | undefined {
    if (raw == null) {
        return undefined;
    }

    if (typeof raw === "string") {
        return [CjsFdrSdk.RoleId(raw)];
    }

    if (raw.length === 0) {
        return undefined;
    }

    return raw.map(CjsFdrSdk.RoleId);
}
