import { assertNever } from "@fern-api/core-utils";
import { DocsV1Write } from "@fern-api/fdr-sdk";
import { AbsoluteFilePath, dirname, resolve } from "@fern-api/fs-utils";
import { TaskContext } from "@fern-api/task-context";
import { FernDocsConfig as RawDocs } from "@fern-fern/docs-config";
import { NavigationConfig, VersionConfig } from "@fern-fern/docs-config/api";
import { VersionFileConfig as RawVersionFileConfigSerializer } from "@fern-fern/docs-config/serialization";
import { readFile } from "fs/promises";
import yaml from "js-yaml";
import tinycolor from "tinycolor2";
import { getAllPages } from "./getAllPages";
import {
    DocsNavigationConfiguration,
    DocsNavigationItem,
    FontConfig,
    ImageReference,
    ParsedDocsConfiguration,
    TabbedDocsNavigation,
    TypographyConfig,
    UntabbedDocsNavigation,
    VersionInfo
} from "./ParsedDocsConfiguration";

export async function parseDocsConfiguration({
    rawDocsConfiguration,
    absolutePathToFernFolder,
    absoluteFilepathToDocsConfig,
    context
}: {
    rawDocsConfiguration: RawDocs.DocsConfiguration;
    absolutePathToFernFolder: AbsoluteFilePath;
    absoluteFilepathToDocsConfig: AbsoluteFilePath;
    context: TaskContext;
}): Promise<ParsedDocsConfiguration> {
    const {
        instances,
        navigation,
        colors,
        favicon,
        backgroundImage,
        logo,
        navbarLinks,
        title,
        typography,
        tabs,
        versions,
        layout
    } = rawDocsConfiguration;

    const convertedNavigation = await getNavigationConfiguration({
        versions,
        navigation,
        absolutePathToFernFolder,
        absolutePathToConfig: absoluteFilepathToDocsConfig,
        context
    });

    return {
        instances,
        absoluteFilepath: absoluteFilepathToDocsConfig,
        pages: await getAllPages({ navigation: convertedNavigation, absolutePathToFernFolder }),
        navigation: convertedNavigation,
        title,
        tabs,
        logo:
            logo != null
                ? {
                      dark:
                          logo.dark != null
                              ? await convertImageReference({
                                    rawImageReference: logo.dark,
                                    absoluteFilepathToDocsConfig
                                })
                              : undefined,
                      light:
                          logo.light != null
                              ? await convertImageReference({
                                    rawImageReference: logo.light,
                                    absoluteFilepathToDocsConfig
                                })
                              : undefined,
                      height: logo.height,
                      href: logo.href != null ? logo.href : undefined
                  }
                : undefined,
        favicon:
            favicon != null
                ? await convertImageReference({ rawImageReference: favicon, absoluteFilepathToDocsConfig })
                : undefined,
        backgroundImage:
            backgroundImage != null
                ? await convertImageReference({
                      rawImageReference: backgroundImage,
                      absoluteFilepathToDocsConfig
                  })
                : undefined,
        colors: convertColorsConfiguration(colors ?? {}, context),
        navbarLinks: navbarLinks != null ? convertNavbarLinks(navbarLinks) : undefined,
        typography:
            typography != null
                ? await convertTypographyConfiguration({
                      rawTypography: typography,
                      absoluteFilepathToDocsConfig
                  })
                : undefined,
        layout: convertLayoutConfig(layout)
    };
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
                ? DocsV1Write.SidebarOrHeaderPlacement.Header
                : DocsV1Write.SidebarOrHeaderPlacement.Sidebar,
        tabsPlacement:
            layout.tabsPlacement === "header"
                ? DocsV1Write.SidebarOrHeaderPlacement.Header
                : DocsV1Write.SidebarOrHeaderPlacement.Sidebar
    };
}

