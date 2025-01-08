/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedUnknownAsAny from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const MyObject: core.serialization.ObjectSchema<serializers.MyObject.Raw, SeedUnknownAsAny.MyObject> =
    core.serialization.object({
        unknown: core.serialization.unknown(),
    });

export declare namespace MyObject {
    export interface Raw {
        unknown?: unknown;
    }
}
