/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../index";

export interface CreateProblemRequestV2 {
    "problemName": string;
    "problemDescription": SeedTrace.ProblemDescription;
    "customFiles": SeedTrace.v2.CustomFiles;
    "customTestCaseTemplates": SeedTrace.v2.TestCaseTemplate[];
    "testcases": SeedTrace.v2.TestCaseV2[];
    "supportedLanguages": SeedTrace.Language[];
    "isPublic": boolean;
}
