/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedVersion from "../../../../api/index";
import * as core from "../../../../core";
import { UserId } from "./UserId";

export const User: core.serialization.ObjectSchema<serializers.User.Raw, SeedVersion.User> = core.serialization.object({
    id: UserId,
    name: core.serialization.string(),
});

export declare namespace User {
    interface Raw {
        id: UserId.Raw;
        name: string;
    }
}
