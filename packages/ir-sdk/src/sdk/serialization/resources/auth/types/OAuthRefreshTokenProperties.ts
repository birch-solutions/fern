/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const OAuthRefreshTokenProperties: core.serialization.ObjectSchema<
    serializers.OAuthRefreshTokenProperties.Raw,
    FernIr.OAuthRefreshTokenProperties
> = core.serialization.objectWithoutOptionalProperties({
    refreshToken: core.serialization.lazyObject(async () => (await import("../../..")).RequestProperty),
});

export declare namespace OAuthRefreshTokenProperties {
    interface Raw {
        refreshToken: serializers.RequestProperty.Raw;
    }
}
