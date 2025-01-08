/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../index.js";

export interface TestCaseV2 {
    metadata: SeedTrace.v2.TestCaseMetadata;
    implementation: SeedTrace.v2.TestCaseImplementationReference;
    arguments: Record<SeedTrace.v2.ParameterId, SeedTrace.VariableValue>;
    expects?: SeedTrace.v2.TestCaseExpects;
}
