/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedUndiscriminatedUnions from "../../../index.js";

/**
 * Undiscriminated unions can act as a map key
 * as long as all of their values are valid keys
 * (i.e. do they have a valid string representation).
 *
 * @example
 *     {
 *         [SeedUndiscriminatedUnions.KeyType.Name]: "exampleName",
 *         [SeedUndiscriminatedUnions.KeyType.Value]: "exampleValue",
 *         "default": "exampleDefault"
 *     }
 */
export type Metadata = Record<SeedUndiscriminatedUnions.Key, string>;
