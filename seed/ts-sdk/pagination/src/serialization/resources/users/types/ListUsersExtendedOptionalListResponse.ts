/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedPagination from "../../../../api/index";
import * as core from "../../../../core";
import { UserOptionalListPage } from "./UserOptionalListPage";

export const ListUsersExtendedOptionalListResponse: core.serialization.ObjectSchema<
    serializers.ListUsersExtendedOptionalListResponse.Raw,
    SeedPagination.ListUsersExtendedOptionalListResponse
> = core.serialization
    .object({
        totalCount: core.serialization.property("total_count", core.serialization.number()),
    })
    .extend(UserOptionalListPage);

export declare namespace ListUsersExtendedOptionalListResponse {
    interface Raw extends UserOptionalListPage.Raw {
        total_count: number;
    }
}
