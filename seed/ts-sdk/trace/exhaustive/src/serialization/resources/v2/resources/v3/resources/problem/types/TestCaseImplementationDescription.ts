/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { TestCaseImplementationDescriptionBoard } from "./TestCaseImplementationDescriptionBoard";

export const TestCaseImplementationDescription: core.serialization.ObjectSchema<serializers.v2.v3.TestCaseImplementationDescription.Raw, SeedTrace.v2.v3.TestCaseImplementationDescription> = core.serialization.object({
        "boards": core.serialization.list(TestCaseImplementationDescriptionBoard)
    });

export declare namespace TestCaseImplementationDescription {
    interface Raw {
        "boards": TestCaseImplementationDescriptionBoard.Raw[];
    }
}
