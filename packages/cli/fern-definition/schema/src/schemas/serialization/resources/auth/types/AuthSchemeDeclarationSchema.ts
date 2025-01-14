/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { OAuthSchemeSchema } from "./OAuthSchemeSchema";
import { HeaderAuthSchemeSchema } from "./HeaderAuthSchemeSchema";
import { BasicAuthSchemeSchema } from "./BasicAuthSchemeSchema";
import { BearerAuthSchemeSchema } from "./BearerAuthSchemeSchema";

export const AuthSchemeDeclarationSchema: core.serialization.Schema<
    serializers.AuthSchemeDeclarationSchema.Raw,
    FernDefinition.AuthSchemeDeclarationSchema
> = core.serialization.undiscriminatedUnion([
    OAuthSchemeSchema,
    HeaderAuthSchemeSchema,
    BasicAuthSchemeSchema,
    BearerAuthSchemeSchema,
]);

export declare namespace AuthSchemeDeclarationSchema {
    export type Raw =
        | OAuthSchemeSchema.Raw
        | HeaderAuthSchemeSchema.Raw
        | BasicAuthSchemeSchema.Raw
        | BearerAuthSchemeSchema.Raw;
}