function parseSizeConfig(sizeAsString: string | undefined): DocsV1Write.SizeConfig | undefined {
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
    versions,
    navigation,
    absolutePathToFernFolder,
    absolutePathToConfig,
    context
}: {
    versions?: VersionConfig[];
    navigation?: NavigationConfig;
    absolutePathToFernFolder: AbsoluteFilePath;
    absolutePathToConfig: AbsoluteFilePath;
    context: TaskContext;
}): Promise<DocsNavigationConfiguration> {
    if (navigation != null) {
        return await convertNavigationConfiguration({
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
            const result = await RawVersionFileConfigSerializer.parseOrThrow(content);
            const navigation = await convertNavigationConfiguration({
                rawNavigationConfig: result.navigation,
                absolutePathToFernFolder,
                absolutePathToConfig: absoluteFilepathToVersionFile,
                context
            });
            versionedNavbars.push({
                version: version.displayName,
                navigation,
                availability: version.availability,
                slug: version.slug
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
            absolutePath: await resolveFilepath({
                absolutePath: absoluteFilepathToDocsConfig,
                rawUnresolvedFilepath: rawVariant.path
            }),
            weight: parseWeight(rawVariant.weight),
            style: rawVariant.style
        }))
    );
}

function parseWeight(weight: string | undefined): string[] | undefined {
    if (weight == null) {
        return undefined;
    }

    const weights = weight
        .split(/\D+/)
        .filter(
            (item) => item !== "" && ["100", "200", "300", "400", "500", "600", "700", "800", "900"].includes(item)
        );

    return weights;
}

async function convertNavigationConfiguration({
    rawNavigationConfig,
    absolutePathToFernFolder,
    absolutePathToConfig,
    context
}: {
    rawNavigationConfig: RawDocs.NavigationConfig;
    absolutePathToFernFolder: AbsoluteFilePath;
    absolutePathToConfig: AbsoluteFilePath;
    context: TaskContext;
}): Promise<UntabbedDocsNavigation | TabbedDocsNavigation> {
    if (isTabbedNavigationConfig(rawNavigationConfig)) {
        const tabbedNavigationItems = await Promise.all(
            rawNavigationConfig.map(async (item) => {
                const layout = await Promise.all(
                    item.layout.map((item) =>
                        convertNavigationItem({
                            rawConfig: item,
                            absolutePathToFernFolder,
                            absolutePathToConfig,
                            context
                        })
                    )
                );
                return {
                    tab: item.tab,
                    layout
                };
            })
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
        return {
            type: "page",
            title: rawConfig.page,
            absolutePath: await resolveFilepath({
                absolutePath: absolutePathToConfig,
                rawUnresolvedFilepath: rawConfig.path
            }),
            slug: rawConfig.slug ?? undefined
        };
    }
    if (isRawSectionConfig(rawConfig)) {
        return {
            type: "section",
            title: rawConfig.section,
            contents: await Promise.all(
                rawConfig.contents.map((item) =>
                    convertNavigationItem({ rawConfig: item, absolutePathToFernFolder, absolutePathToConfig, context })
                )
            ),
            slug: rawConfig.slug ?? undefined,
            collapsed: rawConfig.collapsed ?? undefined
        };
    }
    if (isRawApiSectionConfig(rawConfig)) {
        return {
            type: "apiSection",
            title: rawConfig.api,
            apiName: rawConfig.apiName ?? undefined,
            audiences:
                rawConfig.audiences != null ? { type: "select", audiences: rawConfig.audiences } : { type: "all" },
            showErrors: rawConfig.displayErrors ?? false,
            snippetsConfiguration:
                rawConfig.snippets != null ? convertSnippetsConfiguration({ rawConfig: rawConfig.snippets }) : undefined
        };
    }
    assertNever(rawConfig);
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
        java: rawConfig.java
    };
}

function isRawPageConfig(item: RawDocs.NavigationItem): item is RawDocs.PageConfiguration {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return (item as RawDocs.PageConfiguration).page != null;
}

function isRawSectionConfig(item: RawDocs.NavigationItem): item is RawDocs.SectionConfiguration {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return (item as RawDocs.SectionConfiguration).section != null;
}

function isRawApiSectionConfig(item: RawDocs.NavigationItem): item is RawDocs.ApiSectionConfiguration {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return (item as RawDocs.ApiSectionConfiguration).api != null;
}

async function convertImageReference({
    rawImageReference,
    absoluteFilepathToDocsConfig
}: {
    rawImageReference: string;
    absoluteFilepathToDocsConfig: AbsoluteFilePath;
}): Promise<ImageReference> {
    return {
        filepath: await resolveFilepath({
            absolutePath: absoluteFilepathToDocsConfig,
            rawUnresolvedFilepath: rawImageReference
        })
    };
}

function getColorType({ background, accentPrimary }: RawDocs.ColorsConfiguration): "dark" | "light" | "darkAndLight" {
    if (background != null) {
        if (typeof background === "string") {
            return tinycolor(background).isDark() ? "dark" : "light";
        }
        if (background.dark != null && background.light != null) {
            return "darkAndLight";
        }
    }

    if (accentPrimary != null) {
        if (typeof accentPrimary === "string") {
            // the luminance of the accent color must always be the opposite of the theme
            // if the accent color is dark, the theme must be light and vice versa
            return tinycolor(accentPrimary).isLight() ? "dark" : "light";
        }
        if (accentPrimary.dark != null && accentPrimary.light != null) {
            return "darkAndLight";
        }
    }

    if (accentPrimary != null && background != null) {
        if (background.dark != null && accentPrimary.dark != null) {
            return "dark";
        }

        if (background.light != null && accentPrimary.light != null) {
            return "light";
        }
    }

    // prefer "darkAndLight" unless both the accentPrimary and background are pinned to the same theme
    return "darkAndLight";
}

function convertColorsConfiguration(
    rawConfig: RawDocs.ColorsConfiguration,
    context: TaskContext
): DocsV1Write.ColorsConfigV3 {
    const colorType = getColorType(rawConfig);
    switch (colorType) {
        case "dark":
            return {
                type: "dark",
                ...convertColorConfig(rawConfig, context, "dark")
            };
        case "light":
            return {
                type: "light",
                ...convertColorConfig(rawConfig, context, "light")
            };
        case "darkAndLight":
            return {
                type: "darkAndLight",
                dark: convertColorConfig(rawConfig, context, "dark"),
                light: convertColorConfig(rawConfig, context, "light")
            };
        default:
            assertNever(colorType);
    }
}

function convertColorConfig(
    rawConfig: RawDocs.ColorsConfiguration,
    context: TaskContext,
    theme: "dark" | "light"
): DocsV1Write.DarkModeConfig | DocsV1Write.LightModeConfig {
    let accentPrimaryColor = getColorInstanceFromRawConfig(rawConfig.accentPrimary, context, "accentPrimary", theme);
    let backgroundColor = getColorInstanceFromRawConfig(rawConfig.background, context, "background", theme);

    // the toDark() and toLight() functions are meant to improve color contrast and catch any cases where
    // only one of the dark or light color is provided for either the accentPrimary or background
    accentPrimaryColor = theme === "dark" ? toLight(accentPrimaryColor) : toDark(accentPrimaryColor);
    backgroundColor = theme === "dark" ? toDark(backgroundColor) : toLight(backgroundColor);

    // TODO: move this warning to fern-check
    if (accentPrimaryColor != null && backgroundColor != null) {
        if (!tinycolor.isReadable(accentPrimaryColor, backgroundColor)) {
            const ratio = tinycolor.readability(accentPrimaryColor, backgroundColor);
            context.logger.warn(
                `The accent color is not readable on the background color in ${theme} mode. The contrast ratio is ${ratio}.`
            );
        }
    }

    return {
        accentPrimary: toRgb(accentPrimaryColor),
        background: toRgb(backgroundColor)
    };
}

function toLight(color: tinycolor.Instance | undefined): tinycolor.Instance | undefined {
    if (color == null) {
        return undefined;
    }
    return color.isLight() ? color : color.lighten(20);
}

function toDark(color: tinycolor.Instance | undefined): tinycolor.Instance | undefined {
    if (color == null) {
        return undefined;
    }
    return color.isDark() ? color : color.darken(20);
}

function toRgb(color: tinycolor.Instance | undefined): DocsV1Write.RgbColor | undefined {
    if (color == null) {
        return undefined;
    }
    const { r, g, b } = color.toRgb();
    return { r, g, b };
}

function getColorInstanceFromRawConfig(
    raw: RawDocs.ColorConfig | undefined,
    context: TaskContext,
    key: string,
    theme: "dark" | "light"
): tinycolor.Instance | undefined {
    if (raw == null) {
        return undefined;
    }

    const rawColor = typeof raw === "string" ? raw : raw[theme] ?? raw.dark ?? raw.light;

    if (rawColor == null) {
        return undefined;
    }

    const color = tinycolor(rawColor);
    if (!color.isValid()) {
        context.failAndThrow(
            `'${typeof raw === "string" ? key : `${key}.${theme}`}' should be a hex color of the format #FFFFFF`
        );
    }
    return color;
}

function convertNavbarLinks(rawConfig: RawDocs.NavbarLink[]): DocsV1Write.NavbarLink[] {
    return rawConfig.map((rawNavbarLink) => {
        switch (rawNavbarLink.type) {
            case "primary":
                return {
                    type: "primary",
                    text: rawNavbarLink.text,
                    url: rawNavbarLink.url
                };
            case "secondary":
                return {
                    type: "secondary",
                    text: rawNavbarLink.text,
                    url: rawNavbarLink.url
                };
            default:
                assertNever(rawNavbarLink);
        }
    });
}

async function resolveFilepath({
    rawUnresolvedFilepath,
    absolutePath
}: {
    rawUnresolvedFilepath: string;
    absolutePath: AbsoluteFilePath;
}): Promise<AbsoluteFilePath> {
    const resolved = resolve(dirname(absolutePath), rawUnresolvedFilepath);
    return resolved;
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
