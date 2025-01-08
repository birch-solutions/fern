/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../index";

export type TestCaseImplementationReference =
    | SeedTrace.v2.TestCaseImplementationReference.TemplateId
    | SeedTrace.v2.TestCaseImplementationReference.Implementation;

export namespace TestCaseImplementationReference {
    export interface TemplateId {
        type: "templateId";
        value: SeedTrace.v2.TestCaseTemplateId;
    }

    export interface Implementation extends SeedTrace.v2.TestCaseImplementation {
        type: "implementation";
    }
}
