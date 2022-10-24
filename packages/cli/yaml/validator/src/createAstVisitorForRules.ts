import { RelativeFilePath } from "@fern-api/core-utils";
import {
    FernAstNodeTypes,
    FernAstNodeVisitor,
    FernAstVisitor,
    NodePath,
    RootApiFileSchema,
    ServiceFileSchema,
} from "@fern-api/yaml-schema";
import { RuleRunner } from "./Rule";
import { ValidationViolation } from "./ValidationViolation";

export function createAstVisitorForRules({
    relativeFilepath,
    contents,
    ruleRunners,
    addViolations,
}: {
    relativeFilepath: RelativeFilePath;
    contents: ServiceFileSchema | RootApiFileSchema;
    ruleRunners: RuleRunner[];
    addViolations: (newViolations: ValidationViolation[]) => void;
}): FernAstVisitor {
    function createAstNodeVisitor<K extends keyof FernAstNodeTypes>(nodeType: K): Record<K, FernAstNodeVisitor<K>> {
        const visit: FernAstNodeVisitor<K> = async (node: FernAstNodeTypes[K], nodePath: NodePath) => {
            for (const visitorInRule of ruleRunners) {
                const visitFromRule = visitorInRule[nodeType];
                if (visitFromRule != null) {
                    const ruleViolations = await visitFromRule(node, { relativeFilepath, contents });
                    addViolations(
                        ruleViolations.map((violation) => ({
                            severity: violation.severity,
                            relativeFilepath,
                            nodePath,
                            message: violation.message,
                        }))
                    );
                }
            }
        };

        return { [nodeType]: visit } as Record<K, FernAstNodeVisitor<K>>;
    }

    return {
        ...createAstNodeVisitor("docs"),
        ...createAstNodeVisitor("import"),
        ...createAstNodeVisitor("typeReference"),
        ...createAstNodeVisitor("typeDeclaration"),
        ...createAstNodeVisitor("typeName"),
        ...createAstNodeVisitor("httpService"),
        ...createAstNodeVisitor("httpEndpoint"),
        ...createAstNodeVisitor("queryParameter"),
        ...createAstNodeVisitor("errorDeclaration"),
        ...createAstNodeVisitor("errorReference"),
        ...createAstNodeVisitor("defaultEnvironment"),
    };
}
