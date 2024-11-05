/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ErrorSeverity } from "./ErrorSeverity";

export const Error_: core.serialization.ObjectSchema<serializers.dynamic.Error_.Raw, FernIr.dynamic.Error_> =
    core.serialization.objectWithoutOptionalProperties({
        severity: ErrorSeverity,
        message: core.serialization.string(),
    });

export declare namespace Error_ {
    interface Raw {
        severity: ErrorSeverity.Raw;
        message: string;
    }
}
