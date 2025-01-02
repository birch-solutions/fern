/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDocsConfig from "../../../index";

export interface TabConfig extends FernDocsConfig.WithPermissions {
    displayName: string;
    icon?: string;
    slug?: string;
    skipSlug?: boolean;
    hidden?: boolean;
    /**
     * If `href` is set, clicking on the tab will redirect to the given URL.
     *
     * Tabs with `href` must not have children in the navigation config.
     */
    href?: string;
    changelog?: FernDocsConfig.ChangelogFolderRelativePath;
}
