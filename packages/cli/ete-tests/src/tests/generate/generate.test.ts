import { AbsoluteFilePath, doesPathExist, join, RelativeFilePath } from "@fern-api/fs-utils";
import stripAnsi from "strip-ansi";
import { runFernCli } from "../../utils/runFernCli";
import { init } from "../init/init";

const fixturesDir = join(AbsoluteFilePath.of(__dirname), RelativeFilePath.of("fixtures"));
const FIXTURES = ["docs"];

describe("fern generate", () => {
    it("default api (fern init)", async () => {
        const pathOfDirectory = await init();

        await runFernCli(["generate", "--local", "--keepDocker"], {
            cwd: pathOfDirectory,
        });

        expect(await doesPathExist(join(pathOfDirectory, RelativeFilePath.of("generated/typescript")))).toBe(true);
    }, 180_000);

    it("missing docs page", async () => {
        const { stdout } = await runFernCli(["generate", "--docs"], {
            cwd: join(fixturesDir, RelativeFilePath.of("docs-missing-page")),
            reject: false,
        });

        expect(
            stripAnsi(stdout)
                // for some reason, locally the output contains a newline that Circle doesn't
                .trim()
        ).toMatchSnapshot();
    });

    for (const fixtureName of FIXTURES) {
        // eslint-disable-next-line jest/expect-expect
        it(
            // eslint-disable-next-line jest/valid-title
            fixtureName,
            async () => {
                await runFernCli(["generate", "--docs"], {
                    cwd: join(fixturesDir, RelativeFilePath.of(fixtureName)),
                });
                await runFernCli(["generate", "--docs", "--preview"], {
                    cwd: join(fixturesDir, RelativeFilePath.of(fixtureName)),
                });
            },
            180_000
        );
    }
});
