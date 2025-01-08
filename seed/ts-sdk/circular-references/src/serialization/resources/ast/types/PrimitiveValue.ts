/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedApi from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const PrimitiveValue: core.serialization.Schema<serializers.PrimitiveValue.Raw, SeedApi.PrimitiveValue> =
    core.serialization.enum_(["STRING", "NUMBER"]);

export declare namespace PrimitiveValue {
    export type Raw = "STRING" | "NUMBER";
}
