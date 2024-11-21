/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { BaseTypeReferenceSchema } from "./BaseTypeReferenceSchema";
import { WithName } from "../../commons/types/WithName";
import { WithAudiences } from "../../commons/types/WithAudiences";

export const TypeReferenceDeclarationWithName: core.serialization.ObjectSchema<
    serializers.TypeReferenceDeclarationWithName.Raw,
    FernDefinition.TypeReferenceDeclarationWithName
> = core.serialization
    .object({
        type: core.serialization.string(),
        inline: core.serialization.boolean().optional(),
    })
    .extend(BaseTypeReferenceSchema)
    .extend(WithName)
    .extend(WithAudiences);

export declare namespace TypeReferenceDeclarationWithName {
    interface Raw extends BaseTypeReferenceSchema.Raw, WithName.Raw, WithAudiences.Raw {
        type: string;
        inline?: boolean | null;
    }
}
