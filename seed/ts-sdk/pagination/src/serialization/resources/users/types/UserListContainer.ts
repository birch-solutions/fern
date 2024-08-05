/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedPagination from "../../../../api/index";
import * as core from "../../../../core";
import { User } from "./User";

export const UserListContainer: core.serialization.ObjectSchema<
    serializers.UserListContainer.Raw,
    SeedPagination.UserListContainer
> = core.serialization.object({
    users: core.serialization.list(User),
});

export declare namespace UserListContainer {
    interface Raw {
        users: User.Raw[];
    }
}
