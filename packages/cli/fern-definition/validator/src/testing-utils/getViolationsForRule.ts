import { generatorsYml } from "@fern-api/configuration";
import { AbsoluteFilePath } from "@fern-api/fs-utils";
import { LazyFernWorkspace } from "@fern-api/lazy-fern-workspace";
import { CONSOLE_LOGGER } from "@fern-api/logger";
import { createMockTaskContext } from "@fern-api/task-context";
import stripAnsi from "strip-ansi";
import { Rule } from "../Rule";
import { runRulesOnWorkspace } from "../validateFernWorkspace";
import { ValidationViolation } from "../ValidationViolation";

export declare namespace getViolationsForRule {
    export interface Args {
        rule: Rule;
        absolutePathToWorkspace: AbsoluteFilePath;
        cliVersion?: string;
    }
}

export async function getViolationsForRule({
    rule,
    absolutePathToWorkspace,
    cliVersion
}: getViolationsForRule.Args): Promise<ValidationViolation[]> {
    const context = createMockTaskContext();

    const lazyWorkspace = new LazyFernWorkspace({
        absoluteFilePath: absolutePathToWorkspace,
        generatorsConfiguration: await generatorsYml.loadGeneratorsConfiguration({
            absolutePathToWorkspace,
            context
        }),
        context,
        cliVersion: cliVersion ?? "0.0.0",
        workspaceName: undefined
    });
    const fernWorkspace = await lazyWorkspace.toFernWorkspace({ context });

    const violations = await runRulesOnWorkspace({
        workspace: fernWorkspace,
        logger: CONSOLE_LOGGER,
        rules: [rule]
    });

    return violations.map((violation) => ({
        ...violation,
        message: stripAnsi(violation.message)
    }));
}
