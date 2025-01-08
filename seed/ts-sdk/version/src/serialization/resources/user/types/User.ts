/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedVersion from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { UserId } from "./UserId.js";

export const User: core.serialization.ObjectSchema<serializers.User.Raw, SeedVersion.User> = core.serialization.object({
    id: UserId,
    name: core.serialization.string(),
});

export declare namespace User {
    export interface Raw {
        id: UserId.Raw;
        name: string;
    }
}
