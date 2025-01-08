/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as SeedExtends from "../../api/index.js";
import * as core from "../../core/index.js";
import { Json } from "./Json.js";

export const NestedType: core.serialization.ObjectSchema<serializers.NestedType.Raw, SeedExtends.NestedType> =
    core.serialization
        .object({
            name: core.serialization.string(),
        })
        .extend(Json);

export declare namespace NestedType {
    export interface Raw extends Json.Raw {
        name: string;
    }
}
