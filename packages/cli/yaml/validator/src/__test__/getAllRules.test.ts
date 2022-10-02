import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/core-utils";
import { readdir } from "fs/promises";
import { getAllRules } from "../getAllRules";
import { Rule } from "../Rule";

const RULES_DIRECTORY = join(AbsoluteFilePath.of(__dirname), "../rules");

describe("getAllRules", () => {
    it("ensure all rules are registered", async () => {
        const allRulesPromises = (await readdir(RULES_DIRECTORY, { withFileTypes: true }))
            .filter((item) => item.isDirectory())
            .map(async (item) => {
                const fullPath = join(RULES_DIRECTORY, RelativeFilePath.of(item.name));
                const imported = await import(fullPath);
                return imported.default as Rule;
            });
        const allRules: Rule[] = await Promise.all(allRulesPromises);

        const registeredRules = getAllRules();

        expect(allRules.length).toEqual(registeredRules.length);
        for (const rule of allRules) {
            expect(registeredRules).toContainEqual(
                expect.objectContaining({
                    name: rule.name,
                })
            );
        }
    });

    it("ensure rule names are unique", () => {
        const rules = getAllRules();
        for (const { name } of rules) {
            const rulesWithName = rules.filter((rule) => rule.name === name);
            expect(rulesWithName).toHaveLength(1);
        }
    });
});
