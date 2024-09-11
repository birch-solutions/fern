/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedUndiscriminatedUnions from "../../../index";

/**
 * Undiscriminated unions can act as a map key
 * as long as all of their values are valid keys
 * (i.e. do they have a valid string representation).
 *
 * @example
 *     {
 *         ["name"]: "exampleName",
 *         ["value"]: "exampleValue",
 *         "default": "exampleDefault"
 *     }
 */
export type Metadata = Record<SeedUndiscriminatedUnions.Key, string>;
