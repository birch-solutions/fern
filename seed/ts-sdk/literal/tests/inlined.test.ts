/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedLiteralClient } from "../src/Client";

const client = new SeedLiteralClient({ environment: process.env.TESTS_BASE_URL || "test" });

describe("Inlined", () => {
    test("send", async () => {
        const response = await client.inlined.send({
            temperature: 10.1,
            prompt: "You are a helpful assistant",
            stream: false,
            query: "What is the weather today",
        });
        expect(response).toEqual(undefined);
    });
});
