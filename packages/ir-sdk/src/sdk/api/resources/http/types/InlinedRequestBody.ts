/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

export interface InlinedRequestBody {
    name: FernIr.Name;
    extends: FernIr.DeclaredTypeName[];
    properties: FernIr.InlinedRequestBodyProperty[];
    /** A list of properties that all the parents of this request have. */
    extendedProperties: FernIr.ObjectProperty[] | undefined;
    contentType: string | undefined;
    /** Whether to allow extra properties on the request. */
    extraProperties: boolean;
}
