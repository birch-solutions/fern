import { initialize } from "@fern-api/init";
import { initiateLogin } from "@fern-api/login";
import inquirer, { InputQuestion } from "inquirer";
import { Argv } from "yargs";
import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { addGeneratorToWorkspaces } from "./commands/add-generator/addGeneratorToWorkspaces";
import { compileAndGenerateWorkspaces, compileWorkspaces } from "./commands/compile/compileWorkspaces";
import { convertOpenApiToFernApiDefinition } from "./commands/convert-openapi/convertOpenApi";

void runCli();

async function runCli() {
    const passedInArgs = hideBin(process.argv);
    const cli = yargs(passedInArgs);

    cli.scriptName("fern")
        .strict()
        .alias("v", "version")
        .demandCommand()
        .recommendCommands()
        .showHelpOnFail(false)
        .fail(() => {
            if (passedInArgs.length === 0) {
                cli.showHelp();
                process.exit(1);
            }
        });

    const packageVersion = process.env.PACKAGE_VERSION;
    if (packageVersion != null) {
        cli.version(packageVersion);
    }

    addInitCommand(cli);
    addAddCommand(cli);
    addConvertCommand(cli);
    addGenerateCommand(cli);
    addLoginCommand(cli);
    addCompileCommand(cli);

    await cli.parse();
}

function addInitCommand(cli: Argv) {
    cli.command(
        "init",
        "Initialize a Fern API",
        (yargs) =>
            yargs.option("organization", {
                alias: "org",
                type: "string",
                description: "Organization name",
            }),
        async (argv) => {
            const organization = argv.organization ?? (await askForOrganization());
            await initialize({ organization });
        }
    );
}

async function askForOrganization() {
    const organizationQuestion: InputQuestion<{ organization: string }> = {
        type: "input",
        name: "organization",
        message: "What's the name of your organization?",
    };
    const answers = await inquirer.prompt(organizationQuestion);
    return answers.organization;
}

function addAddCommand(cli: Argv) {
    cli.command(
        "add <generator> [workspaces...]",
        "Add a generator to .fernrc.yml",
        (yargs) =>
            yargs
                .positional("workspaces", {
                    array: true,
                    type: "string",
                    description:
                        "If omitted, every workspace specified in the project-level configuration (fern.config.json) will be processed.",
                })
                .positional("generator", {
                    choices: ["typescript", "java", "postman"] as const,
                    demandOption: true,
                }),
        async (argv) => {
            await addGeneratorToWorkspaces(argv.workspaces ?? [], argv.generator);
        }
    );
}

function addGenerateCommand(cli: Argv) {
    cli.command(
        ["generate [workspaces...]", "gen"],
        "Generate typesafe servers and clients",
        (yargs) =>
            yargs
                .option("keepDocker", {
                    boolean: true,
                    default: false,
                    description:
                        "If true, Docker containers are not removed after generation. This is ignored for remote generation.",
                })
                .option("local", {
                    boolean: true,
                    default: false,
                    description: "If true, code is generated using Docker on this machine.",
                })
                .positional("workspaces", {
                    array: true,
                    type: "string",
                    description:
                        "If omitted, every workspace specified in the project-level configuration (fern.config.json) will be processed.",
                }),
        async (argv) => {
            await compileAndGenerateWorkspaces({
                commandLineWorkspaces: argv.workspaces ?? [],
                runLocal: argv.local,
                keepDocker: argv.keepDocker,
            });
        }
    );
}

function addConvertCommand(cli: Argv) {
    cli.command(
        "convert <openapiPath> <fernDefinitionDir>",
        "Converts Open API to Fern API Definition.",
        (yargs) =>
            yargs
                .positional("openapiPath", {
                    type: "string",
                    demandOption: true,
                    description: "Path to your Open API definition",
                })
                .positional("fernDefinitionDir", {
                    type: "string",
                    demandOption: true,
                    description: "Output directory for your Fern API definition",
                }),
        (argv) => convertOpenApiToFernApiDefinition(argv.openapiPath, argv.fernDefinitionDir)
    );
}

function addLoginCommand(cli: Argv) {
    cli.command({
        command: "login",
        describe: "Authenticate with Fern",
        handler: async () => {
            await initiateLogin();
        },
    });
}

function addCompileCommand(cli: Argv) {
    cli.command(
        "compile [workspaces...]",
        "Compiles your Fern API Definition",
        (yargs) =>
            yargs
                .option("writeIr", {
                    type: "boolean",
                    description: "Should output compiled intermediate representation (IR)",
                })
                .positional("workspaces", {
                    array: true,
                    type: "string",
                    description:
                        "If omitted, every workspace specified in the project-level configuration (fern.config.json) will be processed.",
                }),
        (argv) =>
            compileWorkspaces({
                commandLineWorkspaces: argv.workspaces ?? [],
                writeIr: argv.writeIr ?? false,
            })
    );
}
