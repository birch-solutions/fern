/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernDefinition from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const WithName: core.serialization.ObjectSchema<
    serializers.fernDefinition.WithName.Raw,
    FernDefinition.fernDefinition.WithName
> = core.serialization.object({
    name: core.serialization.string().optional(),
});

export declare namespace WithName {
    interface Raw {
        name?: string | null;
    }
}
