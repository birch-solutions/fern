/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const UserId: core.serialization.Schema<serializers.UserId.Raw, SeedTrace.UserId> = core.serialization.string();

export declare namespace UserId {
    export type Raw = string;
}
