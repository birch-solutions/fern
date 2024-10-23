import { number } from "../../builders";
import { itSchemaIdentity } from "../utils/itSchema";
import { itValidate } from "../utils/itValidate";

describe("number", () => {
    itSchemaIdentity(number(), 42);

    itValidate("non-number", number(), "hello", [
        {
            path: [],
            message: 'Expected number. Received "hello".'
        }
    ]);
});
