/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TestCaseTemplate } from "./TestCaseTemplate";

export const GetGeneratedTestCaseTemplateFileRequest: core.serialization.ObjectSchema<serializers.v2.GetGeneratedTestCaseTemplateFileRequest.Raw, SeedTrace.v2.GetGeneratedTestCaseTemplateFileRequest> = core.serialization.object({
        "template": TestCaseTemplate
    });

export declare namespace GetGeneratedTestCaseTemplateFileRequest {
    interface Raw {
        "template": TestCaseTemplate.Raw;
    }
}
