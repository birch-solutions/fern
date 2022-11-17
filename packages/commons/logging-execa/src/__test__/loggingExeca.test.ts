import { createLogger } from "@fern-api/logger";
import { readdir } from "fs/promises";
import path from "path";
import tmp from "tmp-promise";
import { loggingExeca } from "../loggingExeca";

describe("loggingExeca", () => {
    it("runs command", async () => {
        const tmpdir = (await tmp.dir()).path;
        await loggingExeca(undefined, "touch", [path.join(tmpdir, "test.txt")]);
        const filesInTmpDir = await readdir(tmpdir);
        expect(filesInTmpDir).toEqual(["test.txt"]);
    });

    it("logs command", async () => {
        const lines: string[] = [];
        const logger = createLogger((_level, ...args) => lines.push(args.join(" ")));

        const tmpdir = (await tmp.dir()).path;
        const pathToTouch = path.join(tmpdir, "test.txt");
        await loggingExeca(logger, "touch", [pathToTouch]);

        expect(lines).toEqual([`+ touch ${pathToTouch}`]);
    });

    it("redacts secrets", async () => {
        const lines: string[] = [];
        const logger = createLogger((_level, ...args) => lines.push(args.join(" ")));

        const tmpdir = (await tmp.dir()).path;
        const pathToTouch = path.join(tmpdir, "test.txt");
        await loggingExeca(logger, "touch", [pathToTouch], {
            secrets: ["test"],
        });

        expect(lines).toEqual([`+ touch ${path.join(tmpdir, "<redacted>.txt")}`]);
    });
});
