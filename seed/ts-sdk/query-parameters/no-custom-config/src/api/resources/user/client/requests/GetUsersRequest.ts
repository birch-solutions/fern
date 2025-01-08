/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedQueryParameters from "../../../../index.js";

export interface GetUsersRequest {
    limit: number;
    id: string;
    date: string;
    deadline: Date;
    bytes: string;
    user: SeedQueryParameters.User;
    userList: SeedQueryParameters.User[];
    optionalDeadline?: Date;
    keyValue: Record<string, string>;
    optionalString?: string;
    nestedUser: SeedQueryParameters.NestedUser;
    optionalUser?: SeedQueryParameters.User;
    excludeUser: SeedQueryParameters.User | SeedQueryParameters.User[];
    filter: string | string[];
}
