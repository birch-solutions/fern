/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernDefinition from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const OAuthAccessTokenResponsePropertiesSchema: core.serialization.ObjectSchema<
    serializers.fernDefinition.OAuthAccessTokenResponsePropertiesSchema.Raw,
    FernDefinition.fernDefinition.OAuthAccessTokenResponsePropertiesSchema
> = core.serialization.object({
    "access-token": core.serialization.string().optional(),
    "expires-in": core.serialization.string().optional(),
    "refresh-token": core.serialization.string().optional(),
});

export declare namespace OAuthAccessTokenResponsePropertiesSchema {
    export interface Raw {
        "access-token"?: string | null;
        "expires-in"?: string | null;
        "refresh-token"?: string | null;
    }
}
