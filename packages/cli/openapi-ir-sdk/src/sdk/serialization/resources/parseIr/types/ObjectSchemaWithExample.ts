/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const ObjectSchemaWithExample: core.serialization.ObjectSchema<
    serializers.ObjectSchemaWithExample.Raw,
    FernOpenapiIr.ObjectSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        allOf: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).ReferencedSchema)
        ),
        properties: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).ObjectPropertyWithExample)
        ),
        allOfPropertyConflicts: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).AllOfPropertyConflict)
        ),
        fullExamples: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).NamedFullExample))
            .optional(),
        additionalProperties: core.serialization.boolean(),
        availability: core.serialization.lazy(async () => (await import("../../..")).Availability),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSdkGroupName));

export declare namespace ObjectSchemaWithExample {
    interface Raw extends serializers.WithDescription.Raw, serializers.WithName.Raw, serializers.WithSdkGroupName.Raw {
        allOf: serializers.ReferencedSchema.Raw[];
        properties: serializers.ObjectPropertyWithExample.Raw[];
        allOfPropertyConflicts: serializers.AllOfPropertyConflict.Raw[];
        fullExamples?: serializers.NamedFullExample.Raw[] | null;
        additionalProperties: boolean;
        availability: serializers.Availability.Raw;
    }
}
