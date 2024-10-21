/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { ApiAuthSchema } from "./ApiAuthSchema";
import { AuthSchemeDeclarationSchema } from "./AuthSchemeDeclarationSchema";

export const WithAuthSchema: core.serialization.ObjectSchema<
    serializers.WithAuthSchema.Raw,
    FernDefinition.WithAuthSchema
> = core.serialization.object({
    auth: ApiAuthSchema.optional(),
    "auth-schemes": core.serialization.record(core.serialization.string(), AuthSchemeDeclarationSchema).optional(),
});

export declare namespace WithAuthSchema {
    interface Raw {
        auth?: ApiAuthSchema.Raw | null;
        "auth-schemes"?: Record<string, AuthSchemeDeclarationSchema.Raw> | null;
    }
}
