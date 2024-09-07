/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedMixedFileDirectory from "../../../../api/index";
import * as core from "../../../../core";

export const CreateOrganizationRequest: core.serialization.ObjectSchema<
    serializers.CreateOrganizationRequest.Raw,
    SeedMixedFileDirectory.CreateOrganizationRequest
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace CreateOrganizationRequest {
    interface Raw {
        name: string;
    }
}
