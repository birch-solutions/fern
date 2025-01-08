/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index.js";
import * as SeedExhaustive from "../../../../../../api/index.js";
import * as core from "../../../../../../core/index.js";
import { ObjectWithOptionalField } from "./ObjectWithOptionalField.js";

export const NestedObjectWithOptionalField: core.serialization.ObjectSchema<
    serializers.types.NestedObjectWithOptionalField.Raw,
    SeedExhaustive.types.NestedObjectWithOptionalField
> = core.serialization.object({
    string: core.serialization.string().optional(),
    nestedObject: core.serialization.property("NestedObject", ObjectWithOptionalField.optional()),
});

export declare namespace NestedObjectWithOptionalField {
    export interface Raw {
        string?: string | null;
        NestedObject?: ObjectWithOptionalField.Raw | null;
    }
}
