/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedExamplesClient } from "../../src/Client";

const client = new SeedExamplesClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
});

describe("Service", () => {
    test("check", async () => {
        const response = await client.health.service.check("id-2sdx82h");
        expect(response).toEqual(undefined);
    });

    test("ping", async () => {
        const response = await client.health.service.ping();
        expect(response).toEqual(undefined);
    });
});
