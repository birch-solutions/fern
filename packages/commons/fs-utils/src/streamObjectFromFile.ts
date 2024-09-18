import { createReadStream } from "fs";
import { AbsoluteFilePath } from "./AbsoluteFilePath";
import StreamJSON from "stream-json";
import Assembler from "stream-json/Assembler.js";

export async function streamObjectFromFile(filePath: AbsoluteFilePath): Promise<unknown> {
    return new Promise((resolve, reject) => {
        const jsonStream = StreamJSON.parser({
            streamValues: false
        });

        const asm = Assembler.connectTo(jsonStream);
        asm.on("done", ({ current }) => resolve(current));

        createReadStream(filePath).pipe(jsonStream).on("error", reject);
    });
}
