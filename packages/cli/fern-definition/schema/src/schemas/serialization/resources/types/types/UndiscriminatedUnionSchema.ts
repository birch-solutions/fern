/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { SingleUndiscriminatedUnionTypeSchema } from "./SingleUndiscriminatedUnionTypeSchema";
import { BaseTypeDeclarationSchema } from "./BaseTypeDeclarationSchema";

export const UndiscriminatedUnionSchema: core.serialization.ObjectSchema<
    serializers.UndiscriminatedUnionSchema.Raw,
    FernDefinition.UndiscriminatedUnionSchema
> = core.serialization
    .object({
        discriminated: core.serialization.booleanLiteral(false),
        union: core.serialization.list(SingleUndiscriminatedUnionTypeSchema),
    })
    .extend(BaseTypeDeclarationSchema);

export declare namespace UndiscriminatedUnionSchema {
    interface Raw extends BaseTypeDeclarationSchema.Raw {
        discriminated: false;
        union: SingleUndiscriminatedUnionTypeSchema.Raw[];
    }
}
