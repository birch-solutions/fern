/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as SeedTrace from "../../../../../api/index";
import * as core from "../../../../../core";

export const StoreTracedWorkspaceRequest: core.serialization.Schema<
    serializers.StoreTracedWorkspaceRequest.Raw,
    SeedTrace.StoreTracedWorkspaceRequest
> = core.serialization.object({
    workspaceRunDetails: core.serialization.lazyObject(() => serializers.WorkspaceRunDetails),
    traceResponses: core.serialization.list(core.serialization.lazyObject(() => serializers.TraceResponse)),
});

export declare namespace StoreTracedWorkspaceRequest {
    export interface Raw {
        workspaceRunDetails: serializers.WorkspaceRunDetails.Raw;
        traceResponses: serializers.TraceResponse.Raw[];
    }
}
