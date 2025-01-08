/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedMixedCase from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { Resource } from "../types/Resource.js";

export const Response: core.serialization.Schema<
    serializers.service.listResources.Response.Raw,
    SeedMixedCase.Resource[]
> = core.serialization.list(Resource);

export declare namespace Response {
    export type Raw = Resource.Raw[];
}
