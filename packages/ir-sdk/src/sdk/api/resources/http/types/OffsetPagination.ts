/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

/**
 * The page must be defined as a query parameter included in the request,
 * whereas the results are resolved from properties defined on the response.
 *
 * The page index is auto-incremented between every additional page request.
 */
export interface OffsetPagination {
    page: FernIr.RequestProperty;
    results: FernIr.ResponseProperty;
    /** A response property that indicates whether there is a next page or not. */
    hasNextPage: FernIr.ResponseProperty | undefined;
    /** The step size used to increment the page offset between every new page. */
    step: FernIr.RequestProperty | undefined;
}
