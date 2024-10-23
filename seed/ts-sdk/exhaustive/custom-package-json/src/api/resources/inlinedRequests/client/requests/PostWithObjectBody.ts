/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fiddle from "../../../../index";

/**
 * @example
 *     {
 *         string: "string",
 *         integer: 1,
 *         nestedObject: {
 *             string: undefined,
 *             integer: undefined,
 *             long: undefined,
 *             double: undefined,
 *             bool: undefined,
 *             datetime: undefined,
 *             date: undefined,
 *             uuid: undefined,
 *             base64: undefined,
 *             list: undefined,
 *             set: undefined,
 *             map: undefined,
 *             bigint: undefined
 *         }
 *     }
 */
export interface PostWithObjectBody {
    string: string;
    integer: number;
    nestedObject: Fiddle.types.ObjectWithOptionalField;
}
