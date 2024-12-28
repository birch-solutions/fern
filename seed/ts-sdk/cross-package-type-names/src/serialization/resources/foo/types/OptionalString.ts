/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedCrossPackageTypeNames from "../../../../api/index";
import * as core from "../../../../core";

export const OptionalString: core.serialization.Schema<
    serializers.OptionalString.Raw,
    SeedCrossPackageTypeNames.OptionalString
> = core.serialization.string().optional();

export declare namespace OptionalString {
    export type Raw = string | null | undefined;
}
