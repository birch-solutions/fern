/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const SubmissionStatusV2: core.serialization.Schema<
    serializers.SubmissionStatusV2.Raw,
    SeedTrace.SubmissionStatusV2
> = core.serialization
    .union("type", {
        test: core.serialization.lazyObject(async () => (await import("../../..")).TestSubmissionStatusV2),
        workspace: core.serialization.lazyObject(async () => (await import("../../..")).WorkspaceSubmissionStatusV2),
    })
    .transform<SeedTrace.SubmissionStatusV2>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace SubmissionStatusV2 {
    type Raw = SubmissionStatusV2.Test | SubmissionStatusV2.Workspace;

    interface Test extends serializers.TestSubmissionStatusV2.Raw {
        type: "test";
    }

    interface Workspace extends serializers.WorkspaceSubmissionStatusV2.Raw {
        type: "workspace";
    }
}
