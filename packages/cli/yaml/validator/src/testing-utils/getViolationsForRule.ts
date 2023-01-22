import { AbsoluteFilePath } from "@fern-api/fs-utils";
import { NOOP_LOGGER } from "@fern-api/logger";
import { createMockTaskContext } from "@fern-api/task-context";
import { loadWorkspace, visitAllServiceFiles } from "@fern-api/workspace-loader";
import { visitFernRootApiFileYamlAst, visitFernServiceFileYamlAst } from "@fern-api/yaml-schema";
import stripAnsi from "strip-ansi";
import { createRootApiFileAstVisitorForRules } from "../createRootApiFileAstVisitorForRules";
import { createServiceFileAstVisitorForRules } from "../createServiceFileAstVisitorForRules";
import { Rule } from "../Rule";
import { ValidationViolation } from "../ValidationViolation";

export declare namespace getViolationsForRule {
    export interface Args {
        rule: Rule;
        absolutePathToWorkspace: AbsoluteFilePath;
    }
}

export async function getViolationsForRule({
    rule,
    absolutePathToWorkspace,
}: getViolationsForRule.Args): Promise<ValidationViolation[]> {
    const parseResult = await loadWorkspace({
        absolutePathToWorkspace,
        context: createMockTaskContext(),
        cliVersion: "0.0.0",
    });
    if (!parseResult.didSucceed) {
        throw new Error("Failed to parse workspace: " + JSON.stringify(parseResult));
    }

    const ruleVisitors = await rule.create({ workspace: parseResult.workspace, logger: NOOP_LOGGER });
    const violations: ValidationViolation[] = [];

    const rootApiFileVisitor = createRootApiFileAstVisitorForRules({
        relativeFilepath: "api.yml",
        contents: parseResult.workspace.rootApiFile.contents,
        allRuleVisitors: [ruleVisitors],
        addViolations: (newViolations) => {
            violations.push(...newViolations);
        },
    });

    await visitFernRootApiFileYamlAst(parseResult.workspace.rootApiFile.contents, rootApiFileVisitor);

    await visitAllServiceFiles(parseResult.workspace, async (relativeFilepath, file) => {
        const visitor = createServiceFileAstVisitorForRules({
            relativeFilepath,
            contents: file,
            allRuleVisitors: [ruleVisitors],
            addViolations: (newViolations) => {
                violations.push(...newViolations);
            },
        });
        await visitFernServiceFileYamlAst(file, visitor);
    });

    return violations.map((violation) => ({
        ...violation,
        message: stripAnsi(violation.message),
    }));
}
