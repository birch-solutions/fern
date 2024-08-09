/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const Header: core.serialization.ObjectSchema<serializers.Header.Raw, FernOpenapiIr.Header> = core.serialization
    .objectWithoutOptionalProperties({
        name: core.serialization.string(),
        schema: core.serialization.lazy(async () => (await import("../../..")).Schema),
        env: core.serialization.string().optional(),
        parameterNameOverride: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithAvailability))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSource));

export declare namespace Header {
    interface Raw
        extends serializers.WithDescription.Raw,
            serializers.WithAvailability.Raw,
            serializers.WithSource.Raw {
        name: string;
        schema: serializers.Schema.Raw;
        env?: string | null;
        parameterNameOverride?: string | null;
    }
}
