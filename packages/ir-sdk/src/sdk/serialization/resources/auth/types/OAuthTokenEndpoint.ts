/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const OAuthTokenEndpoint: core.serialization.ObjectSchema<
    serializers.OAuthTokenEndpoint.Raw,
    FernIr.OAuthTokenEndpoint
> = core.serialization.objectWithoutOptionalProperties({
    endpointReference: core.serialization.lazyObject(async () => (await import("../../..")).EndpointReference),
    requestProperties: core.serialization.lazyObject(
        async () => (await import("../../..")).OAuthAccessTokenRequestProperties
    ),
    responseProperties: core.serialization.lazyObject(
        async () => (await import("../../..")).OAuthAccessTokenResponseProperties
    ),
});

export declare namespace OAuthTokenEndpoint {
    interface Raw {
        endpointReference: serializers.EndpointReference.Raw;
        requestProperties: serializers.OAuthAccessTokenRequestProperties.Raw;
        responseProperties: serializers.OAuthAccessTokenResponseProperties.Raw;
    }
}
