/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedObject from "../../api/index";
import * as core from "../../core";

export const UserId: core.serialization.Schema<serializers.UserId.Raw, SeedObject.UserId> = core.serialization.string();

export declare namespace UserId {
    type Raw = string;
}
