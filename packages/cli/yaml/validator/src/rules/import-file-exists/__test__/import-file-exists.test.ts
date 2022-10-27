import { AbsoluteFilePath, join } from "@fern-api/fs-utils";
import { getViolationsForRule } from "../../../testing-utils/getViolationsForRule";
import { ImportFileExistsRule } from "../import-file-exists";

describe("import-file-exists", () => {
    it("simple", async () => {
        const violations = await getViolationsForRule({
            rule: ImportFileExistsRule,
            absolutePathToWorkspace: join(AbsoluteFilePath.of(__dirname), "fixtures", "simple"),
        });

        expect(violations).toEqual([
            {
                message: "Import missing points to non-existent path missing/missing.yml.",
                nodePath: ["imports", "missing"],
                relativeFilepath: "root.yml",
                severity: "error",
            },
            {
                message: "Import missing points to non-existent path ./missing.yml.",
                nodePath: ["imports", "missing"],
                relativeFilepath: "subfolder-a/a.yml",
                severity: "error",
            },
            {
                message: "Import doesNotExist points to non-existent path ../subfolder-a/a.",
                nodePath: ["imports", "doesNotExist"],
                relativeFilepath: "subfolder-b/b.yml",
                severity: "error",
            },
        ]);
    });
});
