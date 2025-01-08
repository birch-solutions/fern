/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const MigrationStatus: core.serialization.Schema<serializers.MigrationStatus.Raw, SeedTrace.MigrationStatus> =
    core.serialization.enum_(["RUNNING", "FAILED", "FINISHED"]);

export declare namespace MigrationStatus {
    export type Raw = "RUNNING" | "FAILED" | "FINISHED";
}
