/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { ResponseError } from "./ResponseError";

export const ResponseErrors: core.serialization.Schema<serializers.ResponseErrors.Raw, FernIr.ResponseErrors> =
    core.serialization.list(ResponseError);

export declare namespace ResponseErrors {
    export type Raw = ResponseError.Raw[];
}
