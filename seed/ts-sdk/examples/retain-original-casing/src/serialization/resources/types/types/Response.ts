/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedExamples from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.ObjectSchema<serializers.Response.Raw, SeedExamples.Response> =
    core.serialization.object({
        response: core.serialization.unknown(),
    });

export declare namespace Response {
    interface Raw {
        response?: unknown;
    }
}
