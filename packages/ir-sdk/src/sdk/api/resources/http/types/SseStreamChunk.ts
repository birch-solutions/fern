/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export interface SseStreamChunk extends FernIr.WithDocs {
    payload: FernIr.TypeReference;
    terminator: string | undefined;
}
