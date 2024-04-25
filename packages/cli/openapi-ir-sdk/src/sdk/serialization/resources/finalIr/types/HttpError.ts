/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const HttpError: core.serialization.ObjectSchema<serializers.HttpError.Raw, FernOpenapiIr.HttpError> =
    core.serialization
        .objectWithoutOptionalProperties({
            schema: core.serialization.lazy(async () => (await import("../../..")).Schema).optional(),
            examples: core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).ErrorExample))
                .optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription))
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithName));

export declare namespace HttpError {
    interface Raw extends serializers.WithDescription.Raw, serializers.WithName.Raw {
        schema?: serializers.Schema.Raw | null;
        examples?: serializers.ErrorExample.Raw[] | null;
    }
}
