/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedExhaustiveClient } from "../src/Client";

const client = new SeedExhaustiveClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
});

describe("ReqWithHeaders", () => {
    test("getWithCustomHeader", async () => {
        const response = await client.reqWithHeaders.getWithCustomHeader({
            xTestServiceHeader: "string",
            xTestEndpointHeader: "string",
            body: "string",
        });
        expect(response).toEqual(undefined);
    });
});
