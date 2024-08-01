/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const WorkspaceTracedUpdate: core.serialization.ObjectSchema<serializers.WorkspaceTracedUpdate.Raw, SeedTrace.WorkspaceTracedUpdate> = core.serialization.object({
        "traceResponsesSize": core.serialization.number()
    });

export declare namespace WorkspaceTracedUpdate {
    interface Raw {
        "traceResponsesSize": number;
    }
}
