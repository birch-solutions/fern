/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernDefinition from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { WithAudiences } from "../../commons/types/WithAudiences";
import { WithDocsSchema } from "../../commons/types/WithDocsSchema";

export const SingleBaseUrlEnvironmentSchema: core.serialization.ObjectSchema<
    serializers.fernDefinition.SingleBaseUrlEnvironmentSchema.Raw,
    FernDefinition.fernDefinition.SingleBaseUrlEnvironmentSchema
> = core.serialization
    .object({
        url: core.serialization.string(),
    })
    .extend(WithAudiences)
    .extend(WithDocsSchema);

export declare namespace SingleBaseUrlEnvironmentSchema {
    export interface Raw extends WithAudiences.Raw, WithDocsSchema.Raw {
        url: string;
    }
}
