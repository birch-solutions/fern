/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedOauthClientCredentialsDefaultClient } from "../src/Client";

const client = new SeedOauthClientCredentialsDefaultClient({
    environment: process.env.TESTS_BASE_URL || "test",
    clientId: process.env.TESTS_CLIENT_ID || "test",
    clientSecret: process.env.TESTS_CLIENT_SECRET || "test",
});

describe("Auth", () => {
    test("getToken", async () => {
        const response = await client.auth.getToken({
            clientId: "string",
            clientSecret: "string",
            grantType: "client_credentials",
        });
        expect(response).toEqual({ accessToken: "string", expiresIn: 1 });
    });
});
