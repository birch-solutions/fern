/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedObject from "../../api/index";
import * as core from "../../core";
import { ReferenceType } from "./ReferenceType";

export const UndiscriminatedUnion1DiscriminatedUnion1InlineType1InlineType1: core.serialization.ObjectSchema<
    serializers.UndiscriminatedUnion1DiscriminatedUnion1InlineType1InlineType1.Raw,
    SeedObject.UndiscriminatedUnion1DiscriminatedUnion1InlineType1InlineType1
> = core.serialization.object({
    foo: core.serialization.string(),
    ref: ReferenceType,
});

export declare namespace UndiscriminatedUnion1DiscriminatedUnion1InlineType1InlineType1 {
    interface Raw {
        foo: string;
        ref: ReferenceType.Raw;
    }
}
