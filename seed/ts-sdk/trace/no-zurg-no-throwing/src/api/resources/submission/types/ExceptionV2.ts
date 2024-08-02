/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type ExceptionV2 = 
    | SeedTrace.ExceptionV2.Generic
    | SeedTrace.ExceptionV2.Timeout;

export declare namespace ExceptionV2 {
    interface Generic extends SeedTrace.ExceptionInfo {
        type: "generic";
    }

    interface Timeout {
        type: "timeout";
    }
}
