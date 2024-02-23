/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const NullableSchemaWithExample: core.serialization.ObjectSchema<
    serializers.NullableSchemaWithExample.Raw,
    FernOpenapiIr.NullableSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        value: core.serialization.lazy(async () => (await import("../../..")).SchemaWithExample),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSdkGroupName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription));

export declare namespace NullableSchemaWithExample {
    interface Raw extends serializers.WithSdkGroupName.Raw, serializers.WithName.Raw, serializers.WithDescription.Raw {
        value: serializers.SchemaWithExample.Raw;
    }
}
