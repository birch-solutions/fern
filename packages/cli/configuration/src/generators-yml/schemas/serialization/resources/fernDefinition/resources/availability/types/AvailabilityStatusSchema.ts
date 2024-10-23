/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernDefinition from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const AvailabilityStatusSchema: core.serialization.Schema<
    serializers.fernDefinition.AvailabilityStatusSchema.Raw,
    FernDefinition.fernDefinition.AvailabilityStatusSchema
> = core.serialization.enum_(["in-development", "pre-release", "deprecated", "generally-available"]);

export declare namespace AvailabilityStatusSchema {
    type Raw = "in-development" | "pre-release" | "deprecated" | "generally-available";
}
