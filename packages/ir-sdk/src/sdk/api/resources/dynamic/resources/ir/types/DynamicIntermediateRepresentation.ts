/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../../../index";

/**
 * This represents the IR required to generate dynamic snippets.
 *
 * This IR minimizes the space required to generate snippets in a variety
 * of environments (e.g. web, offline, etc).
 */
export interface DynamicIntermediateRepresentation {
    /**
     * The version of the dynamic IR. This is independent from the verison
     * of the primary IR.
     */
    version: "1.0.0";
    types: Record<FernIr.TypeId, FernIr.dynamic.NamedType>;
    endpoints: Record<FernIr.EndpointId, FernIr.dynamic.Endpoint>;
    /**
     * The headers that are required on every request. These headers
     * are typically included in the SDK's client constructor.
     */
    headers: FernIr.dynamic.NamedParameter[] | undefined;
    environments: FernIr.EnvironmentsConfig | undefined;
}
