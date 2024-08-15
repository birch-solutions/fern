/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedAnyAuth from "../../../../api/index";
import * as core from "../../../../core";
import { User } from "../types/User";

export const Response: core.serialization.Schema<serializers.user.get.Response.Raw, SeedAnyAuth.User[]> =
    core.serialization.list(User);

export declare namespace Response {
    type Raw = User.Raw[];
}
