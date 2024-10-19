/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernDefinition from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { AuthVariable } from "./AuthVariable";
import { WithDocsSchema } from "../../commons/types/WithDocsSchema";

export const BearerAuthSchemeSchema: core.serialization.ObjectSchema<
    serializers.fernDefinition.BearerAuthSchemeSchema.Raw,
    FernDefinition.fernDefinition.BearerAuthSchemeSchema
> = core.serialization
    .object({
        scheme: core.serialization.stringLiteral("bearer"),
        token: AuthVariable.optional(),
    })
    .extend(WithDocsSchema);

export declare namespace BearerAuthSchemeSchema {
    interface Raw extends WithDocsSchema.Raw {
        scheme: "bearer";
        token?: AuthVariable.Raw | null;
    }
}
