/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const InternalError: core.serialization.ObjectSchema<serializers.InternalError.Raw, SeedTrace.InternalError> =
    core.serialization.object({
        exceptionInfo: core.serialization.lazyObject(() => serializers.ExceptionInfo),
    });

export declare namespace InternalError {
    export interface Raw {
        exceptionInfo: serializers.ExceptionInfo.Raw;
    }
}
