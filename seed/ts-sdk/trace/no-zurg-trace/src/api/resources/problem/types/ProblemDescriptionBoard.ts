/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type ProblemDescriptionBoard = 
    | SeedTrace.ProblemDescriptionBoard.Html
    | SeedTrace.ProblemDescriptionBoard.Variable
    | SeedTrace.ProblemDescriptionBoard.TestCaseId;

export declare namespace ProblemDescriptionBoard {
    interface Html {
        type: "html";
        value: string;
    }

    interface Variable {
        type: "variable";
        value: SeedTrace.VariableValue;
    }

    interface TestCaseId {
        type: "testCaseId";
        value: string;
    }
}
