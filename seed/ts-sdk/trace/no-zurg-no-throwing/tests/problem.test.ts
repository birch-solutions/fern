/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../src/api";
import { SeedTraceClient } from "../src/Client";

const client = new SeedTraceClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
    xRandomHeader: process.env.TESTS_HEADER || "test",
});

describe("Problem", () => {
    test("createProblem", async () => {
        const response = await client.problem.createProblem({
            problemName: "string",
            problemDescription: {
                boards: [
                    {
                        type: "html",
                        value: "string",
                    },
                ],
            },
            files: {
                [SeedTrace.Language.Java]: {
                    solutionFile: {
                        filename: "string",
                        contents: "string",
                    },
                    readOnlyFiles: [
                        {
                            filename: "string",
                            contents: "string",
                        },
                    ],
                },
            },
            inputParams: [
                {
                    variableType: {
                        type: "integerType",
                    },
                    name: "string",
                },
            ],
            outputType: {
                type: "integerType",
            },
            testcases: [
                {
                    testCase: {
                        id: "string",
                        params: [
                            {
                                type: "integerValue",
                                value: 1,
                            },
                        ],
                    },
                    expectedResult: {
                        type: "integerValue",
                        value: 1,
                    },
                },
            ],
            methodName: "string",
        });
        expect(response).toEqual({ "0": "s", "1": "t", "2": "r", "3": "i", "4": "n", "5": "g", type: "success" });
    });

    test("updateProblem", async () => {
        const response = await client.problem.updateProblem("string", {
            problemName: "string",
            problemDescription: {
                boards: [
                    {
                        type: "html",
                        value: "string",
                    },
                ],
            },
            files: {
                [SeedTrace.Language.Java]: {
                    solutionFile: {
                        filename: "string",
                        contents: "string",
                    },
                    readOnlyFiles: [
                        {
                            filename: "string",
                            contents: "string",
                        },
                    ],
                },
            },
            inputParams: [
                {
                    variableType: {
                        type: "integerType",
                    },
                    name: "string",
                },
            ],
            outputType: {
                type: "integerType",
            },
            testcases: [
                {
                    testCase: {
                        id: "string",
                        params: [
                            {
                                type: "integerValue",
                                value: 1,
                            },
                        ],
                    },
                    expectedResult: {
                        type: "integerValue",
                        value: 1,
                    },
                },
            ],
            methodName: "string",
        });
        expect(response).toEqual({ problemVersion: 1 });
    });

    test("deleteProblem", async () => {
        const response = await client.problem.deleteProblem("string");
        expect(response).toEqual(undefined);
    });

    test("getDefaultStarterFiles", async () => {
        const response = await client.problem.getDefaultStarterFiles({
            inputParams: [
                {
                    variableType: {
                        type: "integerType",
                    },
                    name: "string",
                },
            ],
            outputType: {
                type: "integerType",
            },
            methodName: "string",
        });
        expect(response).toEqual({
            files: {
                JAVA: {
                    solutionFile: { filename: "string", contents: "string" },
                    readOnlyFiles: [{ filename: "string", contents: "string" }],
                },
            },
        });
    });
});
