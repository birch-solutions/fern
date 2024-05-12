/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../src/api/index";
import { SeedTraceClient } from "../src/Client";

const client = new SeedTraceClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
    xRandomHeader: process.env.TESTS_HEADER || "test",
});

describe("Submission", () => {
    test("createExecutionSession", async () => {
        const response = await client.submission.createExecutionSession(SeedTrace.Language.Java);
        expect(response).toEqual(undefined);
    });

    test("getExecutionSession", async () => {
        const response = await client.submission.getExecutionSession("string");
        expect(response).toEqual(undefined);
    });

    test("stopExecutionSession", async () => {
        const response = await client.submission.stopExecutionSession("string");
        expect(response).toEqual(undefined);
    });

    test("getExecutionSessionsState", async () => {
        const response = await client.submission.getExecutionSessionsState();
        expect(response).toEqual(undefined);
    });
});
