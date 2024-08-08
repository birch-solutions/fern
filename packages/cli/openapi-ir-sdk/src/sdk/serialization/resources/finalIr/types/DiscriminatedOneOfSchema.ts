/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const DiscriminatedOneOfSchema: core.serialization.ObjectSchema<
    serializers.DiscriminatedOneOfSchema.Raw,
    FernOpenapiIr.DiscriminatedOneOfSchema
> = core.serialization
    .objectWithoutOptionalProperties({
        discriminantProperty: core.serialization.string(),
        commonProperties: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).CommonProperty)
        ),
        schemas: core.serialization.record(
            core.serialization.string(),
            core.serialization.lazy(async () => (await import("../../..")).Schema)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSdkGroupName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithAvailability))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSource));

export declare namespace DiscriminatedOneOfSchema {
    interface Raw
        extends serializers.WithDescription.Raw,
            serializers.WithName.Raw,
            serializers.WithSdkGroupName.Raw,
            serializers.WithAvailability.Raw,
            serializers.WithSource.Raw {
        discriminantProperty: string;
        commonProperties: serializers.CommonProperty.Raw[];
        schemas: Record<string, serializers.Schema.Raw>;
    }
}
