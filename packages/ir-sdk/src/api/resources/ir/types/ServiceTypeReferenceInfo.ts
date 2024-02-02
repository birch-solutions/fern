/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

export interface ServiceTypeReferenceInfo {
    /** Types referenced by exactly one service. */
    typesReferencedOnlyByService: Record<FernIr.ServiceId, FernIr.TypeId[]>;
    /** Types referenced by either zero or multiple services. */
    sharedTypes: FernIr.TypeId[];
}
