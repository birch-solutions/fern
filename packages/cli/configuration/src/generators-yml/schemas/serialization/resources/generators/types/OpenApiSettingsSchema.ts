/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { OpenApiFilterSchema } from "./OpenApiFilterSchema";
import { OpenApiExampleGenerationSchema } from "./OpenApiExampleGenerationSchema";

export const OpenApiSettingsSchema: core.serialization.ObjectSchema<
    serializers.OpenApiSettingsSchema.Raw,
    FernDefinition.OpenApiSettingsSchema
> = core.serialization.object({
    "title-as-schema-name": core.serialization.boolean().optional(),
    "optional-additional-properties": core.serialization.boolean().optional(),
    "coerce-enums-to-literals": core.serialization.boolean().optional(),
    "prefer-undiscriminated-unions-with-literals": core.serialization.boolean().optional(),
    "object-query-parameters": core.serialization.boolean().optional(),
    "respect-readonly-schemas": core.serialization.boolean().optional(),
    "only-include-referenced-schemas": core.serialization.boolean().optional(),
    "inline-path-parameters": core.serialization.boolean().optional(),
    filter: OpenApiFilterSchema.optional(),
    "example-generation": OpenApiExampleGenerationSchema.optional(),
});

export declare namespace OpenApiSettingsSchema {
    export interface Raw {
        "title-as-schema-name"?: boolean | null;
        "optional-additional-properties"?: boolean | null;
        "coerce-enums-to-literals"?: boolean | null;
        "prefer-undiscriminated-unions-with-literals"?: boolean | null;
        "object-query-parameters"?: boolean | null;
        "respect-readonly-schemas"?: boolean | null;
        "only-include-referenced-schemas"?: boolean | null;
        "inline-path-parameters"?: boolean | null;
        filter?: OpenApiFilterSchema.Raw | null;
        "example-generation"?: OpenApiExampleGenerationSchema.Raw | null;
    }
}
