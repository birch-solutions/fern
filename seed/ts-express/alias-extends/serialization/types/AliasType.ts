/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedAliasExtends from "../../api/index";
import * as core from "../../core";

export const AliasType: core.serialization.ObjectSchema<serializers.AliasType.Raw, SeedAliasExtends.AliasType> =
    core.serialization.lazyObject(() => serializers.Parent);

export declare namespace AliasType {
    export type Raw = serializers.Parent.Raw;
}
