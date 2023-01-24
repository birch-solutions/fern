import inquirer from "inquirer";
import { startCase } from "lodash-es";
import { setupDemo, SetupDemoArgs } from "./setupDemo";

void main();

async function main() {
    await setupDemo(await getSetupDemoArgs());
}

export async function getSetupDemoArgs(): Promise<SetupDemoArgs> {
    return inquirer.prompt<SetupDemoArgs>([
        {
            type: "input",
            name: "githubAccessToken",
            message: "Github access token",
            default: process.env.GITHUB_TOKEN,
        },
        {
            type: "input",
            name: "postmanApiKey",
            message: "Postman API key",
            default: process.env.FERN_POSTMAN_API_KEY,
        },
        {
            type: "input",
            name: "npmToken",
            message: "NPM token",
            default: process.env.FERN_NPM_TOKEN,
        },
        {
            type: "input",
            name: "orgId",
            message: "Company name (lowercase + dashes)",
        },
        {
            type: "input",
            name: "githubOrgId",
            message: "Github organization name",
            default: (answers: Partial<SetupDemoArgs>) => (answers.orgId != null ? `fern-${answers.orgId}` : undefined),
        },
        {
            type: "input",
            name: "orgDisplayName",
            message: "Github organization name",
            default: (answers: Partial<SetupDemoArgs>) =>
                answers.orgId != null ? startCase(answers.orgId) : undefined,
        },
    ]);
}
