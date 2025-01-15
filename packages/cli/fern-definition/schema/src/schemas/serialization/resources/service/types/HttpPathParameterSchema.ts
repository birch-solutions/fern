/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { TypeReferenceSchema } from "../../types/types/TypeReferenceSchema";
import { VariableReferenceSchema } from "../../variables/types/VariableReferenceSchema";

export const HttpPathParameterSchema: core.serialization.Schema<
    serializers.HttpPathParameterSchema.Raw,
    FernDefinition.HttpPathParameterSchema
> = core.serialization.undiscriminatedUnion([TypeReferenceSchema, VariableReferenceSchema]);

export declare namespace HttpPathParameterSchema {
    export type Raw = TypeReferenceSchema.Raw | VariableReferenceSchema.Raw;
}
