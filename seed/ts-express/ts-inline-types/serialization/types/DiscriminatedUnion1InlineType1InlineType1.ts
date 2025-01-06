/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedObject from "../../api/index";
import * as core from "../../core";

export const DiscriminatedUnion1InlineType1InlineType1: core.serialization.ObjectSchema<
    serializers.DiscriminatedUnion1InlineType1InlineType1.Raw,
    SeedObject.DiscriminatedUnion1InlineType1InlineType1
> = core.serialization.object({
    foo: core.serialization.string(),
    ref: core.serialization.lazyObject(() => serializers.ReferenceType),
});

export declare namespace DiscriminatedUnion1InlineType1InlineType1 {
    export interface Raw {
        foo: string;
        ref: serializers.ReferenceType.Raw;
    }
}
