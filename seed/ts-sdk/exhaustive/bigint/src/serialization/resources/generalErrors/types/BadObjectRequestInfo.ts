/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedExhaustive from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const BadObjectRequestInfo: core.serialization.ObjectSchema<
    serializers.BadObjectRequestInfo.Raw,
    SeedExhaustive.BadObjectRequestInfo
> = core.serialization.object({
    message: core.serialization.string(),
});

export declare namespace BadObjectRequestInfo {
    export interface Raw {
        message: string;
    }
}
