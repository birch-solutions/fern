/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index.js";
import * as SeedMixedFileDirectory from "../../../../../../api/index.js";
import * as core from "../../../../../../core/index.js";
import { Event } from "../types/Event.js";

export const Response: core.serialization.Schema<
    serializers.user.events.listEvents.Response.Raw,
    SeedMixedFileDirectory.user.Event[]
> = core.serialization.list(Event);

export declare namespace Response {
    export type Raw = Event.Raw[];
}
