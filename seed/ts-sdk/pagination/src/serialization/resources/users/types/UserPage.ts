/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedPagination from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { UserListContainer } from "./UserListContainer.js";

export const UserPage: core.serialization.ObjectSchema<serializers.UserPage.Raw, SeedPagination.UserPage> =
    core.serialization.object({
        data: UserListContainer,
        next: core.serialization.string().optional(),
    });

export declare namespace UserPage {
    export interface Raw {
        data: UserListContainer.Raw;
        next?: string | null;
    }
}
