/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const TabsPlacement: core.serialization.Schema<serializers.TabsPlacement.Raw, FernDocsConfig.TabsPlacement> =
    core.serialization.enum_(["header", "sidebar"]);

export declare namespace TabsPlacement {
    type Raw = "header" | "sidebar";
}
