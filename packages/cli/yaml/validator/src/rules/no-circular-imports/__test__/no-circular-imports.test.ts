import { AbsoluteFilePath, join } from "@fern-api/fs-utils";
import { getViolationsForRule } from "../../../testing-utils/getViolationsForRule";
import { NoCircularImportsRule } from "../no-circular-imports";

describe("no-circular-imports", () => {
    it("simple", async () => {
        const violations = await getViolationsForRule({
            rule: NoCircularImportsRule,
            absolutePathToWorkspace: join(AbsoluteFilePath.of(__dirname), "fixtures", "simple"),
        });

        expect(violations).toEqual([
            {
                message: "A file cannot import itself",
                nodePath: ["imports", "b"],
                relativeFilepath: "b.yml",
                severity: "error",
            },
            {
                message: "Circular import detected: c/c.yml -> d/d.yml -> e.yml -> c/c.yml",
                nodePath: ["imports", "d"],
                relativeFilepath: "c/c.yml",
                severity: "error",
            },
            {
                message: "Circular import detected: d/d.yml -> e.yml -> d/d.yml",
                nodePath: ["imports", "e"],
                relativeFilepath: "d/d.yml",
                severity: "error",
            },
        ]);
    });
});
