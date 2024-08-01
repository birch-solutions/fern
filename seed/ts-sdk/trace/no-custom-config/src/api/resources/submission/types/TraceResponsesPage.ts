/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export interface TraceResponsesPage {
    /**
     * If present, use this to load subseqent pages.
     * The offset is the id of the next trace response to load.
     */
    "offset"?: number;
    "traceResponses": SeedTrace.TraceResponse[];
}
