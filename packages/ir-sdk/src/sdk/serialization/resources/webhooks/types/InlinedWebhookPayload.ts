/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const InlinedWebhookPayload: core.serialization.ObjectSchema<
    serializers.InlinedWebhookPayload.Raw,
    FernIr.InlinedWebhookPayload
> = core.serialization.objectWithoutOptionalProperties({
    name: core.serialization.lazyObject(async () => (await import("../../..")).Name),
    extends: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).DeclaredTypeName)
    ),
    properties: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).InlinedWebhookPayloadProperty)
    ),
});

export declare namespace InlinedWebhookPayload {
    interface Raw {
        name: serializers.Name.Raw;
        extends: serializers.DeclaredTypeName.Raw[];
        properties: serializers.InlinedWebhookPayloadProperty.Raw[];
    }
}
