/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { TestCaseWithActualResultImplementation } from "./TestCaseWithActualResultImplementation";
import { VoidFunctionDefinition } from "./VoidFunctionDefinition";

export const TestCaseFunction: core.serialization.Schema<
    serializers.v2.v3.TestCaseFunction.Raw,
    SeedTrace.v2.v3.TestCaseFunction
> = core.serialization
    .union("type", {
        withActualResult: TestCaseWithActualResultImplementation,
        custom: VoidFunctionDefinition,
    })
    .transform<SeedTrace.v2.v3.TestCaseFunction>({
        transform: (value) => {
            switch (value.type) {
                case "withActualResult":
                    return SeedTrace.v2.v3.TestCaseFunction.withActualResult(value);
                case "custom":
                    return SeedTrace.v2.v3.TestCaseFunction.custom(value);
                default:
                    return SeedTrace.v2.v3.TestCaseFunction._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace TestCaseFunction {
    type Raw = TestCaseFunction.WithActualResult | TestCaseFunction.Custom;

    interface WithActualResult extends TestCaseWithActualResultImplementation.Raw {
        type: "withActualResult";
    }

    interface Custom extends VoidFunctionDefinition.Raw {
        type: "custom";
    }
}
