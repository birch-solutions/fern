/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDefinition from "../../../index";

export interface RootApiFileSchema
    extends FernDefinition.WithDocsSchema,
        FernDefinition.WithDisplayName,
        FernDefinition.WithEnvironmentsSchema,
        FernDefinition.WithAuthSchema,
        FernDefinition.WithHeadersSchema {
    name: string;
    imports?: Record<string, string>;
    "error-discrimination"?: FernDefinition.ErrorDiscriminationSchema;
    audiences?: string[];
    errors?: string[];
    "base-path"?: string;
    "path-parameters"?: Record<string, FernDefinition.HttpPathParameterSchema>;
    "idempotency-headers"?: Record<string, FernDefinition.HttpHeaderSchema>;
    variables?: Record<string, FernDefinition.VariableDeclarationSchema>;
    pagination?: FernDefinition.PaginationSchema;
    version?: FernDefinition.VersionDeclarationSchema;
}
