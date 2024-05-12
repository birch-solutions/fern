/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../src/api/index";
import { SeedTraceClient } from "../../src/Client";

const client = new SeedTraceClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
    xRandomHeader: process.env.TESTS_HEADER || "test",
});

describe("Problem", () => {
    test("getLightweightProblems", async () => {
        const response = await client.v2.problem.getLightweightProblems();
        expect(response).toEqual([
            { problemId: "string", problemName: "string", problemVersion: 1, variableTypes: [{ type: "integerType" }] },
        ]);
    });

    test("getProblems", async () => {
        const response = await client.v2.problem.getProblems();
        expect(response).toEqual([
            {
                problemId: "string",
                problemDescription: {
                    boards: [{ "0": "s", "1": "t", "2": "r", "3": "i", "4": "n", "5": "g", type: "html" }],
                },
                problemName: "string",
                problemVersion: 1,
                supportedLanguages: ["JAVA"],
                customFiles: { type: "basic" },
                generatedFiles: {},
                customTestCaseTemplates: [{}],
                testcases: [{}],
                isPublic: true,
            },
        ]);
    });

    test("getLatestProblem", async () => {
        const response = await client.v2.problem.getLatestProblem(SeedTrace.ProblemId("string"));
        expect(response).toEqual({
            problemId: "string",
            problemDescription: {
                boards: [{ "0": "s", "1": "t", "2": "r", "3": "i", "4": "n", "5": "g", type: "html" }],
            },
            problemName: "string",
            problemVersion: 1,
            supportedLanguages: ["JAVA"],
            customFiles: { type: "basic" },
            generatedFiles: {},
            customTestCaseTemplates: [{}],
            testcases: [{}],
            isPublic: true,
        });
    });

    test("getProblemVersion", async () => {
        const response = await client.v2.problem.getProblemVersion(SeedTrace.ProblemId("string"), 1);
        expect(response).toEqual({
            problemId: "string",
            problemDescription: {
                boards: [{ "0": "s", "1": "t", "2": "r", "3": "i", "4": "n", "5": "g", type: "html" }],
            },
            problemName: "string",
            problemVersion: 1,
            supportedLanguages: ["JAVA"],
            customFiles: { type: "basic" },
            generatedFiles: {},
            customTestCaseTemplates: [{}],
            testcases: [{}],
            isPublic: true,
        });
    });
});
