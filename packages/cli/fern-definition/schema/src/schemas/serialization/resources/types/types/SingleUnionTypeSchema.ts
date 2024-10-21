/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { SingleUnionTypeDetailedSchema } from "./SingleUnionTypeDetailedSchema";

export const SingleUnionTypeSchema: core.serialization.Schema<
    serializers.SingleUnionTypeSchema.Raw,
    FernDefinition.SingleUnionTypeSchema
> = core.serialization.undiscriminatedUnion([core.serialization.string(), SingleUnionTypeDetailedSchema]);

export declare namespace SingleUnionTypeSchema {
    type Raw = string | SingleUnionTypeDetailedSchema.Raw;
}
