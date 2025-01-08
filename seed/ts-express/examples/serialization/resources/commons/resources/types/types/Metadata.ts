/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedExamples from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Metadata: core.serialization.ObjectSchema<
    serializers.commons.Metadata.Raw,
    SeedExamples.commons.Metadata
> = core.serialization.object({
    id: core.serialization.string(),
    data: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    jsonString: core.serialization.string().optional(),
});

export declare namespace Metadata {
    export interface Raw {
        id: string;
        data?: Record<string, string> | null;
        jsonString?: string | null;
    }
}
