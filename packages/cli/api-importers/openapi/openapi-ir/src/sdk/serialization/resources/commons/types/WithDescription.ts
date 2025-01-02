/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const WithDescription: core.serialization.ObjectSchema<
    serializers.WithDescription.Raw,
    FernOpenapiIr.WithDescription
> = core.serialization.objectWithoutOptionalProperties({
    description: core.serialization.string().optional(),
});

export declare namespace WithDescription {
    export interface Raw {
        description?: string | null;
    }
}
