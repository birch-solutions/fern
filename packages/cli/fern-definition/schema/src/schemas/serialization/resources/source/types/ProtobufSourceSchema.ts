/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";

export const ProtobufSourceSchema: core.serialization.ObjectSchema<
    serializers.ProtobufSourceSchema.Raw,
    FernDefinition.ProtobufSourceSchema
> = core.serialization.object({
    proto: core.serialization.string(),
});

export declare namespace ProtobufSourceSchema {
    export interface Raw {
        proto: string;
    }
}
