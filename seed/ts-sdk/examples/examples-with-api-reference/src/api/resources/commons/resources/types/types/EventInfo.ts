/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedExamples from "../../../../../index";

/**
 * @example
 *     {
 *         type: "metadata",
 *         id: "metadata-alskjfg8",
 *         data: {
 *             "one": "two"
 *         },
 *         jsonString: "{\"one\": \"two\"}"
 *     }
 */
export type EventInfo = SeedExamples.commons.EventInfo.Metadata | SeedExamples.commons.EventInfo.Tag;

export namespace EventInfo {
    export interface Metadata extends SeedExamples.commons.Metadata {
        type: "metadata";
    }

    export interface Tag {
        type: "tag";
        value: SeedExamples.commons.Tag;
    }
}
