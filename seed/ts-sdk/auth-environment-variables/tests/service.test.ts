/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedAuthEnvironmentVariablesClient } from "../src/Client";

const client = new SeedAuthEnvironmentVariablesClient({
    environment: process.env.TESTS_BASE_URL || "test",
    apiKey: process.env.FERN_API_KEY || "test",
    xAnotherHeader: process.env.TESTS_HEADER || "test",
});

describe("Service", () => {
    test("getWithApiKey", async () => {
        const response = await client.service.getWithApiKey();
        expect(response).toEqual("string");
    });

    test("getWithHeader", async () => {
        const response = await client.service.getWithHeader({
            xEndpointHeader: "string",
        });
        expect(response).toEqual("string");
    });
});
