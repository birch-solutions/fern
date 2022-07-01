import { HttpPath } from "@fern-fern/ir-model/services";
import { constructHttpPath } from "../converters/services/constructHttpPath";

describe("constructHttpPath", () => {
    it("/hello/{world}", () => {
        const expected: HttpPath = {
            head: "/hello/",
            parts: [
                {
                    pathParameter: "world",
                    tail: "",
                },
            ],
        };
        const actual = constructHttpPath("/hello/{world}");
        expect(actual).toEqual(expected);
    });

    it("{hello}/{world}", () => {
        const expected: HttpPath = {
            head: "",
            parts: [
                {
                    pathParameter: "hello",
                    tail: "/",
                },
                {
                    pathParameter: "world",
                    tail: "",
                },
            ],
        };
        const actual = constructHttpPath("{hello}/{world}");
        expect(actual).toEqual(expected);
    });

    it("{hello}/{world}/hello", () => {
        const expected: HttpPath = {
            head: "",
            parts: [
                {
                    pathParameter: "hello",
                    tail: "/",
                },
                {
                    pathParameter: "world",
                    tail: "/hello",
                },
            ],
        };
        const actual = constructHttpPath("{hello}/{world}/hello");
        expect(actual).toEqual(expected);
    });
});
