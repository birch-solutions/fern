/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { WithAudiences } from "../../commons/types/WithAudiences";
import { WithDocsSchema } from "../../commons/types/WithDocsSchema";

export const MultipleBaseUrlsEnvironmentSchema: core.serialization.ObjectSchema<
    serializers.MultipleBaseUrlsEnvironmentSchema.Raw,
    FernDefinition.MultipleBaseUrlsEnvironmentSchema
> = core.serialization
    .object({
        urls: core.serialization.record(core.serialization.string(), core.serialization.string()),
    })
    .extend(WithAudiences)
    .extend(WithDocsSchema);

export declare namespace MultipleBaseUrlsEnvironmentSchema {
    export interface Raw extends WithAudiences.Raw, WithDocsSchema.Raw {
        urls: Record<string, string>;
    }
}
