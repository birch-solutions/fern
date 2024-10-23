/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { OpenApiSpecSchema } from "./OpenApiSpecSchema";
import { AsyncApiSchema } from "./AsyncApiSchema";

export const AsyncApiOrOpenApiSpecSchema: core.serialization.Schema<
    serializers.AsyncApiOrOpenApiSpecSchema.Raw,
    FernDefinition.AsyncApiOrOpenApiSpecSchema
> = core.serialization.undiscriminatedUnion([OpenApiSpecSchema, AsyncApiSchema]);

export declare namespace AsyncApiOrOpenApiSpecSchema {
    type Raw = OpenApiSpecSchema.Raw | AsyncApiSchema.Raw;
}
