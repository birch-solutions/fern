/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../index.js";

/**
 * @example
 *     {
 *         inputParams: [{
 *                 variableType: {
 *                     type: "integerType"
 *                 },
 *                 name: "name"
 *             }, {
 *                 variableType: {
 *                     type: "integerType"
 *                 },
 *                 name: "name"
 *             }],
 *         outputType: {
 *             type: "integerType"
 *         },
 *         methodName: "methodName"
 *     }
 */
export interface GetDefaultStarterFilesRequest {
    inputParams: SeedTrace.VariableTypeAndName[];
    outputType: SeedTrace.VariableType;
    /**
     * The name of the `method` that the student has to complete.
     * The method name cannot include the following characters:
     *   - Greater Than `>`
     *   - Less Than `<``
     *   - Equals `=`
     *   - Period `.`
     *
     */
    methodName: string;
}
