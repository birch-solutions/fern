/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const MapSchemaWithExample: core.serialization.ObjectSchema<
    serializers.MapSchemaWithExample.Raw,
    FernOpenapiIr.MapSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        key: core.serialization.lazyObject(async () => (await import("../../..")).PrimitiveSchemaWithExample),
        value: core.serialization.lazy(async () => (await import("../../..")).SchemaWithExample),
        example: core.serialization.unknown().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSdkGroupName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription));

export declare namespace MapSchemaWithExample {
    interface Raw extends serializers.WithSdkGroupName.Raw, serializers.WithName.Raw, serializers.WithDescription.Raw {
        key: serializers.PrimitiveSchemaWithExample.Raw;
        value: serializers.SchemaWithExample.Raw;
        example?: unknown | null;
    }
}
