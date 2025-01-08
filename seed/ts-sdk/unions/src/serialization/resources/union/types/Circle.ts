/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedUnions from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const Circle: core.serialization.ObjectSchema<serializers.Circle.Raw, SeedUnions.Circle> =
    core.serialization.object({
        radius: core.serialization.number(),
    });

export declare namespace Circle {
    export interface Raw {
        radius: number;
    }
}
