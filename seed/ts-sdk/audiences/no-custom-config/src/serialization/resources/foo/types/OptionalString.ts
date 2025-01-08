/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedAudiences from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const OptionalString: core.serialization.Schema<serializers.OptionalString.Raw, SeedAudiences.OptionalString> =
    core.serialization.string().optional();

export declare namespace OptionalString {
    export type Raw = string | null | undefined;
}
