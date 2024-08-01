/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedObjectsWithImports from "../index";

/**
 * @example
 *     {
 *         nodes: [{
 *                 id: "node-8dvgfja2",
 *                 label: "left",
 *                 metadata: {
 *                     id: "metadata-kjasf923",
 *                     data: {
 *                         "foo": "bar",
 *                         "baz": "qux"
 *                     }
 *                 }
 *             }, {
 *                 id: "node-cwda9fi2x",
 *                 label: "right",
 *                 metadata: {
 *                     id: "metadata-lkasdfv9j",
 *                     data: {
 *                         "one": "two",
 *                         "three": "four"
 *                     }
 *                 }
 *             }]
 *     }
 */
export interface Tree {
    "nodes"?: SeedObjectsWithImports.Node[];
}
