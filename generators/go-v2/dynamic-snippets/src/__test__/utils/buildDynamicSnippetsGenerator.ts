import { AbsoluteFilePath } from "@fern-api/path-utils";
import { DynamicSnippetsGenerator } from "../../DynamicSnippetsGenerator";
import { FernGeneratorExec } from "@fern-api/browser-compatible-base-generator";
import { readFileSync } from "fs";
import { GoFormatter } from "@fern-api/go-formatter";

export function buildDynamicSnippetsGenerator({
    irFilepath,
    config
}: {
    irFilepath: AbsoluteFilePath;
    config: FernGeneratorExec.GeneratorConfig;
}): DynamicSnippetsGenerator {
    const content = readFileSync(irFilepath, "utf-8");
    const ir = JSON.parse(content);
    return new DynamicSnippetsGenerator({ ir, config, formatter: new GoFormatter() });
}
