/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedQueryParameters from "../../../../api/index";
import * as core from "../../../../core";
import { User } from "./User";

export const NestedUser: core.serialization.ObjectSchema<serializers.NestedUser.Raw, SeedQueryParameters.NestedUser> = core.serialization.object({
        "name": core.serialization.string(),
        "user": User
    });

export declare namespace NestedUser {
    interface Raw {
        "name": string;
        "user": User.Raw;
    }
}
