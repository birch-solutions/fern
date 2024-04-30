/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedResponseProperty from "../../api/index";
import * as core from "../../core";

export const OptionalStringResponse: core.serialization.Schema<
    serializers.OptionalStringResponse.Raw,
    SeedResponseProperty.OptionalStringResponse
> = core.serialization.lazyObject(async () => (await import("..")).StringResponse).optional();

export declare namespace OptionalStringResponse {
    type Raw = serializers.StringResponse.Raw | null | undefined;
}
