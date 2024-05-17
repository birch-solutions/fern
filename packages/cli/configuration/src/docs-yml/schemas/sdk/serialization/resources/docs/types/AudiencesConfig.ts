/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const AudiencesConfig: core.serialization.Schema<
    serializers.AudiencesConfig.Raw,
    FernDocsConfig.AudiencesConfig
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(core.serialization.string()),
]);

export declare namespace AudiencesConfig {
    type Raw = string | string[];
}
