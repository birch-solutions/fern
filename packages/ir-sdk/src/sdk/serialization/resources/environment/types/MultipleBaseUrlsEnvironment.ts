/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const MultipleBaseUrlsEnvironment: core.serialization.ObjectSchema<
    serializers.MultipleBaseUrlsEnvironment.Raw,
    FernIr.MultipleBaseUrlsEnvironment
> = core.serialization
    .objectWithoutOptionalProperties({
        id: core.serialization.lazy(async () => (await import("../../..")).EnvironmentId),
        name: core.serialization.lazyObject(async () => (await import("../../..")).Name),
        urls: core.serialization.record(
            core.serialization.lazy(async () => (await import("../../..")).EnvironmentBaseUrlId),
            core.serialization.lazy(async () => (await import("../../..")).EnvironmentUrl)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDocs));

export declare namespace MultipleBaseUrlsEnvironment {
    interface Raw extends serializers.WithDocs.Raw {
        id: serializers.EnvironmentId.Raw;
        name: serializers.Name.Raw;
        urls: Record<serializers.EnvironmentBaseUrlId.Raw, serializers.EnvironmentUrl.Raw>;
    }
}
