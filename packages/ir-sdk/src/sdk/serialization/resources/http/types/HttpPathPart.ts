/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const HttpPathPart: core.serialization.ObjectSchema<serializers.HttpPathPart.Raw, FernIr.HttpPathPart> =
    core.serialization.objectWithoutOptionalProperties({
        pathParameter: core.serialization.string(),
        tail: core.serialization.string(),
    });

export declare namespace HttpPathPart {
    interface Raw {
        pathParameter: string;
        tail: string;
    }
}
