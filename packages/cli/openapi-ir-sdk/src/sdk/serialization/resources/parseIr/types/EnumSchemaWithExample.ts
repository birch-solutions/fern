/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const EnumSchemaWithExample: core.serialization.ObjectSchema<
    serializers.EnumSchemaWithExample.Raw,
    FernOpenapiIr.EnumSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        default: core.serialization.lazyObject(async () => (await import("../../..")).EnumValue).optional(),
        values: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).EnumValue)
        ),
        example: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSdkGroupName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithAvailability))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSource));

export declare namespace EnumSchemaWithExample {
    interface Raw
        extends serializers.WithDescription.Raw,
            serializers.WithName.Raw,
            serializers.WithSdkGroupName.Raw,
            serializers.WithAvailability.Raw,
            serializers.WithSource.Raw {
        default?: serializers.EnumValue.Raw | null;
        values: serializers.EnumValue.Raw[];
        example?: string | null;
    }
}
