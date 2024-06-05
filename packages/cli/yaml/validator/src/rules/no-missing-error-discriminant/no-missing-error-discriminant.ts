import { FernWorkspace, getAllNamedDefinitionFiles } from "@fern-api/workspace-loader";
import { isEmpty } from "lodash-es";
import { Rule } from "../../Rule";

export const NoMissingErrorDiscriminantRule: Rule = {
    name: "no-missing-error-discriminant",
    create: async ({ workspace }) => {
        if (!doesApiDeclareErrors(workspace)) {
            return {};
        }

        return {
            rootApiFile: {
                errorDiscrimination: (errorDiscrimination) => {
                    if (errorDiscrimination != null) {
                        return [];
                    }

                    return [
                        {
                            severity: "error",
                            message: "error-discrimination is required because this API has declared errors."
                        }
                    ];
                }
            }
        };
    }
};

async function doesApiDeclareErrors(workspace: FernWorkspace): Promise<boolean> {
    for (const file of Object.values(getAllNamedDefinitionFiles(await workspace.getDefinition()))) {
        if (file.contents.errors != null && !isEmpty(file.contents.errors)) {
            return true;
        }
    }
    return false;
}
