import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { getViolationsForRule } from "../../../testing-utils/getViolationsForRule";
import { ValidDefaultEnvironmentRule } from "@fern-api/fern-definition-validator";
describe("valid-default-environment", () => {
    it("default-env-missing", async () => {
        const violations = await getViolationsForRule({
            rule: ValidDefaultEnvironmentRule,
            absolutePathToWorkspace: join(
                AbsoluteFilePath.of(__dirname),
                RelativeFilePath.of("fixtures"),
                RelativeFilePath.of("default-env-missing")
            )
        });
        expect(violations).toEqual([
            {
                message: "The default-environment dev is not listed as an environment",
                nodePath: ["default-environment"],
                relativeFilepath: RelativeFilePath.of("api.yml"),
                severity: "error"
            }
        ]);
    });

    it("default-env-unspecified", async () => {
        const violations = await getViolationsForRule({
            rule: ValidDefaultEnvironmentRule,
            absolutePathToWorkspace: join(
                AbsoluteFilePath.of(__dirname),
                RelativeFilePath.of("fixtures"),
                RelativeFilePath.of("default-env-unspecified")
            )
        });
        expect(violations).toEqual([
            {
                message: "Please specify a default-environment. If no default, use null",
                nodePath: ["default-environment"],
                relativeFilepath: RelativeFilePath.of("api.yml"),
                severity: "error"
            }
        ]);
    });

    it("default-env-valid", async () => {
        const violations = await getViolationsForRule({
            rule: ValidDefaultEnvironmentRule,
            absolutePathToWorkspace: join(
                AbsoluteFilePath.of(__dirname),
                RelativeFilePath.of("fixtures"),
                RelativeFilePath.of("default-env-valid")
            )
        });
        expect(violations).toEqual([]);
    });

    it("default-env-null", async () => {
        const violations = await getViolationsForRule({
            rule: ValidDefaultEnvironmentRule,
            absolutePathToWorkspace: join(
                AbsoluteFilePath.of(__dirname),
                RelativeFilePath.of("fixtures"),
                RelativeFilePath.of("default-env-null")
            )
        });
        expect(violations).toEqual([]);
    });
});
