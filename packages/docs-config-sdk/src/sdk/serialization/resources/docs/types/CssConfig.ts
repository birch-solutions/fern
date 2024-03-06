/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const CssConfig: core.serialization.Schema<serializers.CssConfig.Raw, FernDocsConfig.CssConfig> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.list(core.serialization.string()),
    ]);

export declare namespace CssConfig {
    type Raw = string | string[];
}
