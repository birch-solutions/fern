/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedCustomAuthClient } from "../src/Client";

const client = new SeedCustomAuthClient({
    environment: process.env.TESTS_BASE_URL || "test",
    customAuthScheme: process.env.TESTS_AUTH || "test",
});

describe("CustomAuth", () => {
    test("getWithCustomAuth", async () => {
        const response = await client.customAuth.getWithCustomAuth();
        expect(response).toEqual(true);
    });

    test("postWithCustomAuth", async () => {
        const response = await client.customAuth.postWithCustomAuth({
            key: "value",
        });
        expect(response).toEqual(true);
    });
});
