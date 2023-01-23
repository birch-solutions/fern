import { AbsoluteFilePath, doesPathExist, getDirectoryContents, join, RelativeFilePath } from "@fern-api/fs-utils";
import { FERN_DIRECTORY } from "@fern-api/project-configuration";
import { runFernCli } from "../../utils/runFernCli";
import { init } from "./init";

const FIXTURES_DIR = join(AbsoluteFilePath.of(__dirname), "fixtures");
const OPEN_API_FILENAME = "openapi.json";

const FIXTURES = ["gigs", "telematica", "covie"];

describe("fern init", () => {
    it("no existing fern directory", async () => {
        const pathOfDirectory = await init();
        await runFernCli(["check"], {
            cwd: pathOfDirectory,
        });
        expect(await getDirectoryContents(join(pathOfDirectory, FERN_DIRECTORY))).toMatchSnapshot();
    }, 60_000);

    it("existing fern directory", async () => {
        // add existing directory
        const pathOfDirectory = await init();

        // add new api
        await init({
            directory: pathOfDirectory,
        });
        expect(await doesPathExist(join(pathOfDirectory, FERN_DIRECTORY, "api1"))).toBe(true);
    }, 60_000);

    for (const fixture of FIXTURES) {
        it(`${fixture} openapi`, async () => {
            const openApiPath = join(FIXTURES_DIR, RelativeFilePath.of(fixture), OPEN_API_FILENAME);
            const pathOfDirectory = await init({ openApiPath });
            expect(await getDirectoryContents(pathOfDirectory)).toMatchSnapshot();
        }, 60_000);
    }
});
