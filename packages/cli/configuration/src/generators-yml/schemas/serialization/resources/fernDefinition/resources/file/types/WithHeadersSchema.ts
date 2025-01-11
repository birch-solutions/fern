/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernDefinition from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { HttpHeaderSchema } from "../../service/types/HttpHeaderSchema";

export const WithHeadersSchema: core.serialization.ObjectSchema<
    serializers.fernDefinition.WithHeadersSchema.Raw,
    FernDefinition.fernDefinition.WithHeadersSchema
> = core.serialization.object({
    headers: core.serialization.record(core.serialization.string(), HttpHeaderSchema).optional(),
});

export declare namespace WithHeadersSchema {
    export interface Raw {
        headers?: Record<string, HttpHeaderSchema.Raw> | null;
    }
}
