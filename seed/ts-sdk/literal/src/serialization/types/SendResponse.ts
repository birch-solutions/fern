/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedLiteral from "../../api/index";
import * as core from "../../core";

export const SendResponse: core.serialization.ObjectSchema<serializers.SendResponse.Raw, SeedLiteral.SendResponse> = core.serialization.object({
        "message": core.serialization.string(),
        "status": core.serialization.number(),
        "success": core.serialization.booleanLiteral(true)
    });

export declare namespace SendResponse {
    interface Raw {
        "message": string;
        "status": number;
        "success": true;
    }
}
