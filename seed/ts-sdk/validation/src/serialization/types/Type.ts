/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedValidation from "../../api/index";
import * as core from "../../core";
import { Shape } from "./Shape";

export const Type: core.serialization.ObjectSchema<serializers.Type.Raw, SeedValidation.Type> =
    core.serialization.object({
        decimal: core.serialization.number(),
        even: core.serialization.number(),
        name: core.serialization.string(),
        shape: Shape,
    });

export declare namespace Type {
    export interface Raw {
        decimal: number;
        even: number;
        name: string;
        shape: Shape.Raw;
    }
}
