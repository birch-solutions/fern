/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";

export const ProtobufDefinitionSchema: core.serialization.ObjectSchema<
    serializers.ProtobufDefinitionSchema.Raw,
    FernDefinition.ProtobufDefinitionSchema
> = core.serialization.object({
    root: core.serialization.string(),
    target: core.serialization.string(),
    overrides: core.serialization.string().optional(),
    "local-generation": core.serialization.boolean().optional(),
});

export declare namespace ProtobufDefinitionSchema {
    export interface Raw {
        root: string;
        target: string;
        overrides?: string | null;
        "local-generation"?: boolean | null;
    }
}
