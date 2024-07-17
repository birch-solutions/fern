/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const QueryParameter: core.serialization.ObjectSchema<
    serializers.QueryParameter.Raw,
    FernOpenapiIr.QueryParameter
> = core.serialization
    .objectWithoutOptionalProperties({
        name: core.serialization.string(),
        schema: core.serialization.lazy(async () => (await import("../../..")).Schema),
        parameterNameOverride: core.serialization.string().optional(),
        availability: core.serialization.lazy(async () => (await import("../../..")).Availability),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription));

export declare namespace QueryParameter {
    interface Raw extends serializers.WithDescription.Raw {
        name: string;
        schema: serializers.Schema.Raw;
        parameterNameOverride?: string | null;
        availability: serializers.Availability.Raw;
    }
}
