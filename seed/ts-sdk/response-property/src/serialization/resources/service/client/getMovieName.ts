/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<serializers.service.getMovieName.Request.Raw, string> =
    core.serialization.string();

export declare namespace Request {
    type Raw = string;
}
