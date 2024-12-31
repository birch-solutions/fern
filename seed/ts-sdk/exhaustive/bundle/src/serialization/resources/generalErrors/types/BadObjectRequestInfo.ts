/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Fiddle from "../../../../api/index";
import * as core from "../../../../core";

export const BadObjectRequestInfo: core.serialization.ObjectSchema<
    serializers.BadObjectRequestInfo.Raw,
    Fiddle.BadObjectRequestInfo
> = core.serialization.object({
    message: core.serialization.string(),
});

export declare namespace BadObjectRequestInfo {
    export interface Raw {
        message: string;
    }
}
