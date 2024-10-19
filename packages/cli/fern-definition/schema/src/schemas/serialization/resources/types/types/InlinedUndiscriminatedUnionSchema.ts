/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { UndiscriminatedUnionSchema } from "./UndiscriminatedUnionSchema";

export const InlinedUndiscriminatedUnionSchema: core.serialization.ObjectSchema<
    serializers.InlinedUndiscriminatedUnionSchema.Raw,
    FernDefinition.InlinedUndiscriminatedUnionSchema
> = core.serialization
    .object({
        name: core.serialization.string(),
    })
    .extend(UndiscriminatedUnionSchema);

export declare namespace InlinedUndiscriminatedUnionSchema {
    interface Raw extends UndiscriminatedUnionSchema.Raw {
        name: string;
    }
}
