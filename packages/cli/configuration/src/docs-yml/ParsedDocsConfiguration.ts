import { DocsV1Write } from "@fern-api/fdr-sdk";
import { AbsoluteFilePath, RelativeFilePath } from "@fern-api/fs-utils";
import { z, ZodType } from "zod";
import { Audiences } from "../commons";
import { WithoutQuestionMarks } from "../commons/WithoutQuestionMarks";
import { DocsInstances, TabConfig, VersionAvailability } from "./schemas";

export interface ParsedDocsConfiguration {
    absoluteFilepath: AbsoluteFilePath;
    instances: DocsInstances[];
    tabs?: Record<RelativeFilePath, TabConfig>;
    navigation: DocsNavigationConfiguration;
    title: string | undefined;
    logo: Logo | undefined;
    favicon: ImageReference | undefined;
    backgroundImage: BackgroundImage | undefined;
    colors: DocsV1Write.ColorsConfigV3 | undefined;
    navbarLinks: DocsV1Write.NavbarLink[] | undefined;
    typography: TypographyConfig | undefined;
    layout: WithoutQuestionMarks<DocsV1Write.DocsLayoutConfig> | undefined;
    /* filepath of page to contents */
    pages: Record<RelativeFilePath, string>;
    css: DocsV1Write.CssConfig | undefined;
    js: JavascriptConfig | undefined;
}

export interface AbsoluteJsFileConfig {
    absolutePath: AbsoluteFilePath;
    strategy?: DocsV1Write.JsScriptStrategy;
}

export interface JavascriptConfig {
    remote?: DocsV1Write.JsRemoteConfig[];
    files: AbsoluteJsFileConfig[];
}

export interface DocsColorsConfiguration {
    accentPrimary: ColorConfiguration | undefined;
    background: ColorConfiguration | undefined;
}

export type ColorConfiguration =
    | {
          type: "themed";
          dark: DocsV1Write.RgbaColor | undefined;
          light: DocsV1Write.RgbaColor | undefined;
      }
    | {
          type: "unthemed";
          color: DocsV1Write.RgbaColor | undefined;
      };

export interface Logo {
    dark: ImageReference | undefined;
    light: ImageReference | undefined;
    height: DocsV1Write.Height | undefined;
    href: DocsV1Write.Url | undefined;
}

export interface BackgroundImage {
    dark: ImageReference | undefined;
    light: ImageReference | undefined;
}

export interface FontConfig {
    name: string | undefined;
    variants: FontVariant[];
    display: DocsV1Write.FontDisplay | undefined;
    fallback: string[] | undefined;
    fontVariationSettings: string | undefined;
}

export interface FontVariant {
    absolutePath: AbsoluteFilePath;
    weight: string[] | undefined;
    style: DocsV1Write.FontStyle | undefined;
}

export interface TypographyConfig {
    /**
     * The font family applied to all headings in the docs.
     * If this is not supplied, it defaults to the body font family.
     */
    headingsFont: FontConfig | undefined;
    /**
     * The font family applied to all paragraph content in the docs.
     */
    bodyFont: FontConfig | undefined;
    /**
     * The font family applied to all code blocks and inline
     * code snippets in the documentation site.
     */
    codeFont: FontConfig | undefined;
}

export interface ImageReference {
    filepath: AbsoluteFilePath;
}

export interface UntabbedDocsNavigation {
    type: "untabbed";
    items: DocsNavigationItem[];
}

export interface TabbedDocsNavigation {
    type: "tabbed";
    items: TabbedNavigation[];
}

export interface VersionedDocsNavigation {
    type: "versioned";
    versions: VersionInfo[];
}

export interface VersionInfo {
    navigation: UntabbedDocsNavigation | TabbedDocsNavigation;
    version: string;
    availability: VersionAvailability | undefined;
    slug: string | undefined;
}

export type DocsNavigationConfiguration = UntabbedDocsNavigation | TabbedDocsNavigation | VersionedDocsNavigation;

export type UnversionedNavigationConfiguration = UntabbedDocsNavigation | TabbedDocsNavigation;

export interface TabbedNavigation {
    tab: string;
    layout: DocsNavigationItem[];
}

export type DocsNavigationItem =
    | DocsNavigationItem.Page
    | DocsNavigationItem.Section
    | DocsNavigationItem.ApiSection
    | DocsNavigationItem.Link;

export declare namespace DocsNavigationItem {
    export interface Page {
        type: "page";
        title: string;
        absolutePath: AbsoluteFilePath;
        slug: string | undefined;
    }

    export interface Section {
        type: "section";
        title: string;
        contents: DocsNavigationItem[];
        collapsed: boolean | undefined;
        slug: string | undefined;
    }

    export interface ApiSection {
        type: "apiSection";
        title: string;
        apiName: string | undefined;
        audiences: Audiences;
        showErrors: boolean;
        snippetsConfiguration: SnippetsConfiguration | undefined;
        summaryAbsolutePath: AbsoluteFilePath | undefined;
        navigation: APINavigationSchema | undefined;
    }

    export interface Link {
        type: "link";
        text: string;
        url: string;
    }

    export interface SnippetsConfiguration {
        python: string | undefined;
        typescript: string | undefined;
        go: string | undefined;
        java: string | undefined;
    }
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface ApiNavigationGroup {
    [key: string]: ApiNavigationItem[];
}
export const ApiNavigationGroup: ZodType<ApiNavigationGroup> = z.lazy(() => z.record(z.array(ApiNavigationItem)));

export const ApiNavigationItem = z.union([z.string(), ApiNavigationGroup]);
export type ApiNavigationItem = z.infer<typeof ApiNavigationItem>;

/**
 * NavigationSchema is a recursive schema that can be either a record,
 * a list of records, or a list of strings where the strings are endpoint ids
 * and the records are groups of endpoint ids for a subpackage.
 *
 * @example
 *   - groupA
 *   - groupB:
 *      - methodA
 *      - methodB
 *      - groupC:
 *          - methodC
 */
export const APINavigationSchema = z.array(ApiNavigationItem);
export type APINavigationSchema = z.infer<typeof APINavigationSchema>;
