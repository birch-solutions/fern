/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const DatetimeWithExample: core.serialization.ObjectSchema<
    serializers.DatetimeWithExample.Raw,
    FernOpenapiIr.DatetimeWithExample
> = core.serialization.objectWithoutOptionalProperties({
    example: core.serialization.string().optional(),
});

export declare namespace DatetimeWithExample {
    export interface Raw {
        example?: string | null;
    }
}
