/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedObjectsWithImports from "../../../../../index";

/**
 * @example
 *     {
 *         name: "root",
 *         files: [{
 *                 name: "file.txt",
 *                 contents: "...",
 *                 info: "REGULAR"
 *             }],
 *         directories: [{
 *                 name: "tmp",
 *                 files: [{
 *                         name: "another_file.txt",
 *                         contents: "...",
 *                         info: "REGULAR"
 *                     }]
 *             }]
 *     }
 */
export interface Directory {
    name: string;
    files?: SeedObjectsWithImports.File_[];
    directories?: SeedObjectsWithImports.file.Directory[];
}
