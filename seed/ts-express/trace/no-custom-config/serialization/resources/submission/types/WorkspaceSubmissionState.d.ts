/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
export declare const WorkspaceSubmissionState: core.serialization.ObjectSchema<serializers.WorkspaceSubmissionState.Raw, SeedTrace.WorkspaceSubmissionState>;
export declare namespace WorkspaceSubmissionState {
    interface Raw {
        status: serializers.WorkspaceSubmissionStatus.Raw;
    }
}
