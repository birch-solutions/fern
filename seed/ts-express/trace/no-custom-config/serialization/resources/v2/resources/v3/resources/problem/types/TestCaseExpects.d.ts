/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
export declare const TestCaseExpects: core.serialization.ObjectSchema<serializers.v2.v3.TestCaseExpects.Raw, SeedTrace.v2.v3.TestCaseExpects>;
export declare namespace TestCaseExpects {
    interface Raw {
        expectedStdout?: string | null;
    }
}
