/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { DiscriminatedUnionSchema } from "./DiscriminatedUnionSchema";

export const InlinedDiscriminatedUnionSchema: core.serialization.ObjectSchema<
    serializers.InlinedDiscriminatedUnionSchema.Raw,
    FernDefinition.InlinedDiscriminatedUnionSchema
> = core.serialization
    .object({
        name: core.serialization.string(),
    })
    .extend(DiscriminatedUnionSchema);

export declare namespace InlinedDiscriminatedUnionSchema {
    interface Raw extends DiscriminatedUnionSchema.Raw {
        name: string;
    }
}
