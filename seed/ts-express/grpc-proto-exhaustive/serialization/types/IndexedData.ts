/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedApi from "../../api/index";
import * as core from "../../core";

export const IndexedData: core.serialization.ObjectSchema<serializers.IndexedData.Raw, SeedApi.IndexedData> =
    core.serialization.object({
        indices: core.serialization.list(core.serialization.number()),
        values: core.serialization.list(core.serialization.number()),
    });

export declare namespace IndexedData {
    export interface Raw {
        indices: number[];
        values: number[];
    }
}
