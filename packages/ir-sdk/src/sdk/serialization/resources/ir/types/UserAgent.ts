/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const UserAgent: core.serialization.ObjectSchema<serializers.UserAgent.Raw, FernIr.UserAgent> =
    core.serialization.objectWithoutOptionalProperties({
        header: core.serialization.stringLiteral("User-Agent"),
        value: core.serialization.string(),
    });

export declare namespace UserAgent {
    export interface Raw {
        header: "User-Agent";
        value: string;
    }
}
