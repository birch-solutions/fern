/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedEnum from "../src/api/index";
import { SeedEnumClient } from "../src/Client";

const client = new SeedEnumClient({ environment: process.env.TESTS_BASE_URL || "test" });

describe("InlinedRequest", () => {
    test("send", async () => {
        const response = await client.inlinedRequest.send({
            operand: SeedEnum.Operand.GreaterThan,
            operandOrColor: SeedEnum.Color.Red,
        });
        expect(response).toEqual(undefined);
    });
});
