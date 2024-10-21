/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { PypiOutputMetadataSchema } from "./PypiOutputMetadataSchema";

export const PypiOutputLocationSchema: core.serialization.ObjectSchema<
    serializers.PypiOutputLocationSchema.Raw,
    FernDefinition.PypiOutputLocationSchema
> = core.serialization.object({
    url: core.serialization.string().optional(),
    "package-name": core.serialization.string(),
    token: core.serialization.string().optional(),
    username: core.serialization.string().optional(),
    password: core.serialization.string().optional(),
    metadata: PypiOutputMetadataSchema.optional(),
});

export declare namespace PypiOutputLocationSchema {
    interface Raw {
        url?: string | null;
        "package-name": string;
        token?: string | null;
        username?: string | null;
        password?: string | null;
        metadata?: PypiOutputMetadataSchema.Raw | null;
    }
}
