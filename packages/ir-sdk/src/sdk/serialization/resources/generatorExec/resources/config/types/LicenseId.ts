/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const LicenseId: core.serialization.Schema<
    serializers.generatorExec.LicenseId.Raw,
    FernIr.generatorExec.LicenseId
> = core.serialization.enum_(["MIT", "Apache-2.0"]);

export declare namespace LicenseId {
    export type Raw = "MIT" | "Apache-2.0";
}
