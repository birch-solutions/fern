/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const Constants: core.serialization.ObjectSchema<serializers.Constants.Raw, FernIr.Constants> =
    core.serialization.objectWithoutOptionalProperties({
        errorInstanceIdKey: core.serialization.lazyObject(async () => (await import("../../..")).NameAndWireValue),
    });

export declare namespace Constants {
    interface Raw {
        errorInstanceIdKey: serializers.NameAndWireValue.Raw;
    }
}
