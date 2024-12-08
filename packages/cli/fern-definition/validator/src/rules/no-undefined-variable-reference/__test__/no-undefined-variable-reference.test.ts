import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { getViolationsForRule } from "../../../testing-utils/getViolationsForRule";
import { ValidationViolation } from "../../../ValidationViolation";
import { NoUndefinedVariableReferenceRule } from "../no-undefined-variable-reference";

describe("no-undefined-variable-reference", () => {
    it("simple",  () => {
        const violations =  getViolationsForRule({
            rule: NoUndefinedVariableReferenceRule,
            absolutePathToWorkspace: join(
                AbsoluteFilePath.of(__dirname),
                RelativeFilePath.of("fixtures"),
                RelativeFilePath.of("simple")
            )
        });

        const expectedViolations: ValidationViolation[] = [
            {
                message: "Variable $var-missing is not defined.",
                nodePath: ["path-parameters", "baz"],
                relativeFilepath: RelativeFilePath.of("api.yml"),
                severity: "error"
            },
            {
                message: "Variable reference must start with $",
                nodePath: ["path-parameters", "biz", "variable"],
                relativeFilepath: RelativeFilePath.of("api.yml"),
                severity: "error"
            },
            {
                message: "Variable $var-missing is not defined.",
                nodePath: ["service", "endpoints", "test", "path-parameters", "baz"],
                relativeFilepath: RelativeFilePath.of("simple.yml"),
                severity: "error"
            },
            {
                message: "Variable reference must start with $",
                nodePath: ["service", "endpoints", "test", "path-parameters", "biz", "variable"],
                relativeFilepath: RelativeFilePath.of("simple.yml"),
                severity: "error"
            }
        ];

        expect(violations).toEqual(expectedViolations);
    });
});
