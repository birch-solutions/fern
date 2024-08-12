/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const LogRocketConfig: core.serialization.ObjectSchema<
    serializers.LogRocketConfig.Raw,
    FernDocsConfig.LogRocketConfig
> = core.serialization.object({
    apiKey: core.serialization.string(),
});

export declare namespace LogRocketConfig {
    interface Raw {
        apiKey: string;
    }
}
