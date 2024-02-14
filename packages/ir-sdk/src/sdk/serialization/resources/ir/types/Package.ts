/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const Package: core.serialization.ObjectSchema<serializers.Package.Raw, FernIr.Package> = core.serialization
    .objectWithoutOptionalProperties({
        fernFilepath: core.serialization.lazyObject(async () => (await import("../../..")).FernFilepath),
        service: core.serialization.lazy(async () => (await import("../../..")).ServiceId).optional(),
        types: core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).TypeId)),
        errors: core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).ErrorId)),
        webhooks: core.serialization.lazy(async () => (await import("../../..")).WebhookGroupId).optional(),
        websocket: core.serialization.lazy(async () => (await import("../../..")).WebsocketChannelId).optional(),
        subpackages: core.serialization.list(
            core.serialization.lazy(async () => (await import("../../..")).SubpackageId)
        ),
        hasEndpointsInTree: core.serialization.boolean(),
        navigationConfig: core.serialization
            .lazyObject(async () => (await import("../../..")).PackageNavigationConfig)
            .optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDocs));

export declare namespace Package {
    interface Raw extends serializers.WithDocs.Raw {
        fernFilepath: serializers.FernFilepath.Raw;
        service?: serializers.ServiceId.Raw | null;
        types: serializers.TypeId.Raw[];
        errors: serializers.ErrorId.Raw[];
        webhooks?: serializers.WebhookGroupId.Raw | null;
        websocket?: serializers.WebsocketChannelId.Raw | null;
        subpackages: serializers.SubpackageId.Raw[];
        hasEndpointsInTree: boolean;
        navigationConfig?: serializers.PackageNavigationConfig.Raw | null;
    }
}
