/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedValidationClient } from "../src/Client";

const client = new SeedValidationClient({ environment: process.env.TESTS_BASE_URL || "test" });

describe("SeedValidationClient", () => {
    test("create", async () => {
        const response = await client.create({
            decimal: 1.1,
            even: 1,
            name: "string",
        });
        expect(response).toEqual({ decimal: 1.1, even: 2, name: "rules" });
    });

    test("get", async () => {
        const response = await client.get({
            decimal: 1.1,
            even: 1,
            name: "string",
        });
        expect(response).toEqual({ decimal: 1.1, even: 2, name: "rules" });
    });
});
