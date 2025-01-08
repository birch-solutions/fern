/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedObject from "../../api/index";
import * as core from "../../core";

export const RootType1InlineType1: core.serialization.ObjectSchema<
    serializers.RootType1InlineType1.Raw,
    SeedObject.RootType1InlineType1
> = core.serialization.object({
    foo: core.serialization.string(),
    bar: core.serialization.lazyObject(() => serializers.RootType1InlineType1NestedInlineType1),
    ref: core.serialization.lazyObject(() => serializers.ReferenceType),
});

export declare namespace RootType1InlineType1 {
    interface Raw {
        foo: string;
        bar: serializers.RootType1InlineType1NestedInlineType1.Raw;
        ref: serializers.ReferenceType.Raw;
    }
}
