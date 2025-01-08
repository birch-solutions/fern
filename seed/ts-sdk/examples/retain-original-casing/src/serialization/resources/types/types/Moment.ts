/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedExamples from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const Moment: core.serialization.ObjectSchema<serializers.Moment.Raw, SeedExamples.Moment> =
    core.serialization.object({
        id: core.serialization.string(),
        date: core.serialization.string(),
        datetime: core.serialization.date(),
    });

export declare namespace Moment {
    export interface Raw {
        id: string;
        date: string;
        datetime: string;
    }
}
