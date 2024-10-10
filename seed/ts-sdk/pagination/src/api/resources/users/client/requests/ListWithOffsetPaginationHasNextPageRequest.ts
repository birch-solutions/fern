/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedPagination from "../../../../index";

/**
 * @example
 *     {}
 */
export interface ListWithOffsetPaginationHasNextPageRequest {
    /**
     * Defaults to first page
     */
    page?: number;
    /**
     * The maxiumum number of elements to return.
     * This is also used as the step size in this
     * paginated endpoint.
     */
    limit?: number;
    order?: SeedPagination.Order;
}
