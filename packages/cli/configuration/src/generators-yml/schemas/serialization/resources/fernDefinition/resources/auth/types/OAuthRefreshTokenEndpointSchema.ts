/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernDefinition from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { OAuthRefreshTokenRequestPropertiesSchema } from "./OAuthRefreshTokenRequestPropertiesSchema";
import { OAuthRefreshTokenResponsePropertiesSchema } from "./OAuthRefreshTokenResponsePropertiesSchema";

export const OAuthRefreshTokenEndpointSchema: core.serialization.ObjectSchema<
    serializers.fernDefinition.OAuthRefreshTokenEndpointSchema.Raw,
    FernDefinition.fernDefinition.OAuthRefreshTokenEndpointSchema
> = core.serialization.object({
    endpoint: core.serialization.string(),
    "request-properties": OAuthRefreshTokenRequestPropertiesSchema.optional(),
    "response-properties": OAuthRefreshTokenResponsePropertiesSchema.optional(),
});

export declare namespace OAuthRefreshTokenEndpointSchema {
    interface Raw {
        endpoint: string;
        "request-properties"?: OAuthRefreshTokenRequestPropertiesSchema.Raw | null;
        "response-properties"?: OAuthRefreshTokenResponsePropertiesSchema.Raw | null;
    }
}
