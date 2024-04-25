/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
export declare const SubmissionFileInfo: core.serialization.ObjectSchema<serializers.SubmissionFileInfo.Raw, SeedTrace.SubmissionFileInfo>;
export declare namespace SubmissionFileInfo {
    interface Raw {
        directory: string;
        filename: string;
        contents: string;
    }
}
