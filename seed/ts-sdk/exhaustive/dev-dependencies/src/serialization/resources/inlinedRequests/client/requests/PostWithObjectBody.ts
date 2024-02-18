/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Fiddle from "../../../../../api";
import * as core from "../../../../../core";

export const PostWithObjectBody: core.serialization.Schema<
    serializers.PostWithObjectBody.Raw,
    Fiddle.PostWithObjectBody
> = core.serialization.object({
    string: core.serialization.string(),
    integer: core.serialization.number(),
    nestedObject: core.serialization.property(
        "NestedObject",
        core.serialization.lazyObject(async () => (await import("../../../..")).types.ObjectWithOptionalField)
    ),
});

export declare namespace PostWithObjectBody {
    interface Raw {
        string: string;
        integer: number;
        NestedObject: serializers.types.ObjectWithOptionalField.Raw;
    }
}
