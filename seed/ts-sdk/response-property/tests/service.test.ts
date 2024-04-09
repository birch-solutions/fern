/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedResponsePropertyClient } from "../src/Client";

const client = new SeedResponsePropertyClient({ environment: process.env.TESTS_BASE_URL || "test" });

describe("Service", () => {
    test("getMovie", async () => {
        const response = await client.service.getMovie("string");
        expect(response).toEqual({ id: "string", name: "string" });
    });

    test("getMovieDocs", async () => {
        const response = await client.service.getMovieDocs("string");
        expect(response).toEqual("string");
    });

    test("getMovieName", async () => {
        const response = await client.service.getMovieName("string");
        expect(response).toEqual("string");
    });

    test("getMovieMetadata", async () => {
        const response = await client.service.getMovieMetadata("string");
        expect(response).toEqual({ string: "string" });
    });

    test("getOptionalMovie", async () => {
        const response = await client.service.getOptionalMovie("string");
        expect(response).toEqual({ id: "string", name: "string" });
    });

    test("getOptionalMovieDocs", async () => {
        const response = await client.service.getOptionalMovieDocs("string");
        expect(response).toEqual("string");
    });

    test("getOptionalMovieName", async () => {
        const response = await client.service.getOptionalMovieName("string");
        expect(response).toEqual("string");
    });
});
