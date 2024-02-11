/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as SeedObjectsWithImports from "../../../../../../api";
import * as core from "../../../../../../core";

export const Metadata: core.serialization.ObjectSchema<
    serializers.commons.Metadata.Raw,
    SeedObjectsWithImports.commons.Metadata
> = core.serialization.object({
    id: core.serialization.string(),
    data: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
});

export declare namespace Metadata {
    interface Raw {
        id: string;
        data?: Record<string, string> | null;
    }
}
