/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { SingleUndiscriminatedUnionTypeDetailedSchema } from "./SingleUndiscriminatedUnionTypeDetailedSchema";

export const SingleUndiscriminatedUnionTypeSchema: core.serialization.Schema<
    serializers.SingleUndiscriminatedUnionTypeSchema.Raw,
    FernDefinition.SingleUndiscriminatedUnionTypeSchema
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    SingleUndiscriminatedUnionTypeDetailedSchema,
]);

export declare namespace SingleUndiscriminatedUnionTypeSchema {
    export type Raw = string | SingleUndiscriminatedUnionTypeDetailedSchema.Raw;
}
