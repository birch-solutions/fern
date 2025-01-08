/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index.js";
import * as SeedCrossPackageTypeNames from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";

export const FindRequest: core.serialization.Schema<
    serializers.FindRequest.Raw,
    Omit<SeedCrossPackageTypeNames.FindRequest, "optionalString">
> = core.serialization.object({
    publicProperty: core.serialization.string().optional(),
    privateProperty: core.serialization.number().optional(),
});

export declare namespace FindRequest {
    export interface Raw {
        publicProperty?: string | null;
        privateProperty?: number | null;
    }
}
