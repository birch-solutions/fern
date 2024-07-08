import { LANGUAGE_NAME } from "../..";

describe("FULL_LANGUAGE_NAME Language", () => {

    // TODO: 👋 Add your other language tests here

    it("makes function", async () => {
        const output = LANGUAGE_NAME.makeFunction({
            name: "doSomething",
        });
        // eslint-disable-next-line no-console
        console.log(output.toString());
    });

    it("makes class", async () => {
        const output = LANGUAGE_NAME.makeClass({
            name: "Example",
            functions: [
                LANGUAGE_NAME.makeFunction({
                    name: "doSomething",
                }),
            ]
        });
        // eslint-disable-next-line no-console
        console.log(output.toString());
    });

    it("makes file", async () => {
        const output = LANGUAGE_NAME.makeFile({
            name: "FernExample.LANGUAGE_NAME",
            class: LANGUAGE_NAME.makeClass({
                name: "Example",
                functions: [
                    LANGUAGE_NAME.makeFunction({
                        name: "doSomething",
                    }),
                ]
            }),
        });
        // eslint-disable-next-line no-console
        console.log(output.toString());
    });

});
