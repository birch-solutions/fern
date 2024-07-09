import LANGUAGE from "../../SHORT_LANG";
import { FileGenerator } from "@fern-api/generator-commons";

describe("LANGUAGE Language", () => {

    // TODO: 👋 Add your other language tests here

    // Note: You can change the language's indentation size with FULL_LANGUAGE_NAME.indentSize

    it("makes function", () => {
        const output = LANGUAGE.makeFunction({
            name: "doSomething",
        });
        expect(output.toString()).toMatchSnapshot();
    });

    it("makes class", () => {
        const output = LANGUAGE.makeClass({
            name: "Example",
            functions: [
                LANGUAGE.makeFunction({
                    name: "doSomething",
                }),
            ]
        });
        expect(output.toString()).toMatchSnapshot();
    });

    it("makes file", () => {
        const output = LANGUAGE.makeFile({
            name: "FernExample.SHORT_LANG",
            class: LANGUAGE.makeClass({
                name: "Example",
                functions: [
                    LANGUAGE.makeFunction({
                        name: "doSomething",
                    }),
                ]
            }),
        });
        expect(output.toString()).toMatchSnapshot();
        FileGenerator.generate({
            fileName: "Sample", 
            node: output, 
            extension: "SHORT_LANG",
            outputDir: "src/ast/__test__",
        });
    });

});
