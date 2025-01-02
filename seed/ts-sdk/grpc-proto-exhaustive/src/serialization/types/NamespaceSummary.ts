/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedApi from "../../api/index";
import * as core from "../../core";

export const NamespaceSummary: core.serialization.ObjectSchema<
    serializers.NamespaceSummary.Raw,
    SeedApi.NamespaceSummary
> = core.serialization.object({
    count: core.serialization.number().optional(),
});

export declare namespace NamespaceSummary {
    export interface Raw {
        count?: number | null;
    }
}
