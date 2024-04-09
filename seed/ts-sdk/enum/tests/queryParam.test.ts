/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedEnum from "../src/api";
import { SeedEnumClient } from "../src/Client";

const client = new SeedEnumClient({ environment: process.env.TESTS_BASE_URL || "test" });

describe("QueryParam", () => {
    test("send", async () => {
        const response = await client.queryParam.send({
            operand: SeedEnum.Operand.GreaterThan,
            operandOrColor: SeedEnum.Color.Red,
        });
        expect(response).toEqual(undefined);
    });
});
