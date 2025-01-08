/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as core from "../../../../../../core";

export const Request: core.serialization.Schema<serializers.endpoints.primitive.getAndReturnInt.Request.Raw, number> =
    core.serialization.number();

export declare namespace Request {
    export type Raw = number;
}

export const Response: core.serialization.Schema<serializers.endpoints.primitive.getAndReturnInt.Response.Raw, number> =
    core.serialization.number();

export declare namespace Response {
    export type Raw = number;
}
