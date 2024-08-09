/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const TextResponse: core.serialization.ObjectSchema<serializers.TextResponse.Raw, FernOpenapiIr.TextResponse> =
    core.serialization
        .objectWithoutOptionalProperties({})
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription))
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSource));

export declare namespace TextResponse {
    interface Raw extends serializers.WithDescription.Raw, serializers.WithSource.Raw {}
}
