/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

export interface JsonResponseBodyWithProperty extends FernIr.WithDocs {
    responseBodyType: FernIr.TypeReference;
    /**
     * If set, the SDK will return this property from
     * the response, rather than the response itself.
     *
     * This is particularly useful for JSON API structures
     * (e.g. configure 'data' to return 'response.data').
     */
    responseProperty: FernIr.ObjectProperty | undefined;
}
