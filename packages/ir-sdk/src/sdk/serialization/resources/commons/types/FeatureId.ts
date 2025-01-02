/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const FeatureId: core.serialization.Schema<serializers.FeatureId.Raw, FernIr.FeatureId> =
    core.serialization.string();

export declare namespace FeatureId {
    export type Raw = string;
}
