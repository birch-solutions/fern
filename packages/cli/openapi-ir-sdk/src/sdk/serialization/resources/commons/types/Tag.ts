/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const Tag: core.serialization.ObjectSchema<serializers.Tag.Raw, FernOpenapiIr.Tag> = core.serialization
    .objectWithoutOptionalProperties({
        id: core.serialization.lazy(async () => (await import("../../..")).TagId),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription));

export declare namespace Tag {
    interface Raw extends serializers.WithDescription.Raw {
        id: serializers.TagId.Raw;
    }
}
