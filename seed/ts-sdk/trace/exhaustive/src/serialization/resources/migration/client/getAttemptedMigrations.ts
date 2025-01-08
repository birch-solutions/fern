/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { Migration } from "../types/Migration.js";

export const Response: core.serialization.Schema<
    serializers.migration.getAttemptedMigrations.Response.Raw,
    SeedTrace.Migration[]
> = core.serialization.list(Migration);

export declare namespace Response {
    export type Raw = Migration.Raw[];
}
