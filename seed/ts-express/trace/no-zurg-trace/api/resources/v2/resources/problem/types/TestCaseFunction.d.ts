/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedTrace from "../../../../..";
export declare type TestCaseFunction = SeedTrace.v2.TestCaseFunction.WithActualResult | SeedTrace.v2.TestCaseFunction.Custom;
export declare namespace TestCaseFunction {
    interface WithActualResult extends SeedTrace.v2.TestCaseWithActualResultImplementation {
        type: "withActualResult";
    }
    interface Custom extends SeedTrace.v2.VoidFunctionDefinition {
        type: "custom";
    }
}
