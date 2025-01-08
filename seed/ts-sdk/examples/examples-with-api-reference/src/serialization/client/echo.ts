/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as core from "../../core";

export const Request: core.serialization.Schema<serializers.echo.Request.Raw, string> = core.serialization.string();

export declare namespace Request {
    export type Raw = string;
}

export const Response: core.serialization.Schema<serializers.echo.Response.Raw, string> = core.serialization.string();

export declare namespace Response {
    export type Raw = string;
}
