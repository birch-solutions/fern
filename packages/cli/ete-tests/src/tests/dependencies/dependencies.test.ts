import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import stripAnsi from "strip-ansi";
import { runFernCli } from "../../utils/runFernCli";
import { generateIrAsString } from "../ir/generateIrAsString";

const FIXTURES_DIR = join(AbsoluteFilePath.of(__dirname), "fixtures");

describe("dependencies", () => {
    it("correctly incorporates dependencies", async () => {
        const ir = await generateIrAsString({
            fixturePath: join(FIXTURES_DIR, RelativeFilePath.of("simple")),
            apiName: "dependent",
        });
        expect(ir).toMatchSnapshot();
    }, 90_000);

    it("fails when dependency does not exist", async () => {
        const { stdout } = await runFernCli(["check"], {
            cwd: join(FIXTURES_DIR, RelativeFilePath.of("non-existent-dependency")),
            reject: false,
        });
        expect(stdout).toContain("Failed to load dependency: @fern/non-existent-dependency");
    }, 90_000);

    it("fails when dependency is not listed in dependencies.yml", async () => {
        const { stdout } = await runFernCli(["check"], {
            cwd: join(FIXTURES_DIR, RelativeFilePath.of("unlisted-dependency")),
            reject: false,
        });
        expect(stripAnsi(stdout).trim()).toEqual(
            "Dependency is not listed in dependencies.yml: @fern/unlisted-dependency"
        );
    }, 90_000);

    it("fails when export package contains definitions", async () => {
        const { stdout } = await runFernCli(["check"], {
            cwd: join(FIXTURES_DIR, RelativeFilePath.of("other-definitions-specified")),
            reject: false,
        });
        expect(stripAnsi(stdout).trim()).toEqual(`Exported package contains API definitions: package1
Exported package contains API definitions: package2`);
    }, 90_000);
});
