/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedExamples from "../../../../api/index";
import * as core from "../../../../core";

export const MigrationStatus: core.serialization.Schema<serializers.MigrationStatus.Raw, SeedExamples.MigrationStatus> = core.serialization.enum_(["RUNNING", "FAILED", "FINISHED"]);

export declare namespace MigrationStatus {
    type Raw = "RUNNING" | "FAILED" | "FINISHED";
}
