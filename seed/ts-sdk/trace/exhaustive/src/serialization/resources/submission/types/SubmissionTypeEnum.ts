/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const SubmissionTypeEnum: core.serialization.Schema<
    serializers.SubmissionTypeEnum.Raw,
    SeedTrace.SubmissionTypeEnum
> = core.serialization.enum_(["TEST"]);

export declare namespace SubmissionTypeEnum {
    export type Raw = "TEST";
}
