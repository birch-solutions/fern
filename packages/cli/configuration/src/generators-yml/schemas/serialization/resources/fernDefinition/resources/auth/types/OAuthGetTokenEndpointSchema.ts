/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernDefinition from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { OAuthAccessTokenRequestPropertiesSchema } from "./OAuthAccessTokenRequestPropertiesSchema";
import { OAuthAccessTokenResponsePropertiesSchema } from "./OAuthAccessTokenResponsePropertiesSchema";

export const OAuthGetTokenEndpointSchema: core.serialization.ObjectSchema<
    serializers.fernDefinition.OAuthGetTokenEndpointSchema.Raw,
    FernDefinition.fernDefinition.OAuthGetTokenEndpointSchema
> = core.serialization.object({
    endpoint: core.serialization.string(),
    "request-properties": OAuthAccessTokenRequestPropertiesSchema.optional(),
    "response-properties": OAuthAccessTokenResponsePropertiesSchema.optional(),
});

export declare namespace OAuthGetTokenEndpointSchema {
    interface Raw {
        endpoint: string;
        "request-properties"?: OAuthAccessTokenRequestPropertiesSchema.Raw | null;
        "response-properties"?: OAuthAccessTokenResponsePropertiesSchema.Raw | null;
    }
}
