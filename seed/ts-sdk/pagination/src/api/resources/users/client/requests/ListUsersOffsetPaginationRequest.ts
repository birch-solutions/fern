/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedPagination from "../../../../index";

/**
 * @example
 *     {
 *         page: 1,
 *         perPage: 1,
 *         order: SeedPagination.Order.Asc,
 *         startingAfter: "string"
 *     }
 */
export interface ListUsersOffsetPaginationRequest {
    /**
     * Defaults to first page
     */
    "page"?: number;
    /**
     * Defaults to per page
     */
    "perPage"?: number;
    "order"?: SeedPagination.Order;
    /**
     * The cursor used for pagination in order to fetch
     * the next page of results.
     */
    "startingAfter"?: string;
}
