/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedTrace from "../../../../..";
export declare type TestCaseImplementationDescriptionBoard = SeedTrace.v2.TestCaseImplementationDescriptionBoard.Html | SeedTrace.v2.TestCaseImplementationDescriptionBoard.ParamId;
export declare namespace TestCaseImplementationDescriptionBoard {
    interface Html {
        type: "html";
        value: string;
    }
    interface ParamId {
        type: "paramId";
        value: SeedTrace.v2.ParameterId;
    }
}
