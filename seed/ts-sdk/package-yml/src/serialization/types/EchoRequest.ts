/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedPackageYml from "../../api/index";
import * as core from "../../core";

export const EchoRequest: core.serialization.ObjectSchema<serializers.EchoRequest.Raw, SeedPackageYml.EchoRequest> =
    core.serialization.object({
        name: core.serialization.string(),
        size: core.serialization.number(),
    });

export declare namespace EchoRequest {
    interface Raw {
        name: string;
        size: number;
    }
}
