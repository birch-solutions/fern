import { RelativeFilePath } from "@fern-api/fs-utils";
import {
    DefinitionFileAstNodeTypes,
    DefinitionFileAstNodeVisitor,
    DefinitionFileAstVisitor,
    DefinitionFileSchema,
    NodePath,
} from "@fern-api/yaml-schema";
import { RuleVisitors } from "./Rule";
import { ValidationViolation } from "./ValidationViolation";

export function createDefinitionFileAstVisitorForRules({
    relativeFilepath,
    contents,
    allRuleVisitors,
    addViolations,
}: {
    relativeFilepath: RelativeFilePath;
    contents: DefinitionFileSchema;
    allRuleVisitors: RuleVisitors[];
    addViolations: (newViolations: ValidationViolation[]) => void;
}): DefinitionFileAstVisitor {
    function createAstNodeVisitor<K extends keyof DefinitionFileAstNodeTypes>(
        nodeType: K
    ): Record<K, DefinitionFileAstNodeVisitor<K>> {
        const visit: DefinitionFileAstNodeVisitor<K> = async (
            node: DefinitionFileAstNodeTypes[K],
            nodePath: NodePath
        ) => {
            for (const ruleVisitors of allRuleVisitors) {
                const visitFromRule = ruleVisitors.definitionFile?.[nodeType];
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

        return { [nodeType]: visit } as Record<K, DefinitionFileAstNodeVisitor<K>>;
    }

    return {
        ...createAstNodeVisitor("docs"),
        ...createAstNodeVisitor("import"),
        ...createAstNodeVisitor("typeReference"),
        ...createAstNodeVisitor("typeDeclaration"),
        ...createAstNodeVisitor("typeName"),
        ...createAstNodeVisitor("httpService"),
        ...createAstNodeVisitor("httpEndpoint"),
        ...createAstNodeVisitor("pathParameter"),
        ...createAstNodeVisitor("queryParameter"),
        ...createAstNodeVisitor("header"),
        ...createAstNodeVisitor("streamCondition"),
        ...createAstNodeVisitor("errorDeclaration"),
        ...createAstNodeVisitor("errorReference"),
        ...createAstNodeVisitor("exampleType"),
        ...createAstNodeVisitor("exampleTypeReference"),
        ...createAstNodeVisitor("exampleHttpEndpointCall"),
        ...createAstNodeVisitor("exampleHeaders"),
        ...createAstNodeVisitor("examplePathParameters"),
        ...createAstNodeVisitor("exampleQueryParameters"),
        ...createAstNodeVisitor("exampleRequest"),
        ...createAstNodeVisitor("exampleResponse"),
    };
}
