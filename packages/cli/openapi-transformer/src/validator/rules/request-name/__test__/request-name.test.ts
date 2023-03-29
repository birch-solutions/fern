import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { Document, Spectral } from "@stoplight/spectral-core";
import { Yaml } from "@stoplight/spectral-parsers";
import { readFile } from "fs/promises";
import path from "path";
import { RequestName } from "../request-name";

const FIXTURES_PATH = join(AbsoluteFilePath.of(__dirname), RelativeFilePath.of("fixtures"));
const OPENAPI_JSON_FILENAME = "openapi.yml";

describe("valid-enum-value", () => {
    testFixture("simple");
});

function testFixture(fixtureName: string) {
    // eslint-disable-next-line jest/valid-title
    describe(fixtureName, () => {
        it("simple", async () => {
            const openApiPath = path.join(FIXTURES_PATH, fixtureName, OPENAPI_JSON_FILENAME);
            const rawContents = await readFile(openApiPath);
            const document = new Document(rawContents.toString(), Yaml);
            const spectral = new Spectral();
            spectral.setRuleset({
                rules: {
                    [RequestName.name]: RequestName.get(),
                },
            });
            const violations = await spectral.run(document);
            const ruleViolations = violations.map((val) => {
                return {
                    severity: "error",
                    message: val.message,
                    breacrumbs: val.path.map((val) => val.toString()),
                };
            });
            expect(ruleViolations).toMatchSnapshot();
        });
    });
}
