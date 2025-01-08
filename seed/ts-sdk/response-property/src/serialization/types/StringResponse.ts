/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as SeedResponseProperty from "../../api/index.js";
import * as core from "../../core/index.js";

export const StringResponse: core.serialization.ObjectSchema<
    serializers.StringResponse.Raw,
    SeedResponseProperty.StringResponse
> = core.serialization.object({
    data: core.serialization.string(),
});

export declare namespace StringResponse {
    export interface Raw {
        data: string;
    }
}
