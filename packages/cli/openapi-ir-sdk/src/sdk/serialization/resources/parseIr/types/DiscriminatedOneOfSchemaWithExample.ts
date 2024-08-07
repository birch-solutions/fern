/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const DiscriminatedOneOfSchemaWithExample: core.serialization.ObjectSchema<
    serializers.DiscriminatedOneOfSchemaWithExample.Raw,
    FernOpenapiIr.DiscriminatedOneOfSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        discriminantProperty: core.serialization.string(),
        commonProperties: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).CommonPropertyWithExample)
        ),
        schemas: core.serialization.record(
            core.serialization.string(),
            core.serialization.lazy(async () => (await import("../../..")).SchemaWithExample)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSdkGroupName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithAvailability))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSource));

export declare namespace DiscriminatedOneOfSchemaWithExample {
    interface Raw
        extends serializers.WithDescription.Raw,
            serializers.WithName.Raw,
            serializers.WithSdkGroupName.Raw,
            serializers.WithAvailability.Raw,
            serializers.WithSource.Raw {
        discriminantProperty: string;
        commonProperties: serializers.CommonPropertyWithExample.Raw[];
        schemas: Record<string, serializers.SchemaWithExample.Raw>;
    }
}
