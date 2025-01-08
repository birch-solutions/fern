/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedPagination from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { UserOptionalListPage } from "./UserOptionalListPage.js";

export const ListUsersExtendedOptionalListResponse: core.serialization.ObjectSchema<
    serializers.ListUsersExtendedOptionalListResponse.Raw,
    SeedPagination.ListUsersExtendedOptionalListResponse
> = core.serialization
    .object({
        totalCount: core.serialization.property("total_count", core.serialization.number()),
    })
    .extend(UserOptionalListPage);

export declare namespace ListUsersExtendedOptionalListResponse {
    export interface Raw extends UserOptionalListPage.Raw {
        total_count: number;
    }
}
