/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         limit: 1,
 *         otherField: "otherField",
 *         multiLineDocs: "multiLineDocs",
 *         optionalMultipleField: "optionalMultipleField",
 *         multipleField: "multipleField"
 *     }
 */
export interface GetPlaylistsRequest {
    limit?: number;
    /**
     * i'm another field
     */
    otherField: string;
    /**
     * I'm a multiline
     * description
     */
    multiLineDocs: string;
    optionalMultipleField?: string | string[];
    multipleField: string | string[];
}
