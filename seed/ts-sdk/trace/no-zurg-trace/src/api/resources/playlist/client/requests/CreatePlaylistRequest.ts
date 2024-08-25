/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../index";

/**
 * @example
 *     {
 *         datetime: "2024-01-15T09:30:00Z",
 *         optionalDatetime: "2024-01-15T09:30:00Z",
 *         body: {
 *             name: "string",
 *             problems: ["string"]
 *         }
 *     }
 */
export interface CreatePlaylistRequest {
    datetime: string;
    optionalDatetime?: string;
    body: SeedTrace.PlaylistCreateRequest;
}
