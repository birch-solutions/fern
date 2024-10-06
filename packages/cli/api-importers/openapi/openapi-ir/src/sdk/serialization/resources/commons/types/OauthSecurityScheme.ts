/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { EnumSchema } from "../../finalIr/types/EnumSchema";

export const OauthSecurityScheme: core.serialization.ObjectSchema<
    serializers.OauthSecurityScheme.Raw,
    FernOpenapiIr.OauthSecurityScheme
> = core.serialization.objectWithoutOptionalProperties({
    scopesEnum: EnumSchema.optional()
});

export declare namespace OauthSecurityScheme {
    interface Raw {
        scopesEnum?: EnumSchema.Raw | null;
    }
}
