import { ROOT_API_FILENAME } from "@fern-api/configuration";
import chalk from "chalk";
import { Rule, RuleViolation } from "../../Rule";
import { getAllEnvironmentUrlIds } from "../../utils/getAllEnvironmentUriIds";

export const ValidServiceUrlsRule: Rule = {
    name: "valid-service-urls",
    create: async ({ workspace }) => {
        const urlIds = await getAllEnvironmentUrlIds(workspace);

        const validateBaseUrl = (url: string): RuleViolation[] => {
            if (urlIds.includes(url)) {
                return [];
            }

            if (urlIds.length === 0) {
                return [
                    {
                        severity: "error",
                        message: `"url" cannot be configured unless you specify multiple URLs for each environment in ${ROOT_API_FILENAME}`
                    }
                ];
            }

            return [
                {
                    severity: "error",
                    message: [
                        `URL ${chalk.bold(
                            url
                        )} is not recognized. Please add it to your environments in ${ROOT_API_FILENAME} or specify one of the configured environment URLs:`,
                        ...urlIds.map((urlId) => `  - ${urlId}`)
                    ].join("\n")
                }
            ];
        };

        return {
            definitionFile: {
                serviceBaseUrl: (url) => {
                    if (url == null) {
                        return [];
                    }
                    return validateBaseUrl(url);
                },
                endpointBaseUrl: ({ baseUrl, service }) => {
                    if (baseUrl == null) {
                        if (urlIds.length === 0 || service.url != null) {
                            return [];
                        }
                        return [
                            {
                                severity: "error",
                                message: [
                                    '"url" is missing. Please specify one of the configured environment URLs:',
                                    ...urlIds.map((urlId) => `  - ${urlId}`)
                                ].join("\n")
                            }
                        ];
                    }

                    if (service.url != null) {
                        return [
                            {
                                severity: "error",
                                message: '"url" cannot be specified on both the service and endpoint'
                            }
                        ];
                    }

                    return validateBaseUrl(baseUrl);
                }
            }
        };
    }
};
