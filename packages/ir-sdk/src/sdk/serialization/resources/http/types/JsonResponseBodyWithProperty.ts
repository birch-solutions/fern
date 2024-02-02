/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const JsonResponseBodyWithProperty: core.serialization.ObjectSchema<
    serializers.JsonResponseBodyWithProperty.Raw,
    FernIr.JsonResponseBodyWithProperty
> = core.serialization
    .objectWithoutOptionalProperties({
        responseBodyType: core.serialization.lazy(async () => (await import("../../..")).TypeReference),
        responseProperty: core.serialization
            .lazyObject(async () => (await import("../../..")).ObjectProperty)
            .optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDocs));

export declare namespace JsonResponseBodyWithProperty {
    interface Raw extends serializers.WithDocs.Raw {
        responseBodyType: serializers.TypeReference.Raw;
        responseProperty?: serializers.ObjectProperty.Raw | null;
    }
}
