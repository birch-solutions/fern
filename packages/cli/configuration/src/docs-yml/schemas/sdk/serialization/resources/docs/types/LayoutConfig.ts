/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";
import { SearchbarPlacement } from "./SearchbarPlacement";
import { TabsPlacement } from "./TabsPlacement";
import { ContentAlignment } from "./ContentAlignment";
import { HeaderPosition } from "./HeaderPosition";

export const LayoutConfig: core.serialization.ObjectSchema<serializers.LayoutConfig.Raw, FernDocsConfig.LayoutConfig> =
    core.serialization.object({
        pageWidth: core.serialization.property("page-width", core.serialization.string().optional()),
        contentWidth: core.serialization.property("content-width", core.serialization.string().optional()),
        sidebarWidth: core.serialization.property("sidebar-width", core.serialization.string().optional()),
        headerHeight: core.serialization.property("header-height", core.serialization.string().optional()),
        searchbarPlacement: core.serialization.property("searchbar-placement", SearchbarPlacement.optional()),
        tabsPlacement: core.serialization.property("tabs-placement", TabsPlacement.optional()),
        contentAlignment: core.serialization.property("content-alignment", ContentAlignment.optional()),
        headerPosition: core.serialization.property("header-position", HeaderPosition.optional()),
        disableHeader: core.serialization.property("disable-header", core.serialization.boolean().optional()),
    });

export declare namespace LayoutConfig {
    export interface Raw {
        "page-width"?: string | null;
        "content-width"?: string | null;
        "sidebar-width"?: string | null;
        "header-height"?: string | null;
        "searchbar-placement"?: SearchbarPlacement.Raw | null;
        "tabs-placement"?: TabsPlacement.Raw | null;
        "content-alignment"?: ContentAlignment.Raw | null;
        "header-position"?: HeaderPosition.Raw | null;
        "disable-header"?: boolean | null;
    }
}
