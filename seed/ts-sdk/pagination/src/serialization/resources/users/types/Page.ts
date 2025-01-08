/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedPagination from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { NextPage } from "./NextPage.js";

export const Page: core.serialization.ObjectSchema<serializers.Page.Raw, SeedPagination.Page> =
    core.serialization.object({
        page: core.serialization.number(),
        next: NextPage.optional(),
        perPage: core.serialization.property("per_page", core.serialization.number()),
        totalPage: core.serialization.property("total_page", core.serialization.number()),
    });

export declare namespace Page {
    export interface Raw {
        page: number;
        next?: NextPage.Raw | null;
        per_page: number;
        total_page: number;
    }
}
