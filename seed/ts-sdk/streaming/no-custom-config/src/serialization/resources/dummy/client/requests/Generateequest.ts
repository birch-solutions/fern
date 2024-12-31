/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as SeedStreaming from "../../../../../api/index";
import * as core from "../../../../../core";

export const Generateequest: core.serialization.Schema<serializers.Generateequest.Raw, SeedStreaming.Generateequest> =
    core.serialization.object({
        numEvents: core.serialization.property("num_events", core.serialization.number()),
    });

export declare namespace Generateequest {
    export interface Raw {
        num_events: number;
    }
}
