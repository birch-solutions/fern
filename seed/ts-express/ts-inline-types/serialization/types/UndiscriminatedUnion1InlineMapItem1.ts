/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedObject from "../../api/index";
import * as core from "../../core";

export const UndiscriminatedUnion1InlineMapItem1: core.serialization.ObjectSchema<
    serializers.UndiscriminatedUnion1InlineMapItem1.Raw,
    SeedObject.UndiscriminatedUnion1InlineMapItem1
> = core.serialization.object({
    foo: core.serialization.string(),
    ref: core.serialization.lazyObject(() => serializers.ReferenceType),
});

export declare namespace UndiscriminatedUnion1InlineMapItem1 {
    export interface Raw {
        foo: string;
        ref: serializers.ReferenceType.Raw;
    }
}
