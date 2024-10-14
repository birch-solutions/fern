/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const WithName: core.serialization.ObjectSchema<serializers.WithName.Raw, FernOpenapiIr.WithName> =
    core.serialization.objectWithoutOptionalProperties({
        originalName: core.serialization.string().optional(),
        nameOverride: core.serialization.string().optional(),
        generatedName: core.serialization.string(),
    });

export declare namespace WithName {
    interface Raw {
        originalName?: string | null;
        nameOverride?: string | null;
        generatedName: string;
    }
}
