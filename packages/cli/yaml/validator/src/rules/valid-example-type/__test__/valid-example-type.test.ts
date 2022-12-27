import { AbsoluteFilePath, join } from "@fern-api/fs-utils";
import { getViolationsForRule } from "../../../testing-utils/getViolationsForRule";
import { ValidationViolation } from "../../../ValidationViolation";
import { ValidExampleTypeRule } from "../valid-example-type";

describe("valid-example-type", () => {
    it("simple", async () => {
        const violations = await getViolationsForRule({
            rule: ValidExampleTypeRule,
            absolutePathToWorkspace: join(AbsoluteFilePath.of(__dirname), "fixtures", "simple"),
        });

        const expectedViolations: ValidationViolation[] = [
            // alias.yml
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: "Expected example to be a string. Example is: 14",
                nodePath: ["types", "StringAlias", { key: "examples", arrayIndex: 1 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: 'Expected example to be a string. Example is: {"key":"some value"}',
                nodePath: ["types", "StringAlias", { key: "examples", arrayIndex: 2 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: "Expected example to be an integer. Example is: 3.14",
                nodePath: ["types", "IntegerAlias2", { key: "examples", arrayIndex: 2 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: 'Expected example to be an integer. Example is: "hello"',
                nodePath: ["types", "LongAlias", { key: "examples", arrayIndex: 2 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: "Expected example to be a double. Example is: false",
                nodePath: ["types", "DoubleAlias", { key: "examples", arrayIndex: 2 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: "Expected example to be a boolean. Example is: 100",
                nodePath: ["types", "BooleanAlias", { key: "examples", arrayIndex: 1 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: 'Expected example to be an ISO 8601 timestamp. Example is: "4/13/2002"',
                nodePath: ["types", "DateTimeAlias", { key: "examples", arrayIndex: 0 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: 'Expected example to be a UUID. Example is: "my-id"',
                nodePath: ["types", "UuidAlias", { key: "examples", arrayIndex: 0 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: "Expected example to be a string. Example is: 3.14",
                nodePath: ["types", "ListAlias", { key: "examples", arrayIndex: 1 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: 'Expected example to be a list. Example is: "hello"',
                nodePath: ["types", "ListAlias", { key: "examples", arrayIndex: 2 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: 'Expected example to be a list. Example is: {"key":"value"}',
                nodePath: ["types", "SetAlias", { key: "examples", arrayIndex: 0 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: `Set has duplicate elements:
  - "hello"`,
                nodePath: ["types", "SetAlias", { key: "examples", arrayIndex: 2 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: "Expected example to be a string. Example is: 3.14",
                nodePath: ["types", "SetAlias", { key: "examples", arrayIndex: 3 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: "Expected example to be an integer. Example is: 3.15",
                nodePath: ["types", "MapAlias", { key: "examples", arrayIndex: 1 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: 'Expected example to be a map. Example is: ["hello"]',
                nodePath: ["types", "MapAlias", { key: "examples", arrayIndex: 2 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: 'Expected example to be a double. Example is: "hello"',
                nodePath: ["types", "OptionalAlias", { key: "examples", arrayIndex: 0 }],
            },
            {
                severity: "error",
                relativeFilepath: "alias.yml",
                message: 'Expected example to be "hello". Example is: "goodbye"',
                nodePath: ["types", "LiteralAlias", { key: "examples", arrayIndex: 1 }],
            },

            // enum.yml
            {
                severity: "error",
                relativeFilepath: "enum.yml",
                message: `"Blue" is not a valid example for this enum. Enum values are:
  - Red
  - BLUE
  - purple`,
                nodePath: ["types", "Color", { key: "examples", arrayIndex: 1 }],
            },
            {
                severity: "error",
                relativeFilepath: "enum.yml",
                message: `"PURPLE" is not a valid example for this enum. Enum values are:
  - Red
  - BLUE
  - purple`,
                nodePath: ["types", "Color", { key: "examples", arrayIndex: 3 }],
            },
            {
                severity: "error",
                relativeFilepath: "enum.yml",
                message: 'Expected example to be a string. Example is: {"key":"value"}',
                nodePath: ["types", "Color", { key: "examples", arrayIndex: 4 }],
            },

            // object.yml
            {
                severity: "error",
                relativeFilepath: "object.yml",
                message:
                    'Example is missing required property "foo". Object1 -> (extends) commons.ObjectWithFooAndBar -> foo',
                nodePath: ["types", "Object1", { key: "examples", arrayIndex: 2 }],
            },
            {
                severity: "error",
                relativeFilepath: "object.yml",
                message:
                    'Example is missing required property "bar". Object1 -> (extends) commons.ObjectWithFooAndBar -> (extends) ObjectWithBar -> bar',
                nodePath: ["types", "Object1", { key: "examples", arrayIndex: 3 }],
            },
            {
                severity: "error",
                relativeFilepath: "object.yml",
                message: "Expected example to be an integer. Example is: true",
                nodePath: ["types", "Object1", { key: "examples", arrayIndex: 4 }],
            },
            {
                severity: "error",
                relativeFilepath: "object.yml",
                message: 'Example is missing required property "a"',
                nodePath: ["types", "Object1", { key: "examples", arrayIndex: 5 }],
            },
            {
                severity: "error",
                relativeFilepath: "object.yml",
                message: "Expected example to be a string. Example is: 100",
                nodePath: ["types", "Object1", { key: "examples", arrayIndex: 6 }],
            },
            {
                severity: "error",
                relativeFilepath: "object.yml",
                message: 'Unexpected property "random-property"',
                nodePath: ["types", "Object1", { key: "examples", arrayIndex: 7 }],
            },

            // union.yml
            {
                severity: "error",
                relativeFilepath: "union.yml",
                message: 'Example is missing required property "name"',
                nodePath: ["types", "Animal", { key: "examples", arrayIndex: 3 }],
            },
            {
                severity: "error",
                relativeFilepath: "union.yml",
                message: "Expected example to be a string. Example is: 42",
                nodePath: ["types", "Animal", { key: "examples", arrayIndex: 4 }],
            },
            {
                severity: "error",
                relativeFilepath: "union.yml",
                message: 'Unexpected property "randomProperty"',
                nodePath: ["types", "Animal", { key: "examples", arrayIndex: 5 }],
            },
            {
                severity: "error",
                relativeFilepath: "union.yml",
                message: 'Missing property "value2"',
                nodePath: ["types", "Animal", { key: "examples", arrayIndex: 6 }],
            },
            {
                severity: "error",
                relativeFilepath: "union.yml",
                message: "Expected example to be a string. Example is: 42",
                nodePath: ["types", "Animal", { key: "examples", arrayIndex: 7 }],
            },
            {
                severity: "error",
                relativeFilepath: "union.yml",
                message: 'Missing property "value2"',
                nodePath: ["types", "Animal", { key: "examples", arrayIndex: 8 }],
            },
            {
                severity: "error",
                relativeFilepath: "union.yml",
                message: 'Unexpected property "randomProperty"',
                nodePath: ["types", "Animal", { key: "examples", arrayIndex: 8 }],
            },
            {
                severity: "error",
                relativeFilepath: "union.yml",
                message: 'Unexpected property "randomProperty"',
                nodePath: ["types", "Animal", { key: "examples", arrayIndex: 9 }],
            },
        ];

        expect(violations).toEqual(expectedViolations);
    });
});
