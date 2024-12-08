import { RelativeFilePath } from "@fern-api/fs-utils";
import { NodePath } from "@fern-api/fern-definition-schema";
import { GeneratorsYmlFileAstNodeTypes, GeneratorsYmlFileAstNodeVisitor } from "./ast";
import { RuleVisitors } from "./Rule";
import { ValidationViolation } from "./ValidationViolation";
import { generatorsYml } from "@fern-api/configuration-loader";
import { GeneratorsYmlFileAstVisitor } from "./ast/GeneratorsYmlAstVisitor";

export function createGeneratorsYmlAstVisitorForRules({
    relativeFilepath,
    contents,
    allRuleVisitors,
    addViolations
}: {
    relativeFilepath: RelativeFilePath;
    contents: generatorsYml.GeneratorsConfigurationSchema;
    allRuleVisitors: RuleVisitors[];
    addViolations: (newViolations: ValidationViolation[]) => void;
}): GeneratorsYmlFileAstVisitor {
    function createAstNodeVisitor<K extends keyof GeneratorsYmlFileAstNodeTypes>(
        nodeType: K
    ): Record<K, GeneratorsYmlFileAstNodeVisitor<K>> {
        const visit: GeneratorsYmlFileAstNodeVisitor<K> = (
            node: GeneratorsYmlFileAstNodeTypes[K],
            nodePath: NodePath
        ) => {
            for (const ruleVisitors of allRuleVisitors) {
                const visitFromRule = ruleVisitors.generatorsYml?.[nodeType];
                if (visitFromRule != null) {
                    const ruleViolations = visitFromRule(node, { relativeFilepath, contents });
                    addViolations(
                        ruleViolations.map((violation) => ({
                            severity: violation.severity,
                            relativeFilepath,
                            nodePath,
                            message: violation.message
                        }))
                    );
                }
            }
        };

        return { [nodeType]: visit } as Record<K, GeneratorsYmlFileAstNodeVisitor<K>>;
    }

    return {
        ...createAstNodeVisitor("file"),
        ...createAstNodeVisitor("generatorInvocation")
    };
}
