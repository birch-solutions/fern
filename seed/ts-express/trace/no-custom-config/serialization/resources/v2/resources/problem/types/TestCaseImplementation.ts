/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TestCaseImplementation: core.serialization.ObjectSchema<
    serializers.v2.TestCaseImplementation.Raw,
    SeedTrace.v2.TestCaseImplementation
> = core.serialization.object({
    description: core.serialization.lazyObject(() => serializers.v2.TestCaseImplementationDescription),
    function: core.serialization.lazy(() => serializers.v2.TestCaseFunction),
});

export declare namespace TestCaseImplementation {
    export interface Raw {
        description: serializers.v2.TestCaseImplementationDescription.Raw;
        function: serializers.v2.TestCaseFunction.Raw;
    }
}
