/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const HotJarConfig: core.serialization.ObjectSchema<serializers.HotJarConfig.Raw, FernDocsConfig.HotJarConfig> =
    core.serialization.object({
        hjid: core.serialization.string(),
        hjsv: core.serialization.string(),
    });

export declare namespace HotJarConfig {
    interface Raw {
        hjid: string;
        hjsv: string;
    }
}
