/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const TestCaseTemplateId: core.serialization.Schema<
    serializers.v2.v3.TestCaseTemplateId.Raw,
    SeedTrace.v2.v3.TestCaseTemplateId
> = core.serialization.string();

export declare namespace TestCaseTemplateId {
    type Raw = string;
}
