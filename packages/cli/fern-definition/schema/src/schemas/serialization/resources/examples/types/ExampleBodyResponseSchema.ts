/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { ExampleTypeReferenceSchema } from "./ExampleTypeReferenceSchema";

export const ExampleBodyResponseSchema: core.serialization.ObjectSchema<
    serializers.ExampleBodyResponseSchema.Raw,
    FernDefinition.ExampleBodyResponseSchema
> = core.serialization.object({
    error: core.serialization.string().optional(),
    body: ExampleTypeReferenceSchema.optional(),
});

export declare namespace ExampleBodyResponseSchema {
    interface Raw {
        error?: string | null;
        body?: (ExampleTypeReferenceSchema.Raw | undefined) | null;
    }
}
