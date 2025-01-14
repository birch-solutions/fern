/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { EnvironmentSchema } from "./EnvironmentSchema";

export const WithEnvironmentsSchema: core.serialization.ObjectSchema<
    serializers.WithEnvironmentsSchema.Raw,
    FernDefinition.WithEnvironmentsSchema
> = core.serialization.object({
    "default-url": core.serialization.string().optional(),
    "default-environment": core.serialization.string().optional(),
    environments: core.serialization.record(core.serialization.string(), EnvironmentSchema).optional(),
});

export declare namespace WithEnvironmentsSchema {
    export interface Raw {
        "default-url"?: string | null;
        "default-environment"?: string | null;
        environments?: Record<string, EnvironmentSchema.Raw> | null;
    }
}
