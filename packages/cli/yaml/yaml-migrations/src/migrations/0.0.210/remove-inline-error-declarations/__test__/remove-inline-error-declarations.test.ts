import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { createMockTaskContext } from "@fern-api/task-context";
import { cp, readFile } from "fs/promises";
import tmp from "tmp-promise";
import { migration } from "../migration";

const FIXTURES_PATH = join(AbsoluteFilePath.of(__dirname), RelativeFilePath.of("fixtures"));

describe("remove-inline-error-declarations", () => {
    it("simple", async () => {
        const fixturePath = join(FIXTURES_PATH, RelativeFilePath.of("simple"));
        const tmpDir = await tmp.dir();

        await cp(fixturePath, tmpDir.path, { recursive: true });
        process.chdir(tmpDir.path);

        await migration.run({
            context: createMockTaskContext()
        });

        const newA = (
            await readFile(join(AbsoluteFilePath.of(tmpDir.path), RelativeFilePath.of("fern/api/definition/a.yml")))
        ).toString();
        const newB = (
            await readFile(join(AbsoluteFilePath.of(tmpDir.path), RelativeFilePath.of("fern/api/definition/b.yml")))
        ).toString();
        expect(newA).toMatchSnapshot();
        expect(newB).toMatchSnapshot();
    });
});
