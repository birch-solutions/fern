import { RelativeFilePath } from "@fern-api/core-utils";
import { FernAstNodeTypes, NodePath, ServiceFileSchema } from "@fern-api/yaml-schema";
import { FernAstNodeVisitor, FernAstVisitor } from "@fern-api/yaml-schema/src/ast/FernAstVisitor";
import { RuleRunner } from "./Rule";
import { ValidationViolation } from "./ValidationViolation";

export function createAstVisitorForRules({
    relativeFilePath,
    contents,
    ruleRunners,
    addViolations,
}: {
    relativeFilePath: RelativeFilePath;
    contents: ServiceFileSchema;
    ruleRunners: RuleRunner[];
    addViolations: (newViolations: ValidationViolation[]) => void;
}): FernAstVisitor {
    function createAstNodeVisitor<K extends keyof FernAstNodeTypes>(nodeType: K): Record<K, FernAstNodeVisitor<K>> {
        const visit: FernAstNodeVisitor<K> = async (node: FernAstNodeTypes[K], nodePath: NodePath) => {
            for (const visitorInRule of ruleRunners) {
                const visitFromRule = visitorInRule[nodeType];
                if (visitFromRule != null) {
                    const ruleViolations = await visitFromRule(node, { relativeFilePath, contents });
                    addViolations(
                        ruleViolations.map((violation) => ({
                            severity: violation.severity,
                            relativeFilePath,
                            nodePath,
                            message: violation.message,
                        }))
                    );
                }
            }
        };

        return { [nodeType]: visit } as Record<K, FernAstNodeVisitor<K>>;
    }

    const astVisitor: FernAstVisitor = {
        ...createAstNodeVisitor("docs"),
        ...createAstNodeVisitor("import"),
        ...createAstNodeVisitor("id"),
        ...createAstNodeVisitor("typeReference"),
        ...createAstNodeVisitor("typeDeclaration"),
        ...createAstNodeVisitor("typeName"),
        ...createAstNodeVisitor("httpService"),
        ...createAstNodeVisitor("httpEndpoint"),
        ...createAstNodeVisitor("errorDeclaration"),
        ...createAstNodeVisitor("errorReference"),
    };

    return astVisitor;
}
