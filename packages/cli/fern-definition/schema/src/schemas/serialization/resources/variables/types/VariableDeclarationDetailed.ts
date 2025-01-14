/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { WithDocsSchema } from "../../commons/types/WithDocsSchema";

export const VariableDeclarationDetailed: core.serialization.ObjectSchema<
    serializers.VariableDeclarationDetailed.Raw,
    FernDefinition.VariableDeclarationDetailed
> = core.serialization
    .object({
        type: core.serialization.string(),
    })
    .extend(WithDocsSchema);

export declare namespace VariableDeclarationDetailed {
    export interface Raw extends WithDocsSchema.Raw {
        type: string;
    }
}
