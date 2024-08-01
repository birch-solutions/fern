/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { SubmissionId } from "./SubmissionId";
import { Language } from "../../commons/types/Language";
import { SubmissionFileInfo } from "./SubmissionFileInfo";
import { ProblemId } from "../../commons/types/ProblemId";

export const SubmitRequestV2: core.serialization.ObjectSchema<serializers.SubmitRequestV2.Raw, SeedTrace.SubmitRequestV2> = core.serialization.object({
        "submissionId": SubmissionId,
        "language": Language,
        "submissionFiles": core.serialization.list(SubmissionFileInfo),
        "problemId": ProblemId,
        "problemVersion": core.serialization.number().optional(),
        "userId": core.serialization.string().optional()
    });

export declare namespace SubmitRequestV2 {
    interface Raw {
        "submissionId": SubmissionId.Raw;
        "language": Language.Raw;
        "submissionFiles": SubmissionFileInfo.Raw[];
        "problemId": ProblemId.Raw;
        "problemVersion"?: number | null;
        "userId"?: string | null;
    }
}
