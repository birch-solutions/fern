/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index.js";
import * as SeedMixedFileDirectory from "../../../../../../api/index.js";
import * as core from "../../../../../../core/index.js";
import { Id } from "../../../../../types/Id.js";

export const Event: core.serialization.ObjectSchema<serializers.user.Event.Raw, SeedMixedFileDirectory.user.Event> =
    core.serialization.object({
        id: Id,
        name: core.serialization.string(),
    });

export declare namespace Event {
    export interface Raw {
        id: Id.Raw;
        name: string;
    }
}
