/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedMixedCase from "../../../../api/index";
import * as core from "../../../../core";

export const ResourceStatus: core.serialization.Schema<serializers.ResourceStatus.Raw, SeedMixedCase.ResourceStatus> = core.serialization.enum_(["ACTIVE", "INACTIVE"]);

export declare namespace ResourceStatus {
    type Raw = "ACTIVE" | "INACTIVE";
}
