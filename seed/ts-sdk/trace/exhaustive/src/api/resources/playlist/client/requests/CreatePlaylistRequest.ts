/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../index.js";

/**
 * @example
 *     {
 *         datetime: "2024-01-15T09:30:00Z",
 *         optionalDatetime: "2024-01-15T09:30:00Z",
 *         body: {
 *             name: "name",
 *             problems: [SeedTrace.ProblemId("problems"), SeedTrace.ProblemId("problems")]
 *         }
 *     }
 */
export interface CreatePlaylistRequest {
    datetime: Date;
    optionalDatetime?: Date;
    body: SeedTrace.PlaylistCreateRequest;
}
