/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedMixedCaseClient } from "../src/Client";

const client = new SeedMixedCaseClient({ environment: process.env.TESTS_BASE_URL || "test" });

function adaptResponse(response: unknown) {
    return JSON.parse(JSON.stringify(response, (_key, value) => (value instanceof Set ? [...value] : value)));
}

describe("Service", () => {
    test("getResource", async () => {
        const response = await client.service.getResource("rsc-xyz");
        expect(adaptResponse(response)).toEqual({
            resource_type: "user",
            userName: "username",
            metadata_tags: ["tag1", "tag2"],
            EXTRA_PROPERTIES: { foo: "bar", baz: "qux" },
        });
    });

    test("listResources", async () => {
        const response = await client.service.listResources({
            pageLimit: 10,
            beforeDate: "2023-01-01",
        });
        expect(adaptResponse(response)).toEqual([
            [
                {
                    resource_type: "user",
                    userName: "username",
                    metadata_tags: ["tag1", "tag2"],
                    EXTRA_PROPERTIES: { foo: "bar", baz: "qux" },
                },
            ],
        ]);
    });
});
