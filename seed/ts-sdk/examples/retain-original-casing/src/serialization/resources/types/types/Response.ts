/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedExamples from "../../../../api/index";
import * as core from "../../../../core";
import { Identifier } from "../../../types/Identifier";

export const Response: core.serialization.ObjectSchema<serializers.Response.Raw, SeedExamples.Response> =
    core.serialization.object({
        response: core.serialization.unknown(),
        identifiers: core.serialization.list(Identifier),
    });

export declare namespace Response {
    interface Raw {
        response?: unknown;
        identifiers: Identifier.Raw[];
    }
}
