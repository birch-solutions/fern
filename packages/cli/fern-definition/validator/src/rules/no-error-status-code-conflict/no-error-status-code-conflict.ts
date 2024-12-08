import { FernWorkspace, visitAllDefinitionFiles } from "@fern-api/api-workspace-commons";
import { RawSchemas } from "@fern-api/fern-definition-schema";
import { visitDefinitionFileYamlAst } from "../../ast";
import { noop } from "lodash-es";
import { Rule, RuleViolation } from "../../Rule";

export const NoErrorStatusCodeConflictRule: Rule = {
    name: "no-error-status-code-conflict",
    create: async ({ workspace }) => {
        if (workspace.definition.rootApiFile.contents["error-discrimination"]?.strategy !== "status-code") {
            return {};
        }
        const errorDeclarations = await getErrorDeclarations(workspace);
        return {
            definitionFile: {
                httpEndpoint: async ({ endpoint }) => {
                    if (endpoint.errors == null) {
                        return [];
                    }
                    const statusCodeToError: Record<number, string[]> = {};
                    for (const error of endpoint.errors) {
                        const errorName = typeof error === "string" ? error : error.error;
                        const errorDeclaration = errorDeclarations[errorName];
                        if (errorDeclaration == null) {
                            continue;
                        }
                        const statusCode = errorDeclaration["status-code"];
                        if (statusCode in statusCodeToError) {
                            statusCodeToError[statusCode]?.push(errorName);
                        } else {
                            statusCodeToError[statusCode] = [errorName];
                        }
                    }
                    const result: RuleViolation[] = [];
                    for (const [statusCode, errorNames] of Object.entries(statusCodeToError)) {
                        if (errorNames.length > 1) {
                            result.push({
                                severity: "error",
                                message: `Multiple errors have status-code ${statusCode}: ${errorNames.join(", ")}`
                            });
                        }
                    }
                    return result;
                }
            }
        };
    }
};

async function getErrorDeclarations(
    workspace: FernWorkspace
): Promise<Record<string, RawSchemas.ErrorDeclarationSchema>> {
    const errorDeclarations: Record<string, RawSchemas.ErrorDeclarationSchema> = {};
    visitAllDefinitionFiles(workspace, async (_relativeFilepath, file) => {
        await visitDefinitionFileYamlAst(file, {
            typeName: noop,
            errorDeclaration: ({ errorName, declaration }) => {
                errorDeclarations[errorName] = declaration;
            },
            httpService: noop
        });
    });
    return errorDeclarations;
}
