/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedObject from "../../api/index";
import * as core from "../../core";

export const AliasMapInline: core.serialization.Schema<serializers.AliasMapInline.Raw, SeedObject.AliasMapInline> =
    core.serialization.record(
        core.serialization.string(),
        core.serialization.lazyObject(() => serializers.AliasInlineValue),
    );

export declare namespace AliasMapInline {
    type Raw = Record<string, serializers.AliasInlineValue.Raw>;
}
