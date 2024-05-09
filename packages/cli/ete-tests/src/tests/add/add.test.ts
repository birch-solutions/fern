import { getDirectoryContents } from "@fern-api/fs-utils";
import { runFernCli } from "../../utils/runFernCli";
import { init } from "../init/init";

describe("fern add", () => {
    it("fern add <generator>", async () => {
        const pathOfDirectory = await init();

        const add = async (generator: string) => {
            await runFernCli(["add", generator], {
                cwd: pathOfDirectory
            });
        };

        await add("fernapi/fern-java-sdk");
        await add("fern-postman");

        expect(await getDirectoryContents(pathOfDirectory)).not.toBeNull();
    }, 60_000);
});
