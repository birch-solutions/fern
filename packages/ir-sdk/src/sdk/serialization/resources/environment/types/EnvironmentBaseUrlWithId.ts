/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const EnvironmentBaseUrlWithId: core.serialization.ObjectSchema<
    serializers.EnvironmentBaseUrlWithId.Raw,
    FernIr.EnvironmentBaseUrlWithId
> = core.serialization.objectWithoutOptionalProperties({
    id: core.serialization.lazy(async () => (await import("../../..")).EnvironmentBaseUrlId),
    name: core.serialization.lazyObject(async () => (await import("../../..")).Name),
});

export declare namespace EnvironmentBaseUrlWithId {
    interface Raw {
        id: serializers.EnvironmentBaseUrlId.Raw;
        name: serializers.Name.Raw;
    }
}
