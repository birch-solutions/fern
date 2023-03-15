import { Rule } from "../../Rule";

export const NoMissingAuthRule: Rule = {
    name: "no-missing-auth",
    create: (context) => {
        const authIsDefined = context.workspace.definition.rootApiFile.contents.auth != null;
        return {
            definitionFile: {
                httpService: (service) => {
                    if (service.auth && !authIsDefined) {
                        return [
                            {
                                severity: "error",
                                message: "Service requires auth, but no auth is defined.",
                            },
                        ];
                    }
                    return [];
                },
                httpEndpoint: ({ endpoint }) => {
                    if (endpoint.auth && !authIsDefined) {
                        return [
                            {
                                severity: "error",
                                message: "Endpoint requires auth, but no auth is defined.",
                            },
                        ];
                    }
                    return [];
                },
            },
        };
    },
};
