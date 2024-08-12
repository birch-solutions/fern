/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const SdkGroupName: core.serialization.Schema<serializers.SdkGroupName.Raw, FernOpenapiIr.SdkGroupName> =
    core.serialization.list(core.serialization.string());

export declare namespace SdkGroupName {
    type Raw = string[];
}
