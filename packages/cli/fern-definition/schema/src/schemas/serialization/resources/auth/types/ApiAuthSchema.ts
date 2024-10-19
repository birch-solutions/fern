/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { AuthSchemeReferenceSchema } from "./AuthSchemeReferenceSchema";
import { AnyAuthSchemesSchema } from "./AnyAuthSchemesSchema";

export const ApiAuthSchema: core.serialization.Schema<serializers.ApiAuthSchema.Raw, FernDefinition.ApiAuthSchema> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        AuthSchemeReferenceSchema,
        AnyAuthSchemesSchema,
    ]);

export declare namespace ApiAuthSchema {
    type Raw = string | AuthSchemeReferenceSchema.Raw | AnyAuthSchemesSchema.Raw;
}
