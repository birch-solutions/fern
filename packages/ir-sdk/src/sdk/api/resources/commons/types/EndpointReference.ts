/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

export interface EndpointReference {
    endpointId: FernIr.EndpointId;
    serviceId: FernIr.ServiceId;
    /**
     * The subpackage that defines the endpoint. If empty, the endpoint is
     * defined in the root package.
     */
    subpackageId: FernIr.SubpackageId | undefined;
}
