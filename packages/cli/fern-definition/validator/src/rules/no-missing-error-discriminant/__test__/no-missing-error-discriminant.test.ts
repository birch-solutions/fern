import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { getViolationsForRule } from "../../../testing-utils/getViolationsForRule";
import { NoMissingErrorDiscriminantRule } from "../no-missing-error-discriminant";

describe("no-missing-error-discriminant", () => {
    it("discriminant-missing-errors-declared", () => {
        const violations = getViolationsForRule({
            rule: NoMissingErrorDiscriminantRule,
            absolutePathToWorkspace: join(
                AbsoluteFilePath.of(__dirname),
                RelativeFilePath.of("fixtures"),
                RelativeFilePath.of("discriminant-missing-errors-declared")
            )
        });
        expect(violations).toEqual([
            {
                message: "error-discrimination is required because this API has declared errors.",
                nodePath: ["error-discrimination"],
                relativeFilepath: RelativeFilePath.of("api.yml"),
                severity: "error"
            }
        ]);
    });

    it("discriminant-missing-no-errors-declared", () => {
        const violations = getViolationsForRule({
            rule: NoMissingErrorDiscriminantRule,
            absolutePathToWorkspace: join(
                AbsoluteFilePath.of(__dirname),
                RelativeFilePath.of("fixtures"),
                RelativeFilePath.of("discriminant-missing-no-errors-declared")
            )
        });
        expect(violations).toEqual([]);
    });

    it("discriminant-present-errors-declared", () => {
        const violations = getViolationsForRule({
            rule: NoMissingErrorDiscriminantRule,
            absolutePathToWorkspace: join(
                AbsoluteFilePath.of(__dirname),
                RelativeFilePath.of("fixtures"),
                RelativeFilePath.of("discriminant-present-errors-declared")
            )
        });
        expect(violations).toEqual([]);
    });

    it("discriminant-present-no-errors-declared", () => {
        const violations = getViolationsForRule({
            rule: NoMissingErrorDiscriminantRule,
            absolutePathToWorkspace: join(
                AbsoluteFilePath.of(__dirname),
                RelativeFilePath.of("fixtures"),
                RelativeFilePath.of("discriminant-present-no-errors-declared")
            )
        });
        expect(violations).toEqual([]);
    });
});
