import { list } from "../../../../src/core/schemas/builders/list";
import { object, property } from "../../../../src/core/schemas/builders/object";
import { string } from "../../../../src/core/schemas/builders/primitives";
import { itSchema, itSchemaIdentity } from "../utils/itSchema";
import { itValidate } from "../utils/itValidate";

describe("list", () => {
    itSchemaIdentity(list(string()), ["hello", "world"], {
        title: "functions as identity when item type is primitive",
    });

    itSchema(
        "converts objects correctly",
        list(
            object({
                helloWorld: property("hello_world", string()),
            })
        ),
        {
            raw: [{ hello_world: "123" }],
            parsed: [{ helloWorld: "123" }],
        }
    );

    itValidate("not a list", list(string()), 42, [
        {
            path: [],
            message: "Expected list. Received 42.",
        },
    ]);

    itValidate(
        "invalid item type",
        list(string()),
        [42],
        [
            {
                path: ["[0]"],
                message: "Expected string. Received 42.",
            },
        ]
    );
});
