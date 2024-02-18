/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const WebsocketMessage: core.serialization.ObjectSchema<
    serializers.WebsocketMessage.Raw,
    FernIr.WebsocketMessage
> = core.serialization
    .objectWithoutOptionalProperties({
        displayName: core.serialization.string().optional(),
        origin: core.serialization.lazy(async () => (await import("../../..")).WebsocketMessageOrigin),
        body: core.serialization.lazy(async () => (await import("../../..")).WebsocketMessageBody),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Declaration));

export declare namespace WebsocketMessage {
    interface Raw extends serializers.Declaration.Raw {
        displayName?: string | null;
        origin: serializers.WebsocketMessageOrigin.Raw;
        body: serializers.WebsocketMessageBody.Raw;
    }
}
