/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const PlatformHeaders: core.serialization.ObjectSchema<serializers.PlatformHeaders.Raw, FernIr.PlatformHeaders> =
    core.serialization.objectWithoutOptionalProperties({
        language: core.serialization.string(),
        sdkName: core.serialization.string(),
        sdkVersion: core.serialization.string(),
    });

export declare namespace PlatformHeaders {
    interface Raw {
        language: string;
        sdkName: string;
        sdkVersion: string;
    }
}
