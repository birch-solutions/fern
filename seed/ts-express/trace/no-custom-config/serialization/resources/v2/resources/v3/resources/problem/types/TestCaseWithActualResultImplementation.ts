/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const TestCaseWithActualResultImplementation: core.serialization.ObjectSchema<
    serializers.v2.v3.TestCaseWithActualResultImplementation.Raw,
    SeedTrace.v2.v3.TestCaseWithActualResultImplementation
> = core.serialization.object({
    getActualResult: core.serialization.lazyObject(
        async () => (await import("../../../../../../..")).v2.v3.NonVoidFunctionDefinition
    ),
    assertCorrectnessCheck: core.serialization.lazy(
        async () => (await import("../../../../../../..")).v2.v3.AssertCorrectnessCheck
    ),
});

export declare namespace TestCaseWithActualResultImplementation {
    interface Raw {
        getActualResult: serializers.v2.v3.NonVoidFunctionDefinition.Raw;
        assertCorrectnessCheck: serializers.v2.v3.AssertCorrectnessCheck.Raw;
    }
}
