/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedLiteral from "../../../index";

export interface SendRequest {
    "prompt": "You are a helpful assistant";
    "query": string;
    "stream": false;
    "context": SeedLiteral.SomeLiteral;
    "maybeContext"?: SeedLiteral.SomeLiteral;
}
