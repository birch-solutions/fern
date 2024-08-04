/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedExamples from "../../../../api/index";
import * as core from "../../../../core";
import { MigrationStatus } from "./MigrationStatus";

export const Migration: core.serialization.ObjectSchema<serializers.Migration.Raw, SeedExamples.Migration> =
    core.serialization.object({
        name: core.serialization.string(),
        status: MigrationStatus,
    });

export declare namespace Migration {
    interface Raw {
        name: string;
        status: MigrationStatus.Raw;
    }
}
